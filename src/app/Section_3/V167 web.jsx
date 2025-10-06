'use client';

import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin (client-only)
if (typeof window !== 'undefined' && gsap.core && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const LightTokens = () => (
  <style jsx global>{`
    :root {
      /* UPDATED FONT / THEME COLORS (all font colors switched to use these tokens) */
      --ink: #06283D;          /* primary text color (deep blue) */
      --muted: #475569;        /* secondary muted text */
      --muted-2:#4a6fa3;      /* tertiary muted / lighter */
      --bg: #f8fbff;
      --surface: #ffffff;
      --border: rgba(6, 40, 61, 0.08);
      --ring: 0 0 0 2px rgba(14, 165, 164, 0.28);
      --brand-1: #1b4444;      /* teal accent used for headings / highlights */
      --brand-2: #7c3aed;      /* purple accent used for pills / labels */
      --brand-3: #ef4444;
      --shadow-1: 0 6px 28px rgba(2, 6, 23, 0.06);
      --shadow-2: 0 10px 34px rgba(2, 6, 23, 0.08);
      --radius-lg: 18px;
      --radius-md: 12px;
      --radius-sm: 10px;

      /* default media height for desktop; overwritten on smaller screens */
      --media-height: 520px;
    }

    /* mobile override */
    @media (max-width: 1024px) {
      :root {
        --media-height: 460px;
      }
    }

    html, body {
      color: var(--ink);
      background: #fff;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .media-box {
      height: var(--media-height);
    }

    .fade-in-up { opacity: 0; transform: translateY(14px); animation: fadeInUp 640ms ease forwards; }
    .fade-in { opacity: 0; animation: fadeIn 520ms ease forwards; }
    @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { to { opacity: 1; } }
    .hover-lift { transition: transform .2s ease, box-shadow .2s ease, filter .2s ease, background-color .2s ease; }
    .hover-lift:hover { transform: translateY(-2px); box-shadow: var(--shadow-2); filter: saturate(1.02); }

    /* simple thin scrollbar for x-overflow lists (if reused) */
    .scrollbar-thin::-webkit-scrollbar { height: 8px; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(6,40,61,0.08); border-radius: 999px; }

    /* Ensure any elements relying on currentColor for svg pick up brand-1 */
    .brand-1-color { color: var(--brand-1); }
  `}</style>
);

/**
 * Combined responsive About component (desktop + mobile) named V167
 * - All font/text colors updated to use new design tokens above
 */
function V167(props) {
  const {
    aboutUsTitle = 'Lorem Ipsum',
    welcomeTitle = 'Lorem Ipsum Dolor Sit Amet',
    hospitalDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
      molestie nisl. Duis ac mi leo. Mauris at convallis erat, ac posuere arcu. Phasellus
      commodo, sapien vitae efficitur posuere, sapien nisl feugiat sapien, vitae volutpat
      sapien orci in purus.Duis ac mi leo. Mauris at convallis erat, ac posuere arcu. Phasellus
      commodo, sapien vitae efficitur posuere, sapien nisl feugiat sapien, vitae volutpat
      sapien orci in purus.Duis ac mi leo. Mauris at convallis erat, ac posuere arcu. Phasellus
      commodo, sapien vitae efficitur posuere.`,
    visionTitle = 'Lorem Ipsum',
    visionDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod lacus ut lectus faucibus, at volutpat neque volutpat.',
    missionTitle = 'Lorem Ipsum',
    missionDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur lacinia, metus non faucibus efficitur.',
    // Open-source Unsplash image used as background / illustration
    imageUrl = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80',
  } = props;

  return (
    <section className="w-full text-[var(--ink)] py-12 px-5" aria-labelledby="v167-about-heading">
      <LightTokens />

      <div className="grid gap-9 items-center max-w-[1300px] mx-auto my-12">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-9 items-center max-w-[1300px] w-full mx-auto">
          {/* Media (left column on desktop, top on mobile) */}
          <div
            className="relative rounded-[var(--radius-lg)] overflow-hidden bg-gradient-to-b from-white to-[#f7fbff] border hover-lift fade-in media-box"
            style={{
              boxShadow: 'var(--shadow-1)',
              border: '1px solid var(--border)',
            }}
          >
            <Image
              src={imageUrl}
              alt="Illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
              className="object-cover saturate-[1.02] contrast-[0.98]"
            />

            {/* Experience pill (positioned bottom-right on desktop, bottom-left visually on mobile due to layout) */}
            <div
              className="inline-flex items-center gap-2 bg-white rounded-full p-3"
              style={{
                position: 'absolute',
                right: '18px',
                bottom: '18px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-2)',
              }}
              aria-hidden={false}
            >
              <div
                className="grid place-items-center rounded-full brand-1-color"
                style={{
                  width: '28px',
                  height: '28px',
                  background: 'rgba(14,165,164,0.08)', /* uses --brand-1 */
                  border: '1px solid rgba(14,165,164,0.18)',
                  color: 'var(--brand-1)', /* for svg stroke using currentColor */
                }}
                aria-hidden="true"
              >
                {/* inline tick SVG uses currentColor so it picks up --brand-1 */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[13px] font-extrabold tracking-[0.01em] text-[var(--ink)] whitespace-nowrap">
                30+ Lorem Ipsum
              </div>
            </div>
          </div>

          {/* Content (right column on desktop, below on mobile) */}
          {/* Text is center on mobile, left on desktop */}
          <div
            className="fade-in-up text-center lg:text-left"
            style={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-1)',
              padding: '28px',
              background: 'white',
            }}
          >
            {/* Eyebrow / pill - centered on mobile, left on desktop */}
            <div className="inline-flex items-center gap-2 px-3 py-2 font-bold rounded-full text-xs tracking-wide bg-[rgba(124,58,237,0.10)] text-[var(--brand-2)] border border-[rgba(124,58,237,0.22)] mx-auto lg:mx-0">
              {aboutUsTitle}
            </div>

            {/* Heading */}
            <h2
              id="v167-about-heading"
              className="font-extrabold leading-[1.08] tracking-[-0.02em] mt-3 mx-auto lg:mx-0"
              style={{
                backgroundImage: 'linear-gradient(92deg, var(--ink) 0%, var(--brand-1) 80%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                fontSize: 'clamp(28px, 4vw, 44px)',
                letterSpacing: '-0.02em',
              }}
            >
              {welcomeTitle}
            </h2>

            <p className="mt-3 text-[var(--muted)] leading-[1.75] text-[16px] max-w-[720px] mx-auto lg:mx-0">
              {hospitalDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div
                className="hover-lift text-center lg:text-left"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.27), rgba(255,255,255,0.27))',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  boxShadow: 'var(--shadow-1)',
                }}
              >
                <h3 className="text-[var(--brand-1)] text-[18px] font-extrabold mb-2">{visionTitle}</h3>
                <p className="text-[var(--muted-2)] text-[15px] leading-[1.7] m-0">{visionDescription}</p>
              </div>

              <div
                className="hover-lift text-center lg:text-left"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.27), rgba(255,255,255,0.27))',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  boxShadow: 'var(--shadow-1)',
                }}
              >
                <h3 className="text-[var(--brand-1)] text-[18px] font-extrabold mb-2">{missionTitle}</h3>
                <p className="text-[var(--muted-2)] text-[15px] leading-[1.7] m-0">{missionDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default V167;