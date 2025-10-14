import React, { useEffect, useRef, useState } from 'react';

/**
 * V266Pause2 (mobile layout + hide loading text)
 * - Avoids flash when switching to pause frame (requestVideoFrameCallback fallback).
 * - Pause video loads only once.
 * - Hides non-error loading text from the UI.
 * - Mobile layout: stack elements one-by-one, smaller responsive font sizes, better spacing.
 */
export default function V267({ url, initialUrl, pauseAtSeconds = 3.3 }) {
  const PAUSE_VIDEO_URL = url || 'https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F66ceef357d683ae03c80a20d_!!!hero_animation-transcode.mp4';
  const INITIAL_VIDEO_URL = initialUrl || PAUSE_VIDEO_URL;

  const initialRef = useRef(null);
  const pauseRef = useRef(null);
  const spacerRef = useRef(null);

  const [showPauseVideo, setShowPauseVideo] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'ready' | 'error'
  const [errMsg, setErrMsg] = useState('');
  const [pauseReady, setPauseReady] = useState(false);
  const pendingShowRef = useRef(false);
  const pauseLoadedRef = useRef(false); // ensure pause video is loaded only once

  // overlay content reveal
  const [showContent, setShowContent] = useState(false);

  // scroll-driven tiny tilt + zoom-out
  const [scrollAngle, setScrollAngle] = useState(0); // degrees
  const [scrollScale, setScrollScale] = useState(1); // scale (1 -> no change, <1 zoom out)

  // detect mobile (simple width check). Use matchMedia to respond to resizes.
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Parameters
    const activationPx = 30; // effect maps across this many px (when spacer.top goes from 30 -> 0)
    const maxDeg = 3;        // max rotation in degrees (small)
    const minScale = 0.97;   // min scale (zoom-out target)

    // On mobile we don't want rotation/zoom so skip attaching scroll handler
    if (isMobile) {
      // reset values and exit early
      setScrollAngle(0);
      setScrollScale(1);
      return;
    }

    let ticking = false;
    const measure = () => {
      if (!spacerRef.current) return;
      const top = spacerRef.current.getBoundingClientRect().top;
      // compute progress only when within [0..activationPx]
      let progress = 0;
      if (top <= activationPx) {
        progress = (activationPx - top) / activationPx;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
      } else {
        progress = 0;
      }
      // interpolate
      setScrollAngle(progress * maxDeg);
      setScrollScale(1 - progress * (1 - minScale));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          measure();
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // initialize
    measure();

    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  // Helper: safe show of pause video only after a painted frame
  const showPauseSafely = () => {
    const pv = pauseRef.current;
    if (!pv) {
      setShowPauseVideo(true);
      return;
    }
    // ensure visibility remains hidden until we call show
    const show = () => {
      try { pv.style.visibility = 'visible'; } catch (e) {}
      setShowPauseVideo(true);
    };

    // If RVFC exists, wait until the first frame callback (ensures a frame painted)
    if (typeof pv.requestVideoFrameCallback === 'function') {
      try {
        pv.requestVideoFrameCallback(() => {
          // small rAF to be extra-safe
          window.requestAnimationFrame(show);
        });
      } catch (e) {
        setTimeout(show, 40);
      }
    } else {
      // fallback: small timeout to allow the browser to decode/paint
      setTimeout(show, 40);
    }
  };

  // Initial (intro) video setup - only sets source once per URL and does not re-load unless URL changes.
  useEffect(() => {
    const v = initialRef.current;
    if (!v) return;
    const onEnded = () => {
      // Ask for a safe switch; if pause isn't ready yet, mark pending and let pause effect call show
      pendingShowRef.current = true;
      // Avoid showing 'loading' state in UI; keep status internal but don't render it
      setStatus(prev => prev === 'idle' ? 'loading' : prev);
      if (pauseReady) {
        showPauseSafely();
        pendingShowRef.current = false;
      }
    };
    const onError = () => {
      const me = v.error;
      setErrMsg(me ? `Initial media error code ${me.code}` : 'Unknown initial video error');
      setStatus('error');
      pendingShowRef.current = true;
      if (pauseReady) {
        showPauseSafely();
        pendingShowRef.current = false;
      }
    };

    v.muted = true;
    v.playsInline = true;
    v.crossOrigin = 'anonymous';
    v.preload = 'auto';

    // Only update src if it's different (avoid redundant reloads)
    if (v.src !== INITIAL_VIDEO_URL) {
      v.src = INITIAL_VIDEO_URL;
      v.load();
    }

    v.addEventListener('ended', onEnded);
    v.addEventListener('error', onError);
    v.play().catch(() => { /* ignore autoplay block */ });

    return () => {
      v.removeEventListener('ended', onEnded);
      v.removeEventListener('error', onError);
    };
  }, [INITIAL_VIDEO_URL, pauseReady]);

  // Pause video: load and seek, but only once per URL (pauseLoadedRef prevents repeated loads).
  useEffect(() => {
    const v = pauseRef.current;
    if (!v) return;

    // ensure pause video starts hidden and doesn't show until we explicitly allow it
    try { v.style.visibility = 'hidden'; } catch (e) {}

    // If we already loaded this pause video once, just set status appropriately and return.
    if (pauseLoadedRef.current && v.src === PAUSE_VIDEO_URL) {
      setStatus(pauseReady ? 'ready' : 'loading');
      return;
    }

    setStatus('loading'); setErrMsg(''); setPauseReady(false);

    const finalizeReady = () => {
      pauseLoadedRef.current = true;
      setPauseReady(true);
      setStatus('ready');
      // If the initial video has already finished and requested the transition, or pendingShow is true,
      // do the safe paint-based show.
      if (pendingShowRef.current) {
        pendingShowRef.current = false;
        showPauseSafely();
      }
    };

    const onLoadedMetadata = () => {
      try { v.currentTime = Math.max(0, pauseAtSeconds); } catch (e) {}
    };
    const onSeeked = () => {
      try { v.pause(); } catch (e) {}
      // attempt to ensure a painted frame exists before revealing
      try {
        if (typeof v.requestVideoFrameCallback === 'function') {
          v.requestVideoFrameCallback(() => finalizeReady());
        } else {
          // some browsers do not implement RVFC; use small timeout to allow paint
          setTimeout(finalizeReady, 40);
        }
      } catch (e) {
        setTimeout(finalizeReady, 40);
      }
    };
    const onLoadedData = () => {
      // some browsers may not fire seeked if currentTime is already at target;
      if (Math.abs(v.currentTime - pauseAtSeconds) < 0.05) {
        try { v.pause(); } catch (e) {}
        try {
          if (typeof v.requestVideoFrameCallback === 'function') {
            v.requestVideoFrameCallback(() => finalizeReady());
          } else {
            setTimeout(finalizeReady, 40);
          }
        } catch (e) {
          setTimeout(finalizeReady, 40);
        }
      }
    };
    const onError = () => {
      const me = v.error;
      setErrMsg(me ? `Media error code ${me.code}` : 'Unknown video error');
      setStatus('error');
    };

    v.muted = true;
    v.playsInline = true;
    v.crossOrigin = 'anonymous';
    // Use 'metadata' preload so the browser doesn't necessarily download whole file until needed,
    // but we still attempt to play/seek so the frame is ready.
    v.preload = 'metadata';

    // Only set src/load if we haven't already loaded this URL
    if (v.src !== PAUSE_VIDEO_URL) {
      v.src = PAUSE_VIDEO_URL;
      v.load();
    }

    v.addEventListener('loadedmetadata', onLoadedMetadata);
    v.addEventListener('seeked', onSeeked);
    v.addEventListener('loadeddata', onLoadedData);
    v.addEventListener('error', onError);

    // Try to play then pause to force decoding/ready frame (some browsers allow this)
    v.play().then(() => { try { v.pause(); } catch (e) {} }).catch(() => { /* ignore autoplay block */ });

    return () => {
      v.removeEventListener('loadedmetadata', onLoadedMetadata);
      v.removeEventListener('seeked', onSeeked);
      v.removeEventListener('loadeddata', onLoadedData);
      v.removeEventListener('error', onError);
    };
  }, [PAUSE_VIDEO_URL, pauseAtSeconds]);

  // computed video styles (adjust for mobile)
  const computedVideoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: isMobile ? '100%' : 'auto',
    height: isMobile ? '100%' : '110%',
    minWidth: isMobile ? '100%' : '100%',
    minHeight: isMobile ? '100%' : undefined,
    transform: 'translate(-50%,-50%)',
    objectFit: 'cover',
    backgroundColor: 'transparent'
  };

  // remove rotation/skew on mobile by adjusting styles used in markup
  const boxInnerStyle = {
    ...styles.boxInner,
    transform: isMobile ? 'none' : styles.boxInner.transform,
    padding: isMobile ? '8px 20px' : styles.boxInner.padding,
  };

  // Mobile-specific overrides for element spacing / font sizes so items stack clearly.
  const mobileTitleStyle = isMobile ? {
    fontSize: 'clamp(28px,8vw,46px)',
    whiteSpace: 'normal',
    marginBottom: 8,
  } : {};

  const mobileBoxTextStyle = isMobile ? {
    fontSize: 'clamp(18px,9vw,36px)',
    letterSpacing: '-2px',
  } : {};

  const mobileCopyStyle = isMobile ? {
    fontSize: 'clamp(12px,4.5vw,16px)',
    lineHeight: 1.25,
    marginTop: 10,
    marginBottom: 12,
  } : {};

  const mobileCtaStyle = isMobile ? {
    padding: '10px 20px',
    fontSize: 14,
    marginTop: 8,
  } : {};

  // Return UI
  return (
    <>
      <section
        style={{
          ...styles.hero,
          // small tilt + zoom-out driven by spacer proximity (top <= 30px)
          transform: isMobile ? 'none' : `rotate(${scrollAngle}deg) scale(${scrollScale})`,
          transition: isMobile ? 'none' : 'transform 200ms linear',
          transformOrigin: '50% 50%',
          willChange: isMobile ? 'auto' : 'transform'
        }}
      >
        <div style={styles.videoWrap}>
          <video
            ref={initialRef}
            style={{
              ...styles.video,
              ...computedVideoStyle,
              opacity: showPauseVideo ? 0 : 1,
              pointerEvents: showPauseVideo ? 'none' : 'auto',
              transition: 'opacity 160ms linear',
              backgroundColor: 'transparent'
            }}
            muted
            playsInline
            loop={false}
            poster=""
          />
          <video
            ref={pauseRef}
            style={{
              ...styles.video,
              ...computedVideoStyle,
              opacity: showPauseVideo ? 1 : 0,
              pointerEvents: showPauseVideo ? 'auto' : 'none',
              transition: 'opacity 160ms linear',
              visibility: 'hidden', // default hidden until we explicitly reveal painted frame
              backgroundColor: 'transparent'
            }}
            muted
            playsInline
            loop={false}
            poster=""
          />
        </div>

        {/* Centered overlay container */}
        <div style={styles.overlay}>
          <div
            style={{
              ...styles.content,
              // mobile: keep a little more vertical spacing; stack items cleanly
              padding: isMobile ? 12 : styles.content.padding,
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 420ms ease, transform 420ms ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: isMobile ? 8 : 12,
            }}
          >
            <h1 style={{
              ...styles.title,
              ...mobileTitleStyle,
              color: isMobile ? '#fff' : styles.title.color,
              letterSpacing: isMobile ? '-1px' : styles.title.letterSpacing,
            }}>FREAKING DELICIOUS</h1>

            <div style={{
              ...styles.boxOuter,
              // ensure box is centered and not too wide on mobile
              display: 'flex',
              justifyContent: 'center',
              width: isMobile ? '100%' : 'auto',
            }}>
              <div style={{
                ...boxInnerStyle,
                display: 'inline-block',
                width: isMobile ? 'auto' : undefined,
                textAlign: 'center'
              }}>
                <strong style={{
                  ...styles.boxText,
                  ...mobileBoxTextStyle,
                  fontSize: isMobile ? 'clamp(18px,9vw,36px)' : styles.boxText.fontSize,
                }}>PROTEIN + CAFFEINE</strong>
              </div>
            </div>

            <p style={{
              ...styles.copy,
              ...mobileCopyStyle,
              color: isMobile ? '#fff' : styles.copy.color,
              padding: isMobile ? '0 12px' : undefined,
              textAlign: 'center'
            }}>Live life to the fullest — Shatter boredom and embrace your inner kid with every deliciously smooth chug.</p>

            <button
              style={{
                ...styles.cta,
                ...mobileCtaStyle,
                // ensure visible on mobile
                background: '#e2a14a',
                borderRadius: 28,
                fontWeight: 700
              }}
              onClick={() => {
                const active = showPauseVideo ? pauseRef.current : initialRef.current;
                if (active) active.play().catch(() => { /* ignore */ });
              }}
            >
              CHUG A SPYLT
            </button>

            {/* Show only error status (hide 'loading' and other statuses from UI) */}
            <div style={styles.debug}>
              {status === 'error' && <div>{status}{errMsg ? ` — ${errMsg}` : ''}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer: observed by the scroll logic. When its top <= 30px the hero tilts/zooms-out */}
      <div ref={spacerRef} style={{ height: '100vh' }} aria-hidden="true" />
    </>
  );
}

/* ---------- styles ---------- */
const styles = {
  hero: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'block',
    zIndex: 0,
  },
  videoWrap: { position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' },
  video: {
    position: 'absolute', top: '50%', left: '50%',
    // width/height adjustments handled in computedVideoStyle
    transform: 'translate(-50%,-50%)', objectFit: 'cover'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  },
  content: {
    pointerEvents: 'auto',
    textAlign:'center',
    color:'#fff',
    padding: 20,
    maxWidth: 1100,
    margin: '0 auto',
  },
  title: {
    fontFamily: '"Bebas Neue", "Anton", sans-serif',
    fontSize:'clamp(40px,6.5vw,85px)',
    margin:0,
    whiteSpace:'nowrap',
    letterSpacing: '-4px',
    textTransform:'uppercase',
    color:'#4a2e20',
    textShadow:'0 8px 24px rgba(0,0,0,0.12)',
    lineHeight:0.9
  },
  boxOuter: {
    marginTop: 12,
    marginBottom: 8,
  },
  boxInner: {
    background:'#9f6b35',
    transform:'rotate(-2deg)',
    padding: '10px 42px',
    display: 'inline-block',
    border: '5px solid #f7d7c3',
  },
  boxText: {
    fontFamily: '"Bebas Neue", "Anton", sans-serif',
    color:'#f7d7c3',
    fontSize:'clamp(38px,9vw,80px)',
    fontWeight:700,
    whiteSpace:'nowrap',
    display:'inline-block',
    letterSpacing: '-4px',
    textTransform:'uppercase',
    lineHeight: 0.86,
  },
  copy: {
    maxWidth:680,
    margin:'18px auto',
    color:'#4a2e20',
    fontFamily:'Roboto, sans-serif',
    textShadow:'0 6px 18px rgba(0,0,0,0.06)'
  },
  cta: {
    background:'#e2a14a',
    border:'none',
    padding:'12px 26px',
    borderRadius:28,
    fontWeight:700,
    cursor:'pointer',
    fontFamily:'Roboto, sans-serif'
  },
  debug: { marginTop:18, color:'#fff', fontSize:13, textAlign:'center' }
};