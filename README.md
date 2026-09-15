# Solution Studio

Frontend rebuild of Solution Studio from the local design references.

## Current status

The shared responsive navbar and footer are implemented with Tailwind CSS v4. The home page contains sections through the blog preview; the footer uses the Solution Studio logo, an image-ready CTA background slot, and a disabled three-field lead form. Every planned route is a valid Next.js module. Pages awaiting their final design render a shared placeholder, and unfinished API endpoints return an explicit `501 Not Implemented` response.

The `figma/` directory contains 14 PNG exports, not an editable Figma document. Export names and visual contents do not always agree. See the [page map](docs/PAGE_MAP.md).

## Project organization

- `src/app/`: route entry points, root layout, global stylesheet, and application icons.
- `src/components/`: generic UI, site layout, reusable sections, and structured-data placeholder.
- `src/features/`: feature components, content placeholders, domain types, and form schemas.
- `src/config/`: shared site information, navigation data, and footer content.
- `src/hooks/`: reusable browser-interaction hooks.
- `src/lib/`: class-name and metadata helpers.
- `public/images/`: brand assets and empty image folders for future content.
- `figma/`: original design exports.
- `docs/`: architecture and implementation context, relocated from the former context folder.

Start with the [documentation index](docs/README.md), [architecture](docs/ARCHITECTURE.md), and [component inventory](docs/COMPONENT_INVENTORY.md).

## Tooling

The package manifest declares Next.js 16, React 19, TypeScript, Tailwind CSS 4, and ESLint. See `package.json` and `package-lock.json` for dependency declarations and locked versions. An installed dependency does not establish a working integration.

Existing scripts are `npm run dev`, `npm run build`, `npm run start`, and `npm run lint`. Lint, TypeScript validation, and the production build currently pass.

The footer lead form remains disabled until the contact endpoint has a working server integration. Environment values should be configured when corresponding integrations are implemented; keep local secrets out of documentation.

## Styling agreement

Use Tailwind utilities for component styling. Keep `src/app/globals.css` focused on the Tailwind import, shared theme tokens, document-level base rules, and reusable animation keyframes. Use padding and `gap` for visible layout spacing; do not add margin or `space-*` utilities to application components.
