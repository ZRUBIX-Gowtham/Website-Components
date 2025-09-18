'use client';

import React, { useEffect,useState } from 'react';
import V163 from './V163 web';
import V164 from './V164 mobile';



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
    <div id="section9-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
      <section id="V163" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label >Section_9 - V163</label>
        <div style={{marginTop : '50px'}}>
          <V163 />
        </div>
      </section>


      <section id="V164" style={{ padding: '100px 0 20px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label >Section_7 - V164</label>
        <div style={{marginTop : '50px'}}>
          <V164 />
        </div>
      </section>
    </div>
  );
}