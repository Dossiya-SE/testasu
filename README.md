# Solar + STEM AI — Sustainable Education Technology Prototype

<p align="center"><img src="public/readme/solar-stem-system.svg" width="100%" alt="Solar energy, learning and validation system" /></p>

This is a **Next.js / React / TypeScript product prototype**. The figure separates three different systems that must not be conflated: **energy availability, digital-learning interaction and empirical impact inference**.

## Physical + digital mathematics

```math
E_{PV}=\int P_{PV}(t)\,dt,
\qquad
SOC_{t+1}=SOC_t+\eta_cE_{ch}-E_{dis}/\eta_d.
```

A conceptual learning-state model can be written as

```math
z_{t+1}=F(z_t,content_t,feedback_t),
```

but the current repository implements the **interface**, not a validated learning-state estimator.

## What the repository proves

`app/ + components/ + TypeScript + responsive UI + metadata/SEO + animation + package-defined build/test tooling`

## What it does not prove

The interface contains counters such as **250+ lamps**, **20+ testers** and a **1,000-student goal**. Until linked to auditable records, the first two are treated as **prototype presentation content** and the last as a goal—not observed program outcomes.

A defensible impact estimate requires an explicit comparison design, e.g.

```math
\Delta=E[Y\mid intervention]-E[Y\mid counterfactual],
```

with baseline, denominator, follow-up, attrition and confounding controls.

## Software gate

```bash
pnpm install
pnpm dev
pnpm build
pnpm test
```

Production-grade evidence should additionally expose lint, type-check, accessibility, responsive and deployment smoke-test results.

## Field-validation gate

**technical feasibility → adoption → learning efficacy → operational sustainability**

Potential evidence: lamp runtime, charge cycles, uptime, sessions, assessment change, failure/repair rate, cost per active learner, retention and user feedback.

> **Implemented interface ≠ validated intervention.**
