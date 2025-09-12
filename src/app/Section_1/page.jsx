'use client';

import React, { useEffect,useState } from 'react';
import V12 from './V12';
import V15 from './V15';
import V16 from './V16';
import MobileV16 from './MobileV16';
import V26 from './V26';

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

  ///////////////////////////////
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
          <V16/>
        </div>
      </section>

       <section id="V26" style={{ padding: '20px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_2 - V26</label>
        <div>
          <V26/>
        </div>
      </section>
    </div>
  );
}