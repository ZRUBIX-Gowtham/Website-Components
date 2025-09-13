'use client';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Lorem Ipsum Title 1', // Changed to Lorem Ipsum
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4 12h10a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4Z" fill="currentColor" opacity=".2"/>
        <rect x="4" y="5" width="16" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="9" y="7.5" width="6" height="1.3" rx=".65" fill="currentColor"/>
        <rect x="9" y="10" width="6" height="1.3" rx=".65" fill="currentColor" opacity=".8"/>
      </svg>
    ),
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Lorem Ipsum Title 2',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <circle cx="12" cy="15" r="2.4" fill="currentColor"/>
      </svg>
    ),
    desc:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Lorem Ipsum Title 3',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 17l5-7 4 5 3-4 6 9H3z" fill="currentColor" />
        <path d="M9 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" fill="currentColor" opacity=".65"/>
      </svg>
    ),
    desc:
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
  },
  {
    title: 'Lorem Ipsum Title 4',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"/>
      </svg>
    ),
    desc:
      'Vestibulum commodo volutpat convallis. Ut felis. Nulla volutpat sollicitudin elit. Suspendisse potenti. Mauris massa. Sed ut purus. Ut eu leo sed nunc tincidunt aliquet.',
  },
  {
    title: 'Lorem Ipsum Title 5',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M12 11.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12 15.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill="currentColor" opacity=".65"/>
      </svg>
    ),
    desc:
      'Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo accumsan. Dapibus varius. Nam sem. Sed a libero. Cras eu tellus.',
  },
  {
    title: 'Lorem Ipsum Title 6',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M12 11.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12 15.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill="currentColor" opacity=".65"/>
      </svg>
    ),
    desc:
      'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
];

export default function V29() {
  const [theme, setTheme] = useState('light'); // 'light' | 'black' | 'night'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.2 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const themeClasses = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      brand: 'text-purple-600',
      glow: '180, 130, 255',
      switcherBg: 'bg-white',
      switcherBorder: 'border-gray-200',
      switcherButtonActiveBg: 'bg-gray-100',
      switcherButtonActiveText: 'text-gray-900',
      switcherButtonHoverBg: 'hover:bg-gray-100/75',
    },
    black: {
      bg: 'bg-black',
      text: 'text-white',
      muted: 'text-gray-300',
      cardBg: 'bg-gray-900',
      cardBorder: 'border-gray-800',
      brand: 'text-indigo-500',
      glow: '140, 90, 255',
      switcherBg: 'bg-gray-900',
      switcherBorder: 'border-gray-800',
      switcherButtonActiveBg: 'bg-gray-800',
      switcherButtonActiveText: 'text-white',
      switcherButtonHoverBg: 'hover:bg-gray-800/75',
    },
    night: {
      bg: 'bg-gradient-to-br from-[#0b0f1e] via-[#05070f] to-black',
      text: 'text-blue-100',
      muted: 'text-blue-300',
      cardBg: 'bg-blue-950/[.66]',
      cardBorder: 'border-blue-800/[.14]',
      brand: 'text-blue-400',
      glow: '120, 170, 255',
      backdropFilter: 'backdrop-blur-sm',
      switcherBg: 'bg-blue-950/[.66]',
      switcherBorder: 'border-blue-800/[.14]',
      switcherButtonActiveBg: 'bg-blue-900',
      switcherButtonActiveText: 'text-blue-100',
      switcherButtonHoverBg: 'hover:bg-blue-900/75',
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <main className={`relative overflow-hidden px-10 ${currentTheme.bg} ${currentTheme.text} ${currentTheme.backdropFilter || ''}`}>
      <section className="container mx-auto px-4 py-24 transition-colors duration-400 ease-in">
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Lorem Ipsum Heading</h2>
          <div className="flex gap-4 flex-wrap">
            <div className={`inline-flex border ${currentTheme.switcherBorder} rounded-xl p-1 ${currentTheme.switcherBg} shadow-sm`}>
              <button
                className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-250 ease-in-out ${
                  theme === 'light' ? `${currentTheme.switcherButtonActiveBg} ${currentTheme.switcherButtonActiveText} shadow-md` : `${currentTheme.text} ${currentTheme.switcherButtonHoverBg} hover:translate-y-[-1px] hover:shadow-sm`
                }`}
                onClick={() => setTheme('light')}
                aria-pressed={theme === 'light'}
              >
                Light
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-250 ease-in-out ${
                  theme === 'black' ? `${currentTheme.switcherButtonActiveBg} ${currentTheme.switcherButtonActiveText} shadow-md` : `${currentTheme.text} ${currentTheme.switcherButtonHoverBg} hover:translate-y-[-1px] hover:shadow-sm`
                }`}
                onClick={() => setTheme('black')}
                aria-pressed={theme === 'black'}
              >
                Black
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-250 ease-in-out ${
                  theme === 'night' ? `${currentTheme.switcherButtonActiveBg} ${currentTheme.switcherButtonActiveText} shadow-md` : `${currentTheme.text} ${currentTheme.switcherButtonHoverBg} hover:translate-y-[-1px] hover:shadow-sm`
                }`}
                onClick={() => setTheme('night')}
                aria-pressed={theme === 'night'}
              >
                Night
              </button>
            </div>
            <div className={`inline-flex border ${currentTheme.switcherBorder} rounded-xl p-1 ${currentTheme.switcherBg} shadow-sm`}>
              <button
                className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-250 ease-in-out ${
                  viewMode === 'grid' ? `${currentTheme.switcherButtonActiveBg} ${currentTheme.switcherButtonActiveText} shadow-md` : `${currentTheme.text} ${currentTheme.switcherButtonHoverBg} hover:translate-y-[-1px] hover:shadow-sm`
                }`}
                onClick={() => setViewMode('grid')}
                aria-pressed={viewMode === 'grid'}
              >
                Grid
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-250 ease-in-out ${
                  viewMode === 'list' ? `${currentTheme.switcherButtonActiveBg} ${currentTheme.switcherButtonActiveText} shadow-md` : `${currentTheme.text} ${currentTheme.switcherButtonHoverBg} hover:translate-y-[-1px] hover:shadow-sm`
                }`}
                onClick={() => setViewMode('list')}
                aria-pressed={viewMode === 'list'}
              >
                List
              </button>
            </div>
          </div>
        </header>

        <div
          className={`grid gap-8 ${
            viewMode === 'list'
              ? 'grid-cols-1 md:grid-cols-2' // Two columns for list view on medium screens and up
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' // Three columns for grid view on large screens and up
          }`}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`card relative border ${currentTheme.cardBorder} ${currentTheme.cardBg} rounded-2xl p-8 shadow-md
                hover:translate-y-[-8px] hover:shadow-xl transition-all duration-250 ease-in-out reveal
                ${viewMode === 'list' ? 'flex flex-row items-center min-h-[100px] p-5' : 'min-h-[180px]'}
              `}
              ref={(el) => (refs.current[i] = el)}
              style={{ transitionDelay: `${Math.min(i, 5) * 70}ms`,
                       '--glow-rgb': currentTheme.glow,
                       '--card-border-rgb': currentTheme.cardBorder.replace('border-', '').replace('rgba(', '').replace(')', '').split(',').slice(0,3).join(',')
                     }}
            >
              <div className={`iconWrap relative w-12 h-12 grid place-items-center ${currentTheme.brand} mb-4 rounded-xl bg-current/[.15]
                ${viewMode === 'list' ? 'mb-0 mr-5 flex-shrink-0' : ''}
              `}>
                <span className="pulse absolute inset-0 rounded-xl blur-md transform scale-75 opacity-60 transition-all duration-300 ease-in-out"
                      style={{ background: `radial-gradient(circle at 50% 50%, rgba(var(--glow-rgb), .35), transparent 60%)` }}
                />
                <div className="icon w-8 h-8 grid place-items-center z-10">{f.icon}</div>
              </div>
              <div className={`${viewMode === 'list' ? 'flex flex-col' : ''}`}>
                <h3 className={`font-bold tracking-tight leading-tight ${viewMode === 'list' ? 'text-2xl mb-1' : 'text-3xl mb-3'}`}>
                  {f.title}
                </h3>
                <p className={`leading-relaxed ${currentTheme.muted} ${viewMode === 'list' ? 'text-sm leading-normal' : 'text-base'}`}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={`stars pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-600 ease-in
        ${theme === 'night' ? 'opacity-45' : ''}
      `} aria-hidden="true" />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        html, body { height: 100%; }
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
        }
        .card:hover .pulse {
          transform: scale(1.1);
          opacity: 1;
        }
        .card:hover {
          border-color: rgba(var(--card-border-rgb), 0.4);
          box-shadow: 0 12px 30px -10px rgba(0,0,0,.2), 0 0 40px -10px rgba(var(--glow-rgb), .55);
        }
        .stars {
          background:
            radial-gradient(1px 1px at 20% 30%, #fff 40%, transparent 41%),
            radial-gradient(1px 1px at 70% 80%, #fff 40%, transparent 41%),
            radial-gradient(1px 1px at 40% 60%, #fff 40%, transparent 41%),
            radial-gradient(1px 1px at 90% 20%, #fff 40%, transparent 41%),
            radial-gradient(1px 1px at 10% 85%, #fff 40%, transparent 41%);
          animation: twinkle 4s linear infinite;
          mix-blend-mode: screen;
        }
        @keyframes twinkle {
          0%, 100% { transform: translateY(0); opacity: .45; }
          50% { transform: translateY(-3px); opacity: .7; }
        }
      `}</style>
    </main>
  );
}