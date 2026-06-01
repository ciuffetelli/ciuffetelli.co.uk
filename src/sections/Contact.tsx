import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-tile-1 text-on-dark py-32 px-6 text-center">

      <div className="max-w-[680px] mx-auto flex flex-col items-center gap-8">

        <p className="type-tagline text-muted-dark">Contact</p>

        <h2 className="type-hero text-on-dark leading-tight">
          Let&apos;s work together.
        </h2>

        <p className="type-lead text-muted-dark max-w-md">
          Open to new opportunities, collaborations, and interesting conversations. The fastest way to reach me is LinkedIn.
        </p>

        {/* Primary CTA */}
        <a
          href="https://www.linkedin.com/messaging/compose/?to=ciuffetelli"
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-2"
        >
          Message me on LinkedIn
        </a>

        {/* Secondary links */}
        <div className="flex items-center gap-6 mt-2">
          <a
            href="https://www.linkedin.com/in/ciuffetelli"
            target="_blank"
            rel="noreferrer"
            className="type-caption text-muted-dark hover:text-on-dark transition-colors"
          >
            View profile ↗
          </a>
          <span className="text-muted-dark/30">|</span>
          <a
            href="https://github.com/ciuffetelli"
            target="_blank"
            rel="noreferrer"
            className="type-caption text-muted-dark hover:text-on-dark transition-colors"
          >
            GitHub ↗
          </a>
        </div>

      </div>

      {/* Footer */}
      <p className="type-caption text-muted-dark/40 mt-24">
        © {new Date().getFullYear()} Daniel Ciuffetelli
      </p>

    </section>
  );
};
