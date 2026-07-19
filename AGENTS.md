# AGENTS.md

## Stack

- Package manager: **bun** (use `bun`, not pnpm/npm/yarn)
- UI: React 19 + Vite 8 + TypeScript
- Components: MUI (`@mui/material`) with Emotion
- Layout: MUI layout primitives (`Box`, `Stack`, `Container`) and `sx`
- Theme: MUI `createTheme` in `src/theme.ts`
- E2E: Playwright (`bun run e2e`)

## Commands

| Task             | Command                                  |
| ---------------- | ---------------------------------------- |
| Install          | `bun install`                            |
| Dev server       | `bun start` (Vite, default `:5173`)      |
| Production build | `bun run build` (GitHub Pages base path) |
| Format           | `bun run format`                         |
| E2E tests        | `bun run e2e`                            |
| Typecheck        | `bun run check`                          |

## Project layout

- Entry: `src/main.tsx` → `src/App.tsx`
- Domain logic: `src/services` (framework-agnostic TypeScript)
- UI components: `src/components` (React + MUI)
- E2E specs: `src/**/*.spec.ts`
- Deploy: GitHub Actions `Deploy to GitHub Pages` workflow builds with bun on push to `main` and deploys `dist/`

## Conventions

- Prefer functional React components and hooks
- Keep domain models free of React/MUI imports
- Do not reintroduce pnpm lockfiles, Vue SFCs, Bootstrap, SCSS, `@material/web`, or archived `@material/*` MDC packages
- Do not commit secrets
- Do not commit unless the user explicitly asks

## Notes

- MUI theme lives in `src/theme.ts`
- Playwright starts Vite via `webServer` in `playwright.config.ts`
