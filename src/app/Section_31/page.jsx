'use client';

import React, { useEffect,useState } from 'react';

import V60 from './V60_web';
import V59 from './V59_mobile';
import V63 from './V63_mobile';
import V64 from './V64_web';
import V68 from './V68_web';
import V67 from './V67_mobile';

export default function Section_31() {

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
    <div id="section31-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
       <section id="V59" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_31 - V59 Mobile</label>
        <div>
          <V59/>
        </div>
      </section>
       <section id="V60" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_31 - V60</label>
        <div>
          <V60/>
        </div>
      </section>

      <section id="V63" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_31 - V63 Mobile</label>
        <div>
          <V63/>
        </div>
      </section>

    <section id="V64" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_31 - V64 </label>
        <div>
          <V64/>
        </div>
      </section>

      <section id="V67" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_31 - V67 Mobile</label>
        <div>
          <V67/>
        </div>
      </section>

      <section id="V68" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_31 - V68 </label>
        <div>
          <V68/>
        </div>
      </section>
      
    </div>
  );
}