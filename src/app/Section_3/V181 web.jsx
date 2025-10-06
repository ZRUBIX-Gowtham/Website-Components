import React from 'react';
import Image from 'next/image';

export default function V181() {
  const featuresData = [
    {
      iconPath:
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z',
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      iconPath:
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z',
      title: 'Consectetur adipiscing',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      iconPath:
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4zm-3-8h6V7h-6v1z',
      title: 'Sed do eiusmod',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      iconPath:
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z',
      title: 'Tempor incididunt',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  // Public-domain image (National Cancer Institute) — page:
  // https://commons.wikimedia.org/wiki/File:Doctor_talking_with_a_patient.jpg
  // Use Special:Redirect to get the file directly:
  const imageSrc =
    'https://commons.wikimedia.org/wiki/Special:Redirect/file/Doctor_talking_with_a_patient.jpg';

  return (
    <div className="page-container min-h-screen flex items-center justify-center p-5 bg-gray-100 text-gray-800">
      <style>{`
        @keyframes fadeInScale { from { opacity: 0; transform: scale(.98);} to { opacity: 1; transform: scale(1);} }
        @keyframes slideInUp { from { transform: translateY(12px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        .image-section { animation: fadeInScale 0.9s ease-out forwards; position: relative; }
        .feature-item { opacity: 0; transform: translateY(12px); animation: slideInUp 0.6s ease-out forwards; }
        /* ensure feature items animate in sequence */
        .feature-item:nth-child(1) { animation-delay: 0.12s; }
        .feature-item:nth-child(2) { animation-delay: 0.24s; }
        .feature-item:nth-child(3) { animation-delay: 0.36s; }
        .feature-item:nth-child(4) { animation-delay: 0.48s; }

        @media (max-width: 992px) {
          .AboutWhyUs { flex-direction: column; gap: 20px; padding: 20px; }
          .image-section { height: 280px; }
        }
      `}</style>

      <div className="AboutWhyUs flex gap-10 p-8 max-w-[1200px] w-full items-stretch">
        {/* Image — left on desktop, top on mobile */}
        <div className="image-section flex-1 min-w-[280px] rounded-[12px] overflow-hidden relative h-[420px] md:h-[480px]">
          <Image
            src={imageSrc}
            alt="Doctor consulting patient (public domain)"
            layout="fill"
            objectFit="cover"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="content-section flex-[1.25] p-2 flex flex-col justify-center">
          {/* Heading: centered on mobile, left on md+ */}
          <h3 className="text-[34px] md:text-[40px] font-bold mb-6 text-center md:text-left">
            Lorem ipsum dolor sit
           
          </h3>

          <p className="text-gray-600 mb-8 text-center md:text-left max-w-[720px]">
            Lorem ipsum dolor sit amet
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresData.map((feature, idx) => (
              <div
                key={idx}
                className="feature-item group bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start"
              >
                <div className="icon-circle w-10 h-10 bg-[#e6f6ff] rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4 flex-shrink-0 mx-auto md:mx-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#0369a1] group-hover:text-white"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={feature.iconPath} />
                  </svg>
                </div>

                <div className="text-block">
                  <h4 className="text-lg font-semibold mb-1 text-center md:text-left">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-center md:text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}