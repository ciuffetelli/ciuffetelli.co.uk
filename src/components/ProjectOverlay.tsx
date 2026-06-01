"use client";

import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { Project } from '../../data/projects';
import { skills as skillData } from '../../data/skills';
import { sortSkills } from '../utils/sortSkills';
import { Gallery } from './gallery';

type ProjectOverlayProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ project, onClose }) => {
  const { title, icon, images = [], description, skills, url, details = {} } = project;
  const [phase, setPhase] = useState<'entering' | 'visible' | 'leaving'>('entering');

  useEffect(() => {
    const t = setTimeout(() => setPhase('visible'), 10);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setPhase('leaving');
    setTimeout(onClose, 380);
  };

  const active = phase === 'visible';

  const galleryImages = useMemo(() =>
    [icon, ...images].map(src => ({ src, alt: `${title} screenshot` })),
  [icon, images, title]);

  const technologies = useMemo(() =>
    sortSkills(
      skills
        .map(s => skillData.find(d => d.title === s))
        .filter((s): s is typeof skillData[number] => Boolean(s))
    ),
  [skills]);

  const featuresList = details['Features'] as string[] | undefined;
  const contribution = details['My Contribution'] as string[] | undefined;
  const status = details['Status'] as string | undefined;

  return (
    <div
      className="fixed inset-0 z-50 bg-canvas flex flex-col"
      style={{
        transform: active ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)',
      }}
    >
      {/* Fixed header — always visible */}
      <div className="shrink-0 h-14 -mb-14 z-50 flex items-center px-4 border-hairline">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-full pl-3 pr-4 py-2 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13px] font-medium">Close</span>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">

      {/* Hero cover image */}
      <div className="relative w-full aspect-[3/2] md:aspect-[16/7] bg-parchment shrink-0">
        <Image src={icon} alt={title} fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-[760px] mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Title + description */}
        <div className="flex flex-col gap-3">
          <h1 className="type-display text-ink">{title}</h1>
          <p className="type-body text-ink-muted">{description}</p>
        </div>

        {/* Actions row */}
        <div className="flex flex-wrap items-center gap-4">
          {url && (
            <a href={url} target="_blank" rel="noreferrer" className="btn-primary">
              Visit project ↗
            </a>
          )}
          {status && (
            <span className="type-caption text-ink-faint">{status}</span>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-3">
          <span className="type-caption text-ink-faint uppercase tracking-wider">Technologies</span>
          <div className="flex flex-wrap gap-2">
            {technologies.map(s => (
              <div key={s.title} className="flex items-center gap-1.5 bg-parchment border border-hairline rounded-lg px-2.5 py-1.5">
                <Image src={s.icon} alt={s.title} width={14} height={14} className="object-contain" />
                <span className="type-caption text-ink-muted">{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {images.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="type-caption text-ink-faint uppercase tracking-wider">Screenshots</span>
            <Gallery images={galleryImages} length={9} />
          </div>
        )}

        {/* Features */}
        {featuresList && (
          <div className="flex flex-col gap-3">
            <span className="type-caption text-ink-faint uppercase tracking-wider">Features</span>
            <ul className="flex flex-col gap-2">
              {featuresList.map(f => (
                <li key={f} className="type-body text-ink-muted">{f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* My Contribution */}
        {contribution && (
          <div className="flex flex-col gap-3">
            <span className="type-caption text-ink-faint uppercase tracking-wider">My Contribution</span>
            <ul className="flex flex-col gap-2">
              {contribution.map(c => (
                <li key={c} className="type-body text-ink-muted flex gap-2">
                  <span className="text-primary shrink-0">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
      </div>
    </div>
  );
};
