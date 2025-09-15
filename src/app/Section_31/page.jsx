'use client';

import React, { useEffect,useState } from 'react';

import V60 from './V60';
import V59 from './V59';

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
    <div id="section31-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
       <section id="V59" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_31 - V59</label>
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
    </div>
  );
}