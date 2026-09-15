# Component and supporting-file inventory

## Status

Most files listed below remain empty placeholders. Implemented shared foundation files are marked **implemented**. Existing route files and starter code are described in [PAGE_MAP.md](PAGE_MAP.md) and [ARCHITECTURE.md](ARCHITECTURE.md).

## Reusable components and supporting files

### src/components/ui/

- `src/components/ui/accordion/Accordion.tsx`
- `src/components/ui/avatar/Avatar.tsx`
- `src/components/ui/badge/Badge.tsx`
- `src/components/ui/button/Button.tsx` Ã¢â‚¬â€ **implemented**
- `src/components/ui/button/IconButton.tsx` Ã¢â‚¬â€ **implemented**
- `src/components/ui/card/Card.tsx` Ã¢â‚¬â€ **implemented**
- `src/components/ui/drawer/Drawer.tsx`
- `src/components/ui/form/Checkbox.tsx`
- `src/components/ui/form/FormField.tsx`
- `src/components/ui/form/FormHint.tsx`
- `src/components/ui/form/FormLabel.tsx`
- `src/components/ui/form/FormMessage.tsx`
- `src/components/ui/form/Input.tsx`
- `src/components/ui/form/Select.tsx`
- `src/components/ui/form/Textarea.tsx`
- `src/components/ui/modal/Modal.tsx`
- `src/components/ui/skeleton/Skeleton.tsx`
- `src/components/ui/spinner/Spinner.tsx`
- `src/components/ui/tabs/Tabs.tsx`
- `src/components/ui/toast/Toast.tsx`
- `src/components/ui/toast/useToast.ts`
- `src/components/ui/tooltip/Tooltip.tsx`
- `src/components/ui/typography/Eyebrow.tsx` Ã¢â‚¬â€ **implemented**
- `src/components/ui/typography/Heading.tsx` Ã¢â‚¬â€ **implemented**
- `src/components/ui/typography/Text.tsx` Ã¢â‚¬â€ **implemented**

### src/components/layout/

- `src/components/layout/Container.tsx` â€” **implemented**
- `src/components/layout/Footer.tsx` — **implemented**
- `src/components/layout/MobileNavigation.tsx` â€” **implemented**
- `src/components/layout/Navbar.tsx` â€” **implemented**
- `src/components/layout/Section.tsx`
- `src/components/layout/SkipLink.tsx`

### src/components/layout/navbar/

- `src/components/layout/navbar/AboutMegaMenu.tsx` â€” **implemented**
- `src/components/layout/navbar/DesktopNavigation.tsx` â€” **implemented**
- `src/components/layout/navbar/NavbarActions.tsx` â€” **implemented**
- `src/components/layout/navbar/NavLink.tsx` â€” **implemented**

### src/components/layout/footer/

- `src/components/layout/footer/FooterAffiliations.tsx` — **implemented**
- `src/components/layout/footer/FooterBackground.tsx` — **implemented**
- `src/components/layout/footer/FooterLeadForm.tsx` — **implemented**
- `src/components/layout/footer/FooterLinkGroup.tsx` — **implemented**
- `src/components/layout/footer/FooterSocialLinks.tsx` — **implemented**

### src/components/shared/

- `src/components/shared/Breadcrumbs.tsx`
- `src/components/shared/CTASection.tsx`
- `src/components/shared/CategoryFilter.tsx`
- `src/components/shared/ClientLogos.tsx` Ã¢â‚¬â€ **implemented**
- `src/components/shared/FAQSection.tsx`
- `src/components/shared/NewsletterSection.tsx`
- `src/components/shared/PageBanner.tsx`
- `src/components/shared/PagePlaceholder.tsx` â€” **implemented**
- `src/components/shared/SectionHeader.tsx`
- `src/components/shared/ShareLinks.tsx`
- `src/components/shared/SocialLinks.tsx`
- `src/components/shared/TechStackGrid.tsx`
- `src/components/shared/TestimonialsSection.tsx`
- `src/components/shared/useFilter.ts`

### src/components/seo/

- `src/components/seo/JsonLd.tsx`

### src/config/

- `src/config/footer.ts` — **implemented**
- `src/config/navigation.ts` â€” **implemented**
- `src/config/site.ts` â€” **implemented**

### src/hooks/

- `src/hooks/useClickOutside.ts`
- `src/hooks/useDebounce.ts`
- `src/hooks/useMediaQuery.ts`
- `src/hooks/useScroll.ts`

### src/lib/

- `src/lib/cn.ts` â€” **implemented**
- `src/lib/metadata.ts`

## Feature files

### home

- `src/features/home/components/BlogPreviewSection.tsx` — **implemented**
- `src/features/home/components/ClientStats.tsx`
- `src/features/home/components/FeaturedWork.tsx`
- `src/features/home/components/FounderSection.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/FounderTopicsCarousel.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/HeroBackground.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/HeroGateway.tsx` — **implemented**
- `src/features/home/components/HeroSection.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/JourneyCard.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/PartnerLogoTile.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/PortfolioPreviewCard.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/PortfolioPreviewSection.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/ServiceCapabilityCard.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/ServicesOverview.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/ServicesShowcaseSection.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/TrustedTeamsSection.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/TrustedPartnersSection.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/ValueCard.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/WhoWeAreMedia.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/components/WhoWeAreSection.tsx` Ã¢â‚¬â€ **implemented**
- `src/features/home/home.content.ts` Ã¢â‚¬â€ **implemented**

### about

- `src/features/about/about.content.ts`
- `src/features/about/components/AboutHero.tsx`
- `src/features/about/components/CompanyHistory.tsx`
- `src/features/about/components/CoreValues.tsx`
- `src/features/about/components/MissionVision.tsx`

### services

- `src/features/services/components/ServiceCard.tsx`
- `src/features/services/components/ServiceDeliverables.tsx`
- `src/features/services/components/ServiceDetailHero.tsx`
- `src/features/services/components/ServiceProcess.tsx`
- `src/features/services/components/ServiceTechStack.tsx`
- `src/features/services/components/ServicesGrid.tsx`
- `src/features/services/services.content.ts`
- `src/features/services/services.types.ts`

### portfolio

- `src/features/portfolio/components/CaseStudyChallenge.tsx`
- `src/features/portfolio/components/CaseStudyHero.tsx`
- `src/features/portfolio/components/CaseStudyOverview.tsx`
- `src/features/portfolio/components/CaseStudyResults.tsx`
- `src/features/portfolio/components/CaseStudySolution.tsx`
- `src/features/portfolio/components/PortfolioCard.tsx`
- `src/features/portfolio/components/PortfolioFilter.tsx`
- `src/features/portfolio/components/PortfolioGrid.tsx`
- `src/features/portfolio/components/ProjectGallery.tsx`
- `src/features/portfolio/components/ProjectNavigation.tsx`
- `src/features/portfolio/portfolio.content.ts`
- `src/features/portfolio/portfolio.types.ts`

### blog

- `src/features/blog/blog.content.ts`
- `src/features/blog/blog.types.ts`
- `src/features/blog/components/BlogCard.tsx` — **implemented**
- `src/features/blog/components/BlogFeatured.tsx`
- `src/features/blog/components/BlogFilter.tsx`
- `src/features/blog/components/BlogGrid.tsx`
- `src/features/blog/components/PostContent.tsx`
- `src/features/blog/components/PostHeader.tsx`
- `src/features/blog/components/RelatedPosts.tsx`

### careers

- `src/features/careers/application.schema.ts`
- `src/features/careers/careers.content.ts`
- `src/features/careers/careers.types.ts`
- `src/features/careers/components/CareerCard.tsx`
- `src/features/careers/components/CareerHero.tsx`
- `src/features/careers/components/CultureBenefits.tsx`
- `src/features/careers/components/JobApplyForm.tsx`
- `src/features/careers/components/JobDescription.tsx`
- `src/features/careers/components/JobDetailHeader.tsx`
- `src/features/careers/components/JobSummaryCard.tsx`
- `src/features/careers/components/OpenPositions.tsx`

### clients

- `src/features/clients/clients.content.ts`
- `src/features/clients/clients.types.ts`
- `src/features/clients/components/ClientCard.tsx`
- `src/features/clients/components/ClientGrid.tsx`
- `src/features/clients/components/ClientTestimonials.tsx`

### team

- `src/features/team/components/LeadershipSection.tsx`
- `src/features/team/components/TeamCard.tsx`
- `src/features/team/components/TeamGrid.tsx`
- `src/features/team/team.content.ts`
- `src/features/team/team.types.ts`

### contact

- `src/features/contact/components/ContactForm.tsx`
- `src/features/contact/components/ContactInfo.tsx`
- `src/features/contact/components/OfficeLocations.tsx`
- `src/features/contact/components/OfficeMap.tsx`
- `src/features/contact/contact.content.ts`
- `src/features/contact/contact.schema.ts`
- `src/features/contact/contact.types.ts`

### newsletter

- `src/features/newsletter/components/NewsletterForm.tsx`
- `src/features/newsletter/newsletter.schema.ts`

## Asset folders

- `public/images/brand/`
- `public/images/backgrounds/`
- `public/images/home/`
- `public/images/about/`
- `public/images/services/`
- `public/images/portfolio/`
- `public/images/blog/`
- `public/images/careers/`
- `public/images/clients/`
- `public/images/team/`
- `public/images/contact/`

Each asset folder contains an empty `.gitkeep`. The brand folder also contains the existing `ss logo.png` and `ss favicon.png` assets. Application icons remain under `src/app/`.

## Reservation rules

Optional interaction primitives are reserved for later use. Do not add separate files for each button size, text size, visual state, or color variation; those should share their owning component and token definitions.

Global Tailwind tokens and base styles live in `src/app/globals.css`; separate global stylesheet placeholders are no longer part of the architecture.

Add new files when a concrete component, behavior, or content responsibility requires them. Keep this inventory aligned with additions, moves, and removals.
