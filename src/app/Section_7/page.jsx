'use client';

import React, { useEffect,useState } from 'react';
import V155 from './V155 web';
import V156 from './V156 mobile';


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
    <div id="section7-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
      <section id="V155" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label >Section_7 - V155</label>
        <div style={{marginTop : '50px'}}>
          <V155 />
        </div>
      </section>


      <section id="V156" style={{ padding: '100px 0 20px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label >Section_7 - V156</label>
        <div style={{marginTop : '50px'}}>
          <V156 />
        </div>
      </section>
    </div>
  );
}