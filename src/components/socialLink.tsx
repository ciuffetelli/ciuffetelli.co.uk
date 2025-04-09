import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type SocialLinkProps = {
    href: string;
    imageSrc: string;
    alt: string;
};
export const SocialLink:React.FC<SocialLinkProps> = ({ href, imageSrc, alt }) => {
 
  return (
    <Link href={href} aria-label={`go to ${alt}`} target='_blank' className='flex flex-col gap-4 size-24 md:size-32 justify-center items-center group'>
        <Image src={imageSrc} alt={alt} width={72} height={72} />
        <span className='capitalize font-bold text-transparent group-hover:text-gray-400'>
        { alt }
        </span>
    </Link>
  );
}
