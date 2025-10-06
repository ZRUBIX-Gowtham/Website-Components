import React from 'react';
import Image from 'next/image';

function V188() {
  const pageData = {
    header: "LOREM IPSUM",
    title: "Lorem Ipsum Dolor Sit Amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    awards: [
      {
        name: "Lorem ipsum dolor sit amet",
        icon: "https://prohealth-react.vercel.app/images/icons/award.svg",
      },
      {
        name: "Consectetur adipiscing elit",
        icon: "https://prohealth-react.vercel.app/images/icons/award.svg",
      },
      {
        name: "Sed do eiusmod tempor",
        icon: "https://prohealth-react.vercel.app/images/icons/award.svg",
      },
      {
        name: "Incididunt ut labore et dolore",
        icon: "https://prohealth-react.vercel.app/images/icons/award.svg",
      },
    ],
  };

  return (
    <>
      <style>{`
        /* Minimal CSS fallback for exact underline and shimmer pseudo effect */
        .about-rewards-awards-header {
          position: relative;
          display: inline-block;
        }
        .about-rewards-awards-header:after {
          content: '';
          position: absolute;
          left: 35px;
          bottom: -5px;
          width: 50px;
          height: 3px;
          background-color: #007bff;
          border-radius: 2px;
        }

        /* Shimmer/glass pseudo element inside icon container */
        .about-rewards-icon-container {
          position: relative;
          overflow: hidden;
        }
        .about-rewards-icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 70%);
          transform: translateX(-100%);
          transition: transform 0.6s ease-in-out;
          z-index: 1;
        }
        .about-rewards-card:hover .about-rewards-icon-container::before {
          transform: translateX(100%);
        }
        .about-rewards-icon {
          position: relative;
          z-index: 2;
        }

        /* Responsive fallback to match original */
        @media (max-width: 768px) {
          .about-rewards-cards-container {
            flex-direction: column;
            align-items: center;
          }
          .about-rewards-card {
            width: 90%;
            max-width: 350px;
          }
        }
      `}</style>

      <div className="about-rewards-container max-w-[1400px] mx-auto bg-white py-[60px] px-5 text-center">
        <div className="about-rewards-awards-header text-[#3366cc] text-lg font-semibold mb-2">
          {pageData.header}
        </div>

        <h3 className="about-rewards-title text-[40px] text-[#2c3e50] font-bold mb-5">
          {pageData.title}
        </h3>

        <p className="about-rewards-subtitle text-[18px] text-[#7f8c8d] mb-10">
          {pageData.subtitle}
        </p>

        <div className="about-rewards-cards-container flex justify-center flex-wrap gap-5">
          {pageData.awards.map((award, index) => (
            <div
              className="about-rewards-card bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-5 w-[280px] flex items-center text-left overflow-hidden"
              key={index}
            >
              <div className="about-rewards-icon-container bg-[#3366cc] rounded-md p-3 mr-4 flex items-center justify-center w-[40px] h-[40px] flex-shrink-0">
                <Image
                  src={award.icon}
                  alt={`award-icon-${index}`}
                  width={40}
                  height={40}
                  className="about-rewards-icon"
                />
              </div>

              <div className="about-rewards-card-text text-[#2c3e50] text-[18px] font-semibold">
                {award.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default V188;