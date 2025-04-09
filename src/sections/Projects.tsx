"use client";

import { Section } from '@/components/section';
import React, { useCallback, useMemo, useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectItem } from '@/components/project/projectItem';
import { ProjectSection } from '@/components/project/projectSection';
import { useRouter } from 'next/navigation';

export const Projects:React.FC = () => {

		const [search, setSearch] = useState('');
		const [activatedProjectTitle, setActivatedProjectTitle] = useState('');

		const router = useRouter();

		const header = useMemo(() => {
			return (
				<input type='search' placeholder='Search project' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full max-w-sm ring-1 ring-gray-900/25 rounded-lg p-2' />
			)
		}, [search]);

		const sortedProjects = useMemo(() => {
			return [...projects].sort(({ createdAt: createdAtA = new Date(), priority: priorityA = 0 }, { createdAt: createdAtB = new Date(), priority: priorityB = 0 }) => {
				const createdAtAgo = createdAtB.getTime() - createdAtA.getTime();
				const priority = priorityB - priorityA;

				if(priorityA || priorityB) return priority;

				return createdAtAgo;
			});
		}, []);

		const filteredProjects = useMemo(() => {
				if (!search) return sortedProjects;

				const lowerSearch = search.toLowerCase();

				return sortedProjects.filter(({ title, skills = [] }) =>
					[...skills, title].some(item =>
						item.toLowerCase().includes(lowerSearch)
					)
				);
		}, [search, sortedProjects]);

		const handleSelectProject = useCallback((title: string) => {

			setActivatedProjectTitle(title);

			if(!title) return;

			router.push(`#${title}`);

		}, [router]);

	return (
		<>
			<Section id="projects" smartMenu={true} header={header}>
				<div className='flex flex-wrap text-center'>
						{ filteredProjects.length === 0 && <p className='text-2xl'>🥺 No projects found</p> }
						{filteredProjects.map(p => <ProjectItem key={p.title} project={p} onClick={handleSelectProject} />)}
				</div>
			</Section>
			{ filteredProjects.map(p => <ProjectSection key={p.title} project={p} active={activatedProjectTitle === p.title} />) }
		</>
	);
}
