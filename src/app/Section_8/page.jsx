'use client';

import React, { useEffect,useState } from 'react';

import V266 from './V266 web';
import V267 from './V267 mobile';


export default function section_8() {

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
    <div id="section8-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
      <section id="V266" >
        {/* <label >Section_8 - V266</label> */}
        <div style={{marginTop : '50px'}}>
          <V266 />
        </div>
      </section>

         <section id="V267">
        {/* <label >Section_8 - V267</label> */}
        <div style={{marginTop : '50px'}}>
          <V267 />
        </div>
      </section>


      {/* <section id="V156" style={{ padding: '100px 0 20px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label >Section_7 - V156</label>
        <div style={{marginTop : '50px'}}>
          <V156 />
        </div>
      </section> */}
    </div>
  );
}