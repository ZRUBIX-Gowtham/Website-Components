'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function V264() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const stickyRef = useRef(null);

  const totalScrollWidthRef = useRef(0);
  const viewportWidthRef = useRef(0);
  const rafRef = useRef(null);
  const extraScrollRef = useRef(0);

  // element refs
  const cardRefs = useRef([]); // wrapper per card
  const pieceMoverRefs = useRef([]); // wrapper that will be translated (piece)
  const canMoverRefs = useRef([]); // wrapper that will be translated (can)
  const headlineLineRefs = useRef([]); // three headline lines

  const pieceRafRefs = useRef([]); // RAF per card
  const canRafRefs = useRef([]); // RAF per card

  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // tuning
  const MIN_EXTRA_SCROLL_DESKTOP = 800;
  const EXTRA_SCROLL_MULTIPLIER_DESKTOP = 0.85;
  const ADDITIONAL_EXTRA_SCROLL_BUFFER = 100;

  // headline parallax tuning (increase or decrease these to change "speed")
  const HEADLINE_PARALLAX_MAX = 48; // px base
  const HEADLINE_MULTIPLIER_0 = 1.4; // multiplier for line 0 ("WE HAVE 6")
  const HEADLINE_MULTIPLIER_1 = 1.9; // multiplier for line 1 ("FREAKING")

  // --- per-card image variables ---
  const BACKPLATE_1 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a342364feb3829533de65_bg.svg';
  const BACKPLATE_2 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34acccf5df70b0721bd0_bg-2.svg';
  const BACKPLATE_3 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a351764feb38295350adb_bg-4.svg';
  const BACKPLATE_4 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a3533c43d4812ebcd6853_bg-5.svg';
  const BACKPLATE_5 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a346d7e435f4b6be31247_bg-1.svg';

  const PIECE_1 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a343e1c547b7a70b86e0c_pieces.webp';
  const PIECE_2 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a349c711884a20dbc9ab0_pieces-2.webp';
  const PIECE_3 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/67c5bb3cb683bcb19d9a6583_946_pieces.webp';
  const PIECE_4 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a353fac5751c25dc5b999_pieces-5.webp';
  const PIECE_5 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a347ce10437db0859096f_pieces-1.webp';

  const CAN_1 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a342ae57ea5823882fe46_can1.webp';
  const CAN_2 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34981daf0c76b8448018_can3.webp';
  const CAN_3 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a35066bd670216fa7fedc_can5.webp';
  const CAN_4 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a353cd91623e4f88dc60f_can6.webp';
  const CAN_5 = 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34750cbc5c99754742fe_can2.webp';
  // ---------------------------------------------------------------------

  const cards = [
    { name: 'CHOCOLATE MILK', can: CAN_1, piece: PIECE_1, backplate: BACKPLATE_1, desc: 'caffeinated chocolate milk' },
    { name: 'COCOA BLISS',     can: CAN_2, piece: PIECE_2, backplate: BACKPLATE_2, desc: 'Cocoa-rich, velvety and bold' },
    { name: 'SOUR POWER',      can: CAN_3, piece: PIECE_3, backplate: BACKPLATE_3, desc: 'Bright punch of citrus sour' },
    { name: 'VANILLA SKY',     can: CAN_4, piece: PIECE_4, backplate: BACKPLATE_4, desc: 'Smooth classic vanilla' },
    { name: 'BERRY BANG',      can: CAN_5, piece: PIECE_5, backplate: BACKPLATE_5, desc: 'Tangy berry burst' },
  ];

  // layering css
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'spylt-layer-fix';
    style.innerHTML = `
      .spylt-headline-wrap { z-index: 1200; position: relative; pointer-events: none; }
      .spylt-headline-line { position: relative; display:block; pointer-events: none; }
      .spylt-card-label { z-index: 1150; position: relative; pointer-events: auto; }
      .spylt-piece { z-index: 20; }
      .spylt-can { z-index: 30; }

      /* MOBILE ADJUSTMENT: make headline lines wrap nicely and smaller on small screens
         We keep desktop untouched and only apply rules under 768px */
      @media (max-width: 767px) {
        .spylt-headline-wrap { padding: 10px !important; }
        .spylt-headline-line { line-height: 1 !important; margin-bottom: 8px !important; transform: none !important; text-align: center; }
        /* Ensure the brown box (FREAKING) doesn't get skew/rotate on mobile and keeps padding */
        .spylt-headline-line .freaking-box { transform: none !important; border: 5px solid #faeade !important; padding: 5px 18px !important; display: inline-block; }
        .spylt-headline-line .freaking-box > .freaking-inner { transform: none !important; margin-top: 0 !important; margin-bottom: 0 !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      try { document.head.removeChild(style); } catch (e) {}
    };
  }, []);

  // load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700;800;900&display=swap';
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch (e) {} };
  }, []);

  // preload can images
  useEffect(() => {
    const urls = cards.map(c => c.can).filter(Boolean);
    setTotalCount(urls.length);
    let mounted = true;
    const imgs = [];
    function handleLoad() { if (!mounted) return; setLoadedCount(p => p + 1); }
    urls.forEach(u => {
      try {
        const img = new window.Image();
        img.src = u;
        img.onload = handleLoad;
        img.onerror = handleLoad;
        imgs.push(img);
      } catch (e) { handleLoad(); }
    });
    return () => {
      mounted = false;
      imgs.forEach(i => { if (i) { i.onload = null; i.onerror = null; } });
    };
  }, []);

  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth < 768); }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // horizontal scroll mapping
  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    const sticky = stickyRef.current;
    if (!container || !scroller || !sticky) return;

    scroller.style.willChange = 'transform';
    scroller.style.touchAction = isMobile ? 'auto' : 'pan-y';

    function refreshDims() {
      if (isMobile) {
        extraScrollRef.current = 0;
        container.style.height = 'auto';
        scroller.style.transform = 'none';
        scroller.style.width = '100%';
        scroller.style.flexDirection = 'column';
        setScrollProgress(0);

        // Reset headline transforms on mobile
        if (headlineLineRefs.current) {
          headlineLineRefs.current.forEach(h => { if (h) { h.style.transform = 'none'; } });
        }
        return;
      }

      scroller.style.flexDirection = 'row';
      scroller.style.width = 'max-content';

      totalScrollWidthRef.current = scroller.scrollWidth;
      viewportWidthRef.current = sticky.clientWidth || window.innerWidth;

      const horizontalTravel = Math.max(totalScrollWidthRef.current - viewportWidthRef.current, 0);
      const extraFromTravel = Math.round(horizontalTravel * EXTRA_SCROLL_MULTIPLIER_DESKTOP);
      const extraFromViewport = Math.round(window.innerHeight * 0.35);
      const extraScroll = Math.max(MIN_EXTRA_SCROLL_DESKTOP, extraFromTravel + extraFromViewport + ADDITIONAL_EXTRA_SCROLL_BUFFER);
      extraScrollRef.current = extraScroll;

      const neededHeight = horizontalTravel + window.innerHeight + extraScroll;
      container.style.height = `${Math.max(neededHeight, window.innerHeight)}px`;
    }

    function applyTranslate(progress) {
      if (isMobile) return;
      const maxTranslateX = Math.max(totalScrollWidthRef.current - viewportWidthRef.current, 0);
      const translateX = -(maxTranslateX * progress);
      scroller.style.transform = `translateX(${translateX}px)`;
      setScrollProgress(progress);

      // --- headline parallax for first two lines ---
      const hl0 = headlineLineRefs.current[0];
      const hl1 = headlineLineRefs.current[1];
      if (hl0) {
        hl0.style.willChange = 'transform';
        const ty0 = -progress * HEADLINE_PARALLAX_MAX * HEADLINE_MULTIPLIER_0;
        hl0.style.transform = `translate3d(0, ${ty0}px, 0)`;
      }
      if (hl1) {
        hl1.style.willChange = 'transform';
        const ty1 = -progress * HEADLINE_PARALLAX_MAX * HEADLINE_MULTIPLIER_1;
        hl1.style.transform = `translate3d(0, ${ty1}px, 0)`;
      }
    }

    function onScroll() {
      if (!container) return;
      if (isMobile) { setScrollProgress(0); return; }
      const rect = container.getBoundingClientRect();
      const start = rect.top + window.scrollY;
      const end = start + container.offsetHeight - window.innerHeight;
      const denom = Math.max(end - start, 1);
      const progress = Math.min(Math.max((window.scrollY - start) / denom, 0), 1);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyTranslate(progress));
    }

    function onWindowResize() { refreshDims(); onScroll(); }

    refreshDims();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onWindowResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loadedCount, isMobile]);

  // pointer drag-to-scrub (desktop)
  useEffect(() => {
    const scroller = scrollerRef.current;
    const container = containerRef.current;
    if (!scroller || !container) return;
    if (isMobile) return;

    let isDragging = false;
    let startX = 0;
    let startProgress = 0;
    let lastRAF = null;

    function getMaxTranslate() {
      return Math.max(totalScrollWidthRef.current - (stickyRef.current?.clientWidth || window.innerWidth), 0);
    }

    function pointerDown(e) {
      if (e.isPrimary === false) return;
      isDragging = true;
      startX = e.clientX;
      startProgress = scrollProgress;
      scroller.setPointerCapture?.(e.pointerId);
      scroller.style.touchAction = 'none';
    }

    function pointerMove(e) {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const maxTranslate = getMaxTranslate() || 1;
      const dp = -(dx / maxTranslate);
      const p = Math.min(Math.max(startProgress + dp, 0), 1);
      if (lastRAF) cancelAnimationFrame(lastRAF);
      lastRAF = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const start = rect.top + window.scrollY;
        const maxRange = Math.max(container.offsetHeight - window.innerHeight, 1);
        const targetY = start + p * maxRange;
        window.scrollTo({
          top: Math.min(Math.max(targetY, 0), Math.max(document.scrollingElement?.scrollHeight - window.innerHeight, 0)),
          behavior: 'auto',
        });
      });
    }

    function pointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      try { scroller.releasePointerCapture?.(e.pointerId); } catch (err) {}
      scroller.style.touchAction = 'pan-y';
      if (lastRAF) cancelAnimationFrame(lastRAF);
      lastRAF = null;
    }

    scroller.addEventListener('pointerdown', pointerDown);
    window.addEventListener('pointermove', pointerMove, { passive: true });
    window.addEventListener('pointerup', pointerUp, { passive: true });
    window.addEventListener('pointercancel', pointerUp, { passive: true });

    return () => {
      scroller.removeEventListener('pointerdown', pointerDown);
      window.removeEventListener('pointermove', pointerMove);
      window.removeEventListener('pointerup', pointerUp);
      window.removeEventListener('pointercancel', pointerUp);
      if (lastRAF) cancelAnimationFrame(lastRAF);
    };
  }, [scrollProgress, loadedCount, isMobile]);

  // pointermove-driven pan for piece & can (desktop only)
  useEffect(() => {
    pieceMoverRefs.current = pieceMoverRefs.current || [];
    canMoverRefs.current = canMoverRefs.current || [];
    cardRefs.current = cardRefs.current || [];
    pieceRafRefs.current = pieceRafRefs.current || [];
    canRafRefs.current = canRafRefs.current || [];

    const cleanup = [];

    cardRefs.current.forEach((cardEl, idx) => {
      if (!cardEl) return;
      if (isMobile) return;

      const pieceMover = pieceMoverRefs.current[idx];
      const canMover = canMoverRefs.current[idx];

      function onPointerMove(e) {
        const rect = cardEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const px = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? cx;
        const dx = (px - cx) / (rect.width / 2); // -1..1
        const clamped = Math.max(Math.min(dx, 1), -1);

        const pieceAmp = 24; // px
        const canAmp = 14; // px
        const txPiece = clamped * pieceAmp;
        const txCan = clamped * canAmp;

        if (pieceMover) {
          if (pieceRafRefs.current[idx]) cancelAnimationFrame(pieceRafRefs.current[idx]);
          pieceRafRefs.current[idx] = requestAnimationFrame(() => {
            pieceMover.style.transition = 'transform 180ms linear';
            pieceMover.style.transform = `translate3d(${txPiece}px,0,0)`;
          });
        }

        if (canMover) {
          if (canRafRefs.current[idx]) cancelAnimationFrame(canRafRefs.current[idx]);
          canRafRefs.current[idx] = requestAnimationFrame(() => {
            canMover.style.transition = 'transform 220ms linear';
            canMover.style.transform = `translate3d(${txCan}px,0,0)`;
          });
        }
      }

      function onPointerLeave() {
        if (pieceMover) {
          if (pieceRafRefs.current[idx]) cancelAnimationFrame(pieceRafRefs.current[idx]);
          pieceMover.style.transition = 'transform 360ms cubic-bezier(.22,.9,.32,1)';
          pieceMover.style.transform = `translate3d(0px,0,0)`;
        }
        if (canMover) {
          if (canRafRefs.current[idx]) cancelAnimationFrame(canRafRefs.current[idx]);
          canMover.style.transition = 'transform 360ms cubic-bezier(.22,.9,.32,1)';
          canMover.style.transform = `translate3d(0px,0,0)`;
        }
      }

      cardEl.addEventListener('pointermove', onPointerMove);
      cardEl.addEventListener('pointerleave', onPointerLeave);
      cardEl.addEventListener('pointercancel', onPointerLeave);

      cleanup.push(() => {
        try {
          cardEl.removeEventListener('pointermove', onPointerMove);
          cardEl.removeEventListener('pointerleave', onPointerLeave);
          cardEl.removeEventListener('pointercancel', onPointerLeave);
        } catch (err) {}
        if (pieceRafRefs.current[idx]) {
          cancelAnimationFrame(pieceRafRefs.current[idx]);
          pieceRafRefs.current[idx] = null;
        }
        if (canRafRefs.current[idx]) {
          cancelAnimationFrame(canRafRefs.current[idx]);
          canRafRefs.current[idx] = null;
        }
      });
    });

    return () => {
      cleanup.forEach(fn => { try { fn(); } catch (e) {} });
    };
  }, [isMobile, loadedCount]);

  // GSAP ScrollTrigger headline animation - runs each time section enters viewport
  useEffect(() => {
    let ctx;
    let gsapLib;
    (async () => {
      try {
        const mod = await import('gsap');
        gsapLib = mod.gsap ?? mod.default ?? mod;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsapLib.registerPlugin(ScrollTrigger);

        ctx = gsapLib.context(() => {
          gsapLib.from(headlineLineRefs.current, {
            y: 28,
            opacity: 0,
            duration: 0.58,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              toggleActions: 'play reverse play reverse',
            },
          });
        }, containerRef);
      } catch (err) {
        // fail gracefully
      }
    })();

    return () => {
      try {
        ctx?.revert();
        if (gsapLib && gsapLib.ScrollTrigger) {
          try { gsapLib.ScrollTrigger.kill(); } catch (e) {}
        }
      } catch (e) {}
    };
  }, []);

  // helper ref setters
  function setCardRef(el, i) { cardRefs.current[i] = el; }
  function setPieceMoverRef(el, i) { pieceMoverRefs.current[i] = el; }
  function setCanMoverRef(el, i) { canMoverRefs.current[i] = el; }
  function setHeadlineLineRef(el, i) { headlineLineRefs.current[i] = el; }

  // ------------------- RENDER -------------------
  const PIECE_SIZE_DESKTOP = 600;
  const PIECE_SIZE_MOBILE = 300;

  return (
    <section ref={containerRef} className="relative" style={{ background: '#faeade', paddingBottom: 20}}>
      <div
        ref={stickyRef}
        className="sticky top-14 md:top-20 flex flex-col justify-center overflow-hidden"
      >
        <div className="max-w-[1700px] mx-auto">
          <div className="w-full">
            <div
              ref={scrollerRef}
              className={`flex ${isMobile ? 'flex-col gap-12 md:gap-16' : 'gap-8 md:gap-10'} will-change-transform items-center`}
              style={{
                width: isMobile ? '100%' : 'max-content',
                transform: isMobile ? 'none' : 'translateX(0px)',
                transition: isMobile ? 'none' : 'transform 180ms linear',
                touchAction: isMobile ? 'auto' : 'pan-y',
                padding: isMobile ? '20px 16px' /* MOBILE: tighter padding */ : '36px 24px',
              }}
            >
              {/* HEADLINE (GSAP ScrollTrigger animates these lines) */}
              <div
                className="spylt-headline-wrap shrink-0 w-[75vw] sm:w-[72vw] md:w-[60vw] lg:w-[56vw] max-w-[1400px] relative px-6 py-8"
                style={{
                  willChange: 'transform',
                  // MOBILE-ONLY: reduce padding and center the headline tighter
                  padding: isMobile ? '8px 10px' : undefined,
                }}
              >
                <div style={{ color: '#3b2316', fontFamily: "'Bebas Neue', 'Oswald', sans-serif", textAlign: 'center' }}>
                  <div
                    ref={(el) => setHeadlineLineRef(el, 0)}
                    className="spylt-headline-line"
                    // MOBILE-ONLY: use smaller font-size for the main line
                    style={{
                      fontSize: isMobile ? '20px' /* fallback small */ : 'clamp(30px, 6.5vw, 76px)',
                      fontWeight: 900,
                      lineHeight: 0.9,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
                        fontWeight: 800,
                        letterSpacing: '0.02em',
                        // MOBILE-ONLY: make big heading smaller on phones
                        fontSize: isMobile ? '28px' : 'clamp(54px, 8vw, 92px)',
                      }}
                    >
                      WE HAVE 6
                    </div>
                  </div>

                  {/* >>> UPDATED FREAKING BLOCK (mobile-safe, added helper classes) */}
                  <div
                    style={{ marginTop: 0, marginBottom: 0, display: 'inline-block', zIndex: 10 }}
                    ref={(el) => setHeadlineLineRef(el, 1)}
                    className="spylt-headline-line"
                    aria-hidden
                  >
                    <div
                      className="freaking-box"
                      style={{
                        background: '#9c5b2d',
                        color: '#fff',
                        border: isMobile ? '5px solid #faeade' : '7px solid #faeade',
                        display: 'inline-block',
                        padding: isMobile ? '5px 18px' : '0 65px',
                        transform: isMobile ? 'none' : 'skew(-6deg) rotate(-4deg)',
                        borderRadius: 2,
                        fontWeight: 900,
                        zIndex: 1,
                        position: 'relative',
                      }}
                    >
                      <span
                        className="freaking-inner"
                        style={{
                          display: 'inline-block',
                          marginTop: isMobile ? 0 : -15,
                          marginBottom: isMobile ? 0 : -20,
                          transform: isMobile ? 'none' : 'skew(6deg)',
                          fontSize: isMobile ? '28px' : 'clamp(54px, 8vw, 92px)',
                          letterSpacing: isMobile ? '-0.5px' : '-1px',
                          fontFamily: "'Bebas Neue', 'Oswald', sans-serif"
                        }}
                      >
                        FREAKING
                      </span>
                    </div>
                  </div>

                  <div
                    ref={(el) => setHeadlineLineRef(el, 2)}
                    className="spylt-headline-line"
                    // MOBILE-ONLY: smaller font and remove large negative margin
                    style={{
                      fontSize: isMobile ? '22px' : 'clamp(54px, 8vw, 92px)',
                      marginTop: isMobile ? 6 : -40,
                      fontWeight: 900,
                      letterSpacing: isMobile ? '-0.5px' : '-2px',
                      whiteSpace: 'nowrap',
                      fontFamily: "'Oswald', 'Bebas Neue', sans-serif"
                    }}
                  >
                    <div style={{ color: '#3b2316', zIndex: -10, fontSize: isMobile ? '28px' : undefined }}>
                      DELICIOUS FLAVORS
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards (5) */}
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 relative"
                  style={{
                    width: isMobile ? '100%' : '50vw',
                    maxWidth: isMobile ? '100%' : 1080,
                    height: isMobile ? 'auto' : 'min(72vh, 820px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '12px 0' : 0, // MOBILE: slightly smaller vertical spacing
                    marginBottom: isMobile ? '26px' : '0', // MOBILE: smaller gap between stacked cards
                  }}
                >
                  <div
                    ref={(el) => setCardRef(el, i)}
                    className="relative"
                    style={{
                      width: isMobile ? '92%' : '100%',
                      height: isMobile ? '210px' : '100%',
                      maxHeight: isMobile ? 360 : 420,
                      maxWidth: isMobile ? 420 : 700,
                      borderRadius: isMobile ? 20 : 28, // MOBILE: slightly smaller radius
                      overflow: 'visible',
                      transform: isMobile ? 'none' : 'rotate(4deg)',
                      transformOrigin: 'center center',
                      backgroundImage: `url(${item.backplate})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'bottom center',
                      boxShadow: '0 22px 60px rgba(0,0,0,0.10)',
                      padding: isMobile ? 16 : 36,
                    }}
                  >
                    {/* SINGLE centered pieces image (mover wrapper moved by pointer) */}
                    <div
                      className="spylt-piece"
                      aria-hidden
                      style={{
                        position: 'absolute',
                        bottom: isMobile ? 22 : 40,
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        zIndex: 20,
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: isMobile ? (PIECE_SIZE_MOBILE * 0.72) + 'px' : PIECE_SIZE_DESKTOP + 'px',
                        height: 'auto',
                      }}
                    >
                      <div
                        ref={(el) => setPieceMoverRef(el, i)}
                        style={{
                          display: 'block',
                          willChange: 'transform',
                          transform: 'translate3d(0,0,0)',
                        }}
                      >
                        <img
                          src={item.piece}
                          alt=""
                          style={{
                            display: 'block',
                            transform: isMobile ? 'translate(-50%,0) rotate(6deg)' : 'translate(-50%,0) rotate(8deg)',
                            position: 'relative',
                            left: '50%',
                            height: 'auto',
                            maxHeight: isMobile ? PIECE_SIZE_MOBILE * 0.9 : PIECE_SIZE_DESKTOP,
                            width: isMobile ? PIECE_SIZE_MOBILE * 0.9 : PIECE_SIZE_DESKTOP,
                            filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.14))',
                          }}
                          aria-hidden
                        />
                      </div>
                    </div>

                    {/* Center can (mover wrapper moved by pointer) */}
                    <div
                      className="spylt-can"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: isMobile ? '45%' : '42.5%',
                        transform: 'translate(-50%, -50%)',
                        width: isMobile ? '62%' : '48%',
                        maxWidth: 720,
                        zIndex: 30,
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        ref={(el) => setCanMoverRef(el, i)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          willChange: 'transform',
                          transform: 'translate3d(0,0,0)',
                        }}
                      >
                        <img
                          src={item.can}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.16))',
                          }}
                          aria-hidden
                        />
                      </div>
                    </div>

                    {/* bottom-left label (clearly in front) */}
                    <div
                      className="spylt-card-label"
                      style={{
                        position: 'absolute',
                        left: isMobile ? 12 : 22,
                        bottom: isMobile ? 12 : 22,
                        zIndex: 1150,
                        color: '#3b2316',
                        // MOBILE-ONLY: slightly stronger background so label reads on smaller screens
                        background: isMobile ? 'rgba(250,234,222,0.98)' : 'rgba(250,234,222,0.95)',
                        padding: isMobile ? '6px 10px' : '8px 12px',
                        borderRadius: isMobile ? 6 : 8,
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        fontSize: isMobile ? 12 : 18,
                        letterSpacing: '0.02em',
                        textShadow: '0 6px 18px rgba(0,0,0,0.06)',
                        fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
                      }}
                    >
                      {item.name}
                    </div>

                    {/* description moved to right side, vertically centered */}
                    <div
                      style={{
                        position: 'absolute',
                        right: isMobile ? 12 : 22,
                        top: '90%',
                        transform: 'translateY(-50%)',
                        zIndex: 1145,
                        color: '#3b2316',
                        background: isMobile ? 'rgba(250,234,222,0.96)' : 'rgba(250,234,222,0.94)',
                        padding: isMobile ? '8px 10px' : '10px 14px',
                        borderRadius: isMobile ? 8 : 10,
                        fontWeight: 600,
                        fontSize: isMobile ? 11 : 14,
                        letterSpacing: '0.01em',
                        fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
                        maxWidth: isMobile ? '58%' : '38%',
                        textAlign: 'right',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* GET IT NOW button: centered at bottom of sticky area */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: isMobile ? 12 : 28,
                zIndex: 1300,
                pointerEvents: 'auto',
                bottom:0,
              }}
            >
              <button
                onClick={() => { /* add handler if needed, e.g. open modal or go to product */ }}
                style={{
                  background: '#df9a47',
                  color: '#2b160f',
                  padding: isMobile ? '10px 28px' : '14px 40px', // MOBILE: smaller button
                  borderRadius: 9999,
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  boxShadow: '0 8px 24px rgba(223,154,71,0.24)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
                  textTransform: 'uppercase',
                  fontSize: isMobile ? 12 : undefined,
                  
                }}
              >
                GET IT NOW
              </button>
            </div>

            {/* progress omitted intentionally */}
          </div>
        </div>
      </div>
    </section>
  );
}