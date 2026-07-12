# 🪐 Solution Studio

> **Enterprise Software Engineering & Custom ERP Architectures**
> Scaling businesses through premium web platforms, cross-platform mobile apps, and robust backend integrations.

---

## 🌐 Overview

This is the official corporate showcase and portfolio site for **Solution Studio**. Built using a state-of-the-art Next.js architecture, Tailwind CSS, and Framer Motion, it presents the agency's core services, advanced technology stack, active client timelines, and case study portfolio in a high-fidelity, high-contrast visual system.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router & Static Generation)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly Typed)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla Custom CSS Tokens
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (Micro-interactions, smooth scroll triggers)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Integrations**: [Supabase](https://supabase.com/) (Server-side contact lead capture)

---

## 📁 Repository Structure

```bash
├── public/                     # High-fidelity static assets (brochures, logos, screenshots)
│   ├── projects/               # Client project presentation mockups
│   ├── logo.png                # Corporate brand logo
│   └── solution-studio-brochure.pdf  # Solution Studio PDF brochure
├── src/
│   ├── app/                    # Next.js App Router (Layouts & Pages)
│   │   ├── page.tsx            # Main Interactive B2B Corporate Showcase
│   │   ├── globals.css         # Foundational CSS design system tokens
│   │   └── projects/           # Dynamic project routes & deep details layouts
│   ├── components/             # Reusable interactive components
│   │   ├── Navbar.tsx          # Adaptive navigational banner
│   │   ├── Hero.tsx            # Corporate introduction & dynamic CTAs
│   │   ├── About.tsx           # Agency timeline & development philosophy
│   │   ├── Experience.tsx      # Comprehensive Services & Expertise breakdown
│   │   ├── Skills.tsx          # Grouped technology stacks matrix cards
│   │   ├── Projects.tsx        # High-contrast Client Case Studies grid
│   │   ├── Contact.tsx         # Secure email contact intakes
│   │   └── Footer.tsx          # Minimalist copyright banner
│   └── data/
│       └── projects.ts         # Centralized, proprietary client project database
```

---

## 🚀 Running Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory:
```env
SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```
Run `supabase/migrations/0001_create_leads_table.sql` in the Supabase SQL Editor before testing submissions.

### 4. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live dashboard.

### 5. Build for Production
To verify and generate a highly optimized static bundle:
```bash
npm run build
```

---

## 🛡️ License & Privacy
All code, assets, and project data are proprietary intellectual property of **Solution Studio**. Distribution, cloning, or public hosting of these case studies is strictly restricted.
