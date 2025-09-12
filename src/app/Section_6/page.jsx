'use client';

import React, { useEffect,useState } from 'react';
import V19 from './V19';

export default function Section_2() {

  const titleText = 'Moon Light';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Guard for SSR
    if (typeof window === 'undefined') return;

    const isMobileDevice = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera || '';
      const isUserAgentMobile = /android|iphone|ipod|ipad|windows phone|blackberry/i.test(ua);
      const hasTouch = typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 0;
      const smallWidth = window.innerWidth <= 768;
      return isUserAgentMobile || hasTouch || smallWidth;
    };

    // initial
    setIsMobile(isMobileDevice());

    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div id="section6-container">
      {/* <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2> */}
      <section id="V19" style={{ padding: '100px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_2 - V12</label>
        <div>
          <V19 />
        </div>
      </section>
    </div>
    // {isMobile ? <MobileV16 /> : <V16/>}
  );
}