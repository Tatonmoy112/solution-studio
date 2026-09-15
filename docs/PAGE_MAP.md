# Page and design-reference map

## Mapping status

These mappings use existing route filenames and local PNG export names. Visual review is partial. Every route is a valid module. The home route renders sections through the blog preview; the shared footer follows every route. Routes awaiting their final design render the shared PagePlaceholder.

| Route | Route file under src/app | Reference under figma | Feature owner |
| --- | --- | --- | --- |
| / | `page.tsx` | `landing.png` plus supplied hero, Who We Are, journey-card, logo-carousel, services, founder, founder-topics, portfolio-preview, trusted-partners, and blog-preview references | home sections through blog preview implemented |
| /about | `about/page.tsx` | `about us.png` | about |
| /services | `services/page.tsx` | `service.png` | services |
| /services/[slug] | `services/[slug]/page.tsx` | `service details page.png` | services |
| /portfolio | `portfolio/page.tsx` | `portfolio.png` | portfolio |
| /portfolio/[slug] | `portfolio/[slug]/page.tsx` | `portfolio details page (1).png` | portfolio |
| /blog | `blog/page.tsx` | `blog (1).png` | blog |
| /blog/[slug] | `blog/[slug]/page.tsx` | `blog details page.png` | blog |
| /careers | `careers/page.tsx` | `careerpage.png` | careers |
| /careers/[slug] | `careers/[slug]/page.tsx` | `job details page.png` | careers |
| /clients | `clients/page.tsx` | `clients (1).png` | clients |
| /team | `team/page.tsx` | `team.png` | team |
| /contact | `contact/page.tsx` | `contact.png` | contact |

## Ambiguities and open decisions

- `about us (1).png` is the fourteenth export. Its inspected content shows a project case study, including project overview, challenges, solution, and project navigation. It is an additional portfolio-detail reference candidate, not evidence for a second About route.
- `clients (1).png` is headed Partners. The existing clients route is preserved pending a naming/content decision.
- The Product navigation item has no dedicated matching page export or route. It appears in the implemented navbar as disabled until that route is defined.
- The home hero background GIF has not been supplied. `HeroBackground.tsx` provides the documented visual placeholder until that asset is available.
- The Who We Are team photograph has not been supplied as a standalone production asset. `WhoWeAreMedia.tsx` preserves the supplied image dimensions and overlay with a temporary visual fallback.
- The Strategy, Design, and Engineering photographs have not been supplied as standalone production assets. `JourneyCard.tsx` preserves their frames and alternating placement with temporary themed fallbacks.
- The trusted-team logos have not been supplied as standalone assets. `ClientLogos.tsx` renders their configured names in equal-height frames until the production logo files are added.
- The three services-showcase images have not been supplied as standalone assets. `ServiceCapabilityCard.tsx` preserves their active-state dimensions with temporary themed fallbacks.
- The four home portfolio-preview thumbnails have not been supplied as standalone production assets. `PortfolioPreviewCard.tsx` preserves their supplied dimensions with explicit temporary visual fallbacks. The four preview records and category assignments are placeholders for approved project data.
- Vellow.ai, Freshworks, and Adobe Solution Partner in the trusted-partners screenshot are visual references only. The implemented `PartnerLogoTile.tsx` uses neutral labels in equal-sized frames until approved partner names and logo assets are supplied.
- The footer reference concept and affiliation layout are approved for use, with Solution Studio as the brand name. Its CTA background, membership logos, AI-service icons, and external social destinations have not been supplied as production assets or URLs. The footer form is disabled while the contact endpoint returns HTTP 501.
- Several reviewed exports show reference branding and sample content from other organizations. That content is not approved Solution Studio copy.
- Exact responsive specifications, interactions, fonts, and token values cannot be established from filenames or this partial visual review.

## Shared patterns seen in reviewed exports

Service, portfolio, and client references show category filtering and image-backed banners. Reviewed contact, service, portfolio, blog-detail, job-detail, and client references repeat a newsletter section and footer. These observations support shared component ownership without requiring every page to use an identical layout.

## Reserved endpoint files

- `src/app/api/contact/route.ts`: valid POST endpoint returning HTTP 501 until contact submission is implemented.
- `src/app/api/newsletter/route.ts`: valid POST endpoint returning HTTP 501 until newsletter subscription is implemented.

Job application submission behavior remains a future decision. There is no application endpoint in this scaffold.
