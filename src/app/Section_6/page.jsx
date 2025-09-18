'use client';

import React, { useEffect,useState } from 'react';
import V19 from './V19';
import V23 from './V23';
import V33 from './V33';
import V50 from './V50';
import V37 from './V37';
import V47 from './V47';
import V151 from './V151 Web';
import V152 from './V152 mobile';

export default function Section_2() {

  const titleText = '';

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
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
    
      <section id="V19" style={{ padding: '100px 20px 0 20px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V19</label>
        <div>
          <V19 />
        </div>
      </section> 
      
      <section id="V23" style={{ padding: '100px 20px 0 20px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V23</label>
        <div>
          <V23 />
        </div>
      </section>

       <section id="V33" style={{ padding: '100px 20px 0 20px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V33</label>
        <div>
          <V33 />
        </div>
      </section>

       <section id="V37" style={{ padding: '100px 20px 0 20px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V37</label>
        <div>
          <V37 />
        </div>
      </section>

      <section id="V47" style={{ padding: '100px 0px 600px 0px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V47</label>
        <div>
          <V47 />
        </div>
      </section>

        <section id="V50" style={{ padding: '100px 0px 600px 0px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V50</label>
        <div>
          <V50 />
        </div>
      </section>

       <section id="V151" style={{ padding: '100px 0px 100px 0px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V151</label>
        <div>
          {/* <V151 /> */}
        </div>
      </section>

      <section id="V152" style={{ padding: '100px 0px 100px 0px', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_6 - V151</label>
        <div>
          {/* <V152 /> */}
        </div>
      </section>

    </div>
  );
}