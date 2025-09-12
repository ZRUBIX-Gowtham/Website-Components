// pages/index.js
import Head from 'next/head';
import { useEffect, useRef } from 'react';

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

export default function V26() {
  // Refs for GSAP animation
  const featuresRef = useRef(null);
  const meetiRef = useRef(null);
  const meetiCardRefs = useRef([]);
  meetiCardRefs.current = []; // reset on each render

  // helper to collect refs
  function setMeetiCardRef(el) {
    if (el && !meetiCardRefs.current.includes(el)) {
      meetiCardRefs.current.push(el);
    }
  }

  useEffect(() => {
    // Import gsap only on client to avoid SSR issues
    let ctx;
    let gsapInstance;

    async function setupGsap() {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      // Use gsap.context to scope selectors and ensure cleanup
      ctx = gsap.context(() => {
        // subtle entrance for the features container (staggered cards)
        gsap.from(featuresRef.current.querySelectorAll('.feature'), {
          y: 30,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        // Meeti section: heading and cards animation
        gsap.from(meetiRef.current.querySelectorAll('.meeti-heading'), {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: meetiRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        gsap.from(meetiCardRefs.current, {
          y: 34,
          opacity: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: {
            each: 0.12,
            from: 'start',
          },
          scrollTrigger: {
            trigger: meetiRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        // small micro-interaction on hover for meeti cards
        meetiCardRefs.current.forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -6, boxShadow: '0 18px 40px rgba(37, 30, 64, 0.12)', duration: 0.35, ease: 'power2.out' });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, boxShadow: '0 6px 18px rgba(37, 30, 64, 0.06)', duration: 0.35, ease: 'power2.out' });
          });
        });
      }, featuresRef); // scope to featuresRef container (but gsap.context finds nodes globally too)

    }

    setupGsap();

    return () => {
      // cleanup
      try {
        ctx?.revert();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Features — Modern UI</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </Head>

      <main className="min-h-screen bg-white py-16 px-5">
        <div className="page relative flex items-start">
          {/* Decorative subtle background accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed -right-32 -top-32 w-[420px] h-[420px] blur-3xl z-0"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(107,79,179,0.12), transparent 35%), radial-gradient(circle at 70% 70%, rgba(122,208,255,0.08), transparent 30%)',
            }}
          />

          <div className="container mx-auto max-w-[1200px] z-10 w-full">
            {/* Header / Hero - two column */}
            <header className="lead mb-12 grid lg:grid-cols-2 gap-8 items-center">
              <div className="hero-left">
                <h1 id="features-heading" className="text-[36px] md:text-[44px] leading-tight text-[#231a2b] font-semibold">
                  Modern features designed for clarity and speed
                </h1>
                <p className="lead-copy mt-4 text-[#6b6b6b] text-base md:text-lg leading-7 max-w-[680px]">
                  A fresh layout and improved animations to highlight what matters. Smooth entrance effects powered by GSAP and ScrollTrigger.
                </p>
                <div className="mt-6 flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-[#6b4fb3] text-white font-semibold shadow-sm hover:brightness-95 transition">Get started</button>
                  <button className="px-4 py-2 rounded-lg bg-transparent border border-[#e6e6e9] text-[#231a2b] hover:bg-[#fafafa] transition">Learn more</button>
                </div>
              </div>

              <div className="hero-right hidden md:flex items-center justify-center">
                <div className="w-full max-w-[420px] rounded-2xl p-6 bg-gradient-to-br from-[#f8f9ff] to-[#ffffff] shadow-lg">
                  <div className="w-full h-[220px] rounded-lg bg-gradient-to-br from-[#eaf2ff] to-[#f7f7ff] flex items-center justify-center text-[#6b4fb3] font-bold">
                    Visual mock / illustration
                  </div>
                  <p className="mt-4 text-sm text-[#6b6b6b]">Compact panel showing product highlights — replace with an illustration or screenshot.</p>
                </div>
              </div>
            </header>

            {/* Features grid */}
            <section
              ref={featuresRef}
              className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
              role="list"
              aria-label="Feature list"
            >
              {itemsRow.map((it, idx) => (
                <article
                  className="feature group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-[#f0eff5] shadow-sm hover:shadow-md transition-transform duration-300 ease-[cubic-bezier(.22,.9,.31,1)] hover:-translate-y-1"
                  key={idx}
                  role="listitem"
                  aria-label={it.title}
                  tabIndex={0}
                  title={it.title}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="iconCircle inline-grid place-items-center rounded-lg w-14 h-14 text-[#6b4fb3] shadow-sm bg-gradient-to-br from-[#6b4fb3]/8 to-[#7ad0ff]/6"
                      aria-hidden="true"
                    >
                      <Icon name={it.icon} />
                    </div>
                    <h3 className="title text-lg leading-[1.05] text-[#231a2b] font-medium">{it.title}</h3>
                  </div>

                  <p className="copy text-sm text-[#6b6b6b] leading-7 mb-0 flex-1">{it.copy}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-[#6b4fb3] font-semibold">Learn more</span>
                    <span className="text-[#bdb7e4] font-extrabold px-2 py-1 rounded-lg bg-[#faf7ff]">→</span>
                  </div>
                </article>
              ))}
            </section>

            {/* Meeti Section - new layout + GSAP animations */}
            <section id="meeti" ref={meetiRef} className="mt-14">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="meeti-heading text-2xl md:text-3xl font-semibold text-[#231a2b]">
                    Meeti — schedule & collaboration highlights
                  </h2>
                  <p className="text-sm text-[#6b6b6b] mt-2 max-w-[640px]">
                    Quick glimpses of meeting summaries, auto notes and suggested actions — everything neatly organized for fast context.
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-3">
                  <button className="px-3 py-2 rounded-md bg-white border border-[#e9e7f3] text-sm">Calendar</button>
                  <button className="px-3 py-2 rounded-md bg-white border border-[#e9e7f3] text-sm">Integrations</button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {[
                  {
                    title: 'Auto-summaries',
                    sub: 'One-click meeting summaries and action items.',
                    accent: 'from-[#ffdede] to-[#fff5f5]',
                  },
                  {
                    title: 'Smart agenda',
                    sub: 'Prepares agendas based on project context and past notes.',
                    accent: 'from-[#e8f5ff] to-[#f7fbff]',
                  },
                  {
                    title: 'Follow-ups',
                    sub: 'Auto-created tasks and reminders after meetings.',
                    accent: 'from-[#f5f9ef] to-[#fbfff5]',
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    ref={setMeetiCardRef}
                    className="meeti-card rounded-xl p-5 bg-white border border-[#f2f2f6] shadow-sm hover:shadow-md transition-all"
                    style={{
                      boxShadow: '0 6px 18px rgba(37, 30, 64, 0.06)',
                    }}
                    tabIndex={0}
                    role="article"
                    aria-label={c.title}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                      style={{
                        background: i === 0 ? 'linear-gradient(135deg,#ffdede,#fff5f5)' : i === 1 ? 'linear-gradient(135deg,#e8f5ff,#f7fbff)' : 'linear-gradient(135deg,#f5f9ef,#fbfff5)',
                      }}
                    >
                      <Icon name={i === 1 ? 'chart' : i === 2 ? 'analytics' : 'support'} />
                    </div>

                    <h4 className="text-lg font-medium text-[#231a2b]">{c.title}</h4>
                    <p className="mt-2 text-sm text-[#6b6b6b]">{c.sub}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-[#6b4fb3] font-semibold">Open</div>
                      <div className="text-xs text-[#9b9aa6]">2m read</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer CTA */}
            <section className="mt-16 rounded-2xl p-8 bg-gradient-to-r from-[#f8f7ff] to-[#f7ffff] border border-[#f0f0f3]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#231a2b]">Ready to try it?</h3>
                  <p className="text-sm text-[#6b6b6b] mt-1">Start your trial and see how these features simplify your workflow.</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-[#6b4fb3] text-white rounded-lg font-semibold shadow-sm">Start trial</button>
                  <button className="px-4 py-2 bg-transparent border border-[#e7e7ec] rounded-lg">Contact sales</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}