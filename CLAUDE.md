# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start dev server with Turbopack at localhost:3000
yarn build    # Production build
yarn lint     # ESLint via Next.js
```

No test runner is configured — there are no test files in this repo.

## Architecture

This is a single-page portfolio site built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4.

**Page structure** — `src/app/page.tsx` renders four sections stacked vertically: `About → Skills → Projects → Contact`. All navigation is hash-based anchor scrolling, not multi-route.

**Data layer** — All content lives in `data/` as plain TypeScript files:
- `data/mainMenu.ts` — ordered array of `{ name, href }` items that drives the `SmartMenu` component across every section
- `data/skills.ts` — skill entries with icon paths and searchable `tags[]`; exports `SkillTitle` union type used to type-check project skill references
- `data/projects.ts` — project entries typed to `SkillTitle[]` for skills; sorted in `Projects` section by `priority` (higher = first) then `createdAt` (newer = first)

**SmartMenu pattern** — `src/components/smartMenu.tsx` receives the full `mainMenu` array and a `currentTitle` string. It finds the current item by matching `href.replace('#', '')` against `currentTitle`, then renders the previous item as an up-link, the current item as the section heading (`<h2 className="title">`), and the next item as a down-link. Every section passes its `id` as `currentTitle`. `ProjectSection` dynamically inserts its own entry into the menu array after "Projects" to support back-navigation from an expanded project view.

**Projects section interaction** — `Projects` section (`src/sections/Projects.tsx`) renders `ProjectItem` cards. Clicking a card sets `activatedProjectTitle` state and pushes a hash route. Each `ProjectSection` component renders only when `active === true` (i.e. its title matches `activatedProjectTitle`), effectively acting as a detail panel that appears below the grid.

**Path alias** — `@/*` maps to `src/*` (configured in `tsconfig.json`). All imports from `data/` use relative paths like `../../data/projects` since `data/` is outside `src/`.

**Styling** — Tailwind CSS v4 via PostCSS. The `.title` class is the only non-utility class used for section headings; it must be defined in the global CSS if referenced.

## Owner — Daniel Ciuffetelli

Frontend Developer with 5+ years of experience, based in London, UK. Specialises in React, Next.js, TypeScript, React Native, Jest, and Cypress. Focus areas: performance optimisation, accessibility, scalable architecture, and UI/UX best practices.

### Experience (chronological, most recent first)

| Company | Role | Period |
|---|---|---|
| Logistics UK | Frontend Developer | May 2025 – Present |
| Brasileiros.co | Software Developer | Jun 2024 – May 2025 |
| Voneus Broadband | Software Developer | Jun 2023 – Mar 2025 |
| 360ss | Software Developer | Feb 2022 – Jun 2023 |
| Freelance | Technology Consultant | Oct 2019 – Feb 2022 |

**Key highlights per role:**
- **Logistics UK** — Joined at critical relaunch stage; introduced centralised state management, simplified API data flow; acted as frontend reference point across multiple teams.
- **Brasileiros.co** — Architected platform from scratch with Next.js and Prisma; improved team efficiency via Jira and CI/CD practices.
- **Voneus Broadband** — Built frontend foundation from scratch; introduced Jest and Cypress testing; delivered stable MVP ahead of schedule.
- **360ss** — Developed structured methodology for project setups, reducing onboarding time and improving team collaboration.
- **Freelance** — Translated client requirements into scalable technical solutions across multiple projects.

### Skills & Certifications

**Top skills:** Front-End Development, DevOps, NestJS  
**Languages:** Portuguese (native), English (professional), Italian (limited)  
**Certifications:** OmniStack Week 11, Cyber Resilience Advanced (Silver), Laravel Restful API, PHP OOP, Vue JS  
**Education:** BS Electrical & Electronics Engineering — Universidade Vila Velha (2014)
