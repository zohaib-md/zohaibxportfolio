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

export async function getHashnodePosts(): Promise<BlogPost[]> {
  const host = process.env.HASHNODE_HOST || "mzohaib.hashnode.dev";
  const username = process.env.HASHNODE_USERNAME || "mzohaib78";
  const endpoints = ["https://gql-beta.hashnode.com", "https://gql.hashnode.com"];

  // 1. Try user posts query first (reliable and doesn't require Hashnode Pro)
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: USER_POSTS_QUERY,
          variables: { username },
        }),
        cache: "no-store",
      });

      if (res.ok) {
        const json = await res.json();
        const edges = json.data?.user?.posts?.edges;
        if (Array.isArray(edges) && edges.length > 0) {
          return edges.map((e: { node: BlogPost }) => e.node);
        }
      }
    } catch (err) {
      // Continue to next endpoint or publication query
    }
  }

  // 2. Fallback to publication query
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: PUBLICATION_QUERY,
          variables: { host },
        }),
        cache: "no-store",
      });

      if (res.ok) {
        const json = await res.json();
        const edges = json.data?.publication?.posts?.edges;
        if (Array.isArray(edges) && edges.length > 0) {
          return edges.map((e: { node: BlogPost }) => e.node);
        }
      }
    } catch (err) {
      // Continue
    }
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
