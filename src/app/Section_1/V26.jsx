// pages/index.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function V26() {
  const containerRef = useRef(null);
  const [dark, setDark] = useState(false);

  // helper to inject CDN script if needed
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error("Failed to load " + src));
      document.head.appendChild(s);
    });

  useEffect(() => {
    let ctx;

    (async () => {
      let gsap;
      let ScrollTrigger;
      try {
        const gsapModule = await import("gsap");
        gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        const st = await import("gsap/ScrollTrigger");
        ScrollTrigger = st.ScrollTrigger || st.default || st;
        gsap.registerPlugin(ScrollTrigger);
      } catch (err) {
        try {
          await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js");
          await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js");
          gsap = window.gsap;
          ScrollTrigger = window.ScrollTrigger || (window.gsap && window.gsap.ScrollTrigger);
          gsap?.registerPlugin?.(ScrollTrigger);
        } catch (cdnErr) {
          console.warn("GSAP not available:", cdnErr);
          return;
        }
      }

      ctx = gsap.context(() => {
        gsap.from(".card", {
          scrollTrigger: {
            trigger: ".grid-wrap",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 28,
          opacity: 0,
          scale: 0.985,
          stagger: 0.06,
          duration: 0.7,
          ease: "power3.out",
        });

        const cards = gsap.utils.toArray(".card");
        cards.forEach((el) => {
          const enter = (e) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
            gsap.to(el, { rotateX: -y, rotateY: x, scale: 1.02, duration: 0.3, ease: "power3.out" });
          };
          const move = (e) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
            gsap.to(el, { rotateX: -y, rotateY: x, duration: 0.25, ease: "power3.out" });
          };
          const leave = () => {
            gsap.to(el, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.6, ease: "elastic.out(1,0.6)" });
          };
          el.addEventListener("mouseenter", enter);
          el.addEventListener("mousemove", move);
          el.addEventListener("mouseleave", leave);
        });
      }, containerRef);
    })();

    return () => {
      try {
        ctx?.revert?.();
      } catch (e) {}
    };
  }, []);

  const Icon = {
    Analytics: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <rect x="6" y="12" width="2" height="6" rx="1" fill="currentColor" />
        <rect x="10" y="8" width="2" height="10" rx="1" fill="currentColor" />
        <rect x="14" y="4" width="2" height="14" rx="1" fill="currentColor" />
        <rect x="18" y="2" width="2" height="16" rx="1" fill="currentColor" />
      </svg>
    ),
    Collaboration: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M16 11a4 4 0 10-8 0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21v-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="8" r="2" fill="currentColor" />
        <circle cx="6" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
    Deploy: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3v12" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8l5-5 5 5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21h14" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Integrations: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 12h6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 12h6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15v6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Monitoring: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 12s-4-8-9-8-9 8-9 8 4 8 9 8 9-8 9-8z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    Security: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Support: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 15a2 2 0 01-2 2h-7l-4 3v-3H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  const baseCard = `card border shadow-md rounded-2xl p-6 flex flex-col`;
  const baseSmall = `card border shadow rounded-lg p-4 flex flex-col`;

  const textMuted = dark ? "text-slate-300" : "text-slate-500";
  const textStrong = dark ? "text-white" : "text-slate-800";
  const surface = dark ? "bg-black border-white/10 text-white" : "bg-white border-slate-200 text-slate-800";

  // Bottom meta row component (exact content per your request)
  const MetaRow = ({ incidents = 1 }) => (
    <div className="mt-4 pt-3 border-t border-slate-200/40 grid grid-cols-4 gap-2 text-xs">
      <div className={textMuted}>Last audit <span className={textStrong}>3mo</span></div>
      <div className={textMuted}>Open incidents <span className="font-medium text-red-500">{incidents}</span></div>
      <div className={textMuted}><span className={textStrong}>5</span> collaborators</div>
      <div className={textMuted}>SLA <span className={textStrong}>99.9%</span></div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`min-h-screen ${dark ? "bg-black text-white" : "bg-gradient-to-b  from-slate-50 to-sky-50 text-slate-800"}`}
    >
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-2 flex items-center justify-between">
        <h2 className={`text-2xl md:text-3xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>Lorem ipsum </h2>
        <button
          onClick={() => setDark((v) => !v)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
            dark ? "bg-white/10 text-white border-white/20 hover:bg-white/15" : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
          }`}
          aria-label="Toggle theme"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <main id="grid" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid-wrap rounded-xl overflow-visible">
          <div className="grid grid-cols-6 grid-rows-6 gap-4 relative" style={{ minHeight: "760px" }} aria-label="decorative-grid">
            {/* 1: col-span-2 row-span-2 */}
            <article className={`${baseCard} col-span-2 row-span-2 ${surface}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${dark ? "bg-indigo-500 text-white" : "bg-indigo-600 text-white"} flex items-center justify-center shadow`}>
                  {Icon.Analytics}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <MetaRow incidents={1} />
            </article>

            {/* 2: col-span-2 row-span-2 col-start-2 row-start-3 */}
            <article className={`${baseCard} col-span-2 row-span-2 col-start-2 row-start-3 ${surface}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`text-2xl font-bold ${dark ? "text-rose-300" : "text-rose-500"}`}>{Icon.Collaboration}</div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <img className="w-8 h-8 rounded-full" src="https://placehold.co/40x40/8b5cf6/ffffff?text=A" alt="A" />
                <img className="w-8 h-8 rounded-full" src="https://placehold.co/40x40/06b6d4/ffffff?text=B" alt="B" />
                <img className="w-8 h-8 rounded-full" src="https://placehold.co/40x40/f472b6/ffffff?text=C" alt="C" />
              </div>
              <MetaRow incidents={2} />
            </article>

            {/* 3: col-span-2 row-span-2 col-start-3 row-start-5 */}
            <article className={`${baseCard} col-span-2 row-span-2 col-start-3 row-start-5 ${surface}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`text-2xl font-bold ${dark ? "text-amber-300" : "text-amber-500"}`}>{Icon.Deploy}</div>
              </div>
              <div className={`mt-3 text-xs ${textMuted}`}>Lorem ipsum  <span className={textStrong}>14m ago</span></div>
              <MetaRow incidents={0} />
            </article>

            {/* 5: col-span-2 row-span-2 col-start-5 row-start-3 */}
            <article className={`${baseCard} col-span-2 row-span-2 col-start-5 row-start-3 ${surface}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`text-2xl font-bold ${dark ? "text-lime-300" : "text-lime-600"}`}>{Icon.Monitoring}</div>
              </div>
              <MetaRow incidents={1} />
            </article>

            {/* 6: col-span-2 row-span-2 col-start-1 row-start-5 */}
            <article className={`${baseCard} col-span-2 row-span-2 col-start-1 row-start-5 ${surface}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`text-2xl font-bold ${dark ? "text-violet-300" : "text-violet-600"}`}>{Icon.Security}</div>
              </div>
              <div className="mt-3">
                <span className={`px-2 py-1 text-xs rounded-full ${dark ? "bg-violet-900 text-violet-200" : "bg-violet-100 text-violet-700"}`}>SOC2</span>
              </div>
              <MetaRow incidents={0} />
            </article>

            {/* 7: col-span-2 row-span-2 col-start-5 row-start-5 */}
            <article className={`${baseCard} col-span-2 row-span-2 col-start-5 row-start-5 ${surface}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`text-2xl font-bold ${dark ? "text-pink-300" : "text-pink-500"}`}>{Icon.Support}</div>
              </div>
              <div className={`mt-3 text-xs ${textMuted}`}>Lorem ipsum  <span className={textStrong}>Chat, Email</span></div>
              <MetaRow incidents={0} />
            </article>

            {/* 10: col-span-2 row-span-2 col-start-3 row-start-1 */}
            <article className={`${baseCard} col-span-2 row-span-2 col-start-3 row-start-1 ${surface}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${dark ? "bg-sky-600 text-white" : "bg-sky-500 text-white"} flex items-center justify-center shadow`}>
                  {Icon.Integrations}
                </div>
                <div>
                  <h3 className="font-semibold">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className={`mt-3 text-xs ${textMuted}`}>Connected <span className={textStrong}>12 services</span></div>
              <MetaRow incidents={0} />
            </article>

            {/* 16: col-span-2 row-span-2 col-start-5 row-start-1 */}
            <article className={`${baseCard} col-span-2 row-span-2 col-start-5 row-start-1 ${surface}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${dark ? "bg-emerald-600 text-white" : "bg-emerald-600 text-white"} flex items-center justify-center shadow`}>
                  {Icon.Analytics}
                </div>
                <div>
                  <h3 className="font-semibold">Lorem ipsum </h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className={`mt-3 text-xs ${textMuted}`}>Lorem ipsum  <span className={textStrong}>+3.1%</span></div>
              <MetaRow incidents={1} />
            </article>

            {/* Small items 17 & 18 intentionally removed as requested */}
              {/* 17: row-span-2 col-start-1 row-start-3 (1 col wide) */}
            <div className={`${baseSmall} row-span-2 col-start-1 row-start-3 ${surface}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Ullamco</div>
                  <div className={`text-xs mt-1 ${textMuted}`}>Laboris Nisi</div>
                </div>
                <span className={`px-2 py-1 text-xs rounded ${dark ? "bg-emerald-900 text-emerald-200" : "bg-emerald-100 text-emerald-700"}`}>14</span>
              </div>
            </div>

            {/* 18: row-span-2 col-start-4 row-start-3 (1 col wide) */}
            <div className={`${baseSmall} row-span-2 col-start-4 row-start-3 ${surface}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Ut Aliquip</div>
                  <div className={`text-xs mt-1 ${textMuted}`}>Ex Ea</div>
                </div>
                <span className={`px-2 py-1 text-xs rounded ${dark ? "bg-indigo-900 text-indigo-200" : "bg-indigo-100 text-indigo-700"}`}>1,520</span>
              </div>
            </div>
         
          </div>
        </div>
      </main>
    </div>
  );
}
