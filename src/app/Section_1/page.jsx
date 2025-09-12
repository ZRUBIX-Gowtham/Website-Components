'use client';

import React, { useEffect,useState } from 'react';
import V12 from './V12';
import V15 from './V15';
import V16 from './V16';
import MobileV16 from './MobileV16';

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
    <div id="section2-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
      <section id="V12" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_2 - V12</label>
        <div>
          <V12 />
        </div>
      </section>

      <section id="V15" style={{ padding: '20px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_2 - V15</label>
        <div>
          <V15 />
        </div>
      </section>

      <section id="V16" style={{ padding: '20px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_2 - V16</label>
        <div>
          {isMobile ? <MobileV16 /> : <V16/>}
        </div>
      </section>
    </div>
  );
}