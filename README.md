# mohdzohaib.com

Personal portfolio and freelance site for Mohammad Zohaib — software developer working across AI engineering, Android (Kotlin) and full-stack web.

Live at **[mohdzohaib.com](https://mohdzohaib.com)**.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + daisyUI (`neo` theme) |
| Animation | GSAP, Motion |
| Blog content | Hashnode GraphQL API |
| Hosting | Netlify (`@netlify/plugin-nextjs`) |
| Tests | Vitest |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Requires **Node 20**.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`next/core-web-vitals`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest, single run |

All four checks (`typecheck`, `lint`, `test`, `build`) run in CI on every push to `main` and every pull request — see `.github/workflows/ci.yml`.

## Project structure

```
app/                 Routes (App Router) + metadata, sitemap, robots
  blog/              Blog index, backed by Hashnode
  hire/ design/      Service and offering pages
  products/ projects/ Portfolio content
components/          UI sections, grouped by page where it helps
  providers/         SoundProvider
hooks/               use-sound
lib/                 Data, Hashnode client, sound engine
public/              Static assets
```

## Environment variables

Both are optional — the defaults point at the live blog.

| Variable | Default | Purpose |
| --- | --- | --- |
| `HASHNODE_HOST` | `mzohaib.hashnode.dev` | Publication host, used by the publication query fallback |
| `HASHNODE_USERNAME` | `mzohaib78` | Author handle, used by the primary user query |

The blog client tries the user query across two Hashnode endpoints, then falls back to the publication query, with an 8s timeout per attempt and a `[]` result on total failure. Individual posts are hosted on Hashnode, so `/blog` is the only blog URL in the sitemap.

## Deployment

Netlify builds with `npm run build` and serves `.next`. `NODE_VERSION` is pinned to 20 in `netlify.toml`, matching CI.

## Notes

- Response headers (nosniff, referrer policy, framing, permissions policy) are set in `next.config.mjs`.
- Fonts are self-hosted at build time via `next/font` — no third-party font requests at runtime.
