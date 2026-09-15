# Project documentation

This folder holds the current architecture and development context for Solution Studio. It replaces the former context documentation folder.

## Read in this order

1. [Architecture](ARCHITECTURE.md): folder ownership, dependencies, naming, and current implementation status.
2. [Design system](DESIGN_SYSTEM.md): Tailwind theme, typography, component styling, and spacing rules.
3. [Component inventory](COMPONENT_INVENTORY.md): exact scaffold filenames and their owners.
4. [Page map](PAGE_MAP.md): route files, design references, and reference ambiguities.
5. [Development guide](DEVELOPMENT_GUIDE.md): completed structural work and the future manual implementation sequence.

## Status and scope

The structure, shared navbar and footer, home sections through the blog preview, global route states, route placeholders, robots metadata, and sitemap are implemented. Most remaining feature, form, and UI files remain empty placeholders. A filename records intended ownership unless the component inventory marks it as implemented.

The PNG references and `figma/figma.md` measurements are preserved. There is no editable Figma document in the reference folder. Page-level responsive layouts and remaining design values still need review during implementation.

Contact and newsletter endpoints currently return `501 Not Implemented`; persistence and submission behavior are not connected. Robots and sitemap metadata are active. No backend or deployment workflow has been added.
