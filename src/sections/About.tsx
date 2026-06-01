import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hero } from '../../data/hero';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      data-section="about"
      className="tile text-on-dark overflow-x-hidden"
      style={{ background: 'linear-gradient(150deg, #0d1117 0%, #161b22 55%, #1c1f26 100%)' }}
    >
      {/*
        To add a full-bleed background photo in the future:
        set this section to `relative` and add:
        <Image src="..." fill className="object-cover object-center opacity-30" alt="" />
      */}
      <div className="max-w-[980px] mx-auto w-full px-6">
        <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center gap-12 md:gap-16">

          {/* Text column */}
          <div className="flex-1 min-w-0 w-full flex flex-col gap-6 text-center md:text-left">
            <p className="type-tagline text-muted-dark">{hero.name}</p>
            <h1 className="type-hero text-on-dark">{hero.role}</h1>
            <p className="type-lead text-muted-dark">{hero.tagline}</p>
            <p className="type-body text-muted-dark">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
              {hero.ctas.map(cta => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={cta.variant === 'primary' ? 'btn-primary' : 'btn-ghost-dark'}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="shrink-0 flex justify-center">
            <div
              className="relative size-52 md:size-72 rounded-full overflow-hidden"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0' }}
            >
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
