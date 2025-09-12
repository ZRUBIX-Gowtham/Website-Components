'use client';

import React, { useEffect,useState } from 'react';
import V19 from './V19';
import V23 from './V23';

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

  return (
    <div id="section6-container">
      {/* <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2> */}
    
      <section id="V19" style={{ padding: '100px 20px 0 20px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_2 - V19</label>
        <div>
          <V19 />
        </div>
      </section>

       <section id="V23" style={{ padding: '100px 20px 0 20px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_2 - V23</label>
        <div>
          <V23/>
        </div>
      </section>

    </div>
  );
}