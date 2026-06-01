import React from 'react';
import { solutions, Solution } from '../../data/solutions';
import { AnimateIn } from '@/components/AnimateIn';

const icons: Record<string, React.ReactNode> = {
  ai: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  performance: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3L4 9v7c0 6.6 5.1 12.8 12 14.3C23 28.8 28 22.6 28 16V9L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  testing: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M12 4v10l-6 12h20L20 14V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="22" r="1.5" fill="currentColor" />
    </svg>
  ),
  fullstack: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="24" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="15" width="24" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="8.5" r="1.5" fill="currentColor" />
      <circle cx="9" cy="18.5" r="1.5" fill="currentColor" />
    </svg>
  ),
};

function SolutionCard({ id, title, description }: Solution) {
  return (
    <div className="flex flex-col gap-5 bg-white rounded-2xl p-8 shadow-sm border border-hairline transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      <div className="text-primary">{icons[id]}</div>
      <h3 className="type-tagline text-ink">{title}</h3>
      <p className="type-body text-ink-muted">{description}</p>
    </div>
  );
}

export const Solutions: React.FC = () => {
  return (
    <section id="solutions">

      {/* Impact banner */}
      <div className="bg-tile-1 text-on-dark py-24 px-6 text-center">
        <p className="type-tagline text-muted-dark mb-5">Solutions</p>
        <h2 className="type-hero text-on-dark max-w-2xl mx-auto leading-tight">
          Built to last.<br />Shipped to perform.
        </h2>
        <p className="type-lead text-muted-dark mt-6 max-w-xl mx-auto">
          Engineering decisions that improved performance, quality, and delivery across production applications.
        </p>
      </div>

      {/* Cards */}
      <div className="tile bg-parchment">
        <div className="tile-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <AnimateIn key={s.id} delay={i * 100}>
                <SolutionCard {...s} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
