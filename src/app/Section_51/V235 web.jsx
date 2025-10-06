'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function V235() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const stickyRef = useRef(null);

  const totalScrollWidthRef = useRef(0);
  const viewportWidthRef = useRef(0);
  const rafRef = useRef(null);
  const extraScrollRef = useRef(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0..1
  const [progressInset, setProgressInset] = useState(20);
  const [isMobile, setIsMobile] = useState(false);

  // --------- CONFIG tweaks for faster horizontal movement ----------
  const MIN_EXTRA_SCROLL_DESKTOP = 800; // reduced
  const EXTRA_SCROLL_MULTIPLIER_DESKTOP = 0.85; // reduced multiplier

  const MIN_EXTRA_SCROLL_MOBILE = 300; // reduced for mobile (not used in mobile column mode but kept)
  const EXTRA_SCROLL_MULTIPLIER_MOBILE = 1.0; // more direct mapping on mobile (unused in column mode)

  const ADDITIONAL_EXTRA_SCROLL_BUFFER = 100; // smaller buffer
  // ----------------------------------------------------------------

  // Cards (background images)
  const cards = [
    {
      name: 'Sugar Rush',
      src: {
        small: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=480&q=60',
        med: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=60',
        large: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=60',
      },
      desc: 'The pink heart of the kingdom ruled by sparkle, charm and a dash of royal mischief.',
    },
    {
      name: 'Sour Power',
      src: {
        small: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=480&q=60',
        med: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=60',
        large: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1400&q=60',
      },
      desc: 'A wild green land where clever minds and sour tongues play by their own rules.',
    },
    {
      name: 'Cocoa Bliss',
      src: {
        small: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=480&q=60',
        med: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=60',
        large: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=60',
      },
      desc: 'A cocoa-rich paradise where rivers flow with fudge and mountains hide golden truffles.',
    },
    {
      name: 'Licorizz',
      src: {
        small: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=480&q=60',
        med: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=60',
        large: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=60',
      },
      desc: 'Elegant and enigmatic, Licorizz is the smoky-black capital of cool – where flavor speaks in whispers.',
    },
  ];

  // Preload images and track progress (no visible loader text)
  useEffect(() => {
    const urls = cards.map((c) => c.src.large).filter(Boolean);
    setTotalCount(urls.length);

    let mounted = true;
    const imgs = [];

    function handleLoad() {
      if (!mounted) return;
      setLoadedCount((p) => p + 1);
    }

    urls.forEach((u) => {
      try {
        const img = new window.Image();
        img.src = u;
        img.onload = handleLoad;
        img.onerror = handleLoad;
        imgs.push(img);
      } catch (e) {
        handleLoad();
      }
    });

    return () => {
      mounted = false;
      imgs.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // responsive inset & isMobile helper
  useEffect(() => {
    function updateLayoutHelpers() {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setProgressInset(mobile ? 10 : 20);
    }
    updateLayoutHelpers();
    window.addEventListener('resize', updateLayoutHelpers);
    return () => window.removeEventListener('resize', updateLayoutHelpers);
  }, []);

  // Map vertical scroll to horizontal translate; recalc sizes on load/resize/image load
  // BUT: if isMobile -> switch to column mode and skip horizontal transform logic
  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    const sticky = stickyRef.current;
    if (!container || !scroller || !sticky) return;

    // ensure the scroller hints browser about transform changes
    scroller.style.willChange = 'transform';
    scroller.style.touchAction = isMobile ? 'auto' : 'pan-y'; // allow default on mobile

    function refreshDims() {
      if (isMobile) {
        // COLUMN MODE: normal document flow
        extraScrollRef.current = 0;
        container.style.height = 'auto';
        scroller.style.transform = 'none';
        scroller.style.width = '100%';
        // ensure flex direction set to column by className (render-time) but also enforce here
        scroller.style.flexDirection = 'column';
        setScrollProgress(0);
        return;
      }

      // DESKTOP horizontal mapping
      scroller.style.flexDirection = 'row';
      scroller.style.width = 'max-content';

      totalScrollWidthRef.current = scroller.scrollWidth;
      viewportWidthRef.current = sticky.clientWidth || window.innerWidth;

      const horizontalTravel = Math.max(totalScrollWidthRef.current - viewportWidthRef.current, 0);

      const multiplier = EXTRA_SCROLL_MULTIPLIER_DESKTOP;
      const minExtra = MIN_EXTRA_SCROLL_DESKTOP;

      const extraFromTravel = Math.round(horizontalTravel * multiplier);
      const extraFromViewport = Math.round(window.innerHeight * 0.35); // smaller viewport part
      const extraScroll = Math.max(minExtra, extraFromTravel + extraFromViewport + ADDITIONAL_EXTRA_SCROLL_BUFFER);

      extraScrollRef.current = extraScroll;

      const neededHeight = horizontalTravel + window.innerHeight + extraScroll;
      container.style.height = `${Math.max(neededHeight, window.innerHeight)}px`;
    }

    function applyTranslate(progress) {
      if (isMobile) return; // no translation in mobile/column mode
      const maxTranslateX = Math.max(totalScrollWidthRef.current - viewportWidthRef.current, 0);
      const translateX = -(maxTranslateX * progress);
      scroller.style.transform = `translateX(${translateX}px)`;
      setScrollProgress(progress);
    }

    function onScroll() {
      if (!container) return;
      if (isMobile) {
        setScrollProgress(0);
        return;
      }
      const rect = container.getBoundingClientRect();
      const start = rect.top + window.scrollY;
      const end = start + container.offsetHeight - window.innerHeight;
      const denom = Math.max(end - start, 1);
      const progress = Math.min(Math.max((window.scrollY - start) / denom, 0), 1);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        applyTranslate(progress);
      });
    }

    function onResize() {
      refreshDims();
      onScroll();
    }

    // initial measurement & position
    refreshDims();
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loadedCount, isMobile]);

  // Click/drag on the inline progress bar to jump (progress bar is hidden on mobile)
  function jumpToProgress(p) {
    const container = containerRef.current;
    if (!container || isMobile) return;

    const rect = container.getBoundingClientRect();
    const start = window.scrollY + rect.top;
    const maxRange = Math.max(container.offsetHeight - window.innerHeight, 0);

    const targetYUnclamped = start + p * maxRange;
    const maxScrollTop = Math.max(document.scrollingElement?.scrollHeight - window.innerHeight, 0);
    const targetY = Math.min(Math.max(targetYUnclamped, 0), maxScrollTop);

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  // Helper: convert pointer x into normalized progress (0..1) accounting for inset
  function pointerToProgress(clientX, barRect) {
    const left = barRect.left + progressInset;
    const right = barRect.right - progressInset;
    const usable = Math.max(right - left, 1);
    const clampedX = Math.min(Math.max(clientX, left), right);
    return (clampedX - left) / usable;
  }

  // drag handlers (desktop + touch) for the inline bar
  function startPointerDrag(e) {
    if (isMobile) return; // progress bar disabled on mobile

    if (e.pointerType === 'mouse') e.preventDefault();

    const isTouch = e.type === 'touchstart' || e.pointerType === 'touch';
    const bar = e.currentTarget;

    function moveHandler(ev) {
      const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
      const p = pointerToProgress(clientX, bar.getBoundingClientRect());
      jumpToProgress(p);
    }
    function upHandler() {
      window.removeEventListener(isTouch ? 'touchmove' : 'mousemove', moveHandler);
      window.removeEventListener(isTouch ? 'touchend' : 'mouseup', upHandler);
    }

    window.addEventListener(isTouch ? 'touchmove' : 'mousemove', moveHandler, { passive: false });
    window.addEventListener(isTouch ? 'touchend' : 'mouseup', upHandler, { passive: true });
  }

  // POINTER DRAGGING ON SCROLLER (direct horizontal swipe) - disabled on mobile (column)
  useEffect(() => {
    const scroller = scrollerRef.current;
    const container = containerRef.current;
    if (!scroller || !container) return;
    if (isMobile) return; // don't attach drag handlers in column mode

    let isDragging = false;
    let startX = 0;
    let startProgress = 0;
    let lastRAF = null;

    function getMaxTranslate() {
      return Math.max(totalScrollWidthRef.current - (stickyRef.current?.clientWidth || window.innerWidth), 0);
    }

    function pointerDown(e) {
      // only start if primary
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
        window.scrollTo({ top: Math.min(Math.max(targetY, 0), Math.max(document.scrollingElement?.scrollHeight - window.innerHeight, 0)), behavior: 'auto' });
      });
    }

    function pointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      try {
        scroller.releasePointerCapture?.(e.pointerId);
      } catch (err) {
        // ignore
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollProgress, loadedCount, isMobile]);

  const ariaValueNow = Math.round(scrollProgress * 100);

  // ------------------- RENDER -------------------
  return (
    <section ref={containerRef} className="relative bg-purple-50">
      <div
        ref={stickyRef}
        className="sticky top-14 md:top-20 flex flex-col justify-center overflow-hidden"
      >
        <div className="max-w-[1700px] mx-auto ">
          {/* Scroller area */}
          <div className="w-full">
            <div
              ref={scrollerRef}
              // switch to column on mobile
              className={`flex ${isMobile ? 'flex-col gap-6 md:gap-8' : 'gap-6 md:gap-8'} will-change-transform items-center`}
              style={{
                width: isMobile ? '100%' : 'max-content',
                transform: isMobile ? 'none' : 'translateX(0px)',
                transition: isMobile ? 'none' : 'transform 180ms linear',
                touchAction: isMobile ? 'auto' : 'pan-y',
              }}
            >
              {/* Intro poster-like block */}
              <div className="shrink-0 w-[42vw] sm:w-[72vw] md:w-[40vw] lg:w-[38vw] max-w-[1000px] relative rounded-3xl overflow-visible px-4 sm:px-6 py-2 sm:py-2">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div
                    className="uppercase tracking-wide font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '1.1px #000',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    FASHION
                  </div>

                  <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                    <div className="text-black">THAT FLOWS</div>
                    <div className="text-black">WITH THE</div>
                    <div className="text-black">SEASONS</div>
                  </h1>

                  <p className="text-sm sm:text-base text-gray-700 max-w-xl">
                    Explore our latest collection of timeless fashion. From classic styles to modern trends,
                    find the perfect look for every season. Shop now and elevate your wardrobe!
                  </p>

                  <div className="flex items-center justify-center gap-3 mt-3">
                    <button
                      aria-label="arrow"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black flex items-center justify-center bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button className="px-3 sm:px-4 py-2 sm:py-2.5  rounded-full border-2 border-black bg-white text-black font-medium text-sm sm:text-base">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>

              {/* Cards */}
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[92vw] sm:w-[72vw] md:w-[40vw] lg:w-[32vw] max-w-[900px] relative rounded-3xl bg-transparent"
                >
                  <div
                    className="rounded-3xl overflow-visible"
                    style={{ padding: 12, background: 'transparent' }}
                  >
                    <div style={{ borderRadius: 22, overflow: 'visible' }}>
                      <img
                        src={item.src.med}
                        srcSet={`${item.src.small} 480w, ${item.src.med} 900w, ${item.src.large} 1400w`}
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, 40vw"
                        alt={item.name}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'clamp(200px, 46vh, 480px)',
                          objectFit: 'cover',
                          borderRadius: 18,
                          display: 'block',
                        }}
                        onLoad={() => {
                          /* optional: could update loadedCount per-image if you want more accurate progress */
                        }}
                        aria-hidden
                      />

                      {/* caption bubble overlapping bottom-left */}
                      <div style={{ position: 'relative', transform: 'translateY(-36px)', padding: '16px 16px 6px' }}>
                        <div
                          style={{
                            display: 'inline-block',
                            background: 'white',
                            position: 'absolute',
                            top: '-92px',
                            left: -16,
                            borderRadius: 12,
                            padding: '10px 12px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.06)',
                            maxWidth: 220,
                          }}
                        >
                          <div style={{ fontWeight: 600, color: '#111827', fontSize: 13 }}>{item.name}</div>
                          <div style={{ color: '#4b5563', fontSize: 12, marginTop: 6 }}>
                            {item.desc}
                          </div>
                        </div>
                      </div>

                      <div style={{ padding: '14px' }}>
                        <h3 style={{ textTransform: 'uppercase', fontWeight: 700, color: '#111827' }}>{item.name}</h3>
                        <p style={{ color: '#4b5563', marginTop: 8 }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline thin progress bar (hidden on mobile) */}
            {!isMobile && (
              <div className="mt-6 md:mt-8 w-full px-4 sm:px-6">
                <div
                  className="relative mx-auto"
                  style={{ maxWidth: 1200, touchAction: 'none', minHeight: 28 }}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const p = pointerToProgress(e.clientX, rect);
                    jumpToProgress(p);
                  }}
                  onPointerDown={startPointerDrag}
                  onTouchStart={startPointerDrag}
                  role="slider"
                  aria-valuenow={ariaValueNow}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                      const p = Math.max(0, scrollProgress - 0.05);
                      jumpToProgress(p);
                    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                      const p = Math.min(1, scrollProgress + 0.05);
                      jumpToProgress(p);
                    } else if (e.key === 'Home') {
                      jumpToProgress(0);
                    } else if (e.key === 'End') {
                      jumpToProgress(1);
                    }
                  }}
                >
                  {/* invisible track for accessibility */}
                  <div
                    style={{
                      height: 2,
                      background: 'transparent',
                      opacity: 0,
                      borderRadius: 2,
                      position: 'relative',
                    }}
                    aria-hidden
                  />

                  {/* Black filled line inset by progressInset */}
                  <div
                    style={{
                      position: 'absolute',
                      left: progressInset,
                      right: progressInset + 250,
                      top: 0,
                      bottom: 0,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      pointerEvents: 'none',
                      justifyContent: 'center',
                      margin: '0 auto',
                    }}
                  >
                    <div
                      style={{
                        height: 3,
                        background: '#000',
                        transformOrigin: 'left center',
                        transform: `scaleX(${Math.max(0.01, scrollProgress)})`,
                        transition: 'transform 120ms linear',
                        width: '140%',
                      }}
                      aria-hidden
                    />
                  </div>

                  {/* Visually hidden progress for screen readers */}
                  <div
                    style={{
                      position: 'absolute',
                      width: 1,
                      height: 1,
                      overflow: 'hidden',
                      clip: 'rect(0 0 0 0)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Progress: {ariaValueNow}%
                  </div>
                </div>

                {/* No loader text */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}