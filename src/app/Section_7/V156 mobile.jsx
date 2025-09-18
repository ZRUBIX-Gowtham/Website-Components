import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is correctly installed via npm/yarn

function V156() {
  const appFooterData = {
    mainLinks: [
      { label: 'Lorem', path: '/lorem', iconClass: 'fa-solid fa-angle-right' },
      { label: 'Ipsum', path: '/ipsum', iconClass: 'fa-solid fa-angle-right' },
      { label: 'Dolor', path: '/dolor', iconClass: 'fa-solid fa-angle-right' },
      { label: 'Sit Amet', path: '/sit-amet', iconClass: 'fa-solid fa-angle-right' },
    ],
    companyInfoLinks: [
      { label: 'Consectetur', path: '/consectetur', iconClass: 'fa-solid fa-angle-right' },
      { label: 'Adipiscing', path: '/adipiscing', iconClass: 'fa-solid fa-angle-right' },
      { label: 'Elam', path: '/elam', iconClass: 'fa-solid fa-angle-right' },
    ],
    resourceLinks: [
      { label: 'Lorem Books', path: '/lorem-books', iconClass: 'fa-solid fa-angle-right' },
      { label: 'Ipsum Books', path: '/ipsum-books', iconClass: 'fa-solid fa-angle-right' },
      { label: 'Dolor Blogs', path: '/dolor-blogs', iconClass: 'fa-solid fa-angle-right' },
    ],
    contactDetails: [
      { infoText: '123 Lorem Ipsum Street, Dolor City, State 000000', iconClass: 'fas fa-map-marker-alt', linkPath: '#' },
      { infoText: '+00 0000000000', iconClass: 'fas fa-phone-alt', linkPath: 'tel:+0000000000' },
      { infoText: 'lorem.ipsum@example.com', iconClass: 'fas fa-envelope', linkPath: 'mailto:lorem.ipsum@example.com' },
    ],
    socialMediaLinks: [
      { iconClass: 'fab fa-facebook-f', linkPath: '#' },
      { iconClass: 'fab fa-twitter', linkPath: '#' },
      { iconClass: 'fab fa-linkedin-in', linkPath: '#' },
      { iconClass: 'fab fa-instagram', linkPath: '#' },
    ],
    copyrightInfo: {
      currentYear: '2025',
      companyName: 'Lorem Ipsum Company',
      sloganOne: 'Lorem ipsum dolor sit amet.',
      sloganTwo: 'Consectetur adipiscing elit.',
    },
  };

  return (
    <>
      <div className="bg-slate-800 text-white relative">
        {/* Wave */}
        <div className="absolute w-full overflow-hidden leading-none h-12 pointer-events-none">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="block w-full h-full"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            />
          </svg>
        </div>

        <footer className="relative text-left pt-20 pb-8">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
              <div>
                <h3 className="text-lg text-white font-semibold mb-3">Lorem</h3>
                <div className="w-10 h-[2px] bg-white mb-4"></div>
                <ul className="space-y-4">
                  {appFooterData.mainLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.path}
                        className="text-white/80 hover:text-white transition-transform transform hover:translate-x-1 inline-flex items-center gap-3"
                        aria-label={`Navigate to ${link.label}`}
                      >
                        <i className={link.iconClass} aria-hidden="true"></i>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg text-white font-semibold mb-3">Ipsum</h3>
                <div className="w-10 h-[2px] bg-white mb-4"></div>
                <ul className="space-y-4">
                  {appFooterData.companyInfoLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.path}
                        className="text-white/80 hover:text-white transition-transform transform hover:translate-x-1 inline-flex items-center gap-3"
                        aria-label={`Navigate to ${link.label}`}
                      >
                        <i className={link.iconClass} aria-hidden="true"></i>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg text-white font-semibold mb-3">Dolor</h3>
                <div className="w-10 h-[2px] bg-white mb-4"></div>
                <ul className="space-y-4">
                  {appFooterData.resourceLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.path}
                        className="text-white/80 hover:text-white transition-transform transform hover:translate-x-1 inline-flex items-center gap-3"
                        aria-label={`Navigate to ${link.label}`}
                      >
                        <i className={link.iconClass} aria-hidden="true"></i>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg text-white font-semibold mb-3">Contacto</h3>
                <div className="w-10 h-[2px] bg-white mb-4"></div>
                <ul className="space-y-4">
                  {appFooterData.contactDetails.map((info, index) => (
                    <li key={index}>
                      <a
                        href={info.linkPath}
                        className="text-white/80 hover:text-white transition-transform transform hover:translate-x-1 inline-flex items-start gap-3"
                        aria-label={`Contact ${index + 1}`}
                      >
                        <i className={info.iconClass} aria-hidden="true"></i>
                        <span className="text-sm">{info.infoText}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-5">
                  {appFooterData.socialMediaLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.linkPath}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label={`Social ${index + 1}`}
                    >
                      <i className={link.iconClass} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center text-white/70 text-sm">
              <p>
                &copy; {appFooterData.copyrightInfo.currentYear} {appFooterData.copyrightInfo.companyName}.{' '}
                {appFooterData.copyrightInfo.sloganOne} {appFooterData.copyrightInfo.sloganTwo}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default V156;