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
	}
]
