import { SkillTitle } from "./skills";

type DetailType = string | string[] | { title: string; icon: string }[];

export type Project = {
	title: string;
	icon: string;
	description: string;
	skills: SkillTitle[]
	url?: string;
	images?: string[];
	iconSize?: [number, number];
	tags?: string[];
	details?: Record<string, DetailType>;
	createdAt: Date;
	priority?: number;
};

export const projects: Project[] = [
	{
		title: 'Plan2',
		url: 'https://plan2.tech',
		description: 'An AI-powered SaaS that turns project ideas into structured, ready-to-build plans. Developers describe what they want to build and Plan2 generates milestones, tasks, and subtasks — cutting weeks of planning down to seconds and providing the structure needed to take a project from scratch to MVP.',
		skills: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'Prisma ORM', 'Node.js', 'OpenAI', 'Stripe', 'Vercel', 'Github'],
		icon: '/assets/images/projects/plan2/cover.png',
		details: {
			'Features': [
				'🤖 AI-driven architecture analysis that breaks down requirements into milestones and tasks',
				'🖱️ Drag-and-drop interface for organising and reprioritising your project board',
				'💳 Stripe-powered subscription plans with team credit sharing',
				'🔐 Google OAuth login for frictionless onboarding',
				'👥 Team collaboration with permission controls (Professional Teams tier)',
				'⚡ Context-aware AI that maintains consistency across the full project plan',
			],
			'Status': 'Live — trusted by 100+ builders',
			'Link': 'https://plan2.tech'
		},
		createdAt: new Date('2025-01-01'),
		priority: 98
	},
	{
		title: 'Brasileiros.co',
		url: 'https://brasileiros.co',
		description: 'A community-driven platform designed to connect Brazilian people living abroad. The website aims to empower users to find and promote local Brazilian businesses, events, and groups, fostering a sense of belonging and mutual support.',
		skills: ['React', 'Next.js', 'Tailwind CSS', 'Typescript', 'Prisma ORM', 'Vercel', 'Jest', 'Cypress', 'Zustand', 'Docker', 'Github'],
		icon: '/assets/images/projects/brasileiros/cover.png',
		details: {
			'Features': [
				'🌍 Map-based directory of Brazilian businesses around the world',
				'🔎 Search and filter by business type, location, or category',
				'💬 Community groups for events, discussions, and tips',
				'📝 User-generated content and business submissions',
				'🌐 Multi-language support (Portuguese & English)',
				'🔐 Authentication system for managing profiles'
			],
			'Status': 'In active development',
			'Link': 'https://brasileiros.co'
		},
		createdAt: new Date('2024-06-10'),
		priority: 99
	},
	{
		title: '📡 Metis – Wireless Network Architecture Tool',
		description: 'Metis is a bespoke internal web application developed for Voneus to streamline the planning and deployment of wireless GWA (Gigabit Wireless Access) networks. It enables engineers and planners to visualise and manage network infrastructure across interactive maps, supporting detailed project oversight and data management.',
		skills: ['React', 'Tailwind CSS', 'Typescript', 'Jest', 'Cypress', 'React Query', 'Docker', 'Github', 'Vite'],
		icon: '/assets/images/projects/metis/cover.png',
		images: [
			'/assets/images/projects/metis/hardware.png',
			'/assets/images/projects/metis/hardware_pictures.png',
			'/assets/images/projects/metis/devices.png',
			'/assets/images/projects/metis/devices_form.png',
			'/assets/images/projects/metis/bundles.png',
		],
		details: {
			'Company': 'Voneus',
			'Role': 'Frontend Developer',
			'Features': [
				'🗺️ Interactive map integration to visualise network architecture using geospatial data',
				'🛠️ Full CRUD capabilities for managing network nodes, assets, and project-related metadata',
				'🔐 Authentication via Keycloak integrated with Microsoft Active Directory',
				'🖼️ Image/document upload to AWS S3 with project-based categorisation',
				'🚀 CI/CD pipeline for seamless production deployment',

			],
			'My Contribution': [
				'Took full ownership of the frontend after a team transition, leading development from prototype to MVP',
				'Improved performance and usability of complex map interactions',
				'Integrated custom file upload interface with AWS S3',
				'Implemented authentication guard and session management using Keycloak tokens',
				'Collaborated closely with backend and network engineers to align UX with infrastructure workflows',
				'Developed reusable components and introduced better code structure using composition'
			],
			Status: 'In Production (MVP)',
		},
		createdAt: new Date('2023-09-01')
	},
	{
		title: '📦 Env Schema Validator - Node Package',
		description: 'A lightweight Node.js utility for validating environment variables using a schema defined with Yup. Created to prevent misconfigurations in development and production environments by enforcing type-safe .env management. Especially useful for Node.js applications.',
		skills: ['Javascript', 'Node.js', 'Github', 'Typescript'],
		icon: '/assets/images/projects/env-schema-validator/cover.png',
		url: 'https://www.npmjs.com/package/env-schema-validator',
		details: {
			'repository': 'https://github.com/ciuffetelli/env-schema-validator',
			'npm package': 'https://www.npmjs.com/package/env-schema-validator',
			'features': [
				'🔐 Type-safe environment variable validation',
				'🛠️ Easy-to-use schema definition with Yup',
				'🔧 Configuration via .env file or environment variables',
				'🚀 Seamless integration with Node.js applications',
				'🧪 Comprehensive test suite'
			]
		},
		createdAt: new Date('2024-08-01'),
		priority: -1
	},
	{
		title: '🧩 UK Test Booking Helper - Chrome Extension',
		description: 'A browser extension built to help UK residents quickly find and book available driving test slots. It simplifies the DVSA search experience by highlighting available times and optionally enabling real-time auto-refresh functionality to catch cancellations faster.',
		skills: ['Javascript', 'Github'],
		icon: '/assets/images/projects/uk-test-booking-helper/cover.png',
		details: {
			'repository': 'https://github.com/ciuffetelli/driver-practical-test-dvsa',
			'features': [
				'🔎 Highlight available test slots',
				'🔄 Auto-refresh for real-time updates',
				'🛠️ Customizable settings for optimal experience',
				'🚀 Seamless integration with DVSA website'
			]
		},
		createdAt: new Date('2023-09-01')
	}
]
