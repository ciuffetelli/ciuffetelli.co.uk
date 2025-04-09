import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

type GalleryProps = {
	images: {
		src: string;
		alt: string;
	}[];
	length?: number;
};
export const Gallery:React.FC<GalleryProps> = ({ images, length = 10 }) => {

	const [currentIndex, setCurrentIndex] = useState(-1);

	const handleNext = useCallback(() => {
		const nextIndex = (currentIndex + 1) % images.length;
		setCurrentIndex(nextIndex);
	}, [currentIndex, images.length]);

	const handlePrev = useCallback(() => {
		const prevIndex = (currentIndex - 1 + images.length) % images.length;
		setCurrentIndex(prevIndex);
	}, [currentIndex, images.length]);

	const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true
  });

	return (
		<>
		<div className='flex flex-wrap h-fit gap-4'>
			{ images
					.slice(0, length)
					.map(({ src, alt }, index) => (
					<button type='button' key={src} className={`relative size-32 md:size-${ images.length <= 4 ? '42' : '32'} rounded-xl overflow-hidden cursor-pointer`} onClick={() => setCurrentIndex(index)}>
							<Image src={src} alt={alt} fill className='object-cover' />
					</button>
			))}
		</div>
		{ currentIndex !== -1 && (
			<div className='fixed inset-0 flex items-center justify-center bg-black/50 group' onClick={() => setCurrentIndex(-1)}>
				<div className='background rounded-lg p-4 shadow-xl shadow-black/25' onClick={(e) => e.stopPropagation()} {...swipeHandlers}>
					<button type='button' className='absolute top-4 right-4' onClick={() => setCurrentIndex(-1)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<button onClick={handlePrev} className='hidden group-hover:flex absolute left-4 top-1/2 size-8 justify-center items-center -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full cursor-pointer'>
          	←
        	</button>
					<button onClick={handleNext} className='hidden group-hover:flex absolute right-4 top-1/2 size-8 justify-center items-center -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full cursor-pointer'>
          	→
        	</button>
					<Image src={images[currentIndex].src} alt={images[currentIndex].alt} width={1000} height={1000} className='rounded-lg' />
				</div>
			</div>
		)}
		</>
	);
}
