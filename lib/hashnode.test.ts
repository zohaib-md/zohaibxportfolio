import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getCategoryFromPost, getHashnodePosts, type BlogPost } from "./hashnode";

const ENDPOINTS = ["https://gql-beta.hashnode.com", "https://gql.hashnode.com"];

function post(overrides: Partial<BlogPost> = {}): BlogPost {
  return {
    id: "1",
    title: "Understanding Kotlin Coroutines",
    brief: "A short brief",
    slug: "understanding-kotlin-coroutines",
    url: "https://mzohaib.hashnode.dev/understanding-kotlin-coroutines",
    ...overrides,
  };
}

/** Builds a GraphQL response shaped like Hashnode's `user` / `publication` edges. */
function graphqlResponse(root: "user" | "publication", posts: BlogPost[]) {
  return {
    ok: true,
    status: 200,
    statusText: "OK",
    json: async () => ({
      data: { [root]: { posts: { edges: posts.map((node) => ({ node })) } } },
    }),
  };
}

const failure = {
  ok: false,
  status: 503,
  statusText: "Service Unavailable",
  json: async () => ({}),
};

function stubFetch(handler: (url: string, init: RequestInit) => unknown) {
  const mock = vi.fn(async (url: string, init: RequestInit) => handler(url, init));
  vi.stubGlobal("fetch", mock);
  return mock;
}

beforeEach(() => {
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("getHashnodePosts", () => {
  it("returns posts from the user query on the first endpoint", async () => {
    const fetchMock = stubFetch(() => graphqlResponse("user", [post()]));

    const posts = await getHashnodePosts();

    expect(posts).toHaveLength(1);
    expect(posts[0].slug).toBe("understanding-kotlin-coroutines");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe(ENDPOINTS[0]);
  });

  it("falls through to the second endpoint when the first fails", async () => {
    const fetchMock = stubFetch((url) =>
      url === ENDPOINTS[0] ? failure : graphqlResponse("user", [post()]),
    );

    const posts = await getHashnodePosts();

    expect(posts).toHaveLength(1);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1][0]).toBe(ENDPOINTS[1]);
  });

  it("falls back to the publication query when the user query returns nothing", async () => {
    const fetchMock = stubFetch((_url, init) => {
      const query = JSON.parse(String(init.body)).query as string;
      return query.includes("publication")
        ? graphqlResponse("publication", [post({ id: "2" })])
        : graphqlResponse("user", []);
    });

    const posts = await getHashnodePosts();

    expect(posts).toHaveLength(1);
    expect(posts[0].id).toBe("2");
    // two user attempts, then the first publication attempt
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it("returns an empty list when every attempt fails", async () => {
    const fetchMock = stubFetch(() => failure);

    const posts = await getHashnodePosts();

    expect(posts).toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(4);
  });

  it("treats a 200 response carrying GraphQL errors as a failure", async () => {
    const fetchMock = stubFetch(() => ({
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => ({ errors: [{ message: "Field 'user' doesn't exist" }] }),
    }));

    const posts = await getHashnodePosts();

    expect(posts).toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("Field 'user' doesn't exist"),
    );
  });

  it("passes an AbortSignal so a stalled request cannot hang the page", async () => {
    const fetchMock = stubFetch(() => graphqlResponse("user", [post()]));

    await getHashnodePosts();

    const init = fetchMock.mock.calls[0][1];
    expect(init.signal).toBeInstanceOf(AbortSignal);
  });
});

describe("getCategoryFromPost", () => {
  it("uses the first tag, normalised to upper case", () => {
    expect(getCategoryFromPost(post({ tags: [{ name: "androidDevelopment" }] }))).toBe(
      "ANDROID DEVELOPMENT",
    );
  });

  it("skips tags that look like pasted prompts", () => {
    const result = getCategoryFromPost(
      post({ title: "Web performance notes", tags: [{ name: "type this code please" }] }),
    );
    expect(result).toBe("WEB DEV");
  });

  it("infers the category from the title when there are no usable tags", () => {
    expect(getCategoryFromPost(post({ title: "Building agents with LLMs" }))).toBe("AI");
    expect(getCategoryFromPost(post({ title: "Kotlin coroutines deep dive" }))).toBe("ANDROID");
    expect(getCategoryFromPost(post({ title: "Something unrelated" }))).toBe("DEVELOPMENT");
  });
});
