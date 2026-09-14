# Planned design system

## Status

This document defines naming and ownership for future implementation. The CSS files and UI components listed here are empty. No palette, typography scale, breakpoint values, or interaction behavior has been implemented by the structural migration.

The reference exports contain differing accent colors and typography treatments. Choose the intended Solution Studio visual direction before assigning exact values. Do not treat reference branding, sample company details, or sample statistics as approved site content.

## Typography roles

| Planned class | Purpose | Owning component |
| --- | --- | --- |
| `title-global` | Main page or hero heading | `Heading.tsx` |
| `title-section` | Major section heading | `Heading.tsx` |
| `sub-title` | Subsection heading | `Heading.tsx` |
| `title-card` | Card heading | `Heading.tsx` |
| `text-lead` | Introductory paragraph | `Text.tsx` |
| `text-body` | Standard body copy | `Text.tsx` |
| `text-caption` | Dates and supporting metadata | `Text.tsx` |
| `text-eyebrow` | Short introduction above a heading | `Eyebrow.tsx` |
| `text-label` | Form field label | `FormLabel.tsx` |
| `text-hint` | Form instructions | `FormHint.tsx` |
| `text-error` | Validation feedback | `FormMessage.tsx` |

Heading, Text, and Eyebrow live in `src/components/ui/typography/`. FormLabel, FormHint, and FormMessage live in `src/components/ui/form/`.

Heading should separate visual variant from semantic HTML heading level. A small card title is not automatically an h4. Choose heading levels from the page hierarchy. Introductory paragraphs should use Text rather than heading elements solely for appearance.

Use one implementation of the named typography classes in `src/styles/typography.css`. Components should reuse those definitions rather than maintain a second independent font scale.

## Stylesheet ownership

| File | Planned responsibility |
| --- | --- |
| `src/app/globals.css` | Global stylesheet entry point and base application styles |
| `src/styles/tokens.css` | Color, font, spacing, radius, shadow, and layering tokens |
| `src/styles/typography.css` | Named text styles and responsive text sizing |
| `src/styles/animations.css` | Reusable motion patterns and reduced-motion treatment |
| `src/styles/prose.css` | Long-form article and description typography |

The existing global stylesheet is preserved. Imports for the new stylesheet placeholders have not been added.

## Components and composition

- Button and IconButton own repeated button presentation and states.
- Input, Textarea, Select, and Checkbox own form controls.
- FormField groups a control with its label, optional hint, and feedback.
- FormLabel is for an associated form control. Use Eyebrow or Badge for decorative introductory text.
- FormMessage owns feedback presentation; future implementation must connect relevant feedback to its control.
- Card owns generic card presentation. Domain cards compose it where their designs justify a common base.
- Container owns shared content width. Section owns shared section spacing. SectionHeader owns heading-group composition.
- PageBanner owns the repeated image-backed introduction. Feature-specific detail heroes may use different arrangements.
- Badge can represent decorative tags without a duplicate Tag primitive.

## Values to establish during manual implementation

Confirm font families and licenses, font weights, heading sizes, line heights, responsive scaling, brand and feedback colors, surface colors, spacing, container widths, image ratios, radii, shadows, and motion timing.

Define keyboard focus, disabled, pending, selected, and error states where relevant. Review keyboard navigation, accessible names, contrast, reduced motion, and mobile layouts against implemented behavior. These are future validation tasks, not completed compliance claims.
