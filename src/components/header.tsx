"use client";

import React, { useEffect, useRef, useState } from 'react';
import { mainMenu } from '../../data/mainMenu';
import Link from 'next/link';
import Image from 'next/image';

export const Header:React.FC = () => {

    const [activeSection, setActiveSection] = useState('about');
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
                console.log({ entry });

              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.6 }
        );

        const sections = document.querySelectorAll('section');

        Array.from(sections).forEach(section => {
            const sectionId = section.getAttribute('data-section');
            observer.observe(section);
            if(sectionId) {
                sectionRefs.current[sectionId] = section
            }
        });

        return () => observer.disconnect();
      }, []);

  return (
    <header className="flex items-center justify-center md:justify-between border-4 border-gray-900/15 w-full max-w-5xl p-4 rounded-xl mx-auto h-16">
        <div className='text-2xl hidden md:flex gap-2'>
						<Image src="/assets/logo.svg" alt='Logo' width={32} height={32} />
            <strong className="font-bold">Daniel</strong> Ciuffetelli
        </div>
        <nav className='inline-flex gap-4'>
            { mainMenu.map(({ name, href }) => {
                return (
                    <Link key={name} href={href} className={`${activeSection === href.replace('#', '') ? 'text-gray-900 font-extrabold' : 'text-gray-500'} hover:text-gray-900`}>
                        {name}
                    </Link>
                )
            })}
        </nav>
    </header>
  );
}
