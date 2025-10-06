import React from 'react';
import Image from 'next/image';

function V185() {
  const doctorsData = [
    {
      name: "Lorem Ipsum",
      specialty: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod lacus in mi consequat, a pulvinar sapien facilisis.",
      image: "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
      link: "#"
    },
    {
      name: "Dolor Sit",
      specialty: "Amet consectetur",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
      link: "#"
    },
    {
      name: "Amet Consectetur",
      specialty: "Adipiscing elit",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
      image: "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
      link: "#"
    }
  ];

  return (
    <div className="doctors-section-absolute-image font-inter bg-white py-3 px-5 text-center">
      <style>
        {`
        /* Minimal fallback CSS for exact measurements, underline pseudo, and image wrapper placement */
        .doctors-section-absolute-image h4 {
          position: relative;
          display: inline-block;
        }
        .doctors-section-absolute-image h4::after {
          content: '';
          position: absolute;
          left: 10px;
          bottom: -5px;
          width: 50px;
          height: 3px;
          background-color: #007bff;
          border-radius: 2px;
        }

        /* Circular image wrapper precise sizing & gradient border */
        .doctor-image-wrapper-absolute-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #e0f2f7;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          background: linear-gradient(135deg, #e0f2f7, #cce7f0);
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -75px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }

        /* Responsive fallbacks to match original */
        @media (max-width: 1024px) {
          .doctor-card-absolute-image { width: 280px; padding-top: 80px; }
          .doctor-image-wrapper-absolute-image { width: 130px; height: 130px; top: -65px; }
        }

        @media (max-width: 768px) {
          .doctors-container-absolute-image { flex-direction: column; align-items: center; gap: 70px; }
          .doctor-card-absolute-image { width: 90%; max-width: 350px; margin-bottom: 30px; padding-top: 90px; }
          .doctor-image-wrapper-absolute-image { width: 150px; height: 150px; top: -75px; }
        }

        @media (max-width: 480px) {
          .doctors-section-absolute-image h2 { font-size: 1.8rem; margin-bottom: 110px; }
          .doctor-card-absolute-image { padding-top: 80px; }
          .doctor-image-wrapper-absolute-image { width: 120px; height: 120px; top: -60px; }
          .doctor-details-container-absolute-image h3 { font-size: 1.4rem; }
          .doctor-details-container-absolute-image h5 { font-size: 0.9rem; }
          .doctor-details-container-absolute-image p { font-size: 0.85rem; }
          .learn-more-button { padding: 8px 18px; font-size: 0.9rem; }
        }
        `}
      </style>

      <h4 className="text-sm text-blue-600 font-bold uppercase mb-2">LOREM IPSUM</h4>
      <h2 className="text-[40px] text-slate-800 font-extrabold mb-[130px]">Lorem ipsum dolor sit amet</h2>

      <div className="doctors-container-absolute-image flex justify-center gap-8 flex-wrap max-w-[1300px] mx-auto">
        {doctorsData.map((doctor, index) => (
          <div
            className="doctor-card-absolute-image relative bg-white rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-[320px] flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] mb-5 pt-[90px] pb-10"
            key={index}
          >
            <div className="doctor-image-wrapper-absolute-image">
              <div className="relative w-full h-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="doctor-details-container-absolute-image px-6 w-full box-border flex flex-col items-center flex-grow">
              <h3 className="text-[1.5rem] text-slate-800 mt-0 mb-2 font-bold">{doctor.name}</h3>
              <h5 className="text-[1.1rem] text-blue-600 mb-4 font-semibold">{doctor.specialty}</h5>
              <p className="text-[0.95rem] text-slate-600 leading-6 mb-6">{doctor.description}</p>
              <a
                href={doctor.link}
                className="learn-more-button inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold shadow-[0_4px_10px_rgba(0,123,255,0.2)] hover:bg-[#0056b3] hover:-translate-y-[2px] transition-all"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default V185;