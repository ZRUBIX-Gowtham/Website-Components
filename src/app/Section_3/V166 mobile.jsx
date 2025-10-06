'use client';

import React from 'react';

function V166(props) {
  const {
    title = 'Lorem Ipsum Dolor Sit Amet',
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    pills = [],
    layout = 'grid', // 'grid' | 'scroll'
  } = props;

  // Simple open-source inline SVG icons used as partner logos.
  // These are small, neutral icons (shield, handshake, heart, cross, star, globe, check, home).
  const partnerIcons = [
    // Shield
    <svg key="shield" viewBox="0 0 24 24" role="img" aria-label="Shield logo" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Shield</title>
      <path d="M12 2l7 3v5c0 5-3.8 9.9-7 12-3.2-2.1-7-7-7-12V5l7-3z" fill="#2f80ed" />
      <path d="M12 5.2v8.8l4.5 2.7C15.1 14.1 13.8 10.7 12 5.2z" fill="#fff" opacity="0.15" />
    </svg>,

    // Handshake
    <svg key="handshake" viewBox="0 0 24 24" role="img" aria-label="Handshake logo" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Handshake</title>
      <path d="M2 13l6 6 4-4 6 2 4-4-6-6-4 4-6-2-4 4z" fill="#1f4e9b" />
      <path d="M8 11l4-4 6 6-4 4-6-2-4-4 4-4z" fill="#2f80ed" opacity="0.95" />
    </svg>,

    // Heart + plus
    <svg key="heart" viewBox="0 0 24 24" role="img" aria-label="Care logo" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Care</title>
      <path d="M12 21s-7-4.35-9-8.2C0.8 7.6 4.5 4 8.6 6.1 10 7 12 9 12 9s2-2 3.4-2.9C19.5 4 23.2 7.6 21 12.8 19 16.65 12 21 12 21z" fill="#ef4444" />
      <rect x="16" y="6" width="2" height="6" rx="0.5" fill="#fff" transform="rotate(0 17 9)" />
      <rect x="13" y="8" width="6" height="2" rx="0.5" fill="#fff" transform="rotate(0 16 9)" />
    </svg>,

    // Medical cross
    <svg key="cross" viewBox="0 0 24 24" role="img" aria-label="Medical cross logo" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Medical Cross</title>
      <rect x="10" y="3" width="4" height="8" rx="0.5" fill="#0b1324" />
      <rect x="3" y="10" width="18" height="4" rx="0.5" fill="#2f80ed" />
    </svg>,

    // Star badge
    <svg key="star" viewBox="0 0 24 24" role="img" aria-label="Star badge" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Star</title>
      <circle cx="12" cy="12" r="10" fill="#fbbf24" />
      <path d="M12 7l1.8 3.8L18 12l-4.2 1.2L12 17l-1.8-3.8L6 12l4.2-1.2L12 7z" fill="#fff" />
    </svg>,

    // Globe
    <svg key="globe" viewBox="0 0 24 24" role="img" aria-label="Globe logo" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Globe</title>
      <circle cx="12" cy="12" r="9" fill="#06b6d4" />
      <path d="M2 12h20M12 2c2.5 3.5 2.5 8 0 11-2.5-3.5-2.5-8 0-11z" stroke="#fff" strokeWidth="0.9" fill="none" opacity="0.95" />
    </svg>,

    // Check badge
    <svg key="check" viewBox="0 0 24 24" role="img" aria-label="Check logo" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Verified</title>
      <path d="M12 2l2 2 2.5-.5L19 5l3 3-1 3 1 3-3 3-3-.5L14 22l-2-2-2 2-2-.5L5 19 2 16l1-3L2 10l3-3 2.5.5L10 4 12 2z" fill="#10b981" opacity="0.95" />
      <path d="M9.5 12.5l1.8 1.8L15 10.6" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

    // Home / policy
    <svg key="home" viewBox="0 0 24 24" role="img" aria-label="Home logo" className="w-[140px] h-[80px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <title>Home</title>
      <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1V10.5z" fill="#6366f1" />
      <rect x="10" y="12" width="4" height="4" fill="#fff" opacity="0.9" />
    </svg>,
  ];

  return (
    <section className="w-full text-[#0b1324] py-16 px-5" aria-labelledby="partners-heading">
      <div className="max-w-[1200px] w-[92vw] mx-auto text-center">
        {/* Pills */}
        <div className="flex gap-2 flex-wrap justify-center mb-3" aria-label="Highlights">
          {pills.map((pill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-2 font-bold rounded-full text-xs tracking-wide bg-[rgba(47,128,237,0.10)] text-[#1f4e9b] border border-[rgba(47,128,237,0.22)] self-start"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h2
          id="partners-heading"
          className="font-extrabold leading-[1.08] tracking-[-0.02em] self-stretch text-center mx-auto"
          style={{
            backgroundImage: 'linear-gradient(92deg, #0b1324 0%, #274760 00%, #2f80ed 80%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            fontSize: 'clamp(28px, 4vw, 44px)',
            letterSpacing: '-0.02em',
            maxWidth: 'min(1200px, 92vw)',
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 mb-7 max-w-[760px] mx-auto text-center text-[#475569] leading-7 text-base">
          {subtitle}
        </p>

        {/* Content card */}
        <div
          className="bg-white rounded-2xl p-6"
          role="region"
          aria-label="Insurance partner logos"
        >
          {layout === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
              {partnerIcons.map((icon, index) => (
                <div
                  className="flex items-center justify-center p-4 border rounded-lg bg-white transition-transform duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(2,6,23,0.06)] border-[rgba(15,23,42,0.08)]"
                  key={index}
                  aria-label={`Partner ${index + 1}`}
                >
                  <div className="flex items-center justify-center w-[200px] h-[120px]">
                    {icon}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-thin"
              aria-label="Scrollable list of partners"
            >
              {partnerIcons.map((icon, index) => (
                <div
                  className="flex-shrink-0 w-[180px] h-[120px] flex items-center justify-center border rounded-lg bg-white transition-transform duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(2,6,23,0.06)] border-[rgba(15,23,42,0.08)] snap-center"
                  key={index}
                  aria-label={`Partner ${index + 1}`}
                >
                  <div className="flex items-center justify-center w-[140px] h-[80px]">
                    {icon}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default V166;