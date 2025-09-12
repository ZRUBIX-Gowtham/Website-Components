// MobileV16.js
import React, { useEffect, useState } from "react";

export default function MobileV16({ isDark: isDarkProp, setIsDark: setIsDarkProp }) {
  // Support both controlled (props provided) and uncontrolled usage
  const [localDark, setLocalDark] = useState(Boolean(isDarkProp));
  const isControlled = typeof setIsDarkProp === "function" && typeof isDarkProp === "boolean";
  const isDark = isControlled ? isDarkProp : localDark;

  // Toggle handler: prefer parent setter if provided, otherwise local state
  const toggleDark = () => {
    if (isControlled) {
      setIsDarkProp((s) => !s);
    } else {
      setLocalDark((s) => !s);
    }
  };

  // Optional: sync theme to <html data-theme="dark|light"> so global CSS can react
  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
      // Update mobile browser theme-color meta if present
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", isDark ? "#000000" : "#f8fafc");
    } catch (e) {
      // ignore in SSR environments
    }
  }, [isDark]);

  const vars = {
    "--bg": isDark ? "#000000" : "#f8fafc",
    "--panel": isDark ? "#0b1220" : "#ffffff",
    "--text": isDark ? "#e6eef8" : "#0f172a",
    "--muted": isDark ? "#9aaec0" : "#64748b",
    "--border": isDark ? "rgba(255,255,255,0.12)" : "#e6eef2",
    "--accent": isDark ? "#60a5fa" : "#2563eb",
    "--card-shadow": isDark
      ? "0 8px 30px rgba(2,6,23,0.65)"
      : "0 10px 30px rgba(2,6,23,0.06)",
  };

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
    // visible only on small screens (hidden on sm+)
    <div
      className="sm:hidden min-h-screen p-4 relative"
      style={{ ...vars, background: "var(--bg)" }}
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={overlayStyle} />

      <div className="relative z-10 max-w-md mx-auto">
        <button
          onClick={toggleDark}
          aria-pressed={isDark}
          aria-label="Toggle theme"
          className="absolute right-4 top-0 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium"
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

        <header className="pt-8 pb-4 text-center">
          <h1 className="text-2xl font-extrabold" style={{ color: "var(--text)" }}>
            Welcome to Our Studio
          </h1>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
            A compact mobile layout — simple & readable.
          </p>
        </header>

        <main className="space-y-4">
          <article className="rounded-2xl p-4" style={panelStyle}>
            <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
              Our Story
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, urna at pulvinar
              feugiat.
            </p>
            <div className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
              Established 2020 • Crafted with care
            </div>
          </article>

          <section className="rounded-2xl p-4" style={panelStyle}>
            <h3 className="font-medium" style={{ color: "var(--text)" }}>
              Mission
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Focused on clarity & craft.
            </p>
          </section>

          <section className="rounded-2xl p-4" style={panelStyle}>
            <h3 className="font-medium" style={{ color: "var(--text)" }}>
              Vision
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Looking ahead with purpose.
            </p>
          </section>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg p-3 text-center" style={smallStyle}>
              Team
            </div>
            <div className="rounded-lg p-3 text-center" style={smallStyle}>
              Careers
            </div>
            <div className="rounded-lg p-3 text-center" style={smallStyle}>
              Design
            </div>
            <div className="rounded-lg p-3 text-center" style={smallStyle}>
              Docs
            </div>
          </div>

          <div className="rounded-lg p-4 text-center" style={panelStyle}>
            <h4 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
              Contact
            </h4>
            <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
              hello@example.com
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}