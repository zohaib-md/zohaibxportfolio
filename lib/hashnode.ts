export interface BlogPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt?: string;
  readTimeInMinutes?: number;
  tags?: { name: string }[];
}

const USER_POSTS_QUERY = `
  query UserPosts($username: String!) {
    user(username: $username) {
      posts(first: 50) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

const PUBLICATION_QUERY = `
  query Publication($host: String!) {
    publication(host: $host) {
      posts(first: 50) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

const HASHNODE_TIMEOUT_MS = 8_000;

type GraphQLResponse = {
  data?: Record<string, unknown>;
  errors?: { message?: string }[];
};

async function queryHashnode(
  endpoint: string,
  query: string,
  variables: Record<string, string>,
): Promise<GraphQLResponse | null> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
      // Without a deadline a stalled upstream hangs the whole blog page,
      // which is rendered dynamically on every request.
      signal: AbortSignal.timeout(HASHNODE_TIMEOUT_MS),
    });

    if (!res.ok) {
      console.warn(`[hashnode] ${endpoint} responded ${res.status} ${res.statusText}`);
      return null;
    }

    const json = (await res.json()) as GraphQLResponse;

    if (json.errors?.length) {
      const messages = json.errors.map((e) => e.message ?? "unknown").join("; ");
      console.warn(`[hashnode] ${endpoint} returned GraphQL errors: ${messages}`);
      return null;
    }

    return json;
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    console.warn(`[hashnode] ${endpoint} request failed: ${reason}`);
    return null;
  }
}

function edgesFrom(json: GraphQLResponse | null, root: "user" | "publication"): BlogPost[] {
  const node = json?.data?.[root] as
    | { posts?: { edges?: { node: BlogPost }[] } }
    | null
    | undefined;

  const edges = node?.posts?.edges;
  if (!Array.isArray(edges)) return [];

  return edges.map((e) => e.node);
}

export async function getHashnodePosts(): Promise<BlogPost[]> {
  const host = process.env.HASHNODE_HOST || "mzohaib.hashnode.dev";
  const username = process.env.HASHNODE_USERNAME || "mzohaib78";
  const endpoints = ["https://gql-beta.hashnode.com", "https://gql.hashnode.com"];

  // 1. Try user posts first (reliable and doesn't require Hashnode Pro)
  for (const endpoint of endpoints) {
    const posts = edgesFrom(await queryHashnode(endpoint, USER_POSTS_QUERY, { username }), "user");
    if (posts.length > 0) return posts;
  }

  // 2. Fall back to the publication query
  for (const endpoint of endpoints) {
    const posts = edgesFrom(
      await queryHashnode(endpoint, PUBLICATION_QUERY, { host }),
      "publication",
    );
    if (posts.length > 0) return posts;
  }

  return [];
}

export function getCategoryFromPost(post: BlogPost): string {
  if (post.tags && post.tags.length > 0) {
    for (const tagObj of post.tags) {
      if (!tagObj?.name) continue;
      const raw = tagObj.name.trim();

      // Skip accidental prompts or instructions pasted into tags (e.g. "type this code...")
      if (
        raw.toLowerCase().startsWith("type this code") ||
        raw.toLowerCase().startsWith("type ")
      ) {
        continue;
      }

      const firstComma = raw.split(",")[0].trim();
      const clean = firstComma.split(/\s+/)[0].replace(/^#/, "").trim();
      if (clean) {
        const formatted = clean.replace(/([A-Z])/g, " $1").trim().toUpperCase();
        if (formatted === "TYPE") {
          return "ANDROID DEVELOPMENT";
        }
        return formatted;
      }
    }
  }

  const titleLower = post.title.toLowerCase();
  if (
    titleLower.includes("android") ||
    titleLower.includes("kotlin") ||
    titleLower.includes("compose") ||
    titleLower.includes("coroutine") ||
    titleLower.includes("rxjava")
  ) {
    return "ANDROID";
  }
  if (titleLower.includes("ai") || titleLower.includes("llm") || titleLower.includes("agent")) {
    return "AI";
  }
  if (
    titleLower.includes("web") ||
    titleLower.includes("browser") ||
    titleLower.includes("javascript") ||
    titleLower.includes("html") ||
    titleLower.includes("css")
  ) {
    return "WEB DEV";
  }
  if (titleLower.includes("tool") || titleLower.includes("ksp") || titleLower.includes("kapt")) {
    return "TOOLS";
  }
  if (titleLower.includes("ios") || titleLower.includes("swift")) {
    return "IOS";
  }
  return "DEVELOPMENT";
}
