# Design system

## Styling approach

The application uses Tailwind CSS v4 for component styling. `src/app/globals.css` is the single global stylesheet and contains:

- the Tailwind import;
- shared theme tokens in `@theme inline`;
- document-level base rules.

Do not add component selectors to the global stylesheet. Express component layout, typography, responsive behavior, and states with Tailwind utilities beside the component.

## Spacing rule

Use parent padding and `gap` for visible layout spacing. Do not use CSS margin, Tailwind `m-*` utilities, or Tailwind `space-x-*` and `space-y-*` utilities in application components.

Use grid or flex alignment to center and position components. Absolute positioning is permitted for anchored overlays such as the navbar mega-menu, where it describes component behavior rather than page spacing.

## Current theme tokens

The global Tailwind theme defines:

- `font-sans` and `font-display` from Manrope;
- `font-accent` from Saira;
- `font-mono` from Space Mono;
- background and foreground colors;
- brand, brand-strong, and brand-soft colors;
- navigation border, surface, muted, and action colors.

`figma/figma.md` specifies Satoshi for primary interface text, but the repository contains no licensed Satoshi font files. Manrope is the current bundled substitute. Replace the font variable through `next/font/local` if approved Satoshi files are added later; component class names should not need to change.

## Typography roles

The implemented typography primitives provide these current roles:

| Role | Purpose | Owner |
| --- | --- | --- |
| Global title | `40px / 40px`, bold, `-3%` tracking | `Heading` global variant |
| Hero title | Fluid up to `66px / 72px`, bold, `-3%` tracking | `Heading` hero variant |
| Card title | `16px / 24px`, bold | `Heading` card variant |
| Feature title | Fluid up to `32px / 32px`, bold, `-3%` tracking | `Heading` feature variant |
| Service-card title | `20px / 28px`, bold | `Heading` serviceCard variant |
| Founder name | Fluid up to `270px / 270px`, bold | `Heading` founderName variant |
| Founder label | Fluid up to `36px / 36px`, bold, `-3%` tracking | `Heading` founderLabel variant |
| Global text | `18px / 28px` | `Text` global variant |
| Hero text | `19px / 32px` | `Text` hero variant |
| Card text | `15px / 25px` | `Text` card variant |
| Feature text | `16px / 28px` | `Text` feature variant |
| Service-card text | `16px / 22px` within a `110px` frame | `Text` serviceCard variant |
| Global subtitle | Saira `13px`, bordered pill | `Eyebrow` |
| Form label | Associated control label | `FormLabel.tsx` |
| Form hint | Supporting form instruction | `FormHint.tsx` |
| Form message | Validation or status feedback | `FormMessage.tsx` |

Heading semantics and visual appearance must remain separate. Choose the HTML heading level from the document outline, then apply the matching visual Tailwind variant.

## Navbar specification

The shared navbar is implemented from the supplied screenshot and `figma/figma.md`.

| Element | Implemented behavior |
| --- | --- |
| Outer content width | `1620px` maximum, centered by the header grid |
| Header spacing | `20px` vertical and horizontal padding |
| Navigation row | `47px` minimum height |
| Logo | `126px` display width with preserved intrinsic aspect ratio |
| Desktop links | Bold 16px text with responsive 24px/40px gaps |
| Search action | `41px` square with one-pixel border and 16px radius |
| Contact action | Minimum `175px × 42px` with pill radius |
| Mega-menu frame | `400px` blue introduction column, flexible light right column, 20px outer radius |
| About menu | Minimum `380px` tall, `150px` banner, six links in three columns; bottom CTA remains `336px × 42px` at the reference width |
| Services menu | Content-driven height (about `517px` at the reference width), three capability columns, `150px` featured row |
| Product menu | Minimum `315px` tall, two `225px` cards with `185px` media frames |
| Desktop breakpoint | Full navigation at `xl`; mobile trigger below it |

The three menus share `MegaMenuFrame` and keep their content in `src/config/navigation.ts`. All dimensions above are reference desktop values. The Services column grid has no forced empty height, while About and Product can grow beyond their minimum heights when copy wraps. The shared frame clips horizontal overflow and scrolls vertically only when the viewport is shorter than its content. The About and Services proposal links stay at the bottom of their left columns and cannot shrink. About, Services, and Product open on desktop hover or button activation. Mobile navigation uses expandable groups, with Product linking to existing Portfolio and Contact routes because `/product` has not been built. The menu closes on selection, pointer or focus exit, outside pointer interaction, and Escape. Missing menu photographs are nullable media slots; no screenshot crop is used as a production asset.

## Component rules

- Button and IconButton own repeated button variants when they are implemented.
- Input, Textarea, Select, and Checkbox own form-control presentation.
- FormField groups a control with its label, optional hint, and feedback.
- FormLabel is only for an associated form control. Use Eyebrow or Badge for decorative text.
- Card owns generic card presentation. Domain cards compose it when they share a confirmed base.
- Container owns shared maximum width. Section will own repeated section padding.
- PageBanner owns repeated image-backed page introductions.
- Feature-specific dimensions should stay with their feature unless repeated use establishes a global token.

## Home hero specification

The home hero follows the supplied desktop composition while scaling down safely:

| Element | Implemented behavior |
| --- | --- |
| Section height | At least the visible viewport below the `88px` navbar |
| Content alignment | Bottom-aligned within the shared `1620px` container |
| Title | Maximum `835px`, fluid up to `66px / 72px`, `-3%` tracking |
| Gateway frame | At least `278px by 76px` at the wide reference size; `1px` strokes, top and bottom extend `11px` past both sides, four `9px` white dots cover the corners |
| Body copy | Maximum `689px`, `19px / 32px` |
| Divider | Maximum `960px`, decorative and excluded from the accessibility tree |
| CTA | Minimum `169px x 42px`, `16px` text, `20px` radius |
| Media | Decorative dark fallback in `HeroBackground.tsx`; reserved for the future GIF |

Hero copy and CTA configuration live in `src/features/home/home.content.ts`. The Gateway word is separate content from “A Unified” so `HeroGateway.tsx` can render four independent hairlines. The horizontal lines extend past the corners; the white dots layer above them and cover their intersections. Its `14px` horizontal gap and flexible height allow the first line to wrap without horizontal overflow. The lines and dots are decorative and excluded from the accessibility tree. The media fallback is intentionally isolated from content so replacing it with an image or GIF does not affect semantic HTML or responsive layout.

## Home introduction specification

The Who We Are section uses the global title, subtitle, and text roles. At the supplied desktop width, it uses an `800px` content column and a `663px by 578px` media column with the remaining container width separating them.

Each value card is `390px` wide and at least `107px` high, with `16px 20px` padding, a `20px` content gap, a `20px` radius, and a one-pixel border. The icon frame is `32px` square with a `16px` icon. Below the desktop layout, the columns and cards stack without fixed-width overflow.

## Home journey-card specification

`ServicesOverview.tsx` renders one section heading followed by three `JourneyCard` instances from `home.content.ts`. Strategy and Engineering place media on the right; Design places media on the left. This variation is data-driven and does not duplicate card markup.

| Element | Implemented behavior |
| --- | --- |
| Card | Maximum `1384px`, minimum desktop height `516px`, `20px` radius |
| Desktop padding | `88px 50px 48px` |
| Content | Maximum `673px`, `17px` vertical padding, `12px` gap |
| Category icon | `40px` frame, `16px` icon, `10px` radius |
| Feature title | Fluid up to `32px / 32px`, `-3%` tracking |
| Feature text | Maximum `612px`, `16px / 28px` |
| CTA | Minimum `233px by 42px`, bold `16px` text |
| Media | Maximum `570px by 380px`, `20px` radius |
| Sticky behavior | Progressive `96px`, `120px`, and `144px` desktop offsets |

The sticky behavior starts at `xl`, preserving normal document flow on smaller screens. The cards remain server components and require no scroll event listener. Each missing service image uses a theme-aware placeholder and can be replaced through its `image.src` configuration.

## Trusted-teams carousel specification

The home trusted-teams section is `250px` tall at its reference content size, with `60px 100px` outer padding and a `60px` gap. Its centered title frame is at most `1720px` wide and `24px` high, using Space Mono at `16px`, regular weight, and uppercase presentation.

`ClientLogos.tsx` owns the reusable carousel. Each repeated group is `1216px by 46px`, and every real logo renders at exactly `46px` high with proportional width. Two equal groups create the loop without a visual reset. Hover pauses animation, and reduced-motion preference disables it. Text placeholders retain the configured logo names until standalone image assets are supplied.

## Home services-showcase specification

The services showcase uses a `528px` left column, a `56px` column gap, and a `1036px by 437px` card region at the `1620px` reference width. Its left side composes the existing global Eyebrow, Heading, and Text roles and keeps the navigation buttons at the bottom of its `430px` frame.

One `ServiceCapabilityCard` component renders all three records from `home.content.ts`. Default cards are `332px by 435px` with `24px` padding. The active card becomes `437px` high and reveals a `284px by 147px` image above a `170px` content region. Titles use `20px / 28px`; descriptions use `16px / 22px` in a `110px` frame; service icons use a `24px` frame and approximately `12px by 15px` glyph.

The first card is initially selected. Hover and focus select another card, while previous and next buttons cycle through the collection. Transitions are removed for reduced-motion users. Below `xl`, the two columns and three cards stack without horizontal overflow.

## Home founder specification

The founder section uses a `1620px by 739px` relative stage at the wide reference layout. “Tanvir” occupies a `720px by 282px` region at the stage origin. “Ahmed” occupies the remaining `880px by 282px` region at `740px / 99px`, preserving a `20px` separation between the name regions. Both use the founder-name typography role at `270px / 270px`.

The founder statement is `1029px by 252px` at `487px`, using `272px` and `657px` columns separated by `99px`. The label starts `72px` into its column and `8px` from the top. The blue ellipse outlines use `-17.7deg` and `-22.91deg` CSS rotations so they rise toward the right and cross the word “The”; the statement uses `16px / 28px` justified text.

Below the wide layout, absolute positioning is removed through responsive utilities. Name, label, and statement follow normal document flow, and display typography scales with the viewport.

## Home founder topics carousel

The founder topics carousel is a full-width `80px` strip with a `1px` top and bottom border. Each topic uses Manrope at `24px`, weight `600`, and `100%` line height inside a `33px` item frame. At the `1922px` reference width, each repeated topic group uses `68px` inline padding and distributes six no-wrap labels across the available width.

The track contains two identical `1922px` groups and translates by half its total width for a seamless loop. The second group is hidden from assistive technology, hover pauses motion, reduced-motion preferences stop it, and the outer section clips the track to prevent page-level horizontal overflow.

## Home portfolio preview

The home portfolio preview follows the founder topics carousel on a white `bg-background` surface. Its centered subtitle uses the shared `Eyebrow` badge with the same brand-soft presentation as other home sections, its title uses the global `Heading` role, and its visible description and empty-state copy use the global `Text` role. The category control is `696px` wide and at least `66px` high; a bordered light surface distinguishes it from the white section, while the selected button uses a black pill and exposes `aria-pressed`.

The image grid is `1620px` wide at the reference breakpoint. Two `800px by 375px` cards per row and `20px` gaps produce a `770px` tall four-card grid. Cards use a `32:15` aspect ratio and stack into one column on narrower screens. Each image source is nullable until standalone project assets are supplied, and the fallback is explicitly marked with `data-slot="portfolio-preview-image-placeholder"`. The section clips card media, and the See All link points to `/portfolio`.

## Home trusted partners

The trusted-partners section follows the portfolio preview on a dark navy gradient. Its centered subtitle uses the shared Eyebrow badge with an orange accent, its two-line title uses the global Heading role, and its visible supporting copy uses the global Text role. The media strip uses `150px by 125px` tiles with `50px` gaps, placing tile starts `200px` apart at the reference width; `35px` inline padding inside the `1620px` container positions the first tile near the reference `185px` viewport coordinate.

Three partner records are repeated three times in each of two equal-width groups to fill the desktop strip. The second group and repeated items after the first set are hidden from assistive technology. The shared horizontal marquee pauses on hover and stops for reduced motion; clipping prevents page-level horizontal overflow. The pictured Vellow.ai, Freshworks, and Adobe logos are visual references only, so neutral labels remain in the `150px by 125px` frames until approved logo files and partner names are supplied.

## Home blog preview

The journal section follows trusted partners on a white background. Its centered intro uses the shared Eyebrow, global Heading, and global Text roles. At the wide reference width, its local `1621px` grid contains three `527px` cards with `20px` gaps. Each image frame is `527px by 351px` with `20px` corners, and copy follows after a `24px` gap. The copy is at most `467px` wide, with a `19px` metadata row using `14px / 14px` text. The title is at most `410px` wide, uses `24px / 36px`, and has a minimum `64px` frame. The card and copy have `474px` and `99px` minimum heights, respectively. Two 36px title lines occupy 72px, so real card content may be 482px tall; it remains readable and uncut.

The controls span `1689px` at the large reference viewport, with a `1641px` gap between their two `24px` buttons. Their top offset follows the `351px` image midpoint. At narrower widths the controls move below the cards with larger touch targets. The three approved articles rotate by one record per button press; one card is visible on mobile, two from `md`, and three from `xl`, without introducing horizontal scroll. Figma's `top` and `left` measurements are local artboard positions; responsive layout keeps the section in document flow. Standalone article images are still needed; nullable `image.src` values use named placeholders until those assets arrive. The shared font system uses Manrope while no Satoshi font files exist in this repository.

## Shared footer specification

The shared footer follows every page. At the wide reference size, its CTA panel is `1823px by 463px`, with `20px` top corners; a decorative `FooterBackground` slot isolates the future image. The centered headline is at most `1086px` wide and uses Saira at up to `77px`, weight `500`, with a `121px` frame. The `1082px by 87px` lead form has `16px 24px` padding, `16px` group gap, three `269px by 55px` fields separated by `15px`, `12px` Saira labels, and a `181px by 44px` action. The form is disabled until the contact endpoint exists, with a visible availability message.

The lower footer content is at most `1601px` wide. Its left region is `460px` wide with a `138px by 51px` logo frame, `407px` description, and four `32px` social frames separated by `12px`. The right region is `840px` wide and holds two `107px` Quick Links groups and an AI/member region, with `128px` desktop column gaps. The copyright rests in a centered white tab at the bottom of the dark panel. Footer typography uses the existing Manrope substitution for the reference Satoshi and Inter styles; Saira weight `500` is added for the CTA and field labels. No component selectors are added to global CSS.

## Accessibility and responsive requirements

Interactive elements require visible keyboard focus, correct semantic elements, accessible names, and meaningful disabled or expanded state. Images need appropriate alternative text; decorative images use an empty alternative.

Responsive implementations must prevent horizontal overflow and preserve usable tap targets. Validate contrast, keyboard order, menu dismissal, reduced motion, and responsive layouts as each component becomes functional.

## Design-source limits

The local design source consists of PNG exports and measurements in `figma/figma.md`, not an editable Figma node. Exact hidden states and unrecorded interactions require explicit design decisions. Sample branding or copy visible in reference images is not approved Solution Studio content.
