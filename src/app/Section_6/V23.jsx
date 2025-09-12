"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#", label: "Lipsum" },
  { href: "#", label: "Lorem Ser" },
];

const productsSubmenu = [
  { href: "#", label: "Lorem ipsum dolor" },
  { href: "#", label: "Dolor sit amet" },
];

export default function V23() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Theme state for header only: true = dark header, false = light header
  const [isDark, setIsDark] = useState(false);

  // Initialize header theme on mount (respects localStorage, then system preference)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        setIsDark(true);
      } else if (stored === "light") {
        setIsDark(false);
      } else {
        const prefersDark =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
      }
    } catch (e) {
      // ignore (SSR or localStorage blocked)
    }
  }, []);

  // Toggle header theme (only header visuals)
  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  }

  // Close user menu when clicking outside
  useEffect(() => {
    function onDoc(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Header-only color helpers
  const headerBg = isDark ? "bg-black/95 text-white" : "bg-white/95 text-black";
  const headerBorder = isDark ? "border-gray-800" : "border-gray-200";
  const navLinkBase = isDark
    ? "text-gray-200 hover:text-white"
    : "text-gray-700 hover:text-gray-900";
  const submenuBg = isDark ? "bg-gray-900" : "bg-white";
  const submenuText = isDark ? "text-gray-200 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-50";
  const searchBg = isDark ? "bg-gray-800" : "bg-gray-100";
  const inputText = isDark ? "text-gray-200 placeholder-gray-400" : "text-gray-700 placeholder-gray-400";
  const ctaBg = isDark ? "bg-indigo-500 hover:bg-indigo-600" : "bg-indigo-600 hover:bg-indigo-700";

  return (
    <header className={`sticky top-0 z-40 ${headerBg} backdrop-blur-sm shadow-sm my-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Link href="#" className="inline-flex items-center gap-2">
              <Image
                src="https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/gpe1q593eff88dc414e14a054e312785fd8a8?orig=true"
                alt="Logo"
                width={36}
                height={36}
                className="rounded-sm"
              />
              <span className={`font-semibold text-lg ${isDark ? "text-white" : "text-black"}`}>Lorem ipsum</span>
            </Link>
          </div>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex md:items-center md:gap-6" aria-label="Main navigation">
            {navLinks.map((link, idx) => {
              if (link.label === "Lorem Ser") {
                // Using group to allow CSS-only show/hide of submenu on hover/focus
                return (
                  <div key={`nav-${idx}`} className="relative group">
                    <button
                      aria-haspopup="true"
                      className={`flex items-center gap-1 text-sm px-2 py-1 rounded-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${navLinkBase}`}
                    >
                      <span>{link.label}</span>
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180 group-focus:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.66l3.71-3.47a.75.75 0 111.02 1.1l-4.22 3.95a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Submenu (desktop) — shown via CSS on hover/focus */}
                    <div
                      className={`products-submenu absolute left-1/2 top-full -translate-x-1/2 mt-2 w-56 ${submenuBg} border ${headerBorder} rounded-md shadow-lg py-2 text-sm ring-1 ring-black ring-opacity-5 z-50 hidden group-hover:block group-focus-within:block`}
                      role="menu"
                      aria-label="Lorem Ser submenu"
                    >
                      {productsSubmenu.map((s, j) => (
                        <Link
                          key={`prod-${j}`}
                          href={s.href}
                          className={`block px-4 py-2 text-center ${submenuText}`}
                          role="menuitem"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={`nav-${idx}`}
                  href={link.href}
                  className={`text-sm px-2 py-1 rounded-md transition ${navLinkBase}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Search, Theme toggle, CTA, User */}
          <div className="flex items-center gap-3">
            {/* optional search - hide on small screens */}
            <div className={`hidden md:flex items-center ${searchBg} px-2 py-1 rounded-md`}>
              <svg className={`w-4 h-4 mr-2 ${isDark ? "text-gray-300" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input type="search" placeholder="Search Lorem Ser..." className={`bg-transparent outline-none text-sm ${inputText}`} aria-label="Search" />
            </div>

            <Link href="#" className={`hidden sm:inline-block ${ctaBg} text-white text-sm px-4 py-2 rounded-md transition`}>
              Explore Now
            </Link>

            <button
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label="Toggle header dark / light"
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-md border ${isDark ? "border-gray-700 bg-black/60" : "border-gray-200 bg-white/60"} transition focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zm0 11a4 4 0 100-8 4 4 0 000 8zM4.5 12a1 1 0 011-1H7a1 1 0 110 2H5.5a1 1 0 01-1-1zm11 0a1 1 0 011-1H19a1 1 0 110 2h-1.5a1 1 0 01-1-1zM6.22 6.22a1 1 0 011.42 0l.88.88a1 1 0 01-1.42 1.42l-.88-.88a1 1 0 010-1.42zM15.48 15.48a1 1 0 011.42 0l.88.88a1 1 0 01-1.42 1.42l-.88-.88a1 1 0 010-1.42zM6.22 17.78a1 1 0 010-1.42l.88-.88a1 1 0 111.42 1.42l-.88.88a1 1 0 01-1.42 0zM15.48 8.52a1 1 0 010-1.42l.88-.88a1 1 0 111.42 1.42l-.88.88a1 1 0 01-1.42 0z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-md border ${isDark ? "border-gray-700 bg-black/60" : "border-gray-200 bg-white/60"} transition focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (expanded) */}
      {mobileOpen && (
        <div className={`md:hidden ${submenuBg} border-t ${headerBorder}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, idx) => {
              if (link.label === "Lorem Ser") {
                return (
                  <div key={`mobile-nav-${idx}`}>
                    {/* native disclosure widget — no React state needed */}
                    <details className="group">
                      <summary
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${navLinkBase} cursor-pointer list-none`}
                      >
                        <span className="text-center w-full">{link.label}</span>
                        <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.66l3.71-3.47a.75.75 0 111.02 1.1l-4.22 3.95a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                        </svg>
                      </summary>

                      <div className="pl-5 pr-3 py-1 space-y-1">
                        {productsSubmenu.map((s, j) => (
                          <Link
                            key={`mobile-prod-${j}`}
                            href={s.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium text-center ${submenuText}`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  </div>
                );
              }
              return (
                <Link
                  key={`mobile-nav-${idx}`}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${navLinkBase}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="py-2">
              <Link
                href="#"
                className={`block w-full text-center ${ctaBg} text-white text-base font-medium px-4 py-2 rounded-md transition`}
                onClick={() => setMobileOpen(false)}
              >
                Lorem ipsum
              </Link>
            </div>
            <div className={`flex items-center ${searchBg} px-3 py-2 rounded-md w-full`}>
              <svg className={`w-5 h-5 mr-2 ${isDark ? "text-gray-300" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input type="search" placeholder="Lorem Ser..." className={`bg-transparent outline-none text-base ${inputText}`} aria-label="Search" />
            </div>
            <button
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label="Toggle header dark / light"
              className={`flex items-center justify-center w-full h-10 rounded-md border ${isDark ? "border-gray-700 bg-black/60" : "border-gray-200 bg-white/60"} transition focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2`}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zm0 11a4 4 0 100-8 4 4 0 000 8zM4.5 12a1 1 0 011-1H7a1 1 0 110 2H5.5a1 1 0 01-1-1zm11 0a1 1 0 011-1H19a1 1 0 110 2h-1.5a1 1 0 01-1-1zM6.22 6.22a1 1 0 011.42 0l.88.88a1 1 0 01-1.42 1.42l-.88-.88a1 1 0 010-1.42zM15.48 15.48a1 1 0 011.42 0l.88.88a1 1 0 01-1.42 1.42l-.88-.88a1 1 0 010-1.42zM6.22 17.78a1 1 0 010-1.42l.88-.88a1 1 0 111.42 1.42l-.88.88a1 1 0 01-1.42 0zM15.48 8.52a1 1 0 010-1.42l.88-.88a1 1 0 111.42 1.42l-.88.88a1 1 0 01-1.42 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}