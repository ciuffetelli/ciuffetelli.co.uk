import Link from 'next/link';
import React from 'react';

type ButtonProps = {
    href: string;
    children: React.ReactNode;
};
export const Button:React.FC<ButtonProps> = ({ children, href }) => {
 
  return (
    <Link href={href}>
        <button className='p-4 size-24 md:size-32 bg-gray-600/50 border-2 border-gray-900/15 font-bold rounded-lg hover:scale-125 hover:shadow-2xl hover:shadow-gay-950 text-gray-400'>
            {children}
        </button>
    </Link>
  );
}
