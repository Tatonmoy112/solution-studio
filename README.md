# 🪐 Solution Studio

> **Enterprise Software Engineering & Custom ERP Architectures**
> Scaling businesses through premium web platforms, cross-platform mobile apps, and robust backend integrations.

---

## 🌐 Overview

This is the official corporate showcase and portfolio site for **Solution Studio**. Built using a state-of-the-art Next.js architecture, Tailwind CSS, and Framer Motion, it presents the agency's core services, advanced technology stack, active client timelines, and case study portfolio in a high-fidelity, high-contrast visual system.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router, static pages, and server API routes)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly Typed)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla Custom CSS Tokens
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (Micro-interactions, smooth scroll triggers)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Integrations**: [Supabase](https://supabase.com/) (Server-side contact lead capture)

---

## 📁 Repository Structure

```bash
├── public/                     # Brand assets, generated icons, and screenshots
│   ├── images/                 # Founder photograph
│   ├── projects/               # Client project presentation mockups
│   ├── ss logo.png             # Corporate brand logo
│   ├── ss favicon.png          # Source image for favicon generation
│   ├── favicon.png             # Generated 48×48 favicon
│   ├── favicon-48x48.png        # Retained 48×48 favicon URL
│   ├── apple-touch-icon.png    # Generated 180×180 Apple touch icon
│   ├── icon-192.png            # Generated 192×192 manifest icon
│   ├── icon-512.png            # Generated 512×512 manifest icon
│   ├── site.webmanifest        # App name, icons, and display settings
│   └── googleb1572fbfd9a96ff7.html  # Search Console ownership verification
├── scripts/
│   └── generate-favicons.mjs   # Manual generation of current brand icons
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/submit-lead/route.ts  # Server-side contact submissions
│   │   ├── favicon.ico         # Generated ICO served at /favicon.ico
│   │   ├── layout.tsx          # Shared layout and site metadata
│   │   ├── page.tsx            # Corporate showcase homepage
│   │   ├── globals.css         # Foundational CSS design system tokens
│   │   ├── projects/           # Project listing and detail pages
│   │   ├── robots.ts           # Crawler rules and sitemap location
│   │   └── sitemap.ts          # Search engine sitemap
│   ├── components/
│   │   ├── layout/             # Navbar and Footer
│   │   └── sections/           # Homepage sections, including Contact
│   ├── data/
│   │   └── projects.ts         # Client project content
│   └── lib/                    # Shared content, types, and Supabase client
```

---

## 🚀 Running Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v20.9.0 or newer required by Next.js 16).

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory:
```env
SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

RESEND_API_KEY="your_resend_api_key"
LEAD_NOTIFICATION_EMAIL="your_receiving_email@gmail.com"
LEAD_NOTIFICATION_FROM="Solution Studio <contact@solutionstudio.bd>"
```
Run `supabase/migrations/0001_create_leads_table.sql` in the Supabase SQL Editor before testing submissions.

### 4. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### 5. Build for Production
Build the production Next.js application:
```bash
npm run build
```

Run the production server with `npm start`. Deployment must support Next.js server routes for `/api/submit-lead` and provide the contact-form environment variables above.

---

## Updating Brand Icons

The sole icon-generation pipeline is `scripts/generate-favicons.mjs`. After replacing `public/ss favicon.png`, run:

```bash
npm run icons:generate
```

The generator uses Sharp to trim and center the source on a square canvas, then writes these committed assets:

| Output | Size |
| --- | --- |
| `src/app/favicon.ico` | ICO containing 16×16, 32×32, and 48×48 images |
| `public/favicon.png` | 48×48 PNG |
| `public/favicon-48x48.png` | 48×48 PNG retained for existing references |
| `public/apple-touch-icon.png` | 180×180 PNG |
| `public/icon-192.png` | 192×192 PNG |
| `public/icon-512.png` | 512×512 PNG |

Review and commit the generated assets together with the source image. Generation is a manual maintenance step; ordinary development and production builds use the committed icons and do not need to regenerate them.

Keep the public URLs `/favicon.ico`, `/favicon.png`, `/favicon-48x48.png`, `/apple-touch-icon.png`, `/icon-192.png`, and `/icon-512.png` stable when updating the artwork. Next.js serves `/favicon.ico` from `src/app/favicon.ico`; the other assets are served from `public/`. The layout metadata and `site.webmanifest` reference these URLs.

Preserve `public/googleb1572fbfd9a96ff7.html` and its contents to retain the existing Google Search Console HTML-file verification.

---

## 🛡️ License & Privacy
All code, assets, and project data are proprietary intellectual property of **Solution Studio**. Distribution, cloning, or public hosting of these case studies is strictly restricted.
