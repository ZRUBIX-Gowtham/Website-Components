import { useEffect, useRef } from "react";

export default function V250() {
  const radialBigRef = useRef(null);
  const radialMidARef = useRef(null);
  const radialMidBRef = useRef(null);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const currentCenterIndexRef = useRef(1);

  // wheel & drag mutable refs (no state to avoid frequent re-renders)
  const wheelAccumulatorRef = useRef(0);
  const wheelResetTimerRef = useRef(null);

  const isDraggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const pointerLastXRef = useRef(0);
  const pointerDownCardRef = useRef(null);
  const pointerMovedSinceDownRef = useRef(false);
  const lastTapTimeRef = useRef(0);

  // constants
  const WHEEL_THRESHOLD = 140;
  const DRAG_THRESHOLD = 80;
  const MAX_FEEDBACK = 180;

  // mapping & base values (from original)
  const SCALE_MAP = {
    pos1: 0.6,
    pos2: 0.8,
    pos3: 1.0,
    pos4: 0.8,
    pos5: 0.6,
    hidden: 0.4,
  };

  const BASE_MAX = {
    pos1: { x: 8, y: 12 },
    pos2: { x: 9, y: 14 },
    pos3: { x: 12, y: 18 },
    pos4: { x: 9, y: 14 },
    pos5: { x: 8, y: 12 },
    hidden: { x: 6, y: 8 },
  };

  const palettes = {
    1: {
      big: { c0: "#ff6b6b", c0alt: "#ff9b6b", c1: "#1b1b2f", c1alt: "#0f1724" },
      midA: { c0: "#ffcc66", c0alt: "#ff9966", c1: "#444444", c1alt: "#222222" },
      midB: { c0: "#ffffff", c0alt: "#e6e6e6", c1: "#000000", c1alt: "#222222" },
    },
    2: {
      big: { c0: "#6bf0ff", c0alt: "#6bb9ff", c1: "#07132a", c1alt: "#001827" },
      midA: { c0: "#88ffcc", c0alt: "#66ffaa", c1: "#072a1a", c1alt: "#00120a" },
      midB: { c0: "#a6e0ff", c0alt: "#8acbff", c1: "#001827", c1alt: "#00101a" },
    },
    3: {
      big: { c0: "#ffd86b", c0alt: "#ffb86b", c1: "#2b1b0f", c1alt: "#130b05" },
      midA: { c0: "#fff2cc", c0alt: "#ffe0a3", c1: "#20150c", c1alt: "#120a04" },
      midB: { c0: "#ffe6b3", c0alt: "#ffd1a3", c1: "#2a1f15", c1alt: "#130b07" },
    },
    4: {
      big: { c0: "#a56bff", c0alt: "#d09bff", c1: "#07121a", c1alt: "#000814" },
      midA: { c0: "#c6a3ff", c0alt: "#e6ccff", c1: "#071227", c1alt: "#000816" },
      midB: { c0: "#f0e6ff", c0alt: "#e6d9ff", c1: "#050214", c1alt: "#00030a" },
    },
    5: {
      big: { c0: "#6bff98", c0alt: "#6bffcc", c1: "#052214", c1alt: "#00110a" },
      midA: { c0: "#bfffe0", c0alt: "#9bffd6", c1: "#071f12", c1alt: "#001104" },
      midB: { c0: "#e6fff0", c0alt: "#ccffeb", c1: "#02120a", c1alt: "#000a06" },
    },
  };

  // Helpers
  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function applyToRadial(r, values) {
    if (!r) return;
    r.style.setProperty("--c0-start", values.c0);
    r.style.setProperty("--c0-alt", values.c0alt);
    r.style.setProperty("--c1-start", values.c1);
    r.style.setProperty("--c1-alt", values.c1alt);
    r.style.setProperty("--color-0", values.c0);
    r.style.setProperty("--color-1", values.c1);
  }

  function applyPaletteForIndex(idx) {
    const p = palettes[idx] || palettes[1];
    applyToRadial(radialBigRef.current, p.big);
    applyToRadial(radialMidARef.current, p.midA);
    applyToRadial(radialMidBRef.current, p.midB);
    // restart animations by toggling animation style
    [radialBigRef.current, radialMidARef.current, radialMidBRef.current].forEach((r) => {
      if (!r) return;
      r.style.animation = "none";
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      r.offsetWidth;
      r.style.animation = "";
    });
  }

  // setByIndex & updatePositions (mirrors your vanilla logic)
  function setByIndex(idx, cls) {
    const el = cardsRef.current.find((c) => Number(c.dataset.index) === idx);
    if (!el) return;
    el.className = "card " + cls;
  }

  function updatePositions(centerIdx) {
    centerIdx = Math.max(1, Math.min(5, centerIdx));
    // ensure cardsRef populated
    cardsRef.current.forEach((c) => (c.className = "card hidden"));

    if (centerIdx === 1) {
      setByIndex(1, "pos3");
      setByIndex(2, "pos4");
      setByIndex(3, "pos5");
    } else if (centerIdx === 2) {
      setByIndex(1, "pos2");
      setByIndex(2, "pos3");
      setByIndex(3, "pos4");
      setByIndex(4, "pos5");
    } else if (centerIdx === 3) {
      setByIndex(1, "pos1");
      setByIndex(2, "pos2");
      setByIndex(3, "pos3");
      setByIndex(4, "pos4");
      setByIndex(5, "pos5");
    } else if (centerIdx === 4) {
      setByIndex(2, "pos1");
      setByIndex(3, "pos2");
      setByIndex(4, "pos3");
      setByIndex(5, "pos4");
    } else if (centerIdx === 5) {
      setByIndex(3, "pos1");
      setByIndex(4, "pos2");
      setByIndex(5, "pos3");
    }

    applyPaletteForIndex(centerIdx);

    // reset track translate and card transforms
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 420ms cubic-bezier(.22,.9,.23,1)";
      trackRef.current.style.transform = "translateX(0px)";
    }
    cardsRef.current.forEach((c) => {
      c.style.transition = "";
      c.classList.remove("hover");
      c.style.transform = "";
    });
  }

  // Tilt handlers
  function getPosClass(card) {
    if (!card) return "hidden";
    const cls = card.className.split(" ").find((c) => c.startsWith("pos") || c === "hidden");
    return cls || "hidden";
  }

  function applyCardTilt(card, clientX, clientY) {
    if (!card || card.classList.contains("hidden")) return;
    if (isDraggingRef.current) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (clientX - cx) / (rect.width / 2);
    const dy = (clientY - cy) / (rect.height / 2);
    const pos = getPosClass(card);
    const max = BASE_MAX[pos] || BASE_MAX.pos3;
    const rotateX = clamp(-dy * max.x, -max.x, max.x);
    const rotateY = clamp(dx * max.y, -max.y, max.y);
    const baseScale = SCALE_MAP[pos] || 1;
    const intensity = Math.min(1, Math.max(Math.abs(dx), Math.abs(dy)));
    const tz = 12 * intensity * baseScale;
    card.classList.add("hover");
    card.style.transform = `translate(-50%,-50%) scale(${baseScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${tz}px)`;
    card.style.transition = "transform 120ms cubic-bezier(.22,.9,.23,1), box-shadow 120ms";
  }

  function resetCardTilt(card) {
    if (!card) return;
    card.classList.remove("hover");
    card.style.transition = "";
    card.style.transform = "";
  }

  useEffect(() => {
    // populate refs to DOM elements
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const radialBig = radialBigRef.current;
    const radialMidA = radialMidARef.current;
    const radialMidB = radialMidBRef.current;

    // cards snapshot
    cardsRef.current = Array.from(track.querySelectorAll(".card"));

    // initial placement & palette
    updatePositions(currentCenterIndexRef.current);

    // Click behavior for cards (mouse/keyboard fallback)
    const cardClickHandlers = [];
    cardsRef.current.forEach((c) => {
      const handler = (ev) => {
        if (Date.now() - lastTapTimeRef.current < 150) return;
        if (c.classList.contains("hidden")) return;
        const idx = Number(c.dataset.index);
        currentCenterIndexRef.current = idx;
        updatePositions(currentCenterIndexRef.current);
      };
      c.addEventListener("click", handler);
      cardClickHandlers.push({ el: c, handler });
    });

    // keyboard
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        currentCenterIndexRef.current = Math.max(1, currentCenterIndexRef.current - 1);
        updatePositions(currentCenterIndexRef.current);
      } else if (e.key === "ArrowRight") {
        currentCenterIndexRef.current = Math.min(5, currentCenterIndexRef.current + 1);
        updatePositions(currentCenterIndexRef.current);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // wheel handling
    const onWheel = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY || e.deltaX) * Math.abs(e.deltaY || e.deltaX);
      wheelAccumulatorRef.current += delta;
      if (wheelResetTimerRef.current) clearTimeout(wheelResetTimerRef.current);
      wheelResetTimerRef.current = setTimeout(() => {
        wheelAccumulatorRef.current = 0;
      }, 240);

      if (Math.abs(wheelAccumulatorRef.current) >= WHEEL_THRESHOLD) {
        if (wheelAccumulatorRef.current > 0) {
          currentCenterIndexRef.current = Math.min(5, currentCenterIndexRef.current + 1);
        } else {
          currentCenterIndexRef.current = Math.max(1, currentCenterIndexRef.current - 1);
        }
        updatePositions(currentCenterIndexRef.current);
        wheelAccumulatorRef.current = 0;
      }
    };

    // pointer handlers
    function onPointerDown(e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDraggingRef.current = true;
      wrap.classList.add("dragging");
      pointerStartXRef.current = e.clientX;
      pointerLastXRef.current = pointerStartXRef.current;
      pointerMovedSinceDownRef.current = false;
      pointerDownCardRef.current = e.target.closest(".card");
      if (track) track.style.transition = "none";
      try {
        wrap.setPointerCapture && wrap.setPointerCapture(e.pointerId);
      } catch (_) {}
    }

    function onPointerMove(e) {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - pointerStartXRef.current;
      if (Math.abs(dx) > 6) pointerMovedSinceDownRef.current = true;
      const limited = Math.max(-MAX_FEEDBACK, Math.min(MAX_FEEDBACK, dx));
      if (track) track.style.transform = `translateX(${limited}px)`;
      pointerLastXRef.current = e.clientX;
    }

    function onPointerUp(e) {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      wrap.classList.remove("dragging");
      try {
        wrap.releasePointerCapture && wrap.releasePointerCapture(e.pointerId);
      } catch (_) {}
      if (track) track.style.transition = "transform 420ms cubic-bezier(.22,.9,.23,1)";
      const totalDx = pointerLastXRef.current - pointerStartXRef.current;

      if (!pointerMovedSinceDownRef.current) {
        const tappedCard = pointerDownCardRef.current;
        if (tappedCard && !tappedCard.classList.contains("hidden")) {
          const idx = Number(tappedCard.dataset.index);
          currentCenterIndexRef.current = idx;
          updatePositions(currentCenterIndexRef.current);
          lastTapTimeRef.current = Date.now();
        } else {
          if (track) track.style.transform = "translateX(0px)";
        }
      } else {
        if (totalDx <= -DRAG_THRESHOLD) {
          currentCenterIndexRef.current = Math.min(5, currentCenterIndexRef.current + 1);
          updatePositions(currentCenterIndexRef.current);
        } else if (totalDx >= DRAG_THRESHOLD) {
          currentCenterIndexRef.current = Math.max(1, currentCenterIndexRef.current - 1);
          updatePositions(currentCenterIndexRef.current);
        } else {
          if (track) track.style.transform = "translateX(0px)";
        }
      }

      pointerDownCardRef.current = null;
      pointerMovedSinceDownRef.current = false;
    }

    // attach wheel & pointer listeners
    wrap.addEventListener("wheel", onWheel, { passive: false });
    wrap.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    // pointer-based tilt handlers
    const cardPointerIns = [];
    cardsRef.current.forEach((card) => {
      const onEnter = (e) => {
        if (card.classList.contains("hidden")) return;
        applyCardTilt(card, e.clientX, e.clientY);
      };
      const onMove = (e) => {
        if (isDraggingRef.current) return;
        if (card.classList.contains("hidden")) return;
        applyCardTilt(card, e.clientX, e.clientY);
      };
      const onLeave = () => resetCardTilt(card);
      const onUp = () => resetCardTilt(card);
      card.addEventListener("pointerenter", onEnter, { passive: true });
      card.addEventListener("pointermove", onMove, { passive: true });
      card.addEventListener("pointerleave", onLeave, { passive: true });
      card.addEventListener("pointerup", onUp, { passive: true });
      cardPointerIns.push({ card, onEnter, onMove, onLeave, onUp });
    });

    // ensure reset if pointer leaves wrap
    const wrapLeave = () => cardsRef.current.forEach((c) => resetCardTilt(c));
    wrap.addEventListener("pointerleave", wrapLeave, { passive: true });

    // prevent native drag of images
    const imgs = Array.from(document.querySelectorAll("img"));
    const imgHandlers = imgs.map((img) => {
      const fn = (e) => e.preventDefault();
      img.addEventListener("dragstart", fn);
      return { img, fn };
    });

    // cleanup on unmount
    return () => {
      // click handlers
      cardClickHandlers.forEach(({ el, handler }) => el.removeEventListener("click", handler));
      // keyboard
      window.removeEventListener("keydown", onKeyDown);
      // wheel & pointer
      wrap.removeEventListener("wheel", onWheel);
      wrap.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);

      // pointer-ins
      cardPointerIns.forEach(({ card, onEnter, onMove, onLeave, onUp }) => {
        card.removeEventListener("pointerenter", onEnter);
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
        card.removeEventListener("pointerup", onUp);
      });

      wrap.removeEventListener("pointerleave", wrapLeave);

      imgHandlers.forEach(({ img, fn }) => img.removeEventListener("dragstart", fn));

      if (wheelResetTimerRef.current) {
        clearTimeout(wheelResetTimerRef.current);
        wheelResetTimerRef.current = null;
      }
    };
  }, []);

  // expose next/prev if needed (internal helpers)
  function next() {
    currentCenterIndexRef.current = Math.min(5, currentCenterIndexRef.current + 1);
    updatePositions(currentCenterIndexRef.current);
  }
  function prev() {
    currentCenterIndexRef.current = Math.max(1, currentCenterIndexRef.current - 1);
    updatePositions(currentCenterIndexRef.current);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      {/* Radial Background Container */}
      <div className="fixed inset-0 grid place-items-center pointer-events-none z-10" aria-hidden="true">
        <div ref={radialBigRef} id="radial-big" className="radial radial--big" />
        <div ref={radialMidARef} id="radial-mid-a" className="radial radial--mid mid-a" />
        <div ref={radialMidBRef} id="radial-mid-b" className="radial radial--mid mid-b" />
      </div>

      {/* Card Carousel */}
      <div
        ref={wrapRef}
        id="wrap"
        className="wrap w-[94%] max-w-[1200px] h-[520px] relative z-20 perspective-[1200px] touch-pan-y"
        tabIndex={0}
      >
        <div ref={trackRef} id="track" className="track relative w-full h-full">
          <div className="card pos3" data-index="1">
            <img draggable="false" src="https://cdn.abacus.ai/images/33704204-dca9-449b-897f-935b59369270.png" alt="" />
          </div>
          <div className="card pos4" data-index="2">
            <img draggable="false" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" />
          </div>
          <div className="card pos5" data-index="3">
            <img draggable="false" src="https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg" alt="" />
          </div>
          <div className="card hidden" data-index="4">
            <img draggable="false" src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-214574.jpg&fm=jpg" alt="" />
          </div>
          <div className="card hidden" data-index="5">
            <img draggable="false" src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Global CSS (keeps original styling & animations). Tailwind is used for layout; rest preserved here. */}
      <style jsx global>{`
        /* base resets */
        html, body {
          height: 100%;
          width: 100%;
        }
        /* register custom props (Chrome/Edge) */
        @property --position {
          syntax: "<length-percentage>";
          initial-value: 0%;
          inherits: false;
        }
        @property --color-0 {
          syntax: "<color>";
          initial-value: transparent;
          inherits: false;
        }
        @property --color-1 {
          syntax: "<color>";
          initial-value: transparent;
          inherits: false;
        }

        /* Radial global */
        .radial {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(
            circle,
            var(--color-0) var(--position, 0%),
            var(--color-1) 0
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          opacity: 1;
          animation-fill-mode: both;
        }

        .radial--big {
          width: 120vmax;
          height: 120vmax;
          z-index: 1;
          animation-name: color-0, position, color-1;
          animation-duration: 6s, 6s, 6s;
          animation-timing-function: linear, linear, linear;
          animation-iteration-count: infinite, infinite, infinite;
          animation-delay: -1.5s, -1.5s, -1.5s;
        }

        .radial--mid {
          width: 100vmax;
          height: 100vmax;
          z-index: 2;
          --zoom-duration: 10s;
          --zoom-delay: calc(var(--zoom-duration) / 2);
        }

        .mid-a {
          animation-name: color-0, position, color-1, zoom, fade;
          animation-duration: 3.5s, 3.5s, 3.5s, var(--zoom-duration), var(--zoom-duration);
          animation-timing-function: linear, linear, linear, linear, linear;
          animation-iteration-count: infinite, infinite, infinite, infinite, infinite;
          animation-delay: 0s, 0s, 0s, 0s, 0s;
        }

        .mid-b {
          animation-name: color-0, position, color-1, zoom, fade;
          animation-duration: 3.5s, 3.5s, 3.5s, var(--zoom-duration), var(--zoom-duration);
          animation-timing-function: linear, linear, linear, linear, linear;
          animation-iteration-count: infinite, infinite, infinite, infinite, infinite;
          animation-delay: 0s, 0s, 0s, var(--zoom-delay), var(--zoom-delay);
        }

        @keyframes zoom {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(2); }
        }
        @keyframes fade {
          0% { opacity: 1; }
          45% { opacity: 1; }
          60% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes position {
          0% { --position: 0%; }
          100% { --position: 100%; }
        }
        @keyframes color-0 {
          0% { --color-0: var(--c0-start); }
          50% { --color-0: var(--c0-alt); }
          100% { --color-0: var(--c0-start); }
        }
        @keyframes color-1 {
          0% { --color-1: var(--c1-start); }
          50% { --color-1: var(--c1-alt); }
          100% { --color-1: var(--c1-start); }
        }

        /* Card Carousel CSS variables (kept as in original) */
        :root{
          --center-width: 420px;
          --center-height: 480px;
          --near-width: 240px;
          --near-height: 240px;
          --outer-width: 180px;
          --outer-height: 180px;
          --gap-left-1: 0%;
          --gap-left-2: 20%;
          --gap-left-3: 50%;
          --gap-left-4: 80%;
          --gap-left-5: 100%;
          --circle-size: 520px;
          --zoom-scale-1: 0.6;
          --zoom-scale-2: 0.8;
          --zoom-scale-3: 1.0;
          --zoom-scale-4: 0.8;
          --zoom-scale-5: 0.6;
        }

        *{box-sizing:border-box;margin:0;padding:0}

        body{ font-family: "Helvetica Neue", Arial, sans-serif; background: none; }

        .wrap {
          width: 94%;
          max-width: 1200px;
          height: 520px;
          position: relative;
          z-index: 20;
          perspective: 1200px;
          pointer-events: auto;
          touch-action: pan-y;
        }

        .track {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 420ms cubic-bezier(.22,.9,.23,1);
          will-change: transform;
        }

        .card {
          position: absolute;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          border: 4px solid rgba(255,255,255,0.9);
          box-shadow: 0 28px 50px rgba(0,0,0,0.18);
          transition: transform 520ms cubic-bezier(.22,.9,.23,1), box-shadow 220ms;
          cursor: pointer;
          z-index: 18;
          user-select: none;
          -webkit-user-drag: none;
          transform-style: preserve-3d;
          will-change: transform;
          transform-origin: center;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-drag: none;
          -webkit-user-drag: none;
          -webkit-user-select: none;
        }

        .pos1 {
          left: var(--gap-left-1);
          width: var(--outer-width);
          height: var(--outer-height);
          z-index: 14;
          transform: translate(-50%,-50%) scale(var(--zoom-scale-1));
          opacity: 0.4;
          filter: blur(2px);
          transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .pos2 {
          left: var(--gap-left-2);
          width: var(--near-width);
          height: var(--near-height);
          z-index: 16;
          transform: translate(-50%,-50%) scale(var(--zoom-scale-2));
          opacity: 0.7;
          filter: blur(1px);
          transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .pos3 {
          left: var(--gap-left-3);
          width: var(--center-width);
          height: var(--center-height);
          z-index: 22;
          transform: translate(-50%,-50%) scale(var(--zoom-scale-3));
          opacity: 1;
          border-radius: 20px;
          filter: blur(0px);
          transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .pos4 {
          left: var(--gap-left-4);
          width: var(--near-width);
          height: var(--near-height);
          z-index: 16;
          transform: translate(-50%,-50%) scale(var(--zoom-scale-4));
          opacity: 0.7;
          filter: blur(1px);
          transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .pos5 {
          left: var(--gap-left-5);
          width: var(--outer-width);
          height: var(--outer-height);
          z-index: 14;
          transform: translate(-50%,-50%) scale(var(--zoom-scale-5));
          opacity: 0.4;
          filter: blur(2px);
          transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .hidden {
          left: -20%;
          width: 100px;
          height: 100px;
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%,-50%) scale(0.4);
          z-index: 0;
          filter: blur(3px);
          transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card.hover {
          box-shadow: 0 40px 70px rgba(0,0,0,0.32);
        }

        /* Desktop / default breakpoint maintained above */

        /* MOBILE: make center smaller and show only one side card each side (pos2 & pos4).
           Hide pos1 and pos5 so we display center + one side left + one side right.
           Breakpoint: max-width: 640px (Tailwind 'sm' threshold) */
        @media (max-width: 640px) {
          :root {
            --center-width: 280px;
            --center-height: 340px;
            --near-width: 140px;
            --near-height: 140px;
            --outer-width: 0px;   /* hide outer positions */
            --outer-height: 0px;
            --gap-left-1: 0%;
            --gap-left-2: 22%;
            --gap-left-3: 50%;
            --gap-left-4: 78%;
            --gap-left-5: 100%;
            --zoom-scale-1: 0.55;
            --zoom-scale-2: 0.8;
            --zoom-scale-3: 1.0;
            --zoom-scale-4: 0.8;
            --zoom-scale-5: 0.55;
          }

          /* Hide the far outer cards (pos1 & pos5) to leave only one side card visible on each side */
          .pos1, .pos5 {
            display: none !important;
          }

          /* Make wrap slightly taller on narrow devices if needed */
          .wrap {
            height: auto;
            padding-top: 24px;
            padding-bottom: 24px;
            height: 420px;
          }

          /* Reduce blur & shadow for smaller screens */
          .pos2, .pos4 {
            filter: blur(0.8px);
          }
          .pos3 {
            box-shadow: 0 12px 30px rgba(0,0,0,0.28);
            border-radius: 16px;
          }

          /* Lower transform durations for snappier feel on mobile */
          .card, .pos1, .pos2, .pos3, .pos4, .pos5, .hidden {
            transition-duration: 420ms;
          }
        }

        /* keep fallback media rules small */
        @media (max-width: 400px) {
          :root {
            --center-width: 240px;
            --center-height: 300px;
            --near-width: 120px;
            --near-height: 120px;
            --zoom-scale-1: 0.5;
            --zoom-scale-2: 0.75;
            --zoom-scale-3: 1.0;
            --zoom-scale-4: 0.75;
            --zoom-scale-5: 0.5;
          }
          .wrap { height: 380px; }
        }

        .wrap.dragging { cursor: grabbing; }
      `}</style>
    </div>
  );
}