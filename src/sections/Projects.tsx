"use client";

import { AnimateIn } from '@/components/AnimateIn';
import { ProjectCard } from '@/components/project/projectItem';
import { ProjectOverlay } from '@/components/ProjectOverlay';
import React, { useCallback, useMemo, useState } from 'react';
import { projects } from '../../data/projects';

const sortProjects = (ps: typeof projects) =>
  [...ps].sort(
    ({ createdAt: a, priority: pA = 0 }, { createdAt: b, priority: pB = 0 }) => {
      if (pA || pB) return pB - pA;
      return b.getTime() - a.getTime();
    }
  );

const PAGE_SIZE = 4;

export const Projects: React.FC = () => {
  const [active, setActive] = useState('');
  const [showAll, setShowAll] = useState(false);

  const sorted = useMemo(() => sortProjects(projects), []);
  const visible = showAll ? sorted : sorted.slice(0, PAGE_SIZE);
  const hasMore = sorted.length > PAGE_SIZE;

  const handleSelect = useCallback((title: string) => {
    setActive(prev => prev === title ? '' : title);
  }, []);

  const activeProject = sorted.find(p => p.title === active) ?? null;

  return (
    <section id="projects">

      {/* Impact banner */}
      <div className="bg-tile-3 text-on-dark py-24 px-6 text-center">
        <p className="type-tagline text-muted-dark mb-5">Projects</p>
        <h2 className="type-hero text-on-dark max-w-2xl mx-auto leading-tight">
          What I&apos;ve built.
        </h2>
        <p className="type-lead text-muted-dark mt-6 max-w-xl mx-auto">
          Products, tools, and platforms shipped in production.
        </p>
      </div>

      {/* Card grid */}
      <div className="tile bg-parchment">
        <div className="tile-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visible.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 120}>
                <ProjectCard
                  project={p}
                  active={active === p.title}
                  onClick={() => handleSelect(p.title)}
                />
              </AnimateIn>
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(prev => !prev)}
                className="px-6 py-3 rounded-full border border-current type-label transition-opacity hover:opacity-70"
              >
                {showAll ? 'Show less' : `Show all ${sorted.length} projects`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Full-screen overlay */}
      {activeProject && (
        <ProjectOverlay
          project={activeProject}
          onClose={() => setActive('')}
        />
      )}

    </section>
  );
};
