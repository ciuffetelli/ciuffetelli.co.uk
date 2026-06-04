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
    description: "The foundation of the web. Used for interactive UIs, server-side logic, and everything in between — from simple scripts to complex application state."
  },
  {
    title: "Typescript",
    icon: "/assets/images/typescript.png",
    tags: ["typed", "frontend", "backend", "superset"],
    description: "Typed superset of JavaScript that catches bugs at compile time, improves code confidence, and scales teams without friction."
  },
  {
    title: "React",
    icon: "/assets/images/react.png",
    tags: ["spa", "hooks", "frontend", "jsx"],
    description: "Component-based library for building declarative, high-performance user interfaces. The standard for modern frontend development."
  },
  {
    title: "Next.js",
    icon: "/next.svg",
    showTitle: false,
    tags: ["react", "ssr", "frontend", "app router", "fullstack"],
    description: "Full-stack React framework with SSR, SSG, and the App Router. Powers this portfolio and several production platforms I've shipped."
  },
  {
    title: "CSS",
    icon: "/assets/images/css.png",
    showTitle: false,
    tags: ["styles", "scss", "sass", "layout", "frontend"],
    description: "Deep mastery of layouts, animations, variables, and responsive design. The visual language of the web, wielded with precision."
  },
  {
    title: "Tailwind CSS",
    icon: "/assets/images/tailwind.png",
    tags: ["utility-first", "design system", "css", "responsive"],
    description: "Utility-first framework for rapid, consistent UI development. Enables design systems without leaving the markup."
  },
  {
    title: "PHP",
    icon: "/assets/images/php.png",
    showTitle: false,
    tags: ["backend", "scripting", "web", "server-side"],
    description: "Server-side scripting language behind a large portion of the web. Used across legacy systems and modern backends alike."
  },
  {
    title: "Laravel",
    icon: "/assets/images/laravel.png",
    tags: ["php", "mvc", "framework", "eloquent", "artisan"],
    description: "Elegant PHP framework with expressive syntax, Eloquent ORM, and a rich ecosystem that accelerates backend development."
  },
  {
    title: "Prisma ORM",
    icon: "/assets/images/prisma_orm.png",
    tags: ["orm", "database", "postgres", "mysql", "typescript"],
    description: "Type-safe database client for TypeScript and Node.js. Auto-generated migrations and a schema-first approach that eliminates runtime errors."
  },
  {
    title: "Jest",
    icon: "/assets/images/jest.avif",
    tags: ["testing", "unit", "test", "coverage"],
    description: "JavaScript testing framework for unit and integration tests. Snapshot testing and coverage reports built in — a cornerstone of my TDD practice."
  },
  {
    title: "Cypress",
    icon: "/assets/images/cypress.webp",
    tags: ["testing", "e2e", "browser", "automation"],
    description: "End-to-end testing framework that runs real browser interactions. The closest thing to manual QA at scale, automated and repeatable."
  },
  {
    title: "Docker",
    icon: "/assets/images/docker.png",
    tags: ["containers", "devops", "backend", "environment"],
    description: "Containerisation platform for packaging applications and dependencies into portable, reproducible environments across dev and production."
  },
  {
    title: "Github",
    icon: "/assets/images/github.png",
    tags: ["git", "version control", "collaboration", "repository"],
    description: "Version control platform for collaboration, code review, and CI/CD automation. The hub of every professional project I've contributed to."
  },
  {
    title: "Vercel",
    icon: "/assets/images/vercel.png",
    tags: ["deployment", "next.js", "serverless", "hosting"],
    description: "Cloud platform optimised for Next.js with zero-config deployments, edge functions, and instant preview environments."
  },
  {
    title: 'Storybook',
    icon: '/assets/images/storybook.png',
    tags: ['design system', 'components', 'react', 'ui'],
    description: "Component development environment for building, testing, and documenting UI in isolation — essential for scalable design systems."
  },
  {
    title: 'Redux',
    icon: '/assets/images/redux.png',
    tags: ['state management', 'react', 'frontend'],
    description: "Predictable state container for JavaScript apps. The go-to for complex, shared state across large React applications."
  },
  {
    title: 'React Query',
    icon: '/assets/images/react-query.png',
    tags: ['state management', 'react', 'frontend'],
    description: "Async state management for server data — handles caching, background refetching, and synchronisation with minimal boilerplate."
  },
  {
    title: 'Zustand',
    icon: '/assets/images/zustand.png',
    tags: ['state management', 'react', 'frontend'],
    iconSize: [320, 320],
    description: "Lightweight, flexible state management for React. Minimal API, zero boilerplate, and just enough power for most applications."
  },
  {
    title: 'Vite',
    icon: '/assets/images/vite.png',
    tags: ['bundler', 'frontend', 'build tool'],
    description: "Lightning-fast build tool and dev server using native ES modules and HMR. The modern standard for frontend tooling."
  },
  {
    title: 'Node.js',
    icon: '/assets/images/nodejs.svg',
    showTitle: false,
    tags: ['backend', 'javascript', 'runtime', 'server', 'node'],
    description: "JavaScript runtime built on Chrome's V8 engine for scalable, event-driven server-side applications and APIs."
  },
  {
    title: 'Azure DevOps',
    icon: '/assets/images/devops.png',
    tags: ['devops', 'ci/cd', 'pipelines', 'azure', 'microsoft'],
    description: "Microsoft's DevOps platform for managing pipelines, boards, repositories, and release workflows across enterprise teams."
  },
  {
    title: 'React Native',
    icon: '/assets/images/react_native.png',
    tags: ['mobile', 'react', 'ios', 'android', 'cross-platform'],
    description: "Cross-platform mobile framework using React and JavaScript to build native iOS and Android apps from a single shared codebase."
  },
  {
    title: 'OpenAI',
    icon: '/assets/images/openai.png',
    tags: ['ai', 'llm', 'gpt', 'api', 'machine learning'],
    description: "AI platform powering intelligent features via GPT models — used for generating structured plans, context-aware suggestions, and automated content."
  },
  {
    title: 'Stripe',
    icon: '/assets/images/stripe.png',
    tags: ['payments', 'saas', 'billing', 'subscriptions'],
    description: "Payment infrastructure for the internet. Used for handling subscriptions, billing, and secure payment flows in SaaS products."
  }
];

export const skillTitles = skills.map(({ title }) => title);

export type SkillTitle = (typeof skillTitles)[number];
