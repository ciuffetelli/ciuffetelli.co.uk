import { SmartMenu } from '@/components/smartMenu';
import React from 'react';
import { mainMenu } from '../../data/mainMenu';
import Image from 'next/image';

export const Contact:React.FC = () => {

	return (
		<div id='contact' data-section='contact' className='flex flex-col gap-8 md:gap-16 mb-16 p-4 md:p-8'>
			<SmartMenu menuItems={mainMenu} currentTitle='contact' />

			<p className="text-base text-muted-foreground">
  			Feel free to reach out if you’d like to collaborate, have a question, or just want to say hello!
			</p>

			<div className="flex flex-wrap justify-evenly gap-4">
				<a href='mailto:seufetelli@gmail.com' target='_blank' className='flex flex-wrap gap-2 items-center justify-center md:justify-start'>
					<Image src='/assets/images/email.png' alt='Email' width={72} height={72} />
					<span className='text-muted-foreground text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#698cfd] to-[#7fe9ff]'>seufetelli@gmail.com</span>
				</a>
				<a href='https://www.linkedin.com/in/ciuffetelli' target='_blank' className='flex flex-wrap gap-2 items-center'>
					<Image src='/assets/images/linkedin.webp' alt='LinkedIn' width={72} height={72} />
					<span className='text-muted-foreground text-3xl font-extrabold text-[#027fba] [text-shadow:_1px_1px_0_#042331]'>LinkedIn</span>
				</a>
				<a href='https://github.com/ciuffetelli' target='_blank' className='flex flex-wrap gap-2 items-center'>
					<Image src='/assets/images/github.png' alt='Github' width={72} height={72} />
					<span className='text-muted-foreground text-3xl font-extrabold text-black [text-shadow:_1px_1px_0_#313030]'>Github</span>
				</a>
			</div>
		</div>
	);
}
