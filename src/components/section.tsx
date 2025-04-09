import React from 'react';
import { mainMenu } from '../../data/mainMenu';
import { SmartMenu } from './smartMenu';

type SectionProps = {
    id?: string;
    smartMenu?: boolean;
    header?: React.ReactNode;
    children: React.ReactNode;
		className?: string;
};
export const Section:React.FC<SectionProps> = ({ id, smartMenu, header, children, className }) => {

  return (
    <div id={id} data-section={id} className={`p-4 md:p-8 flex flex-col gap-8 md:gap-16 min-h-screen ${className}`}>
      <div className='flex flex-wrap gap-4 items-center justify-between'>
        { smartMenu && <SmartMenu menuItems={mainMenu} currentTitle={id} /> }
        { header }
      </div>
      { children}
    </div>
  );
}
