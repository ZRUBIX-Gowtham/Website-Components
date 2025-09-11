'use client';

// app/components/Navbar.js
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const MENU = [
  { label: 'Home', href: '/' },
  {
    label: 'Section 1-15',
    href: '', // empty -> treated as no link
    submenu: [
      { label: 'Section 1', href: '/Section_1' },
      { label: 'Section 2', href: '/Section_2' },
      { label: 'Section 3', href: '/Section_3' },
      { label: 'Section 4', href: '/Section_4' },
      { label: 'Section 5', href: '/Section_5' },
      { label: 'Section 6', href: '/Section_6' },
      { label: 'Section 7', href: '/Section_7' },
      { label: 'Section 8', href: '/Section_8' },
      { label: 'Section 9', href: '/Section_9' },
      { label: 'Section 10', href: '/Section_10' },
      { label: 'Section 11', href: '/Section_11' },
      { label: 'Section 12', href: '/Section_12' },
      { label: 'Section 13', href: '/Section_12' },
      { label: 'Section 14', href: '/Section_12' },
      { label: 'Section 15', href: '/Section_12' },
    ],
  },
   {
    label: 'Section 16-30',
    href: '', // empty -> treated as no link
    submenu: [
      { label: 'Section 11', href: '/Section_1' },
      { label: 'Section 12', href: '/Section_2' },
      { label: 'Section 13', href: '/Section_3' },
      { label: 'Section 14', href: '/Section_4' },
      { label: 'Section 15', href: '/Section_5' },
      { label: 'Section 16', href: '/Section_6' },
      { label: 'Section 17', href: '/Section_7' },
      { label: 'Section 18', href: '/Section_8' },
      { label: 'Section 19', href: '/Section_9' },
      { label: 'Section 20', href: '/Section_10' },
      { label: 'Section 21', href: '/Section_11' },
      { label: 'Section 22', href: '/Section_12' },
      { label: 'Section 23', href: '/Section_12' },
      { label: 'Section 24', href: '/Section_12' },
      { label: 'Section 25', href: '/Section_12' },
    ],
  },
];

const OPEN_DELAY = 80;   // ms before opening submenu (small)
const CLOSE_DELAY = 260; // ms before closing submenu (prevents accidental hide)

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (openTimer.current) clearTimeout(openTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleMouseEnter = (i) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => {
      setOpenIndex(i);
      openTimer.current = null;
    }, OPEN_DELAY);
  };

  const handleMouseLeave = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenIndex(null);
      closeTimer.current = null;
    }, CLOSE_DELAY);
  };

  const toggleSubmenu = (i) => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenIndex(openIndex === i ? null : i);
  };

  // Helper to tell if href should be treated as a link
  const hasHref = (href) => !!href && href.trim() !== '';

  return (
    <header className="w-full bg-gray-900 text-white fixed top-0 left-0 z-[1000]">
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto py-[12px] px-[20px]">
        <div className="brand">
          <Link href="/" className="text-white font-bold text-[18px] no-underline">MyApp</Link>
        </div>

        <ul className="nav-list flex gap-[12px] list-none m-0 p-0 items-center">
          {MENU.map((item, i) => {
            const isOpen = openIndex === i;
            const itemHasHref = hasHref(item.href);

            return (
              <li
                key={`${i}-${item.label}`}
                className={`nav-item relative ${item.submenu ? 'group' : ''} ${isOpen ? 'open' : ''}`}
                onMouseEnter={() => item.submenu && handleMouseEnter(i)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                <div
                  className="nav-link inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-[6px] text-gray-200 cursor-pointer"
                  // If item has no link but has submenu, make it tabbable/clickable
                  onClick={() => item.submenu && toggleSubmenu(i)}
                  role={item.submenu ? 'button' : undefined}
                  tabIndex={item.submenu ? 0 : undefined}
                  aria-haspopup={item.submenu ? 'true' : undefined}
                  aria-expanded={item.submenu ? isOpen : undefined}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && item.submenu) {
                      e.preventDefault();
                      toggleSubmenu(i);
                    }
                  }}
                >
                  {itemHasHref ? (
                    <Link href={item.href} className="text-inherit no-underline">{item.label}</Link>
                  ) : (
                    // no href => render a non-link label
                    <span className="nav-label text-inherit text-[15px]">{item.label}</span>
                  )}
                  {item.submenu && <span className="caret text-[12px] opacity-80">▾</span>}
                </div>

                {item.submenu && (
                  <ul
                    className={[
                      // base styles
                      'submenu absolute left-0 top-[calc(100%+8px)] bg-[#0b1220] min-w-[180px] rounded-lg py-[8px] list-none m-0 z-50',
                      'shadow-[0_6px_18px_rgba(2,6,23,0.6)]',
                      'transform origin-top transition-[opacity,transform] duration-[120ms]',
                      'pointer-events-none opacity-0 -translate-y-[6px] scale-[0.98]',
                      // hover (group) to open
                      'group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto',
                      // if state-open -> visible
                      isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : '',
                    ].join(' ')}
                    aria-hidden={!isOpen}
                  >
                    {item.submenu.map((sub, j) => {
                      const subHasHref = hasHref(sub.href);
                      return (
                        <li key={`${i}-${j}-${sub.label}`} className="px-[14px] py-[6px]">
                          {subHasHref ? (
                            <Link href={sub.href} className="text-gray-200 block no-underline hover:bg-[rgba(255,255,255,0.03)] hover:rounded-[6px]">
                              {sub.label}
                            </Link>
                          ) : (
                            <span className="sub-label text-gray-200 block">{sub.label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Small global styles to precisely match the original media query at max-width:720px */}
      <style jsx global>{`
        @media (max-width: 720px) {
          .navbar { padding: 10px 12px; }
          .nav-list { gap: 6px; overflow-x: auto; padding-bottom: 6px; }
          .submenu {
            position: static !important;
            transform: none !important;
            opacity: 1 !important;
            display: none !important;
            box-shadow: none !important;
            background: transparent !important;
            padding: 0 !important;
            pointer-events: auto !important;
          }
          .nav-item.open .submenu {
            display: block !important;
          }
          .submenu li { padding: 8px 0 8px 12px !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;