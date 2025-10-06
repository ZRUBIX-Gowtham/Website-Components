'use client';

import React from 'react';

/* Simple inline SVG icon components (dependency-free) */
const IconDoctor = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 8h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12h6M12 15v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconApple = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M16 8c0 0 1.6-2.4.6-4.1-1-1.7-2.9-1.3-3.6-.9-.7.4-1.6 1.2-1.6 2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.2 20c-3-0.1-6-2.4-6-6 0-3.6 2.6-5 5.2-5 2.3 0 3 .8 4.8.8 2.2 0 3.8 2.2 3.8 5.2 0 3.6-2.8 4.9-7.8 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPills = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="3" y="11" width="14" height="8" rx="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 8l8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconMicroscope = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 20h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M10 13l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M14 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M7 16l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconFlask = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M8 3h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M7 6h10l-3 8a4 4 0 0 1-8 0L7 6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 14h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const IconWalking = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="12" cy="4" r="1.8" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M6 18l3-1 2-6 3 1 2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTint = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 3s5 5.5 5 9a5 5 0 1 1-10 0c0-3.5 5-9 5-9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconScissors = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M8 8l16 8M8 16l8-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const IconBone = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M4 7a2.5 2.5 0 0 1 4 0l2 2 2-2a2.5 2.5 0 1 1 4 0 2.5 2.5 0 1 1-4 0l-2 2-2-2a2.5 2.5 0 0 1-4 0z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Tiles with Lorem Ipsum content */
const tiles = [
  { icon: IconDoctor, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#2563eb' },
  { icon: IconApple, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#059669' },
  { icon: IconPills, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#7c3aed' },
  { icon: IconMicroscope, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#ea580c' },
  { icon: IconFlask, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#b45309' },
  { icon: IconWalking, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#16a34a' },
  { icon: IconTint, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#0ea5e9' },
  { icon: IconScissors, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#db2777' },
  { icon: IconBone, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', color: '#334155' },
];

export default function V169() {
  const [focusedIndex, setFocusedIndex] = React.useState(null);

  const handleQuickAccess = (idx) => {
    setFocusedIndex((prev) => (prev === idx ? null : idx));
    const el = document.querySelector(`[data-card-index="${idx}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setFocusedIndex(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    // top-level: text centered on small screens, left on large
    <section className="max-w-[1300px] mx-auto px-5 py-20 text-[#0f172a] text-center lg:text-left">
      <style jsx>{`
        .masonry { column-count: 3; column-gap: 16px; transition: filter .25s ease; }
        @media (max-width: 1100px) { .masonry { column-count: 2; } }
        @media (max-width: 900px) {
          .masonry { column-count: initial; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        }
        @media (max-width: 640px) { .masonry { grid-template-columns: 1fr; gap: 12px; } }
        .tile { break-inside: avoid; }
        .tile:nth-child(3n)   { background: linear-gradient(180deg, #ffffff, #f8fbff); }
        .tile:nth-child(3n+1) { background: linear-gradient(180deg, #ffffff, #f9f9ff); }
        .tile:nth-child(3n+2) { background: linear-gradient(180deg, #ffffff, #f9fffc); }
      `}</style>

      <header className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-2 font-bold rounded-full text-xs tracking-wide bg-[rgba(47,128,237,0.10)] text-[#1f4e9b] border border-[rgba(47,128,237,0.22)] mx-auto lg:mx-0">
          Lorem Ipsum
        </div>

        <h2
          className="font-extrabold leading-[1.08] tracking-[-0.02em] self-stretch mt-3"
          style={{
            color: '#000000',
            fontSize: 'clamp(28px, 4vw, 44px)',
            letterSpacing: '-0.02em',
          }}
        >
          Lorem Ipsum Dolor Sit Amet
        </h2>

        <p className="mt-2 text-[#4b5563] text-base leading-7 max-w-[1200px] mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>

      <div className="w-full mx-auto grid lg:grid-cols-[1fr_280px] gap-5">
        <div>
          <div className="masonry">
            {tiles.map((t, i) => {
              const Icon = t.icon;
              const isFocused = focusedIndex === i;
              const dimOthers = focusedIndex !== null && !isFocused;
              return (
                <article
                  key={i}
                  data-card-index={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => setFocusedIndex((prev) => (prev === i ? null : i))}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFocusedIndex((prev) => (prev === i ? null : i))}
                  aria-label={`Lorem Ipsum card ${i + 1}`}
                  // responsive alignment: center on mobile, left on desktop
                  className={`tile w-full mb-4 inline-block border rounded-[16px] p-4 min-h-[160px] cursor-pointer transition-transform duration-200 ease-in-out transform will-change-transform
                    border-[rgba(229,231,235,1)] shadow-[0_6px_16px_rgba(16,24,40,0.06)]
                    ${isFocused ? 'scale-[1.03] z-[20] shadow-[0_22px_48px_rgba(16,24,40,0.18)] relative' : ''}
                    ${dimOthers ? 'filter blur-[1.2px] saturate-[0.8] opacity-70' : ''}
                    text-center lg:text-left
                  `}
                >
                  <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
                    <span className="text-2xl" style={{ color: t.color }}>
                      <Icon />
                    </span>
                    <div className="text-[18px] font-extrabold">Lorem Ipsum</div>
                  </div>
                  <p className="text-[#334155] text-sm leading-6 line-clamp-4 mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="bg-white border border-[rgba(229,231,235,1)] rounded-[14px] shadow-[0_6px_16px_rgba(16,24,40,0.06)] p-3 h-max text-center lg:text-left">
          <div className="flex items-center justify-between mb-2 px-1">
            <div className="text-base font-extrabold text-[#0f172a] mx-auto lg:mx-0">Lorem Ipsum</div>
            <button
              onClick={() => setFocusedIndex(null)}
              aria-label="Clear selection"
              className={`${focusedIndex !== null ? 'inline-flex' : 'hidden'} items-center gap-2 bg-[#f1f5f9] text-[#0f172a] rounded-md px-3 py-1.5 text-sm font-bold`}
            >
              Lorem Ipsum
            </button>
          </div>

          <div className="flex flex-col gap-2 max-h-[80vh] overflow-auto pr-1">
            {tiles.map((t, i) => {
              const Icon = t.icon;
              const active = focusedIndex === i;
              return (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleQuickAccess(i)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleQuickAccess(i)}
                  aria-label={`Focus Lorem Ipsum ${i + 1}`}
                  className={`grid grid-cols-[28px_1fr] items-center gap-3 p-2.5 rounded-lg border transition-all duration-150 cursor-pointer
                    ${active ? 'bg-[#eaf1ff] border-[#c7dbff]' : 'bg-[#fafcff] border-[rgba(238,242,247,1)]'}
                    hover:bg-[#f3f7ff] hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(16,24,40,0.06)] justify-items-center lg:justify-items-start
                  `}
                >
                  <span className="text-lg" style={{ color: t.color }}>
                    <Icon />
                  </span>
                  <div className="font-bold text-sm text-[#0f172a] text-center lg:text-left">Lorem Ipsum</div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}