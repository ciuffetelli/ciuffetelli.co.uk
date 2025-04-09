import React from 'react';
import { Project as TProject } from '../../../data/projects';
import { ProjectTitle } from './projectTitle';
import Image from 'next/image';

type ProjectProps = {
	project: TProject;
	onClick?: (title: string) => void;
};
export const ProjectItem:React.FC<ProjectProps> = ({ project, onClick }) => {

		const {title, url, icon, iconSize = [320, 560]} = project;

		return (
			<div className='flex flex-col justify-center items-center h-30 m-4 space-y-2 hover:scale-110 transition-all duration-300'>
				<button onClick={() => onClick?.(title)} className='cursor-pointer'>
					<Image src={icon} alt={title} width={iconSize[0]} height={iconSize[1]} className='rounded-xl' />
				</button>
				<ProjectTitle title={title} url={url} />
			</div>
		)
}
