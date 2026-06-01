"use client";

import Image from 'next/image';
import React, { useMemo } from 'react';
import { Project } from '../../../data/projects';
import { skills as skillData } from '../../../data/skills';
import { sortSkills } from '../../utils/sortSkills';
import { Gallery } from '../gallery';

type ProjectDetailProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const { title, icon, images = [], description, skills, url, details = {} } = project;

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
    <div id="project-detail" className="tile bg-pearl border-t border-hairline">
      <div className="tile-inner">

        {/* Back */}
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 type-caption text-ink-faint hover:text-ink transition-colors mb-10"
        >
          ← Back to projects
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Gallery */}
          <Gallery images={galleryImages} length={9} />

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="type-display text-ink">{title}</h2>
            <p className="type-body text-ink-muted">{description}</p>

            {status && (
              <div className="flex items-center gap-2">
                <span className="type-caption text-ink-faint">Status</span>
                <span className="type-caption text-ink font-medium">{status}</span>
              </div>
            )}

            {url && (
              <a href={url} target="_blank" rel="noreferrer" className="btn-ghost self-start">
                Visit project ↗
              </a>
            )}

            {/* Technologies */}
            <div className="flex flex-col gap-3">
              <span className="type-caption text-ink-faint uppercase tracking-wider">Technologies</span>
              <div className="flex flex-wrap gap-2">
                {technologies.map(s => (
                  <div key={s.title} className="flex items-center gap-1.5 bg-white border border-hairline rounded-lg px-2.5 py-1.5">
                    <Image src={s.icon} alt={s.title} width={14} height={14} className="object-contain" />
                    <span className="type-caption text-ink-muted">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>

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
    </div>
  );
};
