"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { mainMenu } from '../../data/mainMenu';

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-11 bg-black/60 backdrop-blur-md backdrop-saturate-150 border-b border-white/10 z-50">
      <div className="max-w-[980px] mx-auto h-full flex items-center justify-between px-6">
        <Link
          href="#about"
          className="type-nav text-white/80 hover:text-white transition-colors"
          onClick={() => setOpen(false)}
        >
          Daniel C.
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {mainMenu.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="type-nav text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white/80 hover:text-white p-1 -mr-1 transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
            {open ? (
              <path d="M1 1L17 11M17 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-11 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="max-w-[980px] mx-auto py-2">
            {mainMenu.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block type-body text-white/80 hover:text-white px-6 py-3 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
