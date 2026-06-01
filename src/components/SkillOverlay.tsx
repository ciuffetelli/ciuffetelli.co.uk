import { skillStyles } from "@/sections/Skills";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { Skill } from "../../data/skills";

type SkillOverlayProps = {
	skill: Skill;
	onClose: () => void;
};

export function SkillOverlay({ skill, onClose }: SkillOverlayProps) {
	const style = skillStyles[skill.title] ?? { from: '#333333', to: '#111111' };
	const [phase, setPhase] = useState<'entering' | 'visible' | 'leaving'>('entering');

	useEffect(() => {
		const t = setTimeout(() => setPhase('visible'), 10);
		return () => clearTimeout(t);
	}, []);

	const handleClose = () => {
		setPhase('leaving');
		setTimeout(onClose, 280);
	};

	const active = phase === 'visible';

	return (
		<div
			className="absolute inset-0 z-10 flex flex-col"
			style={{
				background: `linear-gradient(145deg, ${style.from} 0%, ${style.to} 100%)`,
				transform: active ? 'translateY(0)' : 'translateY(100%)',
				transition: 'transform 0.32s cubic-bezier(0.32, 0.72, 0, 1)',
			}}
		>
			{/* Back button */}
			<div className="flex items-center px-4 pt-5 pb-2">
				<button
					type="button"
					onClick={handleClose}
					className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
				>
					<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
						<path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<span className="text-[13px] font-medium">Back</span>
				</button>
			</div>

			{/* Content */}
			<div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 pb-8">

				{/* Large icon */}
				<div
					className="size-20 rounded-[22px] flex items-center justify-center p-3 shadow-xl"
					style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
				>
					<Image
						src={skill.icon}
						alt={skill.title}
						width={64}
						height={64}
						className={`object-contain w-full h-full${style.invert ? ' invert' : ''}`}
						style={style.scale ? { transform: `scale(${style.scale})` } : undefined}
					/>
				</div>

				{/* Title */}
				<h2 className="type-tagline text-white text-center">{skill.title}</h2>

				{/* Description */}
				<p className="text-[13px] leading-relaxed text-white/75 text-center">
					{skill.description ?? 'No description available.'}
				</p>

			</div>
		</div>
	);
}
