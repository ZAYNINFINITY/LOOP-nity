# Loopnity

An independent software studio. This repository is the studio's public site — **[loopnity.vercel.app](https://loopnity.vercel.app)**.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start (React 19, file-based routing) |
| Build | Vite + Nitro |
| Styling | Tailwind CSS v4, custom design tokens in `src/styles.css` |
| Motion | Motion (Framer Motion successor), reduced-motion aware |
| Type | Manrope (display), Inter (body), JetBrains Mono (labels) |
| Hosting | Vercel |

## Local development

```bash
pnpm install
pnpm dev        # vite dev
pnpm build      # vite build
pnpm preview    # serve the production build
pnpm lint       # eslint .
pnpm test       # vitest run
```

`pnpm` is the package manager in use — the repo also carries a `bun.lock`, and Vercel resolves `pnpm-lock.yaml` first. Install with pnpm to keep the two in sync.

## Project structure

```
src/
  routes/          File-based routes. Each owns its <head> metadata.
    __root.tsx     Document shell, global meta, JSON-LD Organization
    index.tsx      Home
    solutions.tsx  Client problems, by need
    products.tsx   Owned products
    work.tsx       Selected work
    approach.tsx   How the studio works
    about.tsx      Founder and studio
    contact.tsx    Contact routes
    privacy.tsx    }
    terms.tsx      }  Shared layout via components/DocPage.tsx
    faq.tsx        }
    careers.tsx    }
    security.tsx   }
  components/      SiteChrome (nav + footer), LoopMark, PosMock, DocPage, ui/
  lib/site.ts      Company identity — single source of truth
public/            og.png, sitemap.xml, robots.txt, favicon.svg
```

## Company identity lives in one file

`src/lib/site.ts` holds the name, tagline, email, location, founding year, canonical URL and social links. The header, footer, page metadata and JSON-LD all read from it, so a rename or a domain switch is one edit — not a search-and-replace across the site.

That is deliberate. A site that describes itself two different ways reads as untrustworthy, and the failure mode is always the same: a literal in a file nobody remembered to update.

## Deployment

```bash
pnpm build
npx vercel deploy --prebuilt --prod
```

The Nitro Vercel preset is configured in `vite.config.ts`:

```ts
nitro({ preset: "vercel" })
```

**Do not remove it.** A plain `vite build` emits `dist/client` and `dist/server/server.js`, which is not a platform build output — the host finds no server entry and answers every path with `NOT_FOUND`. The preset is what produces `.vercel/output/` with a `config.json` and a server function, which is the shape the platform actually reads.

## Contact

Email: `hello@loopnity.eu.org` — the mailbox is still being set up, so it may not answer yet. Until it does, [LinkedIn](https://www.linkedin.com/in/zain-ul-abideen-429735231/) is the working channel.

Built in-house. No trackers, no analytics, no third-party scripts beyond Google Fonts.
