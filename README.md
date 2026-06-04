# ciuffetelli.co.uk

Personal portfolio site for Daniel Ciuffetelli — Frontend Developer based in London, UK.

Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. Single-page layout with hash-based anchor navigation.

**Live site:** [ciuffetelli.co.uk](https://ciuffetelli.co.uk)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Language | TypeScript 5 |
| Gestures | react-swipeable |
| Linting | ESLint (Next.js config) |
| Deployment | Vercel |

---

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured.

---

## Project Structure

```
.
├── data/                   # All site content — edit here to update the site
│   ├── hero.ts             # Name, role, tagline, description, profile image, CTAs
│   ├── mainMenu.ts         # Ordered navigation items (drives SmartMenu across all sections)
│   ├── skills.ts           # Skill entries with icons, tags, descriptions + SkillTitle type
│   └── projects.ts         # Project entries typed to SkillTitle[], sorted by priority
│
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout — Nav + global CSS
│   │   ├── page.tsx        # Page root — stacks all five sections
│   │   └── globals.css     # Tailwind v4 + custom tokens (.title, .tile, type-*, btn-*)
│   │
│   ├── sections/           # Full-page section components
│   │   ├── About.tsx       # Hero — name, role, tagline, profile photo, CTAs
│   │   ├── Solutions.tsx   # Services/value proposition section
│   │   ├── Skills.tsx      # Skill grid with search/filter
│   │   ├── Projects.tsx    # Project card grid + expandable detail panels
│   │   └── Contact.tsx     # Contact form / links
│   │
│   └── components/         # Shared UI components
│       ├── smartMenu.tsx   # Section heading that renders prev/next nav links
│       ├── nav.tsx         # Top navigation bar
│       ├── header.tsx      # Section header wrapper
│       ├── section.tsx     # Section container wrapper
│       ├── button.tsx      # Button variants
│       ├── modal.tsx       # Modal overlay
│       ├── gallery.tsx     # Image gallery
│       ├── socialLink.tsx  # Social/external link chip
│       ├── AnimateIn.tsx   # Scroll-triggered entrance animation
│       ├── ProjectOverlay.tsx  # Project detail overlay
│       ├── SkillOverlay.tsx    # Skill detail overlay
│       └── project/        # Project-specific sub-components
│
└── public/assets/images/   # Static assets — skill icons, project covers, profile photo
```

---

## Architecture

### Page layout

`src/app/page.tsx` renders five sections stacked vertically:

```
About → Solutions → Skills → Projects → Contact
```

All navigation is hash-based anchor scrolling (`#about`, `#skills`, etc.) — there are no multi-page routes.

### Data layer

All content lives in `data/` as plain TypeScript files. To update the site, edit these files — no component changes needed for most content updates.

**`data/hero.ts`** — Name, role, tagline, hero description, profile image path, and CTA buttons for the About section.

**`data/mainMenu.ts`** — Ordered array of `{ name, href }` items. This array drives the `SmartMenu` component across every section, providing automatic previous/next navigation links.

**`data/skills.ts`** — Array of skill entries. Each skill has:
- `title` — display name and the value used to type-check project references (`SkillTitle`)
- `icon` — path to the icon image in `public/`
- `tags[]` — searchable keywords for the skills filter
- `description` — rich context shown in the skill detail overlay
- `showTitle` / `iconSize` — optional display overrides

Exports `SkillTitle` as a union type of all skill titles. This is used to type `projects[].skills[]`, so TypeScript will error if a project references a skill that doesn't exist.

**`data/projects.ts`** — Array of project entries. Each project references `SkillTitle[]` for its skills. Projects are sorted in the `Projects` section by `priority` (higher = first), then `createdAt` (newer = first). Set `priority: -1` to push a project to the bottom.

### SmartMenu pattern

`src/components/smartMenu.tsx` receives the full `mainMenu` array and a `currentTitle` string. It finds the current section by matching `href.replace('#', '')` against `currentTitle`, then renders:
- The previous item as an up-link
- The current item as the section heading (`<h2 className="title">`)
- The next item as a down-link

Every section passes its `id` as `currentTitle`. The `Projects` section dynamically inserts a project-specific entry into the menu array after "Projects" to support back-navigation from an expanded project detail view.

### Projects interaction

The `Projects` section renders `ProjectItem` cards in a grid. Clicking a card sets `activatedProjectTitle` state and pushes a hash route. `ProjectSection` components render only when `active === true` (i.e. their title matches `activatedProjectTitle`), acting as detail panels that expand below the grid.

### Path alias

`@/*` maps to `src/*` (configured in `tsconfig.json`). Imports from `data/` use relative paths like `../../data/projects` since `data/` is outside `src/`.

---

## Adding Content

### Add a new skill

In `data/skills.ts`, add an entry to the `skills` array:

```ts
{
  title: "New Skill",          // must be unique — becomes a SkillTitle
  icon: "/assets/images/new-skill.png",
  tags: ["tag1", "tag2"],
  description: "One paragraph of context."
}
```

Drop the icon image into `public/assets/images/`.

### Add a new project

In `data/projects.ts`, add an entry to the `projects` array:

```ts
{
  title: "Project Name",
  description: "One paragraph describing the project.",
  skills: ["React", "Typescript"],  // must be valid SkillTitle values
  icon: "/assets/images/projects/project-name/cover.png",
  url: "https://example.com",       // optional
  createdAt: new Date("2025-06-01"),
  priority: 50,                     // higher = appears first; omit for default ordering
  details: {
    "Features": ["Feature 1", "Feature 2"],
    "Status": "Live"
  }
}
```

---

## Design System

The visual design references Apple's product web presence: alternating light and dark full-bleed section tiles, a single action-blue accent, near-zero decorative chrome, and photography-first presentation.

Design tokens and component specs live in `.claude/design.md` (internal reference — not for deployment).

Custom utility classes are defined in `src/app/globals.css`:
- `.tile` — full-bleed section container
- `.title` — section heading (used by SmartMenu)
- `type-hero`, `type-lead`, `type-body`, `type-tagline` — typography scale
- `btn-primary`, `btn-ghost-dark` — button variants

---

## Deployment

Deployed to [Vercel](https://vercel.com). Push to `main` triggers an automatic production deploy.

```bash
# Build locally before pushing
npm run build
```
