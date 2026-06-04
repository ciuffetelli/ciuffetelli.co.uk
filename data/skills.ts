export type Skill = {
  title: string;
  icon: string;
  iconSize?: [number, number];
  showTitle?: boolean;
  tags?: string[];
  description?: string;
};

export const skills: Skill[] = [
  {
    title: "Javascript",
    icon: "/assets/images/javascript.png",
    tags: ["es6", "frontend", "web", "vanilla"],
    description: "My foundation language — used to build a Chrome extension for DVSA booking automation and to publish the env-schema-validator npm package. Still reach for it when TypeScript overhead isn't justified, especially for browser APIs and CLI scripts."
  },
  {
    title: "Typescript",
    icon: "/assets/images/typescript.png",
    tags: ["typed", "frontend", "backend", "superset"],
    description: "The default for every project I start. Applied across Brasileiros.co, Metis, Plan2, and more — type-safe schemas, strict component contracts, and end-to-end inference from Prisma models straight through to the UI."
  },
  {
    title: "React",
    icon: "/assets/images/react.png",
    tags: ["spa", "hooks", "frontend", "jsx"],
    description: "The component model behind every major product I've shipped. Comfortable with hooks, compound components, render optimisation, and large-scale team collaboration — used daily across 5+ years of professional work."
  },
  {
    title: "Next.js",
    icon: "/next.svg",
    showTitle: false,
    tags: ["react", "ssr", "frontend", "app router", "fullstack"],
    description: "Powers Brasileiros.co and Plan2 end-to-end — App Router, server components, API routes, and Vercel edge deployments. My go-to framework whenever a project needs both a polished frontend and a reliable backend."
  },
  {
    title: "CSS",
    icon: "/assets/images/css.png",
    showTitle: false,
    tags: ["styles", "scss", "sass", "layout", "frontend"],
    description: "Deep fluency in Flexbox, Grid, custom properties, keyframe animations, and responsive design. Every project I've built relies on precise CSS — I avoid design-system shortcuts when the design needs real craft."
  },
  {
    title: "Tailwind CSS",
    icon: "/assets/images/tailwind.png",
    tags: ["utility-first", "design system", "css", "responsive"],
    description: "The styling backbone for Brasileiros.co, Metis, and Plan2. Speeds up layout work significantly while keeping styles co-located with markup — especially effective when iterating fast on product UI."
  },
  {
    title: "PHP",
    icon: "/assets/images/php.png",
    showTitle: false,
    tags: ["backend", "scripting", "web", "server-side"],
    description: "Used throughout my freelance years and at 360ss for server-side APIs, CMS integrations, and custom backend logic. Comfortable with OOP patterns and REST API design. Certified via PHP OOP course."
  },
  {
    title: "Laravel",
    icon: "/assets/images/laravel.png",
    tags: ["php", "mvc", "framework", "eloquent", "artisan"],
    description: "Built REST APIs and full CRUD applications for clients during the 360ss and freelance period. Certified via the Laravel Restful API course — Eloquent ORM and Artisan CLI were daily tools."
  },
  {
    title: "Prisma ORM",
    icon: "/assets/images/prisma_orm.png",
    tags: ["orm", "database", "postgres", "mysql", "typescript"],
    description: "The database layer for Brasileiros.co and Plan2 — schema-first migrations, relational queries, and seamless TypeScript inference from model to API response. Eliminates a whole class of runtime data bugs."
  },
  {
    title: "Jest",
    icon: "/assets/images/jest.avif",
    tags: ["testing", "unit", "test", "coverage"],
    description: "Introduced Jest at Voneus from scratch as part of building the testing foundation for the Metis MVP. Also covers unit and integration tests on Brasileiros.co — snapshot testing, mocks, and coverage gates in CI."
  },
  {
    title: "Cypress",
    icon: "/assets/images/cypress.webp",
    tags: ["testing", "e2e", "browser", "automation"],
    description: "Set up Cypress end-to-end infrastructure at Voneus, covering critical user flows on Metis. Also runs on Brasileiros.co — real browser automation that catches regressions no unit test can surface."
  },
  {
    title: "Docker",
    icon: "/assets/images/docker.png",
    tags: ["containers", "devops", "backend", "environment"],
    description: "Containerised local dev and CI environments for Brasileiros.co and Metis — consistent setups across machines, isolated services, and clean deployment pipelines without environment drift."
  },
  {
    title: "Github",
    icon: "/assets/images/github.png",
    tags: ["git", "version control", "collaboration", "repository"],
    description: "The hub of every project I've shipped — branch strategy, PR reviews, Actions-based CI, and protected main branches. Hosted the env-schema-validator npm package and all personal open-source work."
  },
  {
    title: "Vercel",
    icon: "/assets/images/vercel.png",
    tags: ["deployment", "next.js", "serverless", "hosting"],
    description: "Production host for Brasileiros.co and Plan2. Zero-config deploys on push, branch preview URLs for every PR, and edge function support — cuts deployment overhead to near zero for Next.js projects."
  },
  {
    title: 'Storybook',
    icon: '/assets/images/storybook.png',
    tags: ['design system', 'components', 'react', 'ui'],
    description: "Used at Logistics UK to build and document a component library in isolation across multiple teams. Storybook as a shared contract between design and engineering reduced integration friction significantly."
  },
  {
    title: 'Redux',
    icon: '/assets/images/redux.png',
    tags: ['state management', 'react', 'frontend'],
    description: "Introduced at Logistics UK to centralise state management across a multi-team frontend — eliminated prop-drilling, simplified API data flow, and gave every team a single predictable source of truth."
  },
  {
    title: 'React Query',
    icon: '/assets/images/react-query.png',
    tags: ['state management', 'react', 'frontend'],
    description: "Server state layer for Metis — handles all API calls with automatic caching, background refetching, and optimistic updates. Replaced a mess of useEffect data-fetching logic and cut boilerplate substantially."
  },
  {
    title: 'Zustand',
    icon: '/assets/images/zustand.png',
    tags: ['state management', 'react', 'frontend'],
    iconSize: [320, 320],
    description: "Client state management in Brasileiros.co — chosen over Redux for its minimal API when global state scope is moderate. One store, no boilerplate, and full TypeScript inference out of the box."
  },
  {
    title: 'Vite',
    icon: '/assets/images/vite.png',
    tags: ['bundler', 'frontend', 'build tool'],
    description: "Build tooling for Metis at Voneus — near-instant HMR in development and optimised production bundles. Replaced a slow CRA setup and made the dev loop noticeably faster for the whole team."
  },
  {
    title: 'Node.js',
    icon: '/assets/images/nodejs.svg',
    showTitle: false,
    tags: ['backend', 'javascript', 'runtime', 'server', 'node'],
    description: "Runtime behind Plan2's API layer and the env-schema-validator npm package. Comfortable with async patterns, middleware pipelines, and CLI tooling — a natural extension of my TypeScript-first stack."
  },
  {
    title: 'Azure DevOps',
    icon: '/assets/images/devops.png',
    tags: ['devops', 'ci/cd', 'pipelines', 'azure', 'microsoft'],
    description: "CI/CD pipeline management and sprint planning across professional roles. Configured multi-stage build, test, and deployment pipelines — integrated with Microsoft Active Directory and enterprise release workflows."
  },
  {
    title: 'React Native',
    icon: '/assets/images/react_native.png',
    tags: ['mobile', 'react', 'ios', 'android', 'cross-platform'],
    description: "Cross-platform mobile development — built iOS and Android apps sharing business logic with the React web layer. Part of my professional toolkit for delivering client-facing mobile products from a single codebase."
  },
  {
    title: 'OpenAI',
    icon: '/assets/images/openai.png',
    tags: ['ai', 'llm', 'gpt', 'api', 'machine learning'],
    description: "The AI engine powering Plan2 — prompt engineering for structured plan generation, streaming completions, and context-aware task breakdowns. Integrated directly into the Next.js API layer with token-efficient prompting."
  },
  {
    title: 'Stripe',
    icon: '/assets/images/stripe.png',
    tags: ['payments', 'saas', 'billing', 'subscriptions'],
    description: "Payment infrastructure for Plan2 — subscription plans, webhook handling for lifecycle events, and a self-serve billing portal. First SaaS I took from zero to live payments, including trial flows and team seat management."
  }
];

export const skillTitles = skills.map(({ title }) => title);

export type SkillTitle = (typeof skillTitles)[number];
