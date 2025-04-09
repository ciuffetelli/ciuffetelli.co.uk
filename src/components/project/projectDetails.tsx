import { Project } from '../../../data/projects';
import React, { useCallback } from 'react';
import Image from 'next/image';

type ProjectDetailsProps = {
	details?: Project['details'];
};
export const ProjectDetails:React.FC<ProjectDetailsProps> = ({ details = {}}) => {

	const Item: React.FC<{ title: string, value: unknown }> = useCallback(({ title, value }) => {

		const baseClassTitle = 'flex gap-2 font-bold text-gray-800 w-full md:w-32 capitalize items-center';
		const baseClassValue = 'flex flex-1 justify-center items-center';

		switch (title.toLowerCase()) {
			case 'technologies':
				return (
					<>
						<span className={`${baseClassTitle} md:w-36`}>
							🛠️ {title}:
						</span>
						<div className={`${baseClassValue} flex-wrap gap-2`}>
						{(value as { title: string; icon: string }[]).map(({ title, icon }) => (
							<div key={title} className='flex gap-2 items-center'>
								<Image src={icon} alt={title} width={32} height={32} title={title} />
							</div>
						))}
					</div>
					</>
				)
			case 'features':
				return (
					<>
						<span className={`${baseClassTitle} md:w-full`}>
							✨ {title}:
						</span>
						<div className={baseClassValue}>
							<ul className='list-inside'>
								{(value as string[]).map(feature => (
									<li key={feature} className='mt-2'>{feature}</li>
								))}
							</ul>
						</div>
					</>
				)
			case 'status':
				return (
					<>
						<span className={`${baseClassTitle}`}>
							📌 {title}:
						</span>
						<div className={baseClassValue}>
							{String(value)}
						</div>
					</>
				)
			case 'my contribution':
				return (
					<>
						<span className={`${baseClassTitle} md:w-full`}>
							🏆 {title}:
						</span>
						<div className={baseClassValue}>
							<ul className='list-inside'>
								{(value as string[]).map(feature => (
									<li key={feature} className='mt-2'>✅ {feature}</li>
								))}
							</ul>
						</div>
					</>
				)
			case 'created at':
				return null;
			default:
			break;
		}

		if(String(value).startsWith('http')) {
			return (
				<>
					<span className={baseClassTitle}>
						<Image src='/assets/icons/external-link.svg' alt='External link' width={16} height={16} />
						{title}:
					</span>
					<a href={String(value)} target='_blank' rel='noreferrer' className={`${baseClassValue} hover:underline`}>
						{String(value)}
					</a>
				</>
			)
		}

		return (
			<>
				<span className={baseClassTitle}>
					{title}:
				</span>
				<div className={baseClassValue}>
					{String(value)}
				</div>
			</>
		);
	}, []);

	return Object.entries(details)
		.filter(([, value]) => value)
		.map(([key, value]) => (
			<div key={key} className='flex flex-wrap gap-2'>
				<Item title={key} value={value} />
			</div>
		));
}
