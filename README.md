# Solution Studio

Frontend scaffold for rebuilding the site from the local design references.

## Current status

The repository contains an existing starter home page, root layout, global stylesheet, and application icons. Other source files are empty placeholders for manual implementation. The structure is organized for reuse, but the designed pages, forms, data access, SEO helpers, and feedback components are not implemented.

The `figma/` directory contains 14 PNG exports, not an editable Figma document. Export names and visual contents do not always agree. See the [page map](docs/PAGE_MAP.md).

## Project organization

- `src/app/`: route entry points, root layout, global stylesheet, and application icons.
- `src/components/`: generic UI, site layout, reusable sections, and structured-data placeholder.
- `src/features/`: feature components, content placeholders, domain types, and form schemas.
- `src/config/`: site information and navigation placeholders.
- `src/hooks/`: reusable browser-interaction hooks.
- `src/lib/`: class-name and metadata helpers.
- `src/styles/`: design tokens, typography, animation, and long-form content styles.
- `public/images/`: brand assets and empty image folders for future content.
- `figma/`: original design exports.
- `docs/`: architecture and implementation context, relocated from the former context folder.

Start with the [documentation index](docs/README.md), [architecture](docs/ARCHITECTURE.md), and [component inventory](docs/COMPONENT_INVENTORY.md).

## Tooling

The package manifest declares Next.js 16, React 19, TypeScript, Tailwind CSS 4, and ESLint. See `package.json` and `package-lock.json` for dependency declarations and locked versions. An installed dependency does not establish a working integration.

Existing scripts are `npm run dev`, `npm run build`, `npm run start`, and `npm run lint`. The start script requires a successful build. Empty framework entry points still need valid implementations before build readiness can be assessed.

No backend setup or migration is required for this structure-only stage. Environment values should be configured when the corresponding integration is implemented; keep local secrets out of documentation.

## Working agreement

Implement pages manually using the shared component and typography conventions. All newly scaffolded source files are intentionally empty. Documentation contains descriptions, not component implementations. Existing starter code and configuration have been preserved.
