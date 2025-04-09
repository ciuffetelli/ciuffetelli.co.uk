export type Skill = {
    title: string;
    icon: string;
    iconSize?: [number, number];
    showTitle?: boolean;
    tags?: string[];
  };

  export const skills: Skill[] = [
    {
      title: "Javascript",
      icon: "/assets/images/javascript.png",
      tags: ["es6", "frontend", "web", "vanilla"]
    },
    {
      title: "Typescript",
      icon: "/assets/images/typescript.png",
      tags: ["typed", "frontend", "backend", "superset"]
    },
    {
      title: "React",
      icon: "/assets/images/react.png",
      tags: ["spa", "hooks", "frontend", "jsx"]
    },
    {
      title: "Next.js",
      icon: "/next.svg",
      showTitle: false,
      tags: ["react", "ssr", "frontend", "app router", "fullstack"]
    },
    {
      title: "CSS",
      icon: "/assets/images/css.png",
      showTitle: false,
      tags: ["styles", "scss", "sass", "layout", "frontend"]
    },
    {
      title: "Tailwind CSS",
      icon: "/assets/images/tailwind.png",
      tags: ["utility-first", "design system", "css", "responsive"]
    },
    {
      title: "PHP",
      icon: "/assets/images/php.png",
      showTitle: false,
      tags: ["backend", "scripting", "web", "server-side"]
    },
    {
      title: "Laravel",
      icon: "/assets/images/laravel.png",
      tags: ["php", "mvc", "framework", "eloquent", "artisan"]
    },
    {
      title: "Prisma ORM",
      icon: "/assets/images/prisma_orm.png",
      tags: ["orm", "database", "postgres", "mysql", "typescript"]
    },
    {
      title: "Jest",
      icon: "/assets/images/jest.avif",
      tags: ["testing", "unit", "test", "coverage"]
    },
    {
      title: "Cypress",
      icon: "/assets/images/cypress.webp",
      tags: ["testing", "e2e", "browser", "automation"]
    },
    {
      title: "Docker",
      icon: "/assets/images/docker.png",
      tags: ["containers", "devops", "backend", "environment"]
    },
    {
      title: "Github",
      icon: "/assets/images/github.png",
      tags: ["git", "version control", "collaboration", "repository"]
    },
    {
      title: "Vercel",
      icon: "/assets/images/vercel.png",
      tags: ["deployment", "next.js", "serverless", "hosting"]
    },
    {
      title: 'Storybook',
      icon: '/assets/images/storybook.png',
      tags: ['design system', 'components', 'react', 'ui']
    },
		{
			title: 'Redux',
			icon: '/assets/images/redux.png',
			tags: ['state management', 'react', 'frontend']
		},
		{
			title: 'React Query',
			icon: '/assets/images/react-query.png',
			tags: ['state management', 'react', 'frontend']
		},
		{
			title: 'Zustand',
			icon: '/assets/images/zustand.png',
			tags: ['state management', 'react', 'frontend'],
			iconSize: [320, 320]
		},
		{
			title: 'Vite',
			icon: '/assets/images/vite.png',
			tags: ['bundler', 'frontend', 'build tool']
		}
  ];

export const skillTitles = skills.map(({ title }) => title);

export type SkillTitle = (typeof skillTitles)[number];
