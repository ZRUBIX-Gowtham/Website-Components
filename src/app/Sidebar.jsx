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
];

const OPEN_DELAY = 80;   // ms before opening submenu (small)
const CLOSE_DELAY = 160; // ms before closing submenu (prevents accidental hide)

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
    <header className="nav-wrap">
      <nav className="navbar">
        <div className="brand">
          <Link href="/">MyApp</Link>
        </div>

        <ul className="nav-list">
          {MENU.map((item, i) => {
            const isOpen = openIndex === i;
            const itemHasHref = hasHref(item.href);

            return (
              <li
                key={`${i}-${item.label}`}
                className={`nav-item ${item.submenu ? 'has-sub' : ''} ${isOpen ? 'open' : ''}`}
                onMouseEnter={() => item.submenu && handleMouseEnter(i)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                <div
                  className="nav-link"
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
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    // no href => render a non-link label
                    <span className="nav-label">{item.label}</span>
                  )}
                  {item.submenu && <span className="caret">▾</span>}
                </div>

                {item.submenu && (
                  <ul className="submenu" aria-hidden={!isOpen}>
                    {item.submenu.map((sub, j) => {
                      const subHasHref = hasHref(sub.href);
                      return (
                        <li key={`${i}-${j}-${sub.label}`}>
                          {subHasHref ? (
                            <Link href={sub.href}>{sub.label}</Link>
                          ) : (
                            <span className="sub-label">{sub.label}</span>
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

      <style jsx>{`
        .nav-wrap {
          width: 100%;
          background: #111827;
          color: #fff;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 20px;
        }

        .brand a {
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          text-decoration: none;
        }

        .nav-list {
          display: flex;
          gap: 12px;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #e5e7eb;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
        }

        .nav-link a {
          color: inherit;
          text-decoration: none;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .nav-label {
          color: inherit;
          font-size: 15px;
        }

        .caret {
          font-size: 12px;
          opacity: 0.8;
        }

        /* Submenu */
        .submenu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: #0b1220;
          min-width: 180px;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(2, 6, 23, 0.6);
          padding: 8px 0;
          list-style: none;
          margin: 0;
          
          opacity: 0;
          transform-origin: top;
          transform: translateY(-6px) scale(0.98);
          transition: opacity 120ms ease, transform 120ms ease;
          pointer-events: none;
          z-index: 50;
        }

        .nav-item.open .submenu,
        .nav-item:hover .submenu {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
          
        }

        .submenu li {
          padding: 6px 14px;
          
        }

        .submenu li a,
        .submenu li .sub-label {
          color: #e5e7eb;
          text-decoration: none;
          display: block;
        }

        .submenu li a:hover {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
        }

        .sub-label {
          cursor: default;
        }

        /* Responsive: collapse to stacked menu on small screens */
        @media (max-width: 720px) {
          .navbar {
            padding: 10px 12px;
          }
          .nav-list {
            gap: 6px;
            overflow-x: auto;
            padding-bottom: 6px;
          }
          .submenu {
            position: static;
            transform: none;
            opacity: 1;
            display: none;
            box-shadow: none;
            background: transparent;
            padding: 0;
          }
          .nav-item.open .submenu {
            display: block;
          }
          .submenu li {
            padding: 8px 0 8px 12px;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;