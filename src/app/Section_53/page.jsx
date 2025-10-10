'use client';

import React, { useEffect,useState } from 'react';
import V235 from './V235 web';
import V236 from './V236 mobile';
import V264 from './V264 web';
import V265 from './V265 mobile';



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
    
      
<section id="V235" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label >Section_53 - V235</label>
        <div style={{marginTop : '50px'}}>
          <V235 />
        </div>
      </section>

      <section id="V236" style={{ padding: '100px 0 20px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label >Section_53 - V236</label>
        <div style={{marginTop : '50px'}}>
          <V236 />
        </div>
      </section>

        <section id="V264" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
        <label >Section_53 - V264</label>
        <div style={{marginTop : '50px'}}>
          <V264 />
        </div>
      </section>

      <section id="V265" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
        <label >Section_53 - V265</label>
        <div style={{marginTop : '50px'}}>
          <V265 />
        </div>
      </section>
    </div>
  );
}