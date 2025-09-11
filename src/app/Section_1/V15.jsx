// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

const itemsRow = [
  {
    title: 'Lorem Ipsum Dolor',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    icon: 'image',
  },
  {
    title: 'Sit Amet Consectetur',
    copy:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    icon: 'lock',
  },
  {
    title: 'Adipiscing Elit',
    copy:
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.',
    icon: 'chart',
  },
  {
    title: 'Integer Molestie',
    copy:
      'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.',
    icon: 'customize',
  },
  {
    title: 'Maecenas Viverra',
    copy:
      'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh.',
    icon: 'support',
  },
  {
    title: 'Vestibulum Ante',
    copy:
      'Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Quisque ut dolor gravida, placerat libero vel, euismod.',
    icon: 'analytics',
  },
];

// Simple Icon component (SVGs)
function Icon({ name }) {
  const commonProps = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    role: 'img',
    'aria-hidden': 'true',
    focusable: 'false',
  };

  if (name === 'image') {
    return (
      <svg {...commonProps}>
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 11l3 4 4-6 3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'lock') {
    return (
      <svg {...commonProps}>
        <rect x="4" y="9" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9V7a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === 'chart') {
    return (
      <svg {...commonProps}>
        <path d="M3 17l5-7 4 5 6-9 3 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === 'customize') {
    return (
      <svg {...commonProps}>
        <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.18a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-.33-1.82L4.2 13.12a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 9.6 1.65 1.65 0 0010.82 9H11a2 2 0 114 0h.18c.3 0 .59.06.86.18a1.65 1.65 0 001 .33h0a1.65 1.65 0 001.51-1z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'support') {
    return (
      <svg {...commonProps}>
        <path d="M3 18v-1a9 9 0 0118 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 18v-3a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v.5a1.5 1.5 0 003 0V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === 'analytics') {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="11" width="3.5" height="7" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
        <rect x="10.25" y="7" width="3.5" height="11" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
        <rect x="17" y="3" width="3.5" height="15" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 21h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  // fallback to chart if unknown
  return (
    <svg {...commonProps}>
      <path d="M3 17l5-7 4 5 6-9 3 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 21h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function V15() {
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [hoverEnabled, setHoverEnabled] = useState(true);

  // use the original items (no duplication unless you want it)
  const all = [...itemsRow];

  // base article classes (we'll add hover classes conditionally)
  const baseCardClasses =
    'relative flex flex-col gap-4 p-6 rounded-lg bg-white shadow border border-slate-100 min-h-[200px] transform';
  const hoverCardModifiers = 'group hover:shadow-2xl hover:-translate-y-2 transition-transform duration-200';

  // icon wrapper base + hover modifiers
  const iconBase = 'inline-grid place-items-center rounded-lg w-14 h-14 text-indigo-600 bg-indigo-50 border border-indigo-100 transition-transform duration-200';
  const iconHoverModifiers = 'group-hover:-rotate-6 group-hover:scale-105 origin-center';

  return (
    <>
      <Head>
        <title>Features — Modern UI</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </Head>

      <main className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="container mx-auto max-w-[1200px]">
          <header className="mb-8 text-center">
            <h1 id="features-heading" className="text-3xl font-semibold text-slate-900">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="mx-0  text-slate-600 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </header>

          {/* Controls: View on left, Hover toggle on right (replaces "6 features") */}
          <div className="flex items-center mb-6 gap-4 justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-700 font-medium">View</span>

              <div className="inline-flex rounded-md bg-white shadow-sm ring-1 ring-slate-200">
                <button
                  onClick={() => setView('grid')}
                  aria-pressed={view === 'grid'}
                  className={`px-3 py-2 text-sm font-medium ${view === 'grid' ? 'text-white bg-indigo-600 rounded-md' : 'text-slate-700'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setView('list')}
                  aria-pressed={view === 'list'}
                  className={`px-3 py-2 text-sm font-medium ${view === 'list' ? 'text-white bg-indigo-600 rounded-md' : 'text-slate-700'}`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Right: Hover On / Off — styled like the Grid/List control */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-700 font-medium">Hover</span>

              <div className="inline-flex rounded-md bg-white shadow-sm ring-1 ring-slate-200">
                <button
                  onClick={() => setHoverEnabled(true)}
                  aria-pressed={hoverEnabled === true}
                  className={`px-3 py-2 text-sm font-medium ${hoverEnabled ? 'text-white bg-indigo-600 rounded-l-md' : 'text-slate-700'}`}
                >
                  On
                </button>
                <button
                  onClick={() => setHoverEnabled(false)}
                  aria-pressed={hoverEnabled === false}
                  className={`px-3 py-2 text-sm font-medium ${hoverEnabled ? 'text-slate-700' : 'text-white bg-indigo-600 rounded-r-md'}`}
                >
                  Off
                </button>
              </div>
            </div>
          </div>

          {/* Feature container */}
          {view === 'grid' ? (
            <section
              className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
              role="list"
              aria-label="Feature grid"
            >
              {all.map((it, idx) => (
                <article
                  className={`${baseCardClasses} ${hoverEnabled ? hoverCardModifiers : ''}`}
                  key={idx}
                  role="listitem"
                  aria-label={it.title}
                  tabIndex={0}
                  title={it.title}
                >
                  {/* make the main row expand so footer sits at bottom */}
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`${iconBase} ${hoverEnabled ? iconHoverModifiers : ''}`}
                      aria-hidden="true"
                    >
                      <Icon name={it.icon} />
                    </div>

                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                      <p className="text-sm text-slate-600 mt-2">{it.copy}</p>
                    </div>
                  </div>

                  {/* footer fixed to bottom of card (because card is flex-col and main row is flex-1) */}
                  <div className="mt-3 text-indigo-600 font-semibold text-sm flex items-center cursor-pointer justify-end">
                    <span className="inline-flex items-center gap-2">Learn more <span aria-hidden>→</span></span>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <section className="flex flex-col bg-transparent" role="list" aria-label="Feature list">
              {all.map((it, idx) => (
                <article
                  key={idx}
                  role="listitem"
                  aria-label={it.title}
                  tabIndex={0}
                  className={`${baseCardClasses.replace('min-h-[200px]', 'min-h-[110px]')} ${hoverEnabled ? hoverCardModifiers : ''} mb-4`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${iconBase} ${hoverEnabled ? iconHoverModifiers : ''}`} aria-hidden="true">
                      <Icon name={it.icon} />
                    </div>

                    {/* content becomes a column that pushes footer to bottom */}
                    <div className="flex-1 flex flex-col justify-between text-left min-h-[110px]">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                        <p className="text-sm text-slate-600 mt-2">{it.copy}</p>
                      </div>

                      <div className="text-indigo-600 cursor-pointer font-medium text-sm inline-flex items-center gap-2 mt-4 self-end">
                        <span>Learn more</span>
                        <span aria-hidden>→</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </main>
    </>
  );
}