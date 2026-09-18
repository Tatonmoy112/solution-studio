# Frontend architecture

## Current state

The agreed folder structure is applied. The shared navbar and footer, home sections through the blog preview, core typography, card and button primitives, route-level states, valid page placeholders, metadata routes, navigation configuration, class-name helper, font setup, and Tailwind theme are implemented. Most remaining feature and UI files remain empty placeholders.

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
| `public/images/` | Browser-served assets organized by use |
| `figma/` | Original PNG design references |
| `docs/` | Architecture and implementation context |

## Dependency rules

- Route files compose feature components and shared layout.
- UI primitives may use shared helpers and global Tailwind theme tokens, but must not import routes, feature components, or site-specific sections.
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
- `Navbar.tsx` owns navbar state and integration. Files under `src/components/layout/navbar/` own desktop links, actions, and the About, Services, and Product mega-menus. `MobileNavigation.tsx` owns the responsive accordion menu.
- `Container.tsx` owns the shared `1620px` maximum width. The parent layout centers it with grid placement rather than margin utilities.
- `HeroSection.tsx` owns the home hero composition. `HeroBackground.tsx` isolates the decorative media layer so the future GIF can be added without changing heading, copy, or CTA markup. `HeroGateway.tsx` owns the Gateway word's four hairlines, extended horizontal strokes, and corner dots inside the semantic hero heading.
- `WhoWeAreSection.tsx` owns the home introduction layout. `ValueCard.tsx` owns its repeated value-card composition, while `WhoWeAreMedia.tsx` isolates the optional team image and overlay.
- `ServicesOverview.tsx` owns the sticky journey stack and maps its content into one reusable `JourneyCard.tsx` implementation.
- `TrustedTeamsSection.tsx` owns the home-specific heading and composes the reusable `ClientLogos.tsx` carousel.
- `ServicesShowcaseSection.tsx` owns service selection state and maps three data records into `ServiceCapabilityCard.tsx`. `IconButton.tsx` provides the shared previous/next controls.
- `FounderSection.tsx` owns the founder name, outlined label, and statement composition.
- `FounderTopicsCarousel.tsx` owns the automatic topic strip that follows the founder composition.
- `PortfolioPreviewSection.tsx` owns home portfolio category state and composes one `PortfolioPreviewCard.tsx` for each visible preview.
- `TrustedPartnersSection.tsx` owns the home technology-partner heading and logo marquee; `PartnerLogoTile.tsx` owns the repeated `150px by 125px` media frame.
- `BlogPreviewSection.tsx` owns the home journal carousel controls and composes the blog feature's reusable `BlogCard.tsx` for every approved preview record.
- `Footer.tsx` owns the shared site footer. `src/components/layout/footer/` separates its background, lead form, repeated link groups, social frames, and affiliation frames; `src/config/footer.ts` owns its content and nullable asset/link paths.
- `home.content.ts` owns home-page copy and links. `Button.tsx` owns the repeated button base and visual variants.
- `Heading.tsx`, `Text.tsx`, and `Eyebrow.tsx` own named typography roles. Semantic heading level remains a caller decision through the `as` prop.

## Styling architecture

- `src/app/globals.css` is the only global stylesheet and the Tailwind CSS v4 entry point.
- Its `@theme inline` block exposes shared font and color tokens as Tailwind utilities.
- Its base layer contains document-level behavior only. Reusable animation keyframes may also live globally; component-specific presentation belongs in component class names.
- Components use padding and `gap` for visual spacing. Margin and Tailwind `space-*` utilities are not used in application layout.
- Arbitrary values are allowed when they map directly to supplied design measurements, such as the `1620px` container and `47px` navbar height.
- Add a shared theme token when the same visual value is confirmed across multiple components. Avoid copying raw values throughout unrelated features.

## Navbar architecture

```text
src/components/layout/
├── Container.tsx
├── Navbar.tsx
├── MobileNavigation.tsx
└── navbar/
    ├── AboutMegaMenu.tsx
    ├── DesktopNavigation.tsx
    ├── MegaMenuFrame.tsx
    ├── MegaMenuNote.tsx
    ├── NavbarActions.tsx
    ├── NavLink.tsx
    ├── ProductMegaMenu.tsx
    └── ServicesMegaMenu.tsx
```

Navigation labels, URLs, mega-menu keys, item copy, and nullable media sources live in `src/config/navigation.ts`. Brand name, logo path, and contact URL live in `src/config/site.ts`. `Navbar.tsx` is mounted once in the root layout.

`MegaMenuFrame.tsx` owns the shared `400px` blue introduction column, proposal action, rounded panel, and desktop overlay behavior. The three menu components own their distinct right sides. About maps six destinations under a `1156px by 150px` banner, Services maps three capability columns and a featured row, and Product maps two media cards. Services derives its height from content rather than the original oversized `371px` column frame. About and Product retain their reference minimum heights but grow with wrapped copy; internal vertical scrolling is reserved for short viewports. The proposal action stays at the bottom of the left column without shrinking. The reference images are not available as standalone production assets, so their configured sources remain `null` and the frames expose named media slots. Product is an informational menu, not a `/product` link: its cards lead to the existing Portfolio and Contact routes. On mobile, the same three groups expand into accessible link lists; About and Services also retain direct parent links. The desktop menu closes on route selection, pointer exit, focus exit, outside pointer interaction, and Escape. Keyboard activation or Arrow Down moves focus into the open menu.

## Footer architecture

`Footer.tsx` is mounted once after page content in `src/app/layout.tsx`, so every route shares the same footer. At the `1920px` reference width, the outer footer is `1051px` tall: a `463px` CTA panel and a `518px` lower panel sit within `32px` top and `38px` bottom padding. The CTA panel is at most `1823px` wide with `20px` top corners. `FooterBackground.tsx` owns its decorative image slot; `footerContent.backgroundSrc` stays `null` until the project owner adds the background image.

`FooterLeadForm.tsx` owns three labeled fields: name, email, and company. Its reference frame is `1082px by 87px`, with a `837px` field group and a `181px` button. The form is explicitly disabled while `/api/contact` returns HTTP 501; it must not appear to submit successfully before a server handler exists. The lower panel uses a `1601px` content grid with a `460px` brand column, `301px` gap, and `840px` link/affiliation region. `FooterLinkGroup.tsx` maps the two approved Quick Links groups. Missing Product, policy, terms, and guideline routes remain visible text rather than broken links.

The footer uses the existing Solution Studio logo with a white treatment on the dark panel. The approved reference concept supplies the headline and AI/member layout, while Solution Studio remains the brand name in description and copyright per the project owner's direction. `FooterSocialLinks.tsx` and `FooterAffiliations.tsx` preserve the icon and logo frames without inventing external destinations. Membership logos, AI-service assets, and social profile URLs are nullable in `src/config/footer.ts`; their slots are marked for later replacement. Responsive layouts stack the form and lower columns without page-level horizontal overflow.

## Home feature architecture

```text
src/features/home/
|-- home.content.ts
`-- components/
    |-- HeroBackground.tsx
    |-- HeroGateway.tsx
    |-- HeroSection.tsx
    |-- BlogPreviewSection.tsx
    |-- FounderSection.tsx
    |-- FounderTopicsCarousel.tsx
    |-- JourneyCard.tsx
    |-- PartnerLogoTile.tsx
    |-- PortfolioPreviewCard.tsx
    |-- PortfolioPreviewSection.tsx
    |-- ServiceCapabilityCard.tsx
    |-- ServicesOverview.tsx
    |-- ServicesShowcaseSection.tsx
    |-- TrustedTeamsSection.tsx
    |-- TrustedPartnersSection.tsx
    |-- ValueCard.tsx
    |-- WhoWeAreMedia.tsx
    `-- WhoWeAreSection.tsx
```

The `/` route composes `HeroSection`, `WhoWeAreSection`, `ServicesOverview`, `TrustedTeamsSection`, `ServicesShowcaseSection`, `FounderSection`, `FounderTopicsCarousel`, `PortfolioPreviewSection`, `TrustedPartnersSection`, and `BlogPreviewSection`. The services showcase, portfolio preview, and blog preview are client components because they own selected-card, category, and carousel state; the remaining home sections are server-rendered. `HeroGateway.tsx` frames one word inside the `h1` with four one-pixel strokes. Its top and bottom strokes extend past the vertical sides, while four white dots cover the line intersections. Flexible height and wrapping keep the heading readable on narrow viewports. `HeroBackground.tsx` currently renders a decorative dark fallback marked with `data-slot="hero-media-placeholder"`. Add the approved background GIF inside that media component when the asset is available; keep it decorative because the hero copy supplies the meaningful content.

`WhoWeAreSection` resolves to two `390px` cards per row beside a `663px by 578px` media frame at the reference width, then stacks at smaller breakpoints. The photograph from the screenshot is not present in `public/images`; `WhoWeAreMedia.tsx` therefore renders a fallback marked with `data-slot="who-we-are-image-placeholder"`. Set `media.src` in `home.content.ts` after adding the approved image to `public/images/home/`.

`ServicesOverview` maps three records from `home.content.ts` into `JourneyCard`. Cards enter normal document flow on smaller viewports and form a progressively offset sticky stack from the `xl` breakpoint. Each record controls content, theme, link, image source, and left/right media placement. The three reference photographs are not present as standalone assets, so each image frame exposes a named `data-slot` placeholder until its `image.src` is set.

`TrustedTeamsSection` passes configured logo data to the shared `ClientLogos` carousel. The carousel duplicates one semantic logo group to create a seamless CSS loop; the duplicate is hidden from assistive technology. It pauses on hover and stops under `prefers-reduced-motion`. Every image uses a fixed `46px` rendered height and proportional width. Until standalone logo files are added to `public/images/clients/`, accessible text labels fill those frames.

`ServicesShowcaseSection` uses the shared global subtitle, title, and text roles in its `528px` left column. Its `1036px` right column maps one `ServiceCapabilityCard` implementation three times. Pointer hover, keyboard focus, and previous/next buttons select the expanded `437px` card state; default cards remain `435px`. The active title is announced through a polite live region. Each card owns a `284px by 147px` optional image slot and falls back to a theme-aware visual until its configured source is supplied.

`FounderSection` uses a relative `1620px` stage at the wide reference layout. The two name fragments and founder statement use their supplied coordinates inside that stage. At smaller widths they return to normal document flow with fluid display typography and stacked content. The outlined founder label is part of the section because its overlapping ellipses are unique to this composition.

`FounderTopicsCarousel` renders two copies of one semantic topic group to create a seamless horizontal loop. The duplicate group is hidden from assistive technology. Animation pauses on hover and is disabled when reduced motion is requested. The section clips its moving track so it does not introduce horizontal document overflow.

`PortfolioPreviewSection` keeps its six category labels and four preview records in `home.content.ts`. The selected category filters those records without navigation, and the buttons expose their state through `aria-pressed`. `PortfolioPreviewCard` owns the `800px by 375px` desktop image frame and switches from a named visual placeholder to `next/image` when a standalone approved source is configured. The See All link uses the existing `/portfolio` route; its full page design remains a separate portfolio-feature task.

`TrustedPartnersSection` uses the shared Eyebrow, global Heading, and global Text roles in a centered heading group. It repeats partner records from `home.content.ts` in a clipped horizontal marquee, hides visual repetitions from assistive technology, pauses on hover, and stops for reduced motion. The screenshot names Vellow.ai, Freshworks, and Adobe Solution Partner are visual references only, so the current records use neutral labels and nullable logo sources. `PartnerLogoTile` switches each placeholder to `next/image` when an approved standalone logo is configured.

`BlogPreviewSection` follows trusted partners. Its centered intro uses the shared Eyebrow, global Heading, and global Text roles. Its local desktop grid is `1621px` wide with `527px` cards and `20px` gaps; carousel controls span `1689px`. The three approved article titles, category labels, and dates live in `home.content.ts`; the previous and next controls rotate card order. One card is visible on mobile, two from `md`, and all three from `xl`. The blog feature's `BlogCard` owns the fixed `527:351` media ratio, a `467px` copy width, semantic article metadata, and an image placeholder marked with `data-slot="blog-preview-image-placeholder"`. The supplied `474px` card height is a minimum because two title lines at `36px` occupy `72px`, exceeding the supplied `64px` title frame. The blog images are not available as standalone files, and preview cards remain non-linked until article pages are implemented.

## Naming and imports

Use PascalCase for component filenames, use-prefixed camelCase for hooks, and lowercase domain names for folders. Next.js entry-point filenames retain framework conventions. The existing `@/*` alias maps to `src/*`.

Import from the owning file. No global barrel file is needed at this stage. Keep site identity and contact details in `src/config/site.ts`, navigation in `src/config/navigation.ts`, and the class-name helper in `src/lib/cn.ts`.

## Assets

Brand images are in `public/images/brand/`. The navbar renders `ss logo.png` through `next/image` at its natural aspect ratio. Browser paths begin with `/images/brand/`. Application icons remain in `src/app/`.

Image folders exist for backgrounds, home, about, services, portfolio, blog, careers, clients, team, and contact. Empty `.gitkeep` files retain those directories in Git. The PNG reference exports remain in `figma/` and are not copied into production image folders.

## Framework and scope

The existing App Router URL structure is preserved. The project does not need route groups just to introduce another folder layer. Next.js permits multiple organization approaches outside its special file conventions: [project structure documentation](https://nextjs.org/docs/app/getting-started/project-structure).

Every App Router convention file is now a valid module. Unfinished pages reuse `src/components/shared/PagePlaceholder.tsx`; replace that component at the route boundary when implementing each final design. The contact and newsletter endpoints deliberately return HTTP 501 until their server integrations are implemented. Lint, TypeScript validation, and the production build pass.
