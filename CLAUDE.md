# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start development server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

This is a **marketing/brochure website** for Glanz Facility Services (a Nairobi-based cleaning company). It is a static-content site with no backend or API routes — all lead capture redirects to WhatsApp.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

### Page structure

`app/` uses the Next.js App Router. Every route is a `page.tsx` server component that exports a `metadata` object for SEO. Interactive pages split interactivity into a separate `*Client.tsx` file (e.g. `app/get-quote/QuoteClient.tsx`) marked `"use client"`.

Routes follow the service taxonomy:
- `/services/*` — residential cleaning sub-services
- `/commercial/*` — commercial/office cleaning
- `/fumigation/*` — pest control sub-services
- Top-level routes for standalone services (e.g. `/carpet-cleaning`, `/window-cleaning`)

### Shared components (`components/`)

| Component | Purpose |
|---|---|
| `Navbar` | Sticky header with hover dropdowns; client component |
| `Footer` | Site-wide footer |
| `WhatsappFloat` | Floating WhatsApp CTA button, present on every page |
| `SectionHeader` | Eyebrow + h2 + description header block |
| `PricingTable` | Responsive pricing table, accepts `title`, `note`, and `rows` |
| `ServiceCard` | Card linking to a service sub-page |
| `seo/OrganizationSchema` | Injects LocalBusiness JSON-LD schema |
| `seo/FAQSchema` | Injects FAQ JSON-LD schema |
| `seo/serviceschema` | Injects Service JSON-LD schema |

### Page template pattern

Every service page follows the same structure:

```tsx
<Navbar />
<main>
  <SectionHeader eyebrow="..." title="..." description="..." />
  {/* image grid using next/image with fill + sizes */}
  {/* content section */}
  <PricingTable title="..." note="..." rows={[...]} />
  {/* areas served section */}
  {/* CTA section — links to https://wa.me/254759993502 */}
</main>
<WhatsappFloat />
<Footer />
```

### SEO conventions

- Each `page.tsx` exports a `metadata` object with `title`, `description`, and `keywords`.
- JSON-LD structured data is injected via `<Script strategy="afterInteractive">` or the `seo/` components.
- Images in `public/images/hero/<service-name>/` are served as static assets.

### Quote flow

`/get-quote` renders a form that on submit opens `https://wa.me/254759993502?text=<encoded-message>` in a new tab. There is no server-side form submission.
