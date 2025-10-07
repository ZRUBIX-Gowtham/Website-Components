'use client';

import React, { useEffect,useState } from 'react';
import V250 from './V250 web';
import V251 from './V251 mobile';




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
    <div id="section11-container">
      {/* <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2> */}
      {/* <section id="V250" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}> */}
      <section id="V250" >
        {/* <label >Section_11 - V250</label> */}
        <div style={{marginTop : '50px'}}>
          <V250 />
        </div>
      </section>

      <section id="V251" >
        {/* <label >Section_11 - V251</label> */}
        <div style={{marginTop : '50px'}}>
          <V251 />
        </div>
      </section>
      
    </div>
  );
}