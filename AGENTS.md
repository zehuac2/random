# AGENTS.md

## Stack

- Package manager: **bun** (use `bun`, not pnpm/npm/yarn)
- UI: React 19 + Vite 8 + TypeScript
- Components: `@material/web` (Material 3 web components) via `@lit/react` wrappers
- Layout: plain CSS flex/grid (no Bootstrap)
- Styles: SCSS under `src/styles` and co-located `*.scss`; theme via Material CSS custom properties
- E2E: Playwright (`bun run e2e`)

## Commands

| Task             | Command                                  |
| ---------------- | ---------------------------------------- |
| Install          | `bun install`                            |
| Dev server       | `bun start` (Vite, default `:5173`)      |
| Production build | `bun run build` (GitHub Pages base path) |
| Format           | `bun run format`                         |
| E2E tests        | `bun run e2e`                            |
| Typecheck        | `bunx check`                             |

## Project layout

- Entry: `src/main.tsx` → `src/App.tsx`
- Domain logic: `src/services` (framework-agnostic TypeScript)
- UI components: `src/components` (React + Material Web wrappers)
- E2E specs: `src/**/*.spec.ts`
- Deploy: GitHub Actions Release workflow builds with bun and deploys `dist/` to `gh-pages`

## Conventions

- Prefer functional React components and hooks
- Keep domain models free of React/Material imports
- Do not reintroduce pnpm lockfiles, Vue SFCs, Bootstrap, or archived `@material/*` MDC packages
- Do not commit secrets
- Do not commit unless the user explicitly asks

## Notes

- Material theme tokens live in `src/styles/index.scss` (`--md-sys-color-*`)
- Playwright starts Vite via `webServer` in `playwright.config.ts`
