import React from 'react';
import Image from 'next/image';

type ProjectTitleProps = {
	title: string;
	url?: string;
	className?: string;
};
export const ProjectTitle:React.FC<ProjectTitleProps> = ({ title, url, className = 'mb-2' }) => {

	if (url) {
		return (
			<a href={url} target='_blank' rel='noreferrer' className={`flex items-center justify-center gap-2 ${className}`}>
				{title} <Image src='/assets/icons/external-link.svg' alt='External link' width={16} height={16} />
			</a>
			)
	}

	return <div className={className}>{title}</div>;
}
