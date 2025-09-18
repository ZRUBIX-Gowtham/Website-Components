'use client';

import React from 'react';
import Image from 'next/image';

export const V163 = () => {
  const departmentsData = [
    {
      key: 'nephrology',
      icon: '💡',
      title: 'Lorem Ipsum 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/departments/nephrology',
      images: [
        'https://picsum.photos/seed/nephrology1/800/600',
        'https://picsum.photos/seed/nephrology2/800/600',
      ],
    },
    {
      key: 'urology',
      icon: '💡',
      title: 'Lorem Ipsum 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      link: '/departments?name=Neurology',
      images: [
        'https://picsum.photos/seed/urology1/800/600',
        'https://picsum.photos/seed/urology2/800/600',
      ],
    },
    {
      key: 'dialysis',
      icon: '💡',
      title: 'Lorem Ipsum 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/departments/dialysis',
      images: [
        'https://picsum.photos/seed/dialysis1/800/600',
        'https://picsum.photos/seed/dialysis2/800/600',
      ],
    },
    {
      key: 'diabetes',
      icon: '💡',
      title: 'Lorem Ipsum 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      link: '/departments/diabetes',
      images: [
        'https://picsum.photos/seed/diabetes1/800/600',
        'https://picsum.photos/seed/diabetes2/800/600',
      ],
    },
  ];

  const [activeKey, setActiveKey] = React.useState(departmentsData[0].key);

  const cardRefs = React.useRef({});
  const setCardRef = (key) => (el) => {
    cardRefs.current[key] = el;
  };

  const handleNavigation = (e, link) => {
    e.preventDefault();
    window.location.href = link;
    window.scrollTo(0, 0);
  };

  const handleSelectDept = (key) => {
    setActiveKey(key);
    const el = cardRefs.current[key];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.remove('animate-pop');

      // force reflow
      el.offsetWidth;
      el.classList.add('animate-pop');
      setTimeout(() => el.classList.remove('animate-pop'), 600);
    }
    const gallery = document.querySelector('.dept-image-gallery');
    if (gallery) {
      gallery.classList.remove('fade-in');

      gallery.offsetWidth;
      gallery.classList.add('fade-in');
    }
  };

  const activeDept =
    departmentsData.find((d) => d.key === activeKey) || departmentsData[0];

  return (
    <>
      <style jsx>{`
        .dept-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .dept-content {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @keyframes popCard {
          0% {
            transform: scale(0.98);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pop {
          animation: popCard 0.45s ease-out;
        }

        .fade-in .dept-image-tile {
          animation: fadeIn 0.4s ease both;
        }

        .dept-card.active::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.25) 20%,
            transparent 40%
          );
          background-size: 200% 100%;
          animation: shine 0.9s ease-out 1;
          pointer-events: none;
        }

        /* Responsive image gallery: single column on small screens */
        @media (max-width: 640px) {
          .dept-image-gallery {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section
        className="bg-transparent text-[#0b1324] py-[72px] px-[22px] md:text-left"
        aria-labelledby="dept-heading"
      >
        <div className="dept-content">
          {/* LEFT */}
          <aside className="flex flex-col gap-3.5 self-start items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-2 font-bold rounded-full text-[10px] sm:text-xs tracking-wide bg-[rgba(47,128,237,0.10)] text-[#1f4e9b] border border-[rgba(47,128,237,0.22)] self-center md:self-start">
              Lorem ipsum dolor
            </div>

            <h2
              id="dept-heading"
              className="font-extrabold leading-[1.08] tracking-[-0.02em] self-stretch text-center md:text-left"
              style={{
                backgroundImage:
                  'linear-gradient(92deg, #0b1324 0%, #274760 00%, #2f80ed 80%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                fontSize: 'clamp(28px, 4vw, 44px)',
                letterSpacing: '-0.02em',
              }}
            >
              Lorem ipsum
            </h2>

            <p className="mb-2 text-[15.5px] leading-[1.7] text-[#475569] max-w-[60ch] self-stretch text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* chips */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4 w-full"
              role="tablist"
              aria-label="Departments quick select"
            >
              {departmentsData.map((d) => (
                <button
                  key={d.key}
                  type="button"
                  role="tab"
                  aria-selected={activeKey === d.key}
                  className={`w-full grid grid-cols-[auto_1fr] items-center gap-3 p-4 rounded-[14px] text-sm border border-[rgba(15,23,42,0.08)] text-[#0f2b4f] bg-[#f2f7ff] cursor-pointer transition-transform duration-150 shadow-[0_6px_14px_rgba(47,128,237,0.10)]
                    hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(47,128,237,0.22)] hover:bg-[#e9f1ff] text-left
                    ${activeKey === d.key ? 'bg-gradient-to-br from-[#a8d8ff] to-[#66b2ff] text-white border-transparent shadow-[0_14px_32px_rgba(47,128,237,0.35)]' : ''}`}
                  onClick={() => handleSelectDept(d.key)}
                >
                  <span
                    className={`w-11 h-11 rounded-[12px] grid place-items-center text-[22px] ${activeKey === d.key ? 'text-[#1b3f7a] bg-[rgba(255,255,255,0.35)]' : 'text-[#2f80ed] bg-[#eaf3ff] border border-[rgba(15,23,42,0.06)]'}`}
                  >
                    {d.icon}
                  </span>
                  <span className="font-extrabold text-[15px]">{d.title}</span>
                </button>
              ))}
            </div>

            {/* Image gallery */}
            <div className="dept-image-gallery fade-in mt-4 grid grid-cols-2 gap-3.5 w-full sm:grid-cols-2" aria-live="polite">
              {activeDept.images.map((src, idx) => (
                <div
                  key={idx}
                  className="dept-image-tile relative w-full pt-[62%] overflow-hidden rounded-[16px] border border-[rgba(15,23,42,0.08)] shadow-[0_14px_34px_rgba(0,0,0,0.08)] bg-gradient-to-b from-[#f8fbff] to-[#eef5ff]"
                >
                  <Image
                    src={src}
                    alt={`${activeDept.title} image ${idx + 1}`}
                    fill
                    sizes="(max-width: 520px) 100vw, 50vw"
                    priority={idx === 0}
                    unoptimized
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/departments"
              className="inline-flex items-center gap-2 mt-5 px-4 py-3 rounded-[12px] font-extrabold text-white bg-gradient-to-r from-[#2f80ed] to-[#1f5fc9] shadow-[0_12px_28px_rgba(47,128,237,0.28)] md:self-start hover:from-[#1f5fc9] hover:to-[#174a9e] transition-transform duration-150"
              aria-label="View all departments"
              onClick={(e) => handleNavigation(e, '/departments')}
            >
              Lorem ipsum →
            </a>
          </aside>

          {/* RIGHT: cards (stack vertically on small screens) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {departmentsData.map((d) => {
              const isActive = activeKey === d.key;
              return (
                <div
                  key={d.key}
                  ref={setCardRef(d.key)}
                  role="listitem"
                  className={`dept-card relative overflow-hidden rounded-[16px] p-5 grid grid-rows-[auto_1fr_auto] gap-3 border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-transform duration-200 ${isActive ? 'bg-gradient-to-br from-[#a8d8ff] to-[#66b2ff] text-white border-transparent shadow-[0_20px_40px_rgba(47,128,237,0.35)]' : 'hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] hover:bg-[#f8faff]'}`}
                >
                  <div className={`dept-icon w-[52px] h-[52px] rounded-[12px] grid place-items-center text-[26px] font-bold transition-transform duration-200 ${isActive ? 'text-white bg-[rgba(255,255,255,0.28)]' : 'text-[#2f80ed] bg-[#eaf3ff] border border-[rgba(15,23,42,0.06)]'}`}>
                    {d.icon}
                  </div>

                  <div>
                    <h3 className={`dept-title text-[20px] font-extrabold leading-[1.2] tracking-[-0.01em] mb-2 ${!isActive ? 'text-[#0b1324]' : ''}`}>
                      {d.title}
                    </h3>
                    <p className={`dept-desc text-[14.5px] leading-[1.65] ${!isActive ? 'text-[#445468]' : 'text-white'}`}>
                      {d.description}
                    </p>
                  </div>

                  <a
                    href={d.link}
                    className={`dept-arrow justify-self-end w-[46px] h-[46px] rounded-[14px] grid place-items-center text-[22px] transition-transform duration-200 ${!isActive ? 'bg-[#eff4ff] text-[#2f80ed] border border-[rgba(15,23,42,0.08)] shadow-[0_6px_14px_rgba(47,128,237,0.10)] hover:bg-[#dce8ff] hover:translate-x-1.5' : 'bg-[rgba(255,255,255,0.35)] text-white hover:bg-[rgba(255,255,255,0.5)] hover:translate-x-1.5'}`}
                    aria-label={`Learn more about ${d.title}`}
                    onClick={(e) => handleNavigation(e, d.link)}
                  >
                    →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default V163;