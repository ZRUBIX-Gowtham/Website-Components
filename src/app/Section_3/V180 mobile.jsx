import React from 'react';

function V180() {
  const servicesData = [
    {
      iconPath:
        "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h10v2H7zm0 4h10v2H7z",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      iconPath:
        "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h10v2H7zm0 4h10v2H7z",
      title: "Consectetur adipiscing",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      iconPath:
        "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h10v2H7zm0 4h10v2H7z",
      title: "Sed do eiusmod",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      iconPath:
        "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h10v2H7zm0 4h10v2H7z",
      title: "Tempor incididunt",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      iconPath:
        "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h10v2H7zm0 4h10v2H7z",
      title: "Labore et dolore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="aboutservice w-full box-border flex justify-center items-start bg-gray-100 p-10 sm:p-5">
      <div className="services-container grid grid-cols-3 gap-5 w-full max-w-[1300px]">
        {/* Header */}
        <div
          className="services-header col-start-1 row-start-1 pr-5 flex flex-col justify-center items-center md:items-start text-center md:text-left animate-fadeIn"
          aria-hidden="false"
        >
          <h4 className="text-blue-600 text-sm font-bold uppercase mb-2 relative inline-block">
            <span>lorem ipsum</span>
            <span className="absolute left-0 -bottom-1 w-[50px] h-[3px] bg-blue-600 rounded-sm" />
          </h4>

          <h1 className="text-[#212529] text-3xl lg:text-4xl font-extrabold leading-tight m-0">
            Lorem ipsum dolor sit
            <br />
            amet consectetur
          </h1>
        </div>

        {/* Cards */}
        {servicesData.map((service, index) => {
          // Desktop placement mapping (grid-cols-3):
          // 0 => col 2 row 1
          // 1 => col 3 row 1
          // 2 => col 1 row 2
          // 3 => col 2 row 2
          // 4 => col 3 row 2
          const placementClasses = [
            "col-start-2 row-start-1",
            "col-start-3 row-start-1",
            "col-start-1 row-start-2",
            "col-start-2 row-start-2",
            "col-start-3 row-start-2",
          ][index];

          return (
            <div
              key={index}
              className={`service-card ${placementClasses} bg-white rounded-xl p-8 shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col items-center md:items-start`}
              style={{
                animation: "slideInUp 0.6s ease-out forwards",
                animationDelay: `${0.2 * (index + 1)}s`,
                opacity: 0,
              }}
            >
              <div className="icon w-[50px] h-[50px] rounded-full bg-[#e0f2ff] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-blue-600 mx-auto md:mx-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={service.iconPath} />
                </svg>
              </div>

              <h3 className="text-[#212529] text-xl font-semibold mb-2 text-center md:text-left">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed m-0 text-center md:text-left">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* Animations (small custom CSS) */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Responsive adjustments:
           - >= 1024px: grid-cols-3 (default)
           - 768px..1023px: grid-cols-2
           - <768px: grid-cols-1
           Header/text alignment:
           - Mobile: centered (text-center, items-center)
           - Desktop (md+): left (md:text-left, md:items-start)
        */

        @media (max-width: 1024px) {
          .services-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-header {
            grid-column: 1 / 3;
            grid-row: auto;
            padding-right: 0;
          }
          .service-card {
            grid-column: auto !important;
            grid-row: auto !important;
            animation-delay: 0s !important;
          }
        }

        @media (max-width: 768px) {
          .services-container {
            grid-template-columns: 1fr;
          }
          .services-header {
            grid-column: 1 / 2;
            padding-bottom: 1rem;
            text-align: center;
          }
          .aboutservice {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default V180;