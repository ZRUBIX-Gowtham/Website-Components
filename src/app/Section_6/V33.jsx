// pages/index.js
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function V33() {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pagesRef = useRef(null);
  const mobilePanelRef = useRef(null);


  // Close dropdown if clicked outside
  useEffect(() => {
    function onDoc(e) {
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setPagesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // prevent body scroll when mobile panel open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [mobileOpen]);



  // Hamburger bar classes (morph to X when open)
  const hamburgerClasses = `relative inline-block w-[22px] h-[2px] ${
    mobileOpen ? "bg-transparent" : "bg-black"
  } before:content-[''] before:absolute before:left-0 before:w-[22px] before:h-[2px] before:bg-black after:content-[''] after:absolute after:left-0 after:w-[22px] after:h-[2px] after:bg-black before:transition-transform after:transition-transform before:duration-200 after:duration-200 ${
    mobileOpen
      ? "before:top-0 before:rotate-45 after:top-0 after:-rotate-45"
      : "before:-top-[7px] after:top-[7px]"
  }`;

  return (
    <header className="site-header bg-white sticky top-0 z-50 border-b border-slate-100">
      <div className="container-large navbar max-w-[1400px] mx-auto mt-0 min-[901px]:mt-[50px] px-4 py-4 flex items-center justify-between gap-4 h-[72px]">
        <a href="#" className="brand inline-flex items-center no-underline" aria-label="Home">
          <Image
            className="brand-logo h-auto w-auto block"
            src="https://cdn.prod.website-files.com/68487f7195aeb42041c38e2e/68488563182b7770811d0a2e_Logo.svg"
            alt="Orderze logo"
            width={140}   // adjust as needed
            height={40}
            priority
          />
        </a>

        <nav
          className="main-nav flex items-center gap-6 flex-1 justify-center max-[900px]:hidden"
          aria-label="Primary navigation"
        >
          <ul className="menu flex gap-3 items-center" role="menubar" aria-label="Main menu">
            <li role="none">
              <a
                href="#"
                className="menu-link inline-flex items-center gap-2 py-2 px-[0.6rem] text-[#0b1220] bg-transparent rounded-[6px] text-[0.98rem] no-underline transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
              >
                Lorem ipsum
              </a>
            </li>
            <li role="none">
              <a
                href="#"
                className="menu-link inline-flex items-center gap-2 py-2 px-[0.6rem] text-[#0b1220] bg-transparent rounded-[6px] text-[0.98rem] no-underline transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
              >
                Lorem ipsum
              </a>
            </li>

            <li
              className="has-dropdown relative"
              role="none"
              ref={pagesRef}
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button
                className="menu-link dropdown-toggle inline-flex items-center gap-2 py-2 px-[0.6rem] text-[#0b1220] bg-transparent rounded-[6px] text-[0.98rem] no-underline transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                aria-haspopup="true"
                aria-expanded={pagesOpen}
                aria-controls="pages-dropdown"
                onClick={() => setPagesOpen((s) => !s)}
                onFocus={() => setPagesOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.parentElement.contains(e.relatedTarget)) {
                    setPagesOpen(false);
                  }
                }}
                type="button"
              >
                Lorem ipsum
                <span className="chev ml-[6px] text-[12px] opacity-80" aria-hidden>
                  ▾
                </span>
              </button>

              <div
                id="pages-dropdown"
                role="menu"
                aria-hidden={!pagesOpen}
                className={`dropdown absolute top-[40px] left-1/2 -translate-x-1/2 ${
                  pagesOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-[6px]"
                } min-w-[260px] bg-white shadow-[0_6px_18px_rgba(11,17,23,0.06)] rounded-[8px] p-2 grid grid-cols-2 gap-y-2 gap-x-3 border border-[#eef2f6] transition duration-150 ease-in-out z-40`}
              >
                <div className="dropdown-column flex flex-col p-1">
                  <a
                    href="#"
                    className="dd-link py-2 px-[0.6rem] rounded-[6px] text-[#0b1220] text-[0.95rem] no-underline transition-colors duration-100 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                  >
                    Lorem ipsum
                  </a>
                  <a
                    href="#"
                    className="dd-link py-2 px-[0.6rem] rounded-[6px] text-[#0b1220] text-[0.95rem] no-underline transition-colors duration-100 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                  >
                    Lorem ipsum
                  </a>
                  <a
                    href="#"
                    className="dd-link py-2 px-[0.6rem] rounded-[6px] text-[#0b1220] text-[0.95rem] no-underline transition-colors duration-100 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                  >
                    Lorem ipsum
                  </a>
                </div>
                <div className="dropdown-column flex flex-col p-1">
                  <a
                    href="#"
                    className="dd-link py-2 px-[0.6rem] rounded-[6px] text-[#0b1220] text-[0.95rem] no-underline transition-colors duration-100 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                  >
                    Lorem ipsum
                  </a>
                  <a
                    href="/blog"
                    role="menuitem"
                    className="dd-link py-2 px-[0.6rem] rounded-[6px] text-[#0b1220] text-[0.95rem] no-underline transition-colors duration-100 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                  >
                    Lorem ipsum
                  </a>
                  <a
                    href="/case-study"
                    role="menuitem"
                    className="dd-link py-2 px-[0.6rem] rounded-[6px] text-[#0b1220] text-[0.95rem] no-underline transition-colors duration-100 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                  >
                    Lorem ipsum
                  </a>
                </div>
              </div>
            </li>

            <li role="none">
              <a
                href="/pricing"
                role="menuitem"
                className="menu-link inline-flex items-center gap-2 py-2 px-[0.6rem] text-[#0b1220] bg-transparent rounded-[6px] text-[0.98rem] no-underline transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
              >
                Lorem ipsum
              </a>
            </li>
            <li role="none">
              <a
                href="/contact-us"
                role="menuitem"
                className="menu-link inline-flex items-center gap-2 py-2 px-[0.6rem] text-[#0b1220] bg-transparent rounded-[6px] text-[0.98rem] no-underline transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
              >
                Lorem ipsum
              </a>
            </li>
            <li role="none">
              <a
                href="/#testimonial"
                role="menuitem"
                className="menu-link inline-flex items-center gap-2 py-2 px-[0.6rem] text-[#0b1220] bg-transparent rounded-[6px] text-[0.98rem] no-underline transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
              >
                Lorem ipsum
              </a>
            </li>
          </ul>
        </nav>

        <div className="actions flex items-center gap-3">
          {/* Keep only one Get started on desktop. Hidden on mobile via CSS. */}
          <a
            href="/pricing"
            className="btn get-started inline-flex items-center justify-center py-[10px] px-[26px] rounded-full bg-gradient-to-b from-[#071007] to-[#0b1208] text-[#7be84a] font-semibold text-[0.95rem] no-underline shadow-[0_8px_26px_rgba(6,10,6,0.25)] border border-black/5 transition-transform duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 focus-visible:-translate-y-0.5 max-[900px]:hidden"
            aria-label="Get started"
          >
            Lorem ipsum
          </a>

          <button
            className="menu-toggle hidden bg-transparent border-0 p-2 rounded-[6px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[rgba(11,118,255,0.12)] max-[900px]:inline-block"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-panel"
            onClick={() => setMobileOpen((s) => !s)}
            type="button"
          >
            <span className={hamburgerClasses} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile panel (only visible on small screens via CSS) */}
      <div
        id="mobile-panel"
        ref={mobilePanelRef}
        className={`mobile-panel fixed inset-x-0 top-[200px] bottom-0 bg-white/98 p-4 overflow-auto transition duration-150 ease-in-out z-[60] min-[901px]:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-[6px]"
        }`}
        aria-hidden={!mobileOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <div className="container-large max-w-[1400px] mx-auto">
          <nav
            className="mobile-menu flex flex-col gap-2"
            aria-label="Mobile menu"
            onClick={(e) => {
              // Close panel when any link inside is clicked
              const anchor = e.target.closest("a");
              if (anchor) setMobileOpen(false);
            }}
          >
            <a
              href="/about-us"
              className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
            >
              Lorem ipsum
            </a>
            <a
              href="/feature"
              className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
            >
              Lorem ipsum
            </a>

            <details>
              <summary className="details-summary py-[0.6rem] px-[0.8rem] rounded-[8px] cursor-pointer list-none hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a] [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                Lorem ipsum
              </summary>
              <div className="details-list mt-2 flex flex-col gap-2">
                <a
                  href="/about-us"
                  className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                >
                  Lorem ipsum
                </a>
                <a
                  href="/pricing"
                  className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                >
                 Lorem ipsum
                </a>
                <a
                  href="/contact-us"
                  className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                >
                  Lorem ipsum
                </a>
                <a
                  href="/utility/terms-conditions"
                  className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                >
                  Lorem ipsum
                </a>
                <a
                  href="/blog"
                  className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                >
                  Lorem ipsum
                </a>
                <a
                  href="/case-study"
                  className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
                >
                  Lorem ipsum
                </a>
              </div>
            </details>

            <a
              href="/pricing"
              className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
            >
              Lorem ipsum
            </a>
            <a
              href="/contact-us"
              className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
            >
              Lorem ipsum
            </a>
            <a
              href="/#testimonial"
              className="py-[0.65rem] px-[0.8rem] rounded-[8px] block no-underline text-[#0b1220] transition-colors duration-150 ease-linear hover:text-[#7be84a] focus:text-[#7be84a] focus-visible:text-[#7be84a]"
            >
              Lorem ipsum
            </a>

            {/* Keep only one Get started inside mobile panel */}
            <div className="mobile-cta mt-4">
              <a href="/pricing" className="btn primary inline-flex items-center gap-2 py-[0.6rem] px-[0.9rem] rounded-[8px] no-underline font-semibold text-[0.95rem] border border-transparent bg-[#0b1220] text-[#7be84a]">
                Lorem ipsum
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
