import React, { useState } from "react";

/**
 * V16.js
 * - Preserves your exact content and grid layout.
 * - Adds a scoped light/dark switcher that now also turns the section (root) background fully black.
 * - Card borders become white-ish in dark mode.
 * - Styling is scoped via CSS variables on the component root so other components are unaffected.
 */

export default function V16() {
  const [isDark, setIsDark] = useState(true); // default dark based on your pasted HTML

  const vars = {
    "--bg": isDark ? "#000000" : "#f8fafc",            // root background (now applied)
    "--panel": isDark ? "#000000" : "#ffffff",         // card/panel background
    "--text": isDark ? "#e6eef8" : "#0f172a",          // main text
    "--muted": isDark ? "#9aaec0" : "#64748b",         // muted text
    "--border": isDark ? "rgba(255,255,255,0.18)" : "#e6eef2", // border: white-ish in dark
    "--accent": isDark ? "#60a5fa" : "#2563eb",
    "--card-shadow": isDark
      ? "0 8px 30px rgba(2,6,23,0.65)"
      : "0 10px 30px rgba(2,6,23,0.06)",
  };

  // overlay gradient that looks subtle in both modes (darker in dark)
  const overlayStyle = {
    background: isDark
      ? "radial-gradient(800px 400px at 10% 10%, rgba(96,165,250,0.04), transparent 8%), radial-gradient(700px 350px at 90% 90%, rgba(99,102,241,0.03), transparent 8%)"
      : "radial-gradient(800px 400px at 10% 10%, rgba(96,165,250,0.03), transparent 8%), radial-gradient(700px 350px at 90% 90%, rgba(99,102,241,0.02), transparent 8%)",
    mixBlendMode: "overlay",
  };

  const panelStyle = {
    background: "var(--panel)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    boxShadow: "var(--card-shadow)",
  };

  const smallStyle = {
    background: "var(--panel)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    boxShadow: "0 4px 12px rgba(2,6,23,0.04)",
  };

  return (
    <div
      className="min-h-screen p-6 py-20 relative"
      style={{ ...vars, background: "var(--bg)" }}
      aria-live="polite"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={overlayStyle} />

      <div className="max-w-6xl mx-auto relative">
        <button
          onClick={() => setIsDark((s) => !s)}
          aria-pressed={isDark}
          aria-label="Toggle component theme"
          className="absolute right-6 top-6 z-20 inline-flex items-center gap-3 rounded-full px-3 py-1.5 text-sm font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            background: isDark
              ? "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))"
              : "linear-gradient(180deg,#ffffff,#f1f5f9)",
            boxShadow: "var(--card-shadow)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{
              background: isDark ? "#0a0a0a" : "#ffffff",
              border: "1px solid var(--border)",
              color: "var(--accent)",
              fontSize: 14,
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </span>
          <span style={{ color: "var(--muted)" }}>{isDark ? "Dark" : "Light"}</span>
        </button>

        <header className="mb-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
            Welcome to Our Studio
          </h1>
          <p className="mt-2 max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            A clean 5x5 layout showcasing key sections — simple, readable, and responsive.
          </p>
        </header>

        <div className="grid grid-cols-5 grid-rows-5 gap-4 relative z-10">
          <article
            aria-label="cell-1"
            className="col-span-2 row-span-4 rounded-2xl p-6 flex flex-col justify-between transform transition"
            style={panelStyle}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "var(--text)" }}>
                Our Story
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, urna at pulvinar feugiat,
                neque lectus gravida velit, non luctus arcu mauris sed augue. Integer a mi nec lectus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, urna at pulvinar feugiat, neque lectus
                gravida velit, non luctus arcu mauris sed augue. Integer a mi nec lectus. non luctus arcu mauris sed
                augue. Integer a mi nec lectus. mauris sed augue. Integer a mi nec lectus.
              </p>
            </div>
            <div className="mt-5 text-xs" style={{ color: "var(--muted)" }}>
              Established 2020 • Crafted with care
            </div>
          </article>

          <section
            aria-label="cell-2"
            className="col-span-2 row-span-2 col-start-3 row-start-2 rounded-2xl p-5 flex flex-col justify-between transform transition"
            style={panelStyle}
          >
            <div>
              <h3 className="text-lg font-medium mb-2" style={{ color: "var(--text)" }}>
                Mission
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero non luctus. Donec auctor,
                libero non luctus
              </p>
            </div>
            <div className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
              Focused on clarity & craft
            </div>
          </section>

          <section
            aria-label="cell-3"
            className="col-span-2 row-span-2 col-start-3 row-start-4 rounded-2xl p-5 flex flex-col justify-between transform transition"
            style={panelStyle}
          >
            <div>
              <h3 className="text-lg font-medium mb-2" style={{ color: "var(--text)" }}>
                Vision
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero non luctus. Donec auctor,
                libero non luctus
              </p>
            </div>
            <div className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
              Looking ahead with purpose
            </div>
          </section>

          <div
            aria-label="cell-4"
            className="row-span-2 col-start-5 row-start-1 rounded-xl p-4 flex flex-col justify-between transform transition"
            style={panelStyle}
          >
            <div>
              <h4 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                Events
              </h4>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Next: Sep 24 • Workshop
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Next: Sep 24 • Workshop
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Next: Sep 24 • Workshop
              </p>
            </div>
            <div className="text-right font-bold text-lg" style={{ color: "var(--accent)" }}>
              Upcoming
            </div>
          </div>

          <div
            aria-label="cell-5"
            className="row-span-2 col-start-5 row-start-4 rounded-xl p-4 flex flex-col justify-between transform transition"
            style={panelStyle}
          >
            <div>
              <h4 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                Contact
              </h4>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                hello@example.com
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                hello@example.com
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                hello@example.com
              </p>
            </div>
            <div className="text-right font-bold text-lg" style={{ color: "var(--accent)" }}>
              Get in touch
            </div>
          </div>

          <div
            aria-label="cell-6"
            className="col-start-1 row-start-5 rounded-lg p-3 flex items-center justify-center text-sm font-medium transition"
            style={smallStyle}
          >
            Team
          </div>

          <div
            aria-label="cell-7"
            className="col-start-2 row-start-5 rounded-lg p-3 flex items-center justify-center text-sm font-medium transition"
            style={smallStyle}
          >
            Careers
          </div>

          <div
            aria-label="cell-8"
            className="col-start-3 row-start-1 rounded-lg p-3 flex items-center justify-center text-sm font-medium transition"
            style={smallStyle}
          >
            Design
          </div>

          <div
            aria-label="cell-9"
            className="col-start-4 row-start-1 rounded-lg p-3 flex items-center justify-center text-sm font-medium transition"
            style={smallStyle}
          >
            Docs
          </div>

          <div
            aria-label="cell-10"
            className="col-start-5 row-start-3 rounded-lg p-3 flex items-center justify-center text-sm font-medium transition"
            style={smallStyle}
          >
            Media
          </div>
        </div>
      </div>
    </div>
  );
}