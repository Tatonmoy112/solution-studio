# Development guide

## Completed structural migration

1. Relocated architecture context into `docs/` and replaced outdated documentation.
2. Moved business features into `src/features/`, with components, content, domain types, and validation schema placeholders together.
3. Moved domain cards out of generic UI and site layout into `src/components/layout/`.
4. Consolidated duplicate section and typography placeholders, and separated form labels from decorative typography.
5. Added missing shared, feature, configuration, and asset-folder placeholders.
6. Preserved existing starter implementation files and application icons. Moved existing brand images into `public/images/brand/` without changing their contents.
7. Implemented the shared responsive navbar, navigation configuration, container, class-name helper, Tailwind theme, and font setup.
8. Removed the obsolete empty split stylesheets. `src/app/globals.css` is now the single global Tailwind entry point.
9. Implemented valid error, loading, not-found, robots, and sitemap modules.
10. Added a reusable PagePlaceholder for unfinished routes and safe HTTP 501 responses for unfinished API endpoints.

## Future manual implementation sequence

### 1. Resolve design and content decisions

Use [PAGE_MAP.md](PAGE_MAP.md) to identify each reference. Resolve ambiguous export names and confirm the intended branding, page scope, responsive behavior, and design token values.

The Product navigation item visible in reviewed references has no dedicated matching export in the current folder. Do not invent its page content or route behavior from its label alone.

### 2. Extend the shared foundations

The Tailwind theme, font variables, `src/lib/cn.ts`, site configuration, and navigation configuration are implemented. Add new theme tokens to `src/app/globals.css` only after a value is confirmed as reusable. Keep page and component styling in Tailwind class names.

### 3. Implement reusable UI and layout

The Container, navigation, footer, Heading, Text, Eyebrow, buttons, and Card are implemented. Continue with shared form-control primitives, Section, SectionHeader, and SkipLink as individual pages need them. The footer lead form is presentational and remains disabled until the contact endpoint is implemented.

Add optional modal, drawer, toast, tooltip, or other interaction primitives when the page being built needs them. Their empty files reserve ownership rather than require every component to be built first.

### 4. Implement reusable sections

Build PageBanner, CategoryFilter, CTASection, TestimonialsSection, and other repeated sections as needed. NewsletterSection composes NewsletterForm when its submission behavior is defined.

### 5. Implement one feature and page at a time

Fill the feature's content and types where needed, implement its cards and sections, then compose the appropriate `src/app/` page. Reuse existing components across pages. Add feature-specific behavior only when the shared component does not own that responsibility.

Detail routes use their existing `[slug]` folders. Resolve missing-content behavior during implementation. Home can reuse service and portfolio cards from their owning features.

### 6. Implement actual submission and data requirements

Contact and newsletter API entry points are valid POST handlers that return HTTP 501. Career application behavior is undecided; the reference shows an apply action without establishing a submission workflow.

Choose required integrations at this stage. Define validation, pending and error feedback, server handling, and successful submission behavior together. No working persistence, notification service, or migration is supplied by this scaffold.

### 7. Complete framework entry points and validation

The root loading, error, not-found, robots, and sitemap files are implemented. Replace route placeholders as pages are built, add dynamic metadata where content requires it, and introduce providers only when shared client state needs them.

Use the existing lint and build scripts after each implementation phase. Check page navigation, responsive layouts, keyboard behavior, form feedback, missing detail records, and metadata. Add focused tests and CI checks around real behavior as implementation progresses.

## Scope of the current verification

The full ESLint check, TypeScript validation, production build, and development-route checks pass. The implemented application files contain no margin or `space-*` utility classes.
