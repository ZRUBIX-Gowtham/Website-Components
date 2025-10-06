'use client';

import React from 'react';
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

function V173({ headingGradient, pills = ['Lorum', 'Lipsum'] }) {
  // fallback gradient if prop not provided
  const gradient =
    headingGradient ||
    'linear-gradient(92deg, #0b1324 0%, #274760 40%, #2f80ed 80%)';

  // Embed URLs (iframes) — replace the queries below if you want another exact location
  const hospitalEmbedSrc =
    "https://www.google.com/maps?q=St+Mary's+Hospital+Paddington+London&output=embed";
  const parkingEmbedSrc =
    "https://www.google.com/maps?q=Paddington+Car+Park+London&output=embed";

  return (
    <section className="map-wrap relative isolate overflow-hidden bg-transparent">
      <div className="relative z-10 mx-auto max-w-[1300px] px-6 py-20 text-[#0b1324]">
        {/* Pills (centered on mobile and desktop) */}
        <div
          className="flex gap-2 flex-wrap justify-center mb-4"
          aria-label="Highlights"
        >
          {pills.map((pill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-2 font-bold rounded-full text-xs tracking-wide bg-[rgba(47,128,237,0.10)] text-[#1f4e9b] border border-[rgba(47,128,237,0.22)]"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Heading (center on mobile and desktop) */}
        <h2
          className="font-extrabold leading-[1.08] tracking-[-0.02em] text-center md:text-center"
          style={{
            backgroundImage: gradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            fontSize: 'clamp(28px, 4vw, 44px)'
          }}
        >
          Our International Location
        </h2>

        {/* Design description / paragraph (center on mobile & desktop) */}
        <p className="mx-auto mt-2 mb-8 max-w-[760px] text-center md:text-center text-[16px] leading-[1.7] text-[#475569]">
          We are located in the heart of Paddington, London. Below you'll find the
          address, contact details, an image gallery, and embedded maps to help you
          find the hospital and nearby parking. If you need any assistance getting
          here, please call or email us — our team will be happy to help.
        </p>

        {/* Layout: three columns on md+ screens, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* 1) Address + Gallery */}
          <div className="bg-white border border-[rgba(15,23,42,0.08)] rounded-[16px] shadow-[0_8px_30px_rgba(2,6,23,0.08)]">
            <div className="p-7">
              <h3 className="text-[22px] font-extrabold text-[#274760] mb-4 text-center md:text-left">
                Address
              </h3>

              <div className="flex items-center gap-4 mb-4 md:items-start flex-col md:flex-row">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(47,128,237,0.08)] border border-[rgba(47,128,237,0.18)] text-[#1f4e9b] flex-shrink-0 mx-auto md:mx-0">
                  <FaMapMarkerAlt aria-hidden="true" />
                </div>
                <p className="m-0 text-[1.05em] leading-[1.65] text-[#3a4a5f] text-center md:text-left">
                  St. Mary's Hospital, Praed St,
                  <br />
                  Paddington, London W2 1NY, United Kingdom
                </p>
              </div>

              <div className="flex items-center gap-4 mb-4 md:items-center flex-col md:flex-row">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(47,128,237,0.08)] border border-[rgba(47,128,237,0.18)] text-[#1f4e9b] flex-shrink-0 mx-auto md:mx-0">
                  <FaMobileAlt aria-hidden="true" />
                </div>
                <a
                  className="text-[1.05em] text-[#3a4a5f] hover:text-[#2f80ed] hover:underline text-center md:text-left"
                  href="tel:+442070123456"
                >
                  +44 20 7012 3456
                </a>
              </div>

              <div className="flex items-center gap-4 mb-4 md:items-center flex-col md:flex-row">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(47,128,237,0.08)] border border-[rgba(47,128,237,0.18)] text-[#1f4e9b] flex-shrink-0 mx-auto md:mx-0">
                  <FaPhoneAlt aria-hidden="true" />
                </div>
                <a
                  className="text-[1.05em] text-[#3a4a5f] hover:text-[#2f80ed] hover:underline text-center md:text-left"
                  href="tel:+442070000000"
                >
                  +44 20 7000 0000
                </a>
              </div>

              <div className="flex items-center gap-4 mb-6 md:items-center flex-col md:flex-row">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(47,128,237,0.08)] border border-[rgba(47,128,237,0.18)] text-[#1f4e9b] flex-shrink-0 mx-auto md:mx-0">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <a
                  className="text-[1.05em] text-[#3a4a5f] hover:text-[#2f80ed] hover:underline text-center md:text-left"
                  href="mailto:international@example.com"
                >
                  international@example.com
                </a>
              </div>

              {/* Gallery (optional) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative w-full overflow-hidden rounded-[12px] bg-[#eef2ff] border border-[rgba(15,23,42,0.08)] shadow-[0_8px_24px_rgba(2,6,23,0.06)]">
                  <div style={{ position: 'relative', width: '100%', paddingBottom: '61.538%' }}>
                    <img
                      src="https://images.edrawmax.com/examples/vicinity-map/3.jpg"
                      alt="Office exterior"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className="relative w-full overflow-hidden rounded-[12px] bg-[#eef2ff] border border-[rgba(15,23,42,0.08)] shadow-[0_8px_24px_rgba(2,6,23,0.06)]">
                  <div style={{ position: 'relative', width: '100%', paddingBottom: '61.538%' }}>
                    <img
                      src="https://conceptdraw.com/How-To-Guide/picture/Directional-Maps-Location-of-the-Migration-Health-Assessment-Center-MHAC.png"
                      alt="Office lobby"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2) Hospital Map */}
          <div className="bg-white border border-[rgba(15,23,42,0.08)] rounded-[16px] shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-3">
            <h4 className="text-[18px] font-bold text-[#274760] mb-3 text-center md:text-left">
              Hospital Location
            </h4>
            <div className="relative w-full overflow-hidden rounded-[12px] bg-[#eef4ff] border border-[rgba(15,23,42,0.08)] map-frame">
              <div className="absolute inset-0">
                <iframe
                  src={hospitalEmbedSrc}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  style={{ border: 0 }}
                  title="St. Mary's Hospital Map"
                />
              </div>
            </div>
          </div>

          {/* 3) Parking Map */}
          <div className="bg-white border border-[rgba(15,23,42,0.08)] rounded-[16px] shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-3">
            <h4 className="text-[18px] font-bold text-[#274760] mb-3 text-center md:text-left">
              Parking Location
            </h4>
            <div className="relative w-full overflow-hidden rounded-[12px] bg-[#eef4ff] border border-[rgba(15,23,42,0.08)] map-frame">
              <div className="absolute inset-0">
                <iframe
                  src={parkingEmbedSrc}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  style={{ border: 0 }}
                  title="Paddington Car Park Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-frame { height: 360px; position: relative; }
        @media (max-width: 1024px) { .map-frame { height: 340px; } }
        @media (max-width: 768px)  { .map-frame { height: 320px; } }
        @media (max-width: 480px)  { .map-frame { height: 300px; } }
      `}</style>
    </section>
  );
}

export default V173;