# Development guide

## Completed structural migration

1. Relocated architecture context into `docs/` and replaced outdated documentation.
2. Moved business features into `src/features/`, with components, content, domain types, and validation schema placeholders together.
3. Moved domain cards out of generic UI and site layout into `src/components/layout/`.
4. Consolidated duplicate section and typography placeholders, and separated form labels from decorative typography.
5. Added missing shared, feature, style, configuration, and asset-folder placeholders.
6. Preserved existing starter implementation files and application icons. Moved existing brand images into `public/images/brand/` without changing their contents.
7. Kept all newly created source files empty. No page, control, API handler, schema, or stylesheet implementation was added.

## Future manual implementation sequence

### 1. Resolve design and content decisions

Use [PAGE_MAP.md](PAGE_MAP.md) to identify each reference. Resolve ambiguous export names and confirm the intended branding, page scope, responsive behavior, and design token values.

The Product navigation item visible in reviewed references has no dedicated matching export in the current folder. Do not invent its page content or route behavior from its label alone.

### 2. Implement the shared foundations

Implement tokens, typography, motion, and prose styles. Connect them through the existing global stylesheet when ready. Implement `src/lib/cn.ts`, site configuration, and navigation configuration.

### 3. Implement reusable UI and layout

Start with Heading, Text, Eyebrow, buttons, form controls, and Card. Then implement Container, Section, SectionHeader, navigation, footer, and SkipLink.

Add optional modal, drawer, toast, tooltip, or other interaction primitives when the page being built needs them. Their empty files reserve ownership rather than require every component to be built first.

### 4. Implement reusable sections

Build PageBanner, CategoryFilter, CTASection, TestimonialsSection, and other repeated sections as needed. NewsletterSection composes NewsletterForm when its submission behavior is defined.

### 5. Implement one feature and page at a time

Fill the feature's content and types where needed, implement its cards and sections, then compose the appropriate `src/app/` page. Reuse existing components across pages. Add feature-specific behavior only when the shared component does not own that responsibility.

Detail routes use their existing `[slug]` folders. Resolve missing-content behavior during implementation. Home can reuse service and portfolio cards from their owning features.

### 6. Implement actual submission and data requirements

Contact and newsletter API entry points are reserved but empty. Career application behavior is undecided; the reference shows an apply action without establishing a submission workflow.

Choose required integrations at this stage. Define validation, pending and error feedback, server handling, and successful submission behavior together. No working persistence, notification service, or migration is supplied by this scaffold.

### 7. Complete framework entry points and validation

Implement reserved loading, error, not-found, metadata, robots, sitemap, and provider files where applicable. Empty framework entry points must be handled before assessing build readiness.

Use the existing lint and build scripts once valid implementations exist. Check page navigation, responsive layouts, keyboard behavior, form feedback, missing detail records, and metadata. Add focused tests and CI checks around real behavior as implementation progresses.

## Scope of the current verification

The structural migration is checked through the file inventory, zero-byte placeholders, documentation references, and preservation of existing source and asset contents. This is not a production build or functional test result.
