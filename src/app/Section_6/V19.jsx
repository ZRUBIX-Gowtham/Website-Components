"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#", label: "Lorem" },
  { href: "#", label: "Ipsum" },
  { href: "#", label: "Dolor" },
  { href: "#", label: "Sit" },
];

const productsSubmenu = [
  { href: "#", label: "Amet" },
  { href: "#", label: "Consectetur" },
  { href: "#", label: "Adipiscing" },
  { href: "#", label: "Elit" },
];

export default function V19() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Desktop submenu (Products)
  const [prodOpen, setProdOpen] = useState(false);

  // Mobile submenu expansion
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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

  // Close desktop submenu on Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setProdOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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
              <span className={`font-semibold text-lg ${isDark ? "text-white" : "text-black"}`}>
                Lorem Ipsum
              </span>
            </Link>
          </div>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex md:items-center md:gap-6" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.label === "Ipsum") { // Changed from "Products" to "Ipsum"
                // Products item with submenu — wrapper covers both trigger & submenu
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setProdOpen(true)}
                    onMouseLeave={() => setProdOpen(false)}
                  >
                    <button
                      onClick={() => setProdOpen((s) => !s)}
                      aria-haspopup="true"
                      aria-expanded={prodOpen}
                      className={`flex items-center gap-1 text-sm px-2 py-1 rounded-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${navLinkBase}`}
                      onFocus={() => setProdOpen(true)}
                      onBlur={() => {
                        // small timeout to allow focus to move into submenu links
                        setTimeout(() => {
                          const active = document.activeElement;
                          // if focus is not in this menu, close
                          if (!active || !(active instanceof Element) || !active.closest('.products-submenu')) {
                            setProdOpen(false);
                          }
                        }, 10);
                      }}
                    >
                      <span>{link.label}</span>
                      <svg className={`w-4 h-4 transition-transform ${prodOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.66l3.71-3.47a.75.75 0 111.02 1.1l-4.22 3.95a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Submenu (desktop) — also keeps itself open while hovered */}
                    {prodOpen && (
                      <div
                        className={`products-submenu absolute left-0 mt-1 w-40 ${submenuBg} border ${headerBorder} rounded-md shadow-lg py-2 text-sm ring-1 ring-black ring-opacity-5 z-50`}
                        role="menu"
                        aria-label="Products submenu"
                        onMouseEnter={() => setProdOpen(true)}
                        onMouseLeave={() => setProdOpen(false)}
                      >
                        {productsSubmenu.map((s, idx) => (
                          <Link
                            key={s.label + idx}
                            href={s.href}
                            className={`block px-4 py-2 ${submenuText}`}
                            role="menuitem"
                            onClick={() => setProdOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // regular nav items
              return (
                <Link
                  key={link.href + link.label}
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
              <svg
                className={`w-4 h-4 mr-2 ${isDark ? "text-gray-300" : "text-gray-500"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                type="search"
                placeholder="Lorem Ipsum"
                className={`bg-transparent outline-none text-sm ${inputText}`}
                aria-label="Search"
              />
            </div>

            <Link
              href="#"
              className={`hidden sm:inline-block ${ctaBg} text-white text-sm px-4 py-2 rounded-md transition`}
            >
              Lorem Ipsum
            </Link>

            <button
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label="Toggle header dark / light"
              className={`flex items-center justify-center w-10 h-10 rounded-md border ${isDark ? "border-gray-700 bg-black/60" : "border-gray-200 bg-white/60"} transition focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              {isDark ? (
                // Moon icon (dark active)
                <svg className="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                // Sun icon (light active)
                <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zm0 11a4 4 0 100-8 4 4 0 000 8zM4.5 12a1 1 0 011-1H7a1 1 0 110 2H5.5a1 1 0 01-1-1zm11 0a1 1 0 011-1H19a1 1 0 110 2h-1.5a1 1 0 01-1-1zM6.22 6.22a1 1 0 011.42 0l.88.88a1 1 0 01-1.42 1.42l-.88-.88a1 1 0 010-1.42zM15.48 15.48a1 1 0 011.42 0l.88.88a1 1 0 01-1.42 1.42l-.88-.88a1 1 0 010-1.42zM6.22 17.78a1 1 0 010-1.42l.88-.88a1 1 0 111.42 1.42l-.88.88a1 1 0 01-1.42 0zM15.48 8.52a1 1 0 010-1.42l.88-.88a1 1 0 111.42 1.42l-.88.88a1 1 0 01-1.42 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}