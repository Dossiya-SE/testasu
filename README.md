# Solar + STEM AI — Sustainable Education Technology Prototype

This repository contains a **Next.js / TypeScript web prototype** for a concept combining solar lighting access with AI-assisted STEM learning support.

The package identifies the project as `solar-stem-ai`. The repository name `testasu` is historical and should not be interpreted as the technical project title.

## Evidence status

This is a **software/product-communication prototype**.

It demonstrates implemented frontend structure and interaction design. It does **not** by itself validate educational outcomes, solar-device performance, AI tutoring effectiveness, or field impact.

| Claim / artifact | Repository evidence | Status |
|---|---|---|
| Next.js application | `app/`, `components/`, `package.json` | implemented source |
| TypeScript frontend | `tsconfig.json`, `.tsx` components | implemented source |
| Responsive component architecture | reusable components + layout | implemented source |
| Product/problem/solution communication | `Hero`, `Problem`, `Solution`, `HowItWorks`, FAQ, pilot/contact sections | implemented prototype |
| SEO/crawler scaffolding | `robots.ts`, `sitemap.ts`, metadata/layout code | implemented source |
| Playwright command | `npm test` script in `package.json` | configured command; test coverage must be inspected separately |
| “250+ solar lamps distributed” | animated UI counter in `components/hero.tsx` | **prototype content; not verified here** |
| “20+ AI tutor beta testers” | animated UI counter in `components/hero.tsx` | **prototype content; not verified here** |
| “1,000 students goal” | animated UI counter in `components/hero.tsx` | design/goal content, not an observed outcome |

The repository therefore distinguishes **implemented UI** from **impact evidence**.

## Technical architecture

The current application uses:

- **Next.js 14**;
- **React 18**;
- **TypeScript**;
- Radix UI component primitives;
- Tailwind CSS tooling;
- Framer Motion for animation;
- Recharts in the dependency set;
- React Hook Form and Zod in the dependency set;
- Playwright command wiring for browser testing;
- Next.js metadata / robots / sitemap infrastructure.

The dependency list is broader than the evidence actually used on every page. A package being installed is not treated as evidence that it is deeply or correctly used throughout the system.

## Application structure

```text
.
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── about/
│   ├── faq/
│   ├── privacy/
│   ├── terms/
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── hero
│   ├── value proposition
│   ├── problem / solution
│   ├── how-it-works
│   ├── impact metrics
│   ├── pilot
│   ├── FAQ
│   ├── contact form
│   └── UI components
├── public/
├── styles/
├── package.json
└── tsconfig.json
```

## Product hypothesis

The prototype communicates a system concept in which two constraints are considered together:

```text
reliable study light
+
personalized STEM learning support
→
potentially improved access to learning opportunity
```

That arrow is a **design hypothesis**, not a causal result.

A field-valid claim would require evidence about device availability, actual usage, learning exposure, student outcomes, confounders, attrition and appropriate comparison design.

## Development commands

From the committed `package.json`:

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm test
```

Formatting and lint commands are also defined in the package scripts.

Before calling a release verified, the intended software gate is:

```text
install locked dependencies
→ lint
→ type-check
→ build
→ browser tests
→ accessibility review
→ responsive review
→ deployment smoke test
```

The README does **not** claim that every gate currently passes unless CI or an auditable run establishes that state.

## Research / impact validation gate

A serious pilot should separate at least four evidence questions:

1. **Technical feasibility** — does the lighting/device system meet electrical, runtime, safety and maintainability requirements?
2. **Adoption** — do intended users actually use the system as expected?
3. **Learning efficacy** — does the learning intervention improve declared educational outcomes under an appropriate study design?
4. **Operational sustainability** — can charging, repair, connectivity, content governance and support be maintained at acceptable cost?

Potential measurements include:

- lamp runtime and charge-cycle performance;
- device uptime;
- session frequency / duration;
- learning-assessment changes;
- failure/repair rate;
- cost per active learner;
- retention / continued usage;
- teacher/student qualitative feedback.

## Scientific-integrity boundary

The interface currently contains animated impact-style numbers. Until those values are linked to auditable records, they should be understood as **prototype presentation values**, not verified program results.

This is intentional documentation of the gap between:

```text
what the interface says
≠
what the repository proves
```

## What this repository demonstrates

The public source supports evidence of experience with:

- Next.js application structure;
- React/TypeScript component composition;
- responsive product-page design;
- motion/interaction design;
- metadata/SEO scaffolding;
- structured product storytelling;
- explicit separation of software implementation from impact validation.

## What remains before research-grade deployment

- verify/remove unsupported impact counters;
- establish CI with lint/type-check/build/test gates;
- document deployment environment;
- add accessibility evidence;
- add energy-system/device specification if the physical product is part of the claim;
- define data privacy and AI-tutoring governance;
- document pilot protocol and outcome measures;
- separate generated/illustrative visual assets from field photographs where applicable.

---

**Repository rule:** implemented interface ≠ validated intervention. Both matter, and they require different evidence.
