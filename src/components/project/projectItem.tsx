import React from 'react';
import Image from 'next/image';
import { Project } from '../../../data/projects';
import { skills as skillData } from '../../../data/skills';

type ProjectCardProps = {
  project: Project;
  active: boolean;
  onClick: () => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, active, onClick }) => {
  const { title, icon, description, skills, url } = project;

  const skillIcons = skills
    .slice(0, 7)
    .map(s => skillData.find(d => d.title === s))
    .filter(Boolean);

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${
        active
          ? 'border-primary shadow-lg ring-2 ring-primary/20'
          : 'border-hairline hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      {/* Cover image */}
      <div className="relative w-full aspect-[3/2] bg-parchment">
        <Image src={icon} alt={title} fill className="object-cover object-top" />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="type-tagline text-ink">{title}</h3>
        <p className="type-body text-ink-muted line-clamp-3">{description}</p>

        {/* Skill icons */}
        <div className="flex items-center gap-2 flex-wrap mt-1">
          {skillIcons.map(s => s && (
            <Image
              key={s.title}
              src={s.icon}
              alt={s.title}
              width={18}
              height={18}
              className="object-contain opacity-60"
              title={s.title}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-2">
          <span className="type-caption text-primary font-medium">
            Explore project ↗
          </span>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="type-caption text-ink-faint hover:text-primary transition-colors"
            >
              Visit site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
