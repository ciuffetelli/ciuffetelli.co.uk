"use client";

import { Section } from '@/components/section';
import React, { useMemo, useState } from 'react';
import { skills } from '../../data/skills';
import Image from 'next/image';
import { sortSkills } from '@/utils/sortSkills';

export const Skills:React.FC = () => {

    const [search, setSearch] = useState('');

    const header = useMemo(() => {
      return (
        <input type='search' placeholder='Search skills' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full max-w-sm ring-1 ring-gray-900/25 rounded-lg p-2' />
      )
    }, [search]);

    const filteredSkills = useMemo(() => {

			const sortedSkills = sortSkills(skills);

        if (!search) return sortedSkills;

        const lowerSearch = search.toLowerCase();

        return sortedSkills.filter(({ title, tags = [] }) =>
          [...tags, title].some(item =>
            item.toLowerCase().includes(lowerSearch)
          )
        );
    }, [search]);

  return (
    <Section id="skills" smartMenu={true} header={header}>
        <p>The skills, tools and technologies I use:</p>
        <div className='flex flex-wrap gap-2 justify-evenly w-full text-center'>
						{ filteredSkills.length === 0 && <p className='text-2xl'>🥺 No skills found</p> }
            {filteredSkills.map(({title, icon, iconSize = [160, 160], showTitle = true}) => (
                <div key={title} className='flex flex-col justify-center items-center size-16 md:size-32 m-4 space-y-2'>
                    <Image src={icon} alt={title} width={iconSize[0]} height={iconSize[1]} />
                    { showTitle && <span className='mb-2'>{title}</span> }
                </div>
            ))}
        </div>
    </Section>
  );
}
