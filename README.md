# LOOP-nity

LOOP-nity is a company and product brand focused on building modern digital experiences with AI-powered workflows, clean product design, and scalable web technology.

## Overview

This repository is the foundation for LOOP-nity's product and engineering work. It provides a modern front-end stack for building polished web experiences, internal tools, and AI-enabled products.

## Mission

LOOP-nity is building the next generation of practical, intelligent digital products — combining thoughtful design, reliable engineering, and AI-driven user experiences.

## Tech Stack

- Frontend: React + TypeScript
- Build tool: Vite
- App framework: TanStack Start
- Routing: TanStack Router
- Data fetching: TanStack Query
- Styling: Tailwind CSS
- UI primitives: Radix UI + shadcn/ui-inspired patterns
- Testing: Vitest + Testing Library
- Linting/formatting: ESLint + Prettier

## Project Structure

- `package.json` — project scripts and dependencies
- `vite.config.ts` — Vite and framework configuration
- `components.json` — UI component aliases and design system configuration
- `bunfig.toml` — Bun package manager settings
- `tsconfig.json` — TypeScript configuration
- `eslint.config.js` — linting rules
- `.gitignore` / `.prettierignore` / `.prettierrc` — project hygiene and formatting defaults

## Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended)

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

- `dev` — start the development server
- `build` — create a production build
- `build:dev` — create a development build
- `preview` — preview the built app locally
- `lint` — run ESLint
- `format` — run Prettier
- `test` — run Vitest
- `test:watch` — run Vitest in watch mode

## Company Brand

LOOP-nity represents a company focused on building modern products, streamlined experiences, and intelligent systems that help people work smarter and move faster.

## Status

This repository is currently in its foundational product-development stage and is ready for building new features, interfaces, and AI-powered experiences for the LOOP-nity brand.

## License

This project does not currently include a custom license file. Add one before public release if required.
