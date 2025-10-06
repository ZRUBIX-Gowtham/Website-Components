import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function V183() {
  const statRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    statRefs.current.forEach((el, index) => {
      const valueElement = el.querySelector('h2');
      const targetValue = parseInt(valueElement.textContent.replace(/[^0-9]/g, ''));
      const suffix = valueElement.textContent.replace(/[0-9]/g, '');

      gsap.fromTo(valueElement, 
        { innerText: 0 }, 
        { 
          innerText: targetValue, 
          duration: 2, 
          snap: { innerText: 1 },
          ease: "power1.out",
          onUpdate: function() {
            valueElement.textContent = Math.ceil(this.targets()[0].innerText) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });
  }, []);

  const statsData = [
    {
      value: "40+",
      label: "Lorum Lipsum",
    },
    {
      value: "10 Lakh",
      label: "Lorum Lipsum",
    },
    {
      value: "20+",
      label: "Lorum Lipsum",
    },
    {
      value: "15+",
      label: "Lorum Lipsum",
    }
  ];

  return (
    <div className="stats-section-simple flex flex-wrap justify-around items-start mx-auto p-10 max-w-[1200px] relative overflow-hidden">
      <style>
        {`
        /* Keep exact font & responsive breakpoints identical to your original CSS */
        .stats-section-simple {
          font-family: 'Inter', sans-serif;
          background-color: transparent;
        }

        /* Media query steps to match original behavior exactly */
        @media (max-width: 1200px) {
          .stat-item-simple { max-width: 25%; }
        }

        @media (max-width: 992px) {
          .stat-item-simple { max-width: 45%; }
        }

        @media (max-width: 768px) {
          .stats-section-simple { flex-direction: column; padding: 30px 15px; align-items: center; }
          .stat-item-simple { margin: 10px 0; width: 90%; max-width: 280px; padding: 15px; }
          .stat-item-simple h2 { font-size: 2rem; }
          .stat-item-simple p { font-size: 0.9rem; }
        }

        @media (max-width: 480px) {
          .stat-item-simple { padding: 10px; }
          .stat-item-simple h2 { font-size: 1.6rem; }
          .stat-item-simple p { font-size: 0.8rem; }
          .stat-icon { width: 35px; height: 35px; }
        }
        `}
      </style>

      {statsData.map((stat, index) => (
        <div
          className="stat-item-simple text-center m-4 text-black flex-1 min-w-[200px] max-w-[280px] p-5 bg-white rounded-md shadow-sm transition-transform duration-200 flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-md"
          key={index}
          ref={el => statRefs.current[index] = el}
        >
          <div className="icon-wrapper-simple mb-2">
          </div>

          <div className="text-container-simple w-full mt-1">
            <h2 className="text-[2.5rem] font-extrabold mb-1 leading-[1.1] text-black">{stat.value}</h2>
            <p className="text-base text-black leading-6 font-normal">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default V183;