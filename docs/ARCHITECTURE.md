# Frontend architecture

## Current state

The agreed folder structure is applied. Existing starter files in `src/app/` are preserved; the remaining source files are empty. This document defines responsibilities for future implementation.

## Folder ownership

| Path | Responsibility |
| --- | --- |
| `src/app/` | Next.js route entry points, page composition, metadata entry points, and root providers |
| `src/components/ui/` | Generic controls and presentation primitives |
| `src/components/layout/` | Container, section wrapper, navigation, footer, and skip link |
| `src/components/shared/` | Reusable page sections and cross-feature visual patterns |
| `src/components/seo/` | Structured-data component placeholder |
| `src/features/` | Business-specific components, content, types, and validation schemas |
| `src/config/` | Shared site information and navigation definitions |
| `src/hooks/` | Hooks reused across unrelated components |
| `src/lib/` | Focused shared helpers |
| `src/styles/` | Shared design tokens, typography, motion, and long-form content styles |
| `public/images/` | Browser-served assets organized by use |
| `figma/` | Original PNG design references |
| `docs/` | Architecture and implementation context |

## Dependency rules

- Route files compose feature components and shared layout.
- UI primitives may use shared helpers and styles, but must not import routes, feature components, or site-specific sections.
- Layout and shared components may compose UI primitives and read public site configuration.
- Features may compose UI and shared components. Specialized cards remain owned by their feature even when several pages reuse them.
- Shared components should normally accept content through props. The newsletter section may compose the newsletter feature's form; that form must not import the section back.
- Avoid circular imports between features. Home may compose service or portfolio cards; those domains must not import home.
- Keep browser interaction in the smallest components that need it when implementing. Server-only integrations must not enter browser component dependencies.
- Add a server integration boundary when an actual backend is implemented; this scaffold contains no working data-access layer.

## Feature file conventions

Each feature has a `components/` directory. Domain types use `<feature>.types.ts`, and manually maintained content uses `<feature>.content.ts`. Only features needing these responsibilities receive those files.

Validation schemas live with their owner: `src/features/contact/contact.schema.ts`, `src/features/careers/application.schema.ts`, and `src/features/newsletter/newsletter.schema.ts`.

Component-specific types may stay with their component when implemented. Add service, query, test, or additional hook files when a real responsibility requires them.

## Component ownership decisions

- Only the generic Card belongs in `src/components/ui/card/`. ServiceCard, PortfolioCard, BlogCard, CareerCard, ClientCard, and TeamCard belong to their respective features.
- CTASection and TestimonialsSection have one reusable owner in `src/components/shared/`.
- PageBanner represents an image-backed page introduction. SectionHeader groups a section's introductory text. Domain detail heroes remain feature-specific.
- NewsletterSection owns the reusable section presentation. NewsletterForm owns its form behavior.
- CategoryFilter owns the shared filter control. PortfolioFilter and BlogFilter are reserved for domain-specific composition and behavior.
- The filter hook lives at `src/components/shared/useFilter.ts`; the toast hook lives at `src/components/ui/toast/useToast.ts`.
- SocialLinks points to company profiles. ShareLinks represents sharing the current content.
- RelatedPosts and ProjectNavigation have concrete domain owners instead of an undefined universal related-items component.
- Global theme and modal contexts are not scaffolded. Add global state only when a demonstrated requirement needs it; `src/app/providers.tsx` remains reserved.

## Naming and imports

Use PascalCase for component filenames, use-prefixed camelCase for hooks, and lowercase domain names for folders. Next.js entry-point filenames retain framework conventions. The existing `@/*` alias maps to `src/*`.

Import from the owning file. No global barrel file is needed at this stage. Keep site identity and contact details in `src/config/site.ts`, navigation in `src/config/navigation.ts`, and the class-name helper in `src/lib/cn.ts`.

## Assets

Brand images are in `public/images/brand/`; their bytes and original filenames are preserved. Browser paths will begin with `/images/brand/` when referenced. Application icons remain in `src/app/`.

Image folders exist for backgrounds, home, about, services, portfolio, blog, careers, clients, team, and contact. Empty `.gitkeep` files retain those directories in Git. The PNG reference exports remain in `figma/` and are not copied into production image folders.

## Framework and scope

The existing App Router URL structure is preserved. The project does not need route groups just to introduce another folder layer. Next.js permits multiple organization approaches outside its special file conventions: [project structure documentation](https://nextjs.org/docs/app/getting-started/project-structure).

Configuration, dependencies, environment files, and unrelated pre-existing changes are outside this structural migration. Empty route, error, loading, robots, sitemap, and API files are placeholders and still require valid implementation.
