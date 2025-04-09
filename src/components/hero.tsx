import Image from 'next/image';
import React, { useCallback } from 'react';
import { SocialLink } from './socialLink';

export const Hero:React.FC = () => {

    const Cta = useCallback(() => {
      return (
        <div className='flex flex-wrap gap-8 items-center justify-center'>
           <SocialLink href="https://www.linkedin.com/in/ciuffetelli" imageSrc='/assets/images/linkedin.webp' alt='LinkedIn' />
           <SocialLink href='https://github.com/ciuffetelli' imageSrc='/assets/images/github.png' alt='Github' />
           <SocialLink href='mailto:seufetelli@gmail.com' imageSrc='/assets/images/email.png' alt='Mail me' />
        </div>
      )
    }, []);

  return (
    <div className='flex flex-1 flex-wrap gap-8 w-full items-center justify-center'>
      <div className='w-full md:max-w-1/2'>
        <span className='text-2xl'>
            Hi, I&apos;m
        </span>
        <span className='title'> Frontend Developer</span>
        <span className=''> witch strong experience building modern web applications</span>
        <div className='hidden md:flex gap-8 w-full p-8 justify-center'>
            <Cta />
        </div>
      </div>
      <div className='flex mx-auto size-70 rounded-full ring-8 ring-gray-900/15'>
        <div className='flex m-auto p-2 rounded-full bg-gradient-to-tl from-cyan-500 to-pink-500'>
            <div className='m-auto rounded-full size-64 overflow-hidden'>
                <Image className='inline-block' src="/assets/images/hero_image.png" alt="daniel ciuffetelli draw" width={300} height={300}/>
            </div>
        </div>
      </div>
      <div className='flex md:hidden gap-8 w-full p-8 justify-start'>
        <Cta />
      </div>
      <div className='hidden md:block text-center'>
        With 5+ years of experience crafting scalable, high-performance web apps using React, Next.js, and TypeScript. I focus on clean, maintainable code, performance optimisation, accessibility, and robust testing with Jest and Cypress. Proven ability to lead front-end efforts, improve UI/UX, and reduce bugs through best practices.
      </div>
    </div>
  );
}
