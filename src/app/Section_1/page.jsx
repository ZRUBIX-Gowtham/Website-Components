'use client';

import React, { useEffect,useState } from 'react';
import V12 from './V12';
import V15 from './V15';
import V16 from './V16';
import MobileV16 from './MobileV16';
import V26 from './V26';
import V29 from './V29';
import V193 from './V193 mobile';
import V194 from './V194 mobile';
import V195 from './V195 mobile';

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
    <div id="section2-container">
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>{titleText}</h2>
      <section id="V12" style={{ padding: '100px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V12</label>
        <div>
          <V12 />
        </div>
      </section>

      <section id="V15" style={{ padding: '20px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V15</label>
        <div>
          <V15 />
        </div>
      </section>

      <section id="V16" style={{ padding: '20px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V16</label>
        <div>
          <V16/>
        </div>
      </section>

       <section id="V193" style={{ padding: '20px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V193</label>
        <div>
          <V193/>
        </div>
      </section>

       <section id="V26" style={{ padding: '20px 0 0px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V26</label>
        <div>
          <V26/>
        </div>
      </section>

      <section id="V194" style={{ padding: '20px 0 0px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V194</label>
        <div>
          <V194/>
        </div>
      </section>

      <section id="V29" style={{ padding: '20px 0 0px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V29</label>
        <div>
          <V29/>
        </div>
      </section>

       <section id="V195" style={{ padding: '20px 0 0px 0', textAlign: 'center', fontWeight: 'bold' }}>
        <label>Section_1 - V195</label>
        <div>
          <V195/>
        </div>
      </section>
    </div>
  );
}