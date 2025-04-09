import React, { useState } from 'react';

type ModalProps = {
	trigger: React.ReactNode;
	children: React.ReactNode;
	classNames?: {
		trigger?: string;
	}
};
export const Modal:React.FC<ModalProps> = ({ trigger, children, classNames }) => {

	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
		<button type='button' className={`cursor-pointer ${classNames?.trigger}`} onClick={() => setIsVisible(true)}>
			{trigger}
		</button>
		{isVisible && (
			<div className='fixed inset-0 flex items-center justify-center bg-black/50' onClick={() => setIsVisible(false)}>
				<div className='background rounded-lg p-4 shadow-xl shadow-black/25' onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		)}
		</>
	);
}
