'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Single-file combined implementation.
 * - Exports default V90
 * - All visible content replaced with Lorem Ipsum
 * - Uses inline SVG icons (no external icon libs) to avoid hydration issues
 * - Keeps deterministic rendering (no Math.random / Date usage during render)
 */

/* ---------- Dummy departments data (all Lorem Ipsum) ---------- */
const departmentsData = [
  {
    id: 1,
    name: 'Lorem 1',
    title: 'Lorem Ipsum One',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'
    ],
    buttonText: 'Lorem More',
    imageUrl: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg',
    imageAlt: 'Lorem image 1',
    keywords: [
      { iconType: 'pulse', title: 'Lorem ipsum dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { iconType: 'treatment', title: 'Sit amet consectetur', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { iconType: 'support', title: 'Adipiscing elit', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { iconType: 'check', title: 'Dolore magna', description: 'Nisi ut aliquip ex ea commodo consequat.' }
    ]
  },
  {
    id: 2,
    name: 'Lorem 2',
    title: 'Lorem Ipsum Two',
    paragraphs: [
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    ],
    buttonText: 'Lorem More',
    imageUrl: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg',
    imageAlt: 'Lorem image 2',
    keywords: [
      { iconType: 'stone', title: 'Lorem treatment', description: 'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.' },
      { iconType: 'male', title: 'Ipsum care', description: 'Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent.' },
      { iconType: 'toilet', title: 'Dolor sit', description: 'In condimentum facilisis porta.' },
      { iconType: 'health', title: 'Amet consectetur', description: 'Sed nec diam eu diam mattis viverra.' }
    ]
  },
  {
    id: 3,
    name: 'Lorem 3',
    title: 'Lorem Ipsum Three',
    paragraphs: [
      'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.'
    ],
    buttonText: 'Lorem More',
    imageUrl: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg',
    imageAlt: 'Lorem image 3',
    keywords: [
      { iconType: 'dialysis', title: 'Lorem option', description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.' },
      { iconType: 'home', title: 'Sit amet', description: 'Nam eget dui. Etiam rhoncus.' },
      { iconType: 'ambulance', title: 'Consectetur', description: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam.' },
      { iconType: 'notes', title: 'Adipiscing', description: 'Donec sodales sagittis magna.' }
    ]
  }
];

/* ---------- Inline SVG icons to avoid external font libs ---------- */
const Icon = ({ type, className = 'w-5 h-5' }) => {
  switch (type) {
    case 'pulse':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M2 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'treatment':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'support':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2v6M12 22v-6M4.2 6.2l4.2 4.2M19.8 17.8l-4.2-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'check':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'stone':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case 'male':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 21v-2a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'toilet':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="6" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 15v2a4 4 0 0 0 8 0v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'health':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 21s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 11h4M12 9v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'dialysis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M7 7v-2M17 7v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'home':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'ambulance':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="13" height="8" rx="1" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M16 11h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="18" r="1" stroke="currentColor" strokeWidth="1.6"/>
          <circle cx="17" cy="18" r="1" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      );
    case 'notes':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8 7h8M8 12h8M8 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
};

/* ---------- Department Menu ---------- */
const DepartmentMenu = ({ selectedDepartment, onDepartmentClick }) => {
  return (
    <div
      className="
        department-menu
        w-full md:w-[360px] lg:w-[380px]
        bg-white
        md:sticky md:top-25 md:self-start
        md:max-h-[calc(100vh-80px)]
        md:overflow-y-auto
        rounded-2xl
        shadow
        p-4 sm:p-5 lg:p-6
        flex flex-col items-stretch
        border border-slate-100
      "
      style={{ scrollbarWidth: 'thin', scrollbarColor: '#2563eb #f1f5f9' }}
    >
      <h3 className="text-2xl font-semibold text-slate-800 px-2 pb-3 border-b border-slate-100 mb-4">
        Lorem
      </h3>

      <ul className="space-y-2">
        {departmentsData.map((department) => {
          const active = selectedDepartment && selectedDepartment.id === department.id;
          return (
            <li key={department.id}>
              <button
                onClick={() => onDepartmentClick(department.name)}
                className={[
                  "group relative w-full text-left",
                  "px-4 py-3 md:px-4 md:py-3.5",
                  "rounded-xl border transition-all duration-200 ease-out",
                  "flex items-center gap-3",
                  active
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md ring-2 ring-blue-300/60 scale-[1.01]"
                    : "bg-slate-50 hover:bg-white text-slate-700 border-slate-200 hover:border-blue-200 hover:shadow-sm"
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-block w-2.5 h-2.5 rounded-full",
                    active ? "bg-white shadow-sm" : "bg-blue-500/20 group-hover:bg-blue-500/30"
                  ].join(" ")}
                />
                <span className="text-[1.05rem] md:text-[1.08rem] font-medium tracking-tight">
                  {department.name}
                </span>
                {active && (
                  <span className="ml-auto text-xs font-semibold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-md">
                    Active
                  </span>
                )}
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 [background:radial-gradient(120px_60px_at_var(--x,20%)_0%,rgba(255,255,255,0.25),transparent_60%)]" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/* ---------- Department Treatments (keywords) ---------- */
function DepartmentTreatments({ keywords = [] }) {
  if (!keywords || keywords.length === 0) return null;

  const palettes = [
    { accent: 'from-sky-500 via-sky-600 to-sky-500', glow1: 'bg-sky-200/30', glow2: 'bg-sky-100/25', chipA: 'from-sky-500/12 to-sky-400/10', chipBorder: 'border-sky-300/40', chipGlow: 'shadow-[0_10px_35px_-14px_rgba(14,165,233,0.45)]' },
    { accent: 'from-violet-500 via-violet-600 to-violet-500', glow1: 'bg-violet-200/30', glow2: 'bg-violet-100/25', chipA: 'from-violet-500/12 to-violet-400/10', chipBorder: 'border-violet-300/40', chipGlow: 'shadow-[0_10px_35px_-14px_rgba(139,92,246,0.45)]' },
    { accent: 'from-emerald-500 via-emerald-600 to-emerald-500', glow1: 'bg-emerald-200/30', glow2: 'bg-emerald-100/25', chipA: 'from-emerald-500/12 to-emerald-400/10', chipBorder: 'border-emerald-300/40', chipGlow: 'shadow-[0_10px_35px_-14px_rgba(16,185,129,0.45)]' },
    { accent: 'from-rose-500 via-rose-600 to-rose-500', glow1: 'bg-rose-200/30', glow2: 'bg-rose-100/25', chipA: 'from-rose-500/12 to-rose-400/10', chipBorder: 'border-rose-300/40', chipGlow: 'shadow-[0_10px_35px_-14px_rgba(244,63,94,0.45)]' }
  ];

  const statSets = [
    [ { label: 'Care', value: 'Lorem' }, { label: 'Team', value: 'Ipsum' }, { label: 'Tech', value: 'Dolor' } ],
    [ { label: 'Safety', value: 'Sit' }, { label: 'Access', value: 'Amet' }, { label: 'Outcomes', value: 'Consectetur' } ],
    [ { label: 'Approach', value: 'Adipiscing' }, { label: 'Support', value: 'Elit' }, { label: 'Methods', value: 'Nibh' } ],
    [ { label: 'Recovery', value: 'Faster' }, { label: 'Comfort', value: 'Enhanced' }, { label: 'Quality', value: 'Assured' } ]
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="inline-block text-lg sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Lorem Specialize
          </h2>
          <div className="mt-4 flex justify-center">
            <span className="relative h-1 w-28 sm:w-32 rounded-full overflow-hidden bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500">
              <span className="absolute inset-0 rounded-full blur-md bg-sky-500/40" />
            </span>
          </div>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do eiusmod tempor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {keywords.map((item, idx) => {
            const palette = palettes[idx % palettes.length];
            const stats = statSets[idx % statSets.length];

            return (
              <article
                key={idx}
                className={[
                  'group relative overflow-hidden rounded-2xl',
                  'border border-slate-200/60',
                  'bg-white/55 backdrop-blur-xl',
                  'shadow-[0_10px_40px_-18px_rgba(2,6,23,0.28)]',
                  'transition-all duration-500 ease-out will-change-transform',
                  'hover:-translate-y-2 hover:shadow-[0_28px_80px_-24px_rgba(2,6,23,0.38)]',
                ].join(' ')}
              >
                <div className="absolute inset-x-0 top-0 h-1 overflow-hidden">
                  <div className={`h-full w-full bg-gradient-to-r ${palette.accent}`} />
                </div>

                <div className={`pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full ${palette.glow1} blur-3xl`} />
                <div className={`pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full ${palette.glow2} blur-3xl`} />

                <div className="relative z-[1] flex h-full flex-col p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="relative shrink-0">
                      <div
                        className={[
                          'flex h-14 w-14 items-center justify-center rounded-2xl',
                          `bg-gradient-to-br ${palette.bgFrom || ''} ${palette.bgTo || ''}`,
                          'text-slate-900 shadow-sm',
                          'ring-1 ring-inset ring-slate-200',
                          'transition-transform duration-300 group-hover:scale-105',
                        ].join(' ')}
                        aria-hidden
                      >
                        <Icon type={item.iconType} className="w-6 h-6" />
                      </div>
                      <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-20" />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-2xl font-extrabold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <div className="mt-2 h-1 w-16 rounded-full overflow-hidden">
                        <span className={`block h-full w-full bg-gradient-to-r ${palette.accent}`} />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-lg leading-7 text-slate-700">
                    {item.description}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className={[
                          'relative rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 text-center border bg-white/35 backdrop-blur-xl transition-all duration-400 ease-out min-h-[50px] sm:min-h-[56px] flex items-center justify-center',
                          palette.chipGlow || ''
                        ].join(' ')}
                      >
                        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                          <div className={`absolute inset-0 bg-gradient-to-br ${palette.chipA || ''}`} />
                          <div className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
                        </div>

                        <div className="relative flex flex-col items-center justify-center leading-tight text-center">
                          <p className="uppercase tracking-wide text-slate-600/85 text-[9px] sm:text-[11px]">
                            {stat.label}
                          </p>
                          <p className="font-semibold text-slate-900 text-[10px] sm:text-sm whitespace-normal break-words">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-full bg-gradient-to-t from-black/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Department Details ---------- */
const DepartmentDetails = ({ content, className = '' }) => {
  if (!content) {
    return (
      <section className="w-full py-10 text-center text-gray-600">
        Lorem ipsum dolor sit amet.
      </section>
    );
  }

  const isRight = content?.isReversed || content?.position === 'right';

  return (
    <section
      className={[
        'relative w-full',
        'px-4 sm:px-6 lg:px-8',
        'py-10 sm:py-12 lg:py-16',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" />

      <div
        className={[
          'mx-auto max-w-7xl',
          'grid items-center gap-10 md:gap-12',
          'grid-cols-1 md:grid-cols-2',
          isRight ? 'md:[&>div:first-child]:order-2' : '',
        ].join(' ')}
      >
        <div className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
          <Image
            src={content.imageUrl}
            alt={content.imageAlt || content.title || 'Lorem image'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
            Lorem Highlight
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            {content.title}
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {(content.paragraphs || []).map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
              <p className="text-sm text-slate-500">Lorem</p>
              <p className="font-semibold text-slate-800">Ipsum</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
              <p className="text-sm text-slate-500">Dolor</p>
              <p className="font-semibold text-slate-800">Sit Amet</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
              <p className="text-sm text-slate-500">Consectetur</p>
              <p className="font-semibold text-slate-800">Adipiscing</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1280px) {
          h2 {
            font-size: 2.4rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
};

/* ---------- Main Viewer ( exported via V90 ) ---------- */
function V192() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    // Default to first department on mount
    setSelectedDepartment(departmentsData[0]);
  }, []);

  const handleDepartmentClick = (departmentName) => {
    const foundDepartment = departmentsData.find((dept) => dept.name === departmentName);
    if (foundDepartment) setSelectedDepartment(foundDepartment);
  };

  if (!selectedDepartment) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center text-slate-600">
        Lorem ipsum loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <div
        className="
          department-viewer-container
          container mx-auto
          px-4 sm:px-6 lg:px-8
          py-6 lg:py-8
          flex flex-col md:flex-row
          gap-5 lg:gap-8
          min-h-screen
        "
      >
        <DepartmentMenu
          selectedDepartment={selectedDepartment}
          onDepartmentClick={handleDepartmentClick}
        />

        <div className="department-content-area flex-1 flex flex-col gap-5 lg:gap-8">
          <div className="bg-white rounded-2xl shadow border border-slate-100 p-2 sm:p-6 lg:p-8">
            <DepartmentDetails content={selectedDepartment} />
          </div>

          {selectedDepartment && selectedDepartment.keywords && (
            <div className="bg-white rounded-2xl shadow border border-slate-100 p-4 sm:p-6 lg:p-8">
              <DepartmentTreatments keywords={selectedDepartment.keywords} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default V192;