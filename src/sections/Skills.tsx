import Image from 'next/image';
import React from 'react';
import { skills } from '../../data/skills';

const skillStyles: Record<string, { from: string; to: string; invert?: boolean; scale?: number }> = {
  'Javascript':   { from: '#f0c419', to: '#c49800' },
  'Typescript':   { from: '#3178c6', to: '#1e5099' },
  'React':        { from: '#00c2e0', to: '#0093aa' },
  'Next.js':      { from: '#2d2d2d', to: '#111111', invert: true },
  'CSS':          { from: '#2965f1', to: '#1a3fba' },
  'Tailwind CSS': { from: '#0e7490', to: '#0c4a6e' },
  'PHP':          { from: '#8892be', to: '#4f4f93' },
  'Laravel':      { from: '#ff2d20', to: '#b51a14' },
  'Prisma ORM':   { from: '#5a67d8', to: '#3b4298' },
  'Jest':         { from: '#bf3d5e', to: '#8c1a35' },
  'Cypress':      { from: '#3d9970', to: '#1a6644' },
  'Docker':       { from: '#1e3a5f', to: '#0a1628' },
  'Github':       { from: '#6e5494', to: '#4a3062' },
  'Vercel':       { from: '#444444', to: '#1a1a1a', invert: true },
  'Storybook':    { from: '#ff4785', to: '#cc1458' },
  'Redux':        { from: '#3d1c8c', to: '#1e0e57', scale: 1.5 },
  'Azure DevOps': { from: '#0078d4', to: '#004f8c', scale: 2 },
  'React Query':  { from: '#ff4154', to: '#cc1428' },
  'Zustand':      { from: '#8b80c4', to: '#584fa0', scale: 2 },
  'Vite':         { from: '#9a6cff', to: '#6e28d9' },
  'Node.js':      { from: '#5fa04e', to: '#3a7a2d' },
  'React Native': { from: '#4338ca', to: '#312e81', scale: 1.8 },
};

function AppIcon({ title, icon }: { title: string; icon: string }) {
  const style = skillStyles[title] ?? { from: '#555555', to: '#333333' };
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="size-14 rounded-[16px] overflow-hidden flex items-center justify-center p-1 shadow-sm"
        style={{ background: `linear-gradient(145deg, ${style.from}, ${style.to})` }}
      >
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className={`object-contain size-8 ${style.invert ? ' invert' : ''}`}
          style={style.scale ? { transform: `scale(${style.scale})` } : undefined}
        />
      </div>
      <span className="text-white/90 text-[10px] font-medium text-center leading-tight drop-shadow w-14 truncate">
        {title}
      </span>
    </div>
  );
}

export const Skills: React.FC = () => {
  return (
    <section id="skills">

      {/* Impact banner */}
      <div className="bg-tile-2 text-on-dark py-24 px-6 text-center">
        <p className="type-tagline text-muted-dark mb-5">Skills</p>
        <h2 className="type-hero text-on-dark max-w-2xl mx-auto leading-tight">
          The tools I build with.
        </h2>
        <p className="type-lead text-muted-dark mt-6 max-w-xl mx-auto">
          22 technologies across frontend, mobile, backend, testing, and DevOps.
        </p>
      </div>

      {/* iPhone mockup */}
      <div className="tile bg-canvas">
        <div className="tile-inner flex justify-center">

          {/* iPhone frame */}
          <div className="relative bg-[#1c1c1e] rounded-[52px] p-[10px] w-full max-w-[340px]"
               style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06)' }}>

            {/* Side button */}
            <div className="absolute -right-[3px] top-32 w-[3px] h-14 bg-[#3a3a3c] rounded-r-full" />
            {/* Silent switch */}
            <div className="absolute -left-[3px] top-16 w-[3px] h-6 bg-[#3a3a3c] rounded-l-full" />
            {/* Volume buttons */}
            <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-[#3a3a3c] rounded-l-full" />
            <div className="absolute -left-[3px] top-40 w-[3px] h-8 bg-[#3a3a3c] rounded-l-full" />

            {/* Screen */}
            <div
              className="rounded-[44px] overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #1b1b4e 0%, #0d1b4b 50%, #0e2820 100%)' }}
            >
              {/* Dynamic Island */}
              <div className="flex justify-center pt-5 pb-4">
                <div className="w-24 h-7 rounded-full bg-black" />
              </div>

              {/* Icon grid */}
              <div className="flex flex-wrap gap-x-3 gap-y-6 px-6 pt-2 pb-8 justify-center max-h-[480px] md:max-h-[580px] overflow-x-auto">
                {skills.toSorted((a,b) => {
									return a.title > b.title ? 1 : -1
								}).map(s => (
                  <AppIcon key={s.title} title={s.title} icon={s.icon} />
                ))}
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pb-4 pt-1">
                <div className="w-28 h-1 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
