'use client';

import React, { useEffect,useState } from 'react';
import V54 from './V54';
import V53 from './V53';

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
    <div id="section18-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
       <section id="V53" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_18 - V53</label>
        <div>
          <V53/>
        </div>
      </section>

       <section id="V54" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_18 - V54</label>
        <div>
          <V54/>
        </div>
      </section>

    </div>
  );
}