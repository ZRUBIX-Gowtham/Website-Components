import React, { useLayoutEffect, useRef } from 'react';

export default function V38() {
  // Inline SVG icon components (unchanged)
  const IconReact = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="React">
      <g fill="none" stroke="#61DAFB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="64" cy="64" rx="44" ry="18" transform="rotate(0 64 64)"/>
        <ellipse cx="64" cy="64" rx="44" ry="18" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="44" ry="18" transform="rotate(120 64 64)"/>
      </g>
      <circle cx="64" cy="64" r="8" fill="#61DAFB"/>
    </svg>
  );

  const IconChatGPT = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ChatGPT">
      <defs>
        <linearGradient id="gpt" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#00c853" />
          <stop offset="1" stopColor="#00e676" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="44" fill="url(#gpt)" />
      <path d="M40 48c16-10 32-10 48 0-16 10-16 22 0 32-16 10-32 10-48 0 16-10 16-22 0-32z"
            fill="#fff" opacity="0.14" />
      <g transform="translate(38,40)" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
        <path d="M2 8c8-6 18-6 26 0" />
        <path d="M2 20c8-6 18-6 26 0" />
        <path d="M2 32c8-6 18-6 26 0" />
      </g>
    </svg>
  );

  const IconNext = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Next.js">
      <rect x="8" y="8" width="112" height="112" rx="16" fill="#111827" />
      <path d="M36 88V40h10l22 36V40h10v48h-10L46 52v36H36z" fill="#fff" />
    </svg>
  );

  const IconVercel = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vercel">
      <rect width="128" height="128" rx="16" fill="#fff"/>
      <path d="M16 104L64 24l48 80H16z" fill="#000"/>
    </svg>
  );

  const IconNode = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Node.js">
      <g transform="translate(8,8)">
        <polygon points="56,0 104,32 104,96 56,128 8,96 8,32" fill="#8cc84b"/>
        <text x="56" y="78" fontSize="44" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fill="#173f00">N</text>
      </g>
    </svg>
  );

  const IconTS = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TypeScript">
      <rect x="8" y="8" width="112" height="112" rx="16" fill="#3178c6" />
      <text x="64" y="84" fontSize="44" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fill="#fff">TS</text>
    </svg>
  );

  const IconTailwind = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tailwind">
      <rect width="128" height="128" rx="16" fill="#06b6d4"/>
      <path d="M24 84c24-28 52-12 52-12 24 16 52 0 52 0" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 64c24-20 52-6 52-6 24 12 52 0 52 0" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
    </svg>
  );

  const IconDocker = () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Docker">
      <rect x="8" y="8" width="112" height="112" rx="16" fill="#0db0e8" />
      <g transform="translate(14,46)" fill="#076e9a">
        <rect x="0" y="24" width="80" height="20" rx="3"/>
        <rect x="6" y="4" width="12" height="12" rx="2"/>
        <rect x="24" y="0" width="12" height="12" rx="2"/>
        <rect x="42" y="0" width="12" height="12" rx="2"/>
        <rect x="60" y="4" width="12" height="12" rx="2"/>
      </g>
    </svg>
  );

  // main logos list (no duplicates here)
  const logos = [
    { Icon: IconReact, alt: 'React' },
    { Icon: IconChatGPT, alt: 'ChatGPT' },
    { Icon: IconNext, alt: 'Next.js' },
    { Icon: IconVercel, alt: 'Vercel' },
    { Icon: IconNode, alt: 'Node.js' },
    { Icon: IconTS, alt: 'TypeScript' },
    { Icon: IconTailwind, alt: 'Tailwind' },
    { Icon: IconDocker, alt: 'Docker' },
  ];

  // Duplicate multiple times for seamless scroll (keeps original behavior)
  const trackLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  const trackRef = useRef(null);

  // useLayoutEffect so measurements happen before paint (prevents late start / flicker)
  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    function update() {
      // full track width
      const total = el.scrollWidth || 0;

      // set CSS variables on the element
      el.style.setProperty('--scroll-distance', `${total}px`);

      // choose speed by px/sec (same approach as original)
      const pxPerSec = 100;
      const durationSec = Math.max(8, Math.round(total / pxPerSec));
      el.style.setProperty('--duration', `${durationSec}s`);

      const startOffset = Math.random() * durationSec;
      el.style.setProperty('--start-offset', `${startOffset}s`);

      // hint for GPU compositing
      el.style.willChange = 'transform';
    }

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // helpers to pause/resume animation on hover (exact same effect as CSS :hover animation-play-state)
  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  };

  return (
    <section
      className="v38-wrap max-w-[1400px] bg-white text-[#0f1720] overflow-hidden mx-auto"
      aria-labelledby="v38-title"
    >
      <div className="v38-container mx-auto px-5 py-10 box-border">
        <div className="v38-inner grid md:grid-cols-3 items-center gap-7">
          {/* Left column */}
          <div className="v38-left md:col-span-1 md:pr-7 md:border-r md:border-gray-200 w-full">
            <h2 id="v38-title" className="v38-title text-left  text-[28px] leading-[1.15] font-extrabold m-0 mb-3">
              Over 30+ Partner Companies
              <br />Globally Trust Us
            </h2>
            <p className="v38-sub text-sm text-left text-gray-500 m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Right column */}
          <div className="v38-right md:col-span-2 relative w-full">
            <div
              className="v38-carousel relative overflow-hidden w-full flex items-center"
              aria-label="Trusted by partner logos"
              onMouseEnter={pause}
              onMouseLeave={resume}
            >
              {/* fade overlays */}
              <div
                className="v38-fade left-0 top-0 bottom-0 pointer-events-none z-30"
                aria-hidden="true"
                style={{
                  width: 'var(--fade-width)',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              />
              <div
                className="v38-fade-right right-0 top-0 bottom-0 pointer-events-none z-30"
                aria-hidden="true"
                style={{
                  width: 'var(--fade-width)',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              />

              {/* center dashed line */}
              <div
                className="v38-center-line absolute top-[8px] bottom-[8px] left-1/2 transform -translate-x-1/2 pointer-events-none z-40"
                aria-hidden="true"
                style={{ borderLeft: '1px dashed rgba(15, 23, 32, 0.12)', width: 0 }}
              />

              {/* scrolling track */}
              <div
                className="v38-track flex items-center z-10"
                role="list"
                ref={trackRef}
                // inline styles used to preserve exact animation behavior and CSS-variable integration
                style={{
                  gap: 'var(--track-gap)',
                  width: 'max-content',
                  marginLeft: 0,
                  transform: 'translate3d(0,0,0)',
                  backfaceVisibility: 'hidden',
                  animation: 'v38-scroll var(--duration) linear infinite',
                  animationDelay: 'calc(-1 * var(--start-offset))',
                  height: 'auto',
                }}
              >
                {trackLogos.map((item, idx) => {
                  const Icon = item.Icon;
                  return (
                    <div
                      className="v38-logo flex items-center justify-center flex-none z-10"
                      role="listitem"
                      aria-label={item.alt}
                      key={`${item.alt}-${idx}`}
                      style={{
                        width: 'var(--logo-w)',
                        height: 'var(--logo-h)',
                        filter: 'grayscale(50%)',
                        opacity: 0.95,
                        transition: 'filter 0.18s ease, opacity 0.18s ease, transform 0.18s ease',
                      }}
                    >
                      <div className="logo-inner w-[78%] h-[78%]">
                        <Icon />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal CSS necessary for keyframes, hover transform, and responsive CSS variable overrides.
          Design, spacing and behavior preserved — the rest uses Tailwind utilities. */}
      <style jsx>{`
        /* Default CSS variables (match original values) */
        .v38-wrap {
          --logo-w: 60px;
          --logo-h: 60px;
          --track-gap: 56px;
          --fade-width: 96px;
          --scroll-distance: 0px;
          --duration: 60s;
          --start-offset: 0s;
        }

        /* smaller breakpoint adjustments to keep the exact responsive behavior */
        @media (max-width: 1024px) {
          .v38-left {
            text-align: center;
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 14px;
            padding-right: 0;
          }
        }

        @media (max-width: 760px) {
          .v38-wrap {
            /* keep same adjustments as original */
          }
          .v38-left {
            padding-bottom: 12px;
            max-width: 360px;
            margin: 0 auto;
            text-align: center;
          }
          .v38-right {
            padding-bottom: 12px;
            max-width: 330px;
            margin: 0 auto;
          }
        }

        /* Mobile: reduce font sizes, center text, and center carousel */
        @media (max-width: 640px) {
          .v38-wrap {
            --logo-w: 52px;
            --logo-h: 52px;
            --track-gap: 28px;
            --fade-width: 56px;
          }
          .v38-container {
            padding: 22px 14px;
          }

          /* Title smaller and centered */
          .v38-title {
            font-size: 18px !important;
            line-height: 1.12 !important;
            text-align: center !important;
            margin-bottom: 6px !important;
          }

          .v38-sub {
            font-size: 12px !important;
            text-align: center !important;
            color: #6b7280;
            margin: 0 auto;
          }

          /* make sure left block centers and spacing is consistent */
          .v38-left {
            padding-bottom: 12px;
            max-width: 360px;
            margin: 0 auto;
            text-align: center;
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
          }

          /* Center the carousel and limit its width so center-line is accurate */
          .v38-right {
            padding-bottom: 12px;
            max-width: 360px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .v38-carousel {
            width: 100%;
            padding-top: 6px;
            padding-bottom: 6px;
            box-sizing: border-box;
          }

          /* Keep center line centered */
          .v38-center-line {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        /* Extra small phones: make text a bit smaller and reduce logo sizes/gap */
        @media (max-width: 420px) {
          .v38-wrap {
            --logo-w: 48px;
            --logo-h: 48px;
            --track-gap: 20px;
            --fade-width: 40px;
          }
          .v38-title {
            font-size: 16px !important;
            line-height: 1.08 !important;
          }
          .v38-sub {
            font-size: 11px !important;
          }
          .v38-container {
            padding: 18px 12px;
          }
        }

        /* Keyframes identical to original scroll animation */
        @keyframes v38-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-1 * var(--scroll-distance)), 0, 0);
          }
        }

        /* Hover effect for each logo (same transform & un-grayscale as original) */
        .v38-logo:hover {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
          transform: translateY(-4px);
        }

        /* Ensure SVGs scale and sit as before */
        .v38-logo svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Provide a default smoother visual for very small widths so the fade overlays align */
        .v38-fade, .v38-fade-right {
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}