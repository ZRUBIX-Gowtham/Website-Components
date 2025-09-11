// pages/index.js
import Head from 'next/head';

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

  // existing chart / mountain
  if (name === 'chart') {
    return (
      <svg {...commonProps}>
        <path d="M3 17l5-7 4 5 6-9 3 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  // customize -> gear / settings (simple gear)
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

  // support -> headset / life-ring style
  if (name === 'support') {
    return (
      <svg {...commonProps}>
        <path d="M3 18v-1a9 9 0 0118 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 18v-3a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v.5a1.5 1.5 0 003 0V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // analytics -> ascending bar chart
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

export default function V12() {
  // duplicate to make two rows (image shows 2 rows of same trio)
  const all = [...itemsRow,];

  return (
    <>
      <Head>
        <title>Features — Modern UI</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        {/* NOTE: I removed the Google Fonts link to avoid imposing global fonts.
            Re-add font links here if you want to load them for this page. */}
      </Head>

      <main className="min-h-screen bg-white py-16 px-5">
        <div className="page relative flex items-start">
          {/* Decorative subtle background accent (keeps the same visual feel) */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed -right-32 -top-32 w-[420px] h-[420px] blur-3xl z-0"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(107,79,179,0.12), transparent 35%), radial-gradient(circle at 70% 70%, rgba(122,208,255,0.08), transparent 30%)',
            }}
          />

          <div className="container mx-auto max-w-[1200px] z-10 w-full">
            <header className="lead text-center mb-9">
              <h1 id="features-heading" className="text-[34px] leading-tight text-[#271f32]">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="lead-copy mx-auto max-w-[720px] text-[#6b6b6b] text-base leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </header>

            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 gap-x-8" role="list" aria-label="Feature list">
              {all.map((it, idx) => (
                <article
                  className="feature group relative flex flex-col gap-3 p-7 rounded-[14px] bg-white/80 backdrop-blur-md shadow-md transition-transform duration-220 ease-[cubic-bezier(.22,.9,.31,1)] hover:-translate-y-2 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6b4fb320]"
                  key={idx}
                  role="listitem"
                  aria-label={it.title}
                  tabIndex={0}
                  title={it.title}
                >
                  <div className="iconWrap flex">
                    <div
                      className="iconCircle inline-grid place-items-center rounded-lg w-16 h-16 text-[#6b4fb3] shadow-sm bg-gradient-to-br from-[#6b4fb3]/10 to-[#7ad0ff]/6 transition-transform duration-260 group-hover:-translate-y-1.5 group-hover:-rotate-6 group-focus:-translate-y-1.5 group-focus:-rotate-6"
                      aria-hidden="true"
                    >
                      <Icon name={it.icon} />
                    </div>
                  </div>

                  <h3 className="title text-[22px] leading-[1.08] text-[#231a2b]">{it.title}</h3>
                  <p className="copy text-sm text-[#6b6b6b] leading-7 mb-0 flex-1">{it.copy}</p>

                  <div className="cta mt-2 inline-flex items-center justify-end gap-2 text-[#6b4fb3] font-semibold text-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-opacity transition-transform duration-200" aria-hidden="true">
                    <span className="arrow inline-block px-2 py-1 rounded-lg bg-gradient-to-r from-[#6b4fb3]/12 to-[#7ad0ff]/6 font-extrabold">→</span>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}