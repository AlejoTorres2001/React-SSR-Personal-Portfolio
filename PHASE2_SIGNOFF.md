# Phase 2 Final Sign-off

## Runtime Target Validation (Vercel + Node 20)

- `package.json` pins `engines.node` to `>=20 <21`.
- `.nvmrc` pins local default runtime to `20`.
- Project remains App Router compatible with Next.js 15.3.8 and React 19.

## Architecture & UX Deliverables

- `i18n por Ruta`: locale routes implemented (`/en`, `/es`, `/en/projects`, `/es/projects`).
- `Server-First Rendering`: route shells render on server, client boundaries limited to interactive modules.
- `Vibra + Patrones de Experiencia`: visual refresh delivered while preserving section order and key CTAs.

## Verification Evidence

- `npm run lint` passes.
- `npm run build` passes.
- `npm run typecheck` passes.
- `npx -y node@20 ./node_modules/.bin/next build` passes.

## Follow-up Decisions (Non-blocking)

- Evaluate whether to prioritize hero/project LCP images for additional performance margin.
- Add CI job matrix for Node 20.x patch drift visibility.
- Optionally codify Vercel project-level Node version in team deployment runbook.
