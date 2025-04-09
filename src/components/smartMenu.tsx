import React, { useMemo } from 'react';
import { MainMenuItem } from '../../data/mainMenu';
import Link from 'next/link';

type SmartMenuProps = {
	menuItems: MainMenuItem[];
	currentTitle?: string;
};
export const SmartMenu:React.FC<SmartMenuProps> = ({ menuItems, currentTitle = '' }) => {

	const smartMenuItems = useMemo(() => {
    const index = menuItems.findIndex(item => item.href.replace('#', '') === currentTitle);

    const previous = menuItems[index - 1];
    const current = menuItems[index];
    const next = menuItems[index + 1];

    return {
      previous,
      current,
      next
    }
  }, [currentTitle, menuItems]);

	return (
		<div className='flex gap-1 flex-col max-w-fit'>
			{ smartMenuItems.previous && (
				<Link href={smartMenuItems.previous.href} className='text-gray-500 hover:text-gray-900'>
					{smartMenuItems.previous.name}
				</Link>
			)}
			{ smartMenuItems.current && (
				<h2 className='title'>
					{smartMenuItems.current.name}
				</h2>
			)}
			{ smartMenuItems.next && (
				<Link href={smartMenuItems.next.href} className='text-gray-500 hover:text-gray-900'>
					{smartMenuItems.next.name}
				</Link>
			)}
		</div>
	);
}
