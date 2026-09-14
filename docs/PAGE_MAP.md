# Page and design-reference map

## Mapping status

These mappings use existing route filenames and local PNG export names. Visual review is partial. Names alone are not proof of final page intent, and no new pages were implemented.

| Route | Route file under src/app | Reference under figma | Feature owner |
| --- | --- | --- | --- |
| / | `page.tsx` | `landing.png` | home |
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
- The Product navigation item in reviewed exports has no dedicated matching page export. No product route has been added.
- The landing export could not be displayed during the initial review because of an image-tool decoding error. Its home mapping is based on the filename.
- Several reviewed exports show reference branding and sample content from other organizations. That content is not approved Solution Studio copy.
- Exact responsive specifications, interactions, fonts, and token values cannot be established from filenames or this partial visual review.

## Shared patterns seen in reviewed exports

Service, portfolio, and client references show category filtering and image-backed banners. Reviewed contact, service, portfolio, blog-detail, job-detail, and client references repeat a newsletter section and footer. These observations support shared component ownership without requiring every page to use an identical layout.

## Reserved endpoint files

- `src/app/api/contact/route.ts`: intended contact submission entry point; empty.
- `src/app/api/newsletter/route.ts`: intended newsletter entry point; empty.

Job application submission behavior remains a future decision. There is no application endpoint in this scaffold.
