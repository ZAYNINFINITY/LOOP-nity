# LOOP-nity

LOOP-nity is a modern web app scaffold built with Vite, React, and TanStack Start. It is configured as a Lovable-connected project and includes a styled component system, Tailwind-based UI setup, and a ready-to-use development workflow.

## Overview

This repository currently contains the project foundation and configuration needed to build and run a front-end application with:

- React 19
- Vite 8
- TanStack Start and Router
- TanStack Query
- Tailwind CSS v4
- shadcn/ui-style component configuration
- ESLint, Prettier, and Vitest support

## Tech Stack

- Frontend: React + TypeScript
- Build tool: Vite
- App framework: TanStack Start
- Routing: TanStack Router
- Data fetching: TanStack Query
- Styling: Tailwind CSS
- UI primitives: Radix UI + shadcn/ui patterns
- Testing: Vitest + Testing Library
- Linting/formatting: ESLint + Prettier

## Project Files

- `package.json` — scripts and project dependencies
- `vite.config.ts` — Vite/TanStack configuration
- `components.json` — shadcn/ui component aliases and styling config
- `bunfig.toml` — Bun package manager settings and supply-chain safety guard
- `tsconfig.json` — TypeScript compiler configuration
- `eslint.config.js` — ESLint rules and setup
- `AGENTS.md` — project notes for connected Lovable workflow
- `.gitignore` / `.prettierignore` / `.prettierrc` — repo hygiene and formatting defaults

## Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended, because `bunfig.toml` is included)

### Install dependencies

```bash
bun install
```

or

```bash
npm install
```

### Run the development server

```bash
bun run dev
```

or

```bash
npm run dev
```

### Production build

```bash
bun run build
```

or

```bash
npm run build
```

### Test

```bash
bun run test
```

### Lint

```bash
bun run lint
```

## Available Scripts

From `package.json`:

- `dev` — start the Vite/TanStack development server
- `build` — create a production build
- `build:dev` — development-mode production build
- `preview` — preview the built app locally
- `lint` — run ESLint
- `format` — run Prettier
- `test` — run Vitest suite once
- `test:watch` — watch mode for tests

## Notes

This repository is set up as a Lovable-connected app foundation. The project includes a note in `AGENTS.md` reminding contributors not to rewrite published git history or force-push when the repo is connected to Lovable.

## License

This repository currently does not include a custom license file. If needed, add a project license before publishing the project.

## Status

The project is in active scaffold/configuration stage and is ready for app development, feature implementation, and UI creation.
