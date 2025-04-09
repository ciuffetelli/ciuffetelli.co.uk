"use client";

import { Project } from '../../../data/projects';
import React, { useMemo } from 'react';
import { Section } from '../section';
import { mainMenu, MainMenuItem } from '../../../data/mainMenu';
import { SmartMenu } from '../smartMenu';
import { Gallery } from '../gallery';
import { Skill, skills as skillData } from '../../../data/skills';
import { ProjectDetails } from './projectDetails';
import { sortSkills } from '../../utils/sortSkills';

type ProjectSectionProps = {
	project: Project;
	active: boolean;
};
export const ProjectSection:React.FC<ProjectSectionProps> = ({ project: { title, icon, images = [], description, details, createdAt, skills, url }, active }) => {

	const menuItems = useMemo(() => {
		// This project need be added just after Projects
		return mainMenu.reduce((acc, item) => {

			acc.push(item);

			if(item.name === 'Projects') {
				acc.push({
					name: title,
					href: `#${title}`,
				});
			}

			return acc;
		}, [] as MainMenuItem[]);
	}, [title]);

	const projectImages = useMemo(() => {
		return [icon, ...images].map(image => ({
			src: image,
			alt: `${title} ${image}`,
		}));
	}, [icon, images, title]);

	const projectDetails = useMemo(() => {

		let projectDetails = details ?? {};

		projectDetails['Created At'] = createdAt.toLocaleDateString('en-UK', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

		const technologies: Skill[] = [];

		skills.forEach(skill => {

			const itemSkill = skillData.find(s => s.title.toLowerCase() === skill.toLowerCase());

			if(itemSkill) {
				technologies.push(itemSkill);
			}
		});

		projectDetails['Technologies'] = sortSkills(technologies).map(skill => ({
			title: skill.title,
			icon: skill.icon,
		}));

		if(url) {
			projectDetails = {
				Link: url,
				...projectDetails
			}
		}

		return projectDetails;
	}, [createdAt, details, skills, url]);

	const isMobile = useMemo(() => {
		if(typeof window === 'undefined') return false;
		return window.innerWidth < 768;
	}, []);

	if(!active) return null;
	return (
		<Section id={title}>
			<div className="flex-wrap gap-4 items-center justify-between">
				{ <SmartMenu menuItems={menuItems} currentTitle={title} /> }
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

				<Gallery images={projectImages} length={isMobile ? 4 : 9} />

				<div className='flex flex-col gap-4'>
					<p className='text-lg text-justify'>
						{description}
					</p>

					<ProjectDetails details={projectDetails} />

				</div>
			</div>
		</Section>
	);
}
