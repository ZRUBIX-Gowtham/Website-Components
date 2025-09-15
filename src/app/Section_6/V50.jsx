import React from 'react';
import Image from 'next/image';

/* ========== Icons (unchanged) ========== */
function IconMail({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5Z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7.5 8.34 6.255a1.5 1.5 0 0 0 1.83 0L21.5 7.5"/>
    </svg>
  );
}
function IconPhone({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 7.456 6.044 13.5 13.5 13.5.88 0 1.731-.087 2.55-.252a1.5 1.5 0 0 0 1.155-1.083l.473-1.893a1.5 1.5 0 0 0-1.042-1.802l-3.03-.907a1.5 1.5 0 0 0-1.463.376l-.96.918a10.477 10.477 0 0 1-4.5-4.5l.917-.96a1.5 1.5 0 0 0 .376-1.462l-.907-3.03A1.5 1.5 0 0 0 6.98 2.77l-1.893.473A1.5 1.5 0 0 0 4.004 4.4c-.167.818-.254 1.67-.254 2.35Z"/>
    </svg>
  );
}
function IconSearch({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35"/>
      <circle cx="11" cy="11" r="7"/>
    </svg>
  );
}
function IconUser({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 19.725A7.5 7.5 0 0 0 12 16.5a7.5 7.5 0 0 0-5.982 3.225"/>
      <circle cx="12" cy="8" r="4.25"/>
    </svg>
  );
}
function IconCart({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h1.928a1.5 1.5 0 0 1 1.457 1.152l.3 1.2m0 0L9 14.25a1.5 1.5 0 0 0 1.457 1.125h6.99a1.5 1.5 0 0 0 1.458-1.125L20.25 9H7.435m0 0-.5-2"/>
      <circle cx="10" cy="19" r="1.25"/>
      <circle cx="17.5" cy="19" r="1.25"/>
    </svg>
  );
}
function IconChevronDown({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 0 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18Z" clipRule="evenodd" />
    </svg>
  );
}
function IconLinkedIn({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.3c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z"/>
    </svg>
  );
}
function IconFacebook({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z"/>
    </svg>
  );
}
function IconX({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2H21l-6.54 7.47L22 22h-6.4l-4.99-6.53L4.8 22H2l7.09-8.1L2 2h6.53l4.53 5.98L18.244 2Zm-2.25 18h1.38L7.98 4h-1.4l9.414 16Z"/>
    </svg>
  );
}

/* ========== Top bars (unchanged) ========== */
function TopBar() {
  return (
    <div className="w-full bg-black text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-end h-7 space-x-3">
        <a href="#" aria-label="LinkedIn" className="opacity-90 hover:opacity-100"><IconLinkedIn className="w-3.5 h-3.5" /></a>
        <a href="#" aria-label="Facebook" className="opacity-90 hover:opacity-100"><IconFacebook className="w-3.5 h-3.5" /></a>
        <a href="#" aria-label="X" className="opacity-90 hover:opacity-100"><IconX className="w-3.5 h-3.5" /></a>
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: contact */}
        <div className="hidden md:flex items-center text-sm text-gray-700 space-x-4">
          <div className="flex items-center space-x-2"><IconMail /><span>info@companyname.com</span></div>
          <span className="h-5 w-px bg-gray-300" />
          <div className="flex items-center space-x-2"><IconPhone /><span>0123456789</span></div>
        </div>
        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <a href="#" className="select-none leading-none" style={{ fontFamily: '"Brush Script MT", Segoe Script, cursive' }}>
            <span className="text-3xl text-gray-900">Glamour</span>
            <span className="text-3xl text-gray-900 ml-1">Galleria</span>
          </a>
        </div>
        {/* Right: actions */}
        <div className="flex items-center space-x-5 text-gray-800">
          <button aria-label="Search" className="hover:text-black"><IconSearch /></button>
          <button aria-label="Account" className="hover:text-black"><IconUser /></button>
          <button aria-label="Cart" className="hover:text-black"><IconCart /></button>

          {/* Mobile hamburger (still available) */}
          <div className="md:hidden">
            <MobileHamburgerButton onClick={() => window.dispatchEvent(new CustomEvent('open-mobile-drawer'))} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========== Shared bits (unchanged) ========== */
function ChevronRight({ className = 'w-3 h-3' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
    </svg>
  );
}

/* Underline now expands left -> right (origin-left). Change after:h- to adjust thickness. */
const underlineClass = "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-20 after:bg-black after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

/* Use same class for menu items */
const itemClass = `relative cursor-pointer text-left text-[14px] text-gray-700 hover:text-black transition-colors ${underlineClass}`;

/* ========== Mega menus ========== */
function GenericMegaMenu({ bannerUrl }) {
  return (
    <div
      className="absolute left-30 -translate-x-1/2 top-7 w-[1100px] bg-white shadow-2xl rounded-xl border border-gray-100 mt-0 overflow-hidden"
      onMouseDown={(e)=>e.preventDefault()}
    >
      <div className="grid grid-cols-12">
        {/* Categories */}
        <div className="col-span-9 grid grid-cols-3 gap-x-6 p-6">
          {/* Column 1 */}
          <div className="border-r border-gray-100 pr-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg text-left font-semibold text-gray-900 mb-3">T-Shirts</h4>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </div>
            <ul className="space-y-3">
              <li className={itemClass}>Basics</li>
              <li className={itemClass}>Polo T-Shirt</li>
              <li className={itemClass}>Full Sleeve T-Shirt</li>
              <li className={itemClass}>Oversized T-Shirt</li>
              <li className={itemClass}>Printed T-Shirt</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3 flex items-center justify-between">
              Shirts
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </h4>
            <ul className="space-y-3">
              <li className={itemClass}>Formal Shirt</li>
              <li className={itemClass}>Casual Shirt</li>
              <li className={itemClass}>Floral Pattern Shirt</li>
              <li className={itemClass}>Solid Colour Shirt</li>
              <li className={itemClass}>Checked Shirt</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="border-r border-gray-100 pr-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Bottom Wears</h4>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </div>
            <ul className="space-y-3">
              <li className={itemClass}>Formal Trousers</li>
              <li className={itemClass}>Casual Trousers</li>
              <li className={itemClass}>Jeans</li>
              <li className={itemClass}>Shorts</li>
              <li className={itemClass}>Track Pants & Joggers</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3 flex items-center justify-between">
              Indian & Festive Wears
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </h4>
            <ul className="space-y-3">
              <li className={itemClass}>Kurtas & Kurta Sets</li>
              <li className={itemClass}>Sherwanis</li>
              <li className={itemClass}>Nehru Jackets</li>
              <li className={itemClass}>Dhotis</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="pr-2">
            <h4 className="text-lg text-left font-semibold text-gray-900 mb-3">Winter & Layers</h4>
            <ul className="space-y-3">
              <li className={itemClass}>Sweatshirts</li>
              <li className={itemClass}>Hoodies</li>
              <li className={itemClass}>Sweaters</li>
              <li className={itemClass}>Jackets</li>
              <li className={itemClass}>Blazers</li>
            </ul>

            <h4 className="text-lg text-left font-semibold text-gray-900 mt-8 mb-3">Footwear</h4>
            <ul className="space-y-3">
              <li className={itemClass}>Casual Shoes</li>
              <li className={itemClass}>Sneakers</li>
              <li className={itemClass}>Loafers</li>
              <li className={itemClass}>Sandals</li>
            </ul>
          </div>
        </div>

        {/* Banner */}
        <div className="col-span-3 bg-gray-50 relative">
          <a href="#" className="block h-full w-full relative">
            {/* Using Next.js Image with fill; parent is relative so fill works */}
            <Image
              src={bannerUrl}
              alt="Sale banner"
              fill
              className="object-cover"
              sizes="(min-width: 1100px) 360px, 100vw"
              priority={false}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

/* Women mega menu (unchanged content except Image usage) */
function WomenMegaMenu({ bannerUrl }) {
  return (
    <div
      className="absolute left-5 -translate-x-1/2 top-7 w-[1100px] bg-white shadow-2xl rounded-xl border border-gray-100 mt-0 overflow-hidden"
      onMouseDown={(e)=>e.preventDefault()}
    >
      <div className="grid grid-cols-12">
        {/* Categories */}
        <div className="col-span-9 grid grid-cols-3 gap-x-6 p-6">
          {/* Column 1 */}
          <div className="border-r border-gray-100 pr-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg text-left font-semibold text-gray-900 mb-3">Tops</h4>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </div>
            <ul className="space-y-3">
              <li className={itemClass}>Basic Tees</li>
              <li className={itemClass}>Blouses</li>
              <li className={itemClass}>Crop Tops</li>
              <li className={itemClass}>Kurtis</li>
              <li className={itemClass}>Graphic Tees</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3 flex items-center justify-between">
              Dresses
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </h4>
            <ul className="space-y-3">
              <li className={itemClass}>Casual Dresses</li>
              <li className={itemClass}>Maxi Dresses</li>
              <li className={itemClass}>Bodycon</li>
              <li className={itemClass}>Skater Dresses</li>
              <li className={itemClass}>Party Dresses</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="border-r border-gray-100 pr-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Bottoms</h4>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </div>
            <ul className="space-y-3">
              <li className={itemClass}>Jeans</li>
              <li className={itemClass}>Trousers</li>
              <li className={itemClass}>Palazzos</li>
              <li className={itemClass}>Shorts</li>
              <li className={itemClass}>Skirts</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3 flex items-center justify-between">
              Ethnic & Festive
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </h4>
            <ul className="space-y-3">
              <li className={itemClass}>Sarees</li>
              <li className={itemClass}>Lehenga Choli</li>
              <li className={itemClass}>Salwar Suits</li>
              <li className={itemClass}>Dupattas</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="pr-2">
            <h4 className="text-lg text-left font-semibold text-gray-900 mb-3">Winter & Layers</h4>
            <ul className="space-y-3">
              <li className={itemClass}>Sweatshirts</li>
              <li className={itemClass}>Cardigans</li>
              <li className={itemClass}>Sweaters</li>
              <li className={itemClass}>Jackets</li>
              <li className={itemClass}>Blazers</li>
            </ul>

            <h4 className="text-lg text-left font-semibold text-gray-900 mt-8 mb-3">Footwear</h4>
            <ul className="space-y-3">
              <li className={itemClass}>Heels</li>
              <li className={itemClass}>Flats</li>
              <li className={itemClass}>Sneakers</li>
              <li className={itemClass}>Sandals</li>
            </ul>
          </div>
        </div>

        {/* Banner */}
        <div className="col-span-3 bg-gray-50 relative">
          <a href="#" className="block h-full w-full relative">
            <Image
              src={bannerUrl}
              alt="Sale banner"
              fill
              className="object-cover"
              sizes="(min-width: 1100px) 360px, 100vw"
              priority={false}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

/* Kids menu unchanged */
function KidsMenu() {
  return (
    <div className="absolute left-1 -translate-x-1/2 top-7 mt-0 w-[560px] bg-white shadow-2xl rounded-xl border border-gray-100 p-6"
         onMouseDown={(e)=>e.preventDefault()}>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg text-left font-semibold text-gray-900 mb-3">Boys</h4>
          <ul className="space-y-3">
            <li className={itemClass}>T-Shirts</li>
            <li className={itemClass}>Shirts</li>
            <li className={itemClass}>Jeans</li>
            <li className={itemClass}>Shorts</li>
            <li className={itemClass}>Track Pants</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg text-left font-semibold text-gray-900 mb-3">Girls</h4>
          <ul className="space-y-3">
            <li className={itemClass}>Tops & Tees</li>
            <li className={itemClass}>Dresses</li>
            <li className={itemClass}>Leggings</li>
            <li className={itemClass}>Skirts</li>
            <li className={itemClass}>Shorts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ========== Mobile-specific add-ons (unchanged) ========== */
function IconHamburger({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  );
}

function MobileHamburgerButton({ onClick }) {
  return (
    <button
      className="md:hidden p-2 rounded hover:bg-gray-100"
      aria-label="Open menu"
      onClick={onClick}
    >
      <IconHamburger />
    </button>
  );
}

function MobileDrawer({ open, onClose }) {
  const [openKids, setOpenKids] = React.useState(false);
  const [openMen, setOpenMen] = React.useState(false);
  const [openWomen, setOpenWomen] = React.useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl border-r border-gray-100 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="h-14 px-4 flex items-center justify-between border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100" aria-label="Close menu">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="p-2">
          {/* Men collapsible */}
          <button
            className="w-full flex items-center justify-between px-3 py-3 rounded hover:bg-gray-50 text-gray-800"
            onClick={() => setOpenMen(v => !v)}
            aria-expanded={openMen}
            aria-controls="men-submenu"
          >
            <span className="text-[15px] font-medium">Men</span>
            <svg viewBox="0 0 20 20" className={`w-4 h-4 text-gray-500 transition-transform ${openMen ? 'rotate-180' : ''}`} fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 0 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18Z" />
            </svg>
          </button>
          <div
            id="men-submenu"
            className={`overflow-hidden transition-[max-height] duration-300 ${openMen ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="pl-6 pr-3 pb-2">
              <p className="mt-2 mb-1 text-sm font-semibold text-gray-900">Tops</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">T-Shirts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Shirts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Sweatshirts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Hoodies</a></li>
              </ul>
              <p className="mt-4 mb-1 text-sm font-semibold text-gray-900">Bottoms</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Jeans</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Trousers</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Shorts</a></li>
              </ul>
            </div>
          </div>

          {/* Women collapsible */}
          <button
            className="w-full flex items-center justify-between px-3 py-3 rounded hover:bg-gray-50 text-gray-800"
            onClick={() => setOpenWomen(v => !v)}
            aria-expanded={openWomen}
            aria-controls="women-submenu"
          >
            <span className="text-[15px] font-medium">Women</span>
            <svg viewBox="0 0 20 20" className={`w-4 h-4 text-gray-500 transition-transform ${openWomen ? 'rotate-180' : ''}`} fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 0 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18Z" />
            </svg>
          </button>
          <div
            id="women-submenu"
            className={`overflow-hidden transition-[max-height] duration-300 ${openWomen ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="pl-6 pr-3 pb-2">
              <p className="mt-2 mb-1 text-sm font-semibold text-gray-900">Tops & Dresses</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Blouses</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Dresses</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Kurtis</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Crop Tops</a></li>
              </ul>
              <p className="mt-4 mb-1 text-sm font-semibold text-gray-900">Bottoms</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Jeans</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Skirts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Palazzos</a></li>
              </ul>
            </div>
          </div>

          {/* Kids collapsible */}
          <button
            className="w-full flex items-center justify-between px-3 py-3 rounded hover:bg-gray-50 text-gray-800"
            onClick={() => setOpenKids(v => !v)}
            aria-expanded={openKids}
            aria-controls="kids-submenu"
          >
            <span className="text-[15px] font-medium">Kids</span>
            <svg viewBox="0 0 20 20" className={`w-4 h-4 text-gray-500 transition-transform ${openKids ? 'rotate-180' : ''}`} fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 0 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18Z" />
            </svg>
          </button>
          <div
            id="kids-submenu"
            className={`overflow-hidden transition-[max-height] duration-300 ${openKids ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="pl-6 pr-3 pb-2">
              <p className="mt-2 mb-1 text-sm font-semibold text-gray-900">Boys</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">T-Shirts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Shirts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Jeans</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Shorts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Track Pants</a></li>
              </ul>
              <p className="mt-4 mb-1 text-sm font-semibold text-gray-900">Girls</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Tops & Tees</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Dresses</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Leggings</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Skirts</a></li>
                <li><a href="#" className="block text-sm text-gray-700 hover:text-black">Shorts</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="mt-auto p-4 text-sm text-gray-600 border-t">
          <div className="flex items-center space-x-2"><IconMail className="w-4 h-4" /><span>info@companyname.com</span></div>
          <div className="mt-2 flex items-center space-x-2"><IconPhone className="w-4 h-4" /><span>0123456789</span></div>
        </div>
      </aside>
    </>
  );
}

/* Small event bus hook to open/close the drawer without touching your existing state */
function useMobileDrawerBus() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);
    window.addEventListener('open-mobile-drawer', openHandler);
    window.addEventListener('close-mobile-drawer', closeHandler);
    return () => {
      window.removeEventListener('open-mobile-drawer', openHandler);
      window.removeEventListener('close-mobile-drawer', closeHandler);
    };
  }, []);
  return { open, setOpen };
}

/* ========== NavBar (desktop only inline labels; mobile labels removed) ========== */
function NavBar() {
  const [openMen, setOpenMen] = React.useState(false);
  const [openWomen, setOpenWomen] = React.useState(false);
  const [openKids, setOpenKids] = React.useState(false);

  /* Unsplash open-source images */
  const menBanner = "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=720&q=80";
  const womenBanner = "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=720&q=80";

  /* Desktop MenuButton (hover to open mega menu)
     NOTE: underlineClass has been intentionally removed from the top-level button so Men/Women/Kids will NOT show the underline on hover.
     Chevron is rotated via transform when openState === true to visually change down -> up.
     Changed mouse handlers to pointer handlers and added pointer handlers to the menu container to remove hover delay / accidental close gaps.
  */
  const MenuButton = ({ label, openSetter, openState }) => (
    <div
      className="relative group hidden md:inline-flex"
      onPointerEnter={() => openSetter(true)}
      onPointerLeave={() => openSetter(false)}
    >
      {/* removed underlineClass here */}
      <button className={`flex items-center space-x-1 text-[15px] font-medium text-gray-900 hover:text-black transition-colors`}>
        <span>{label}</span>
        <span className={`inline-block text-gray-700 group-hover:text-black transition-transform transform ${openState ? 'rotate-180' : ''}`}>
          <IconChevronDown className={`w-3.5 h-3.5`} />
        </span>
      </button>

      {label === 'Men' && openState && (
        <div
          className="absolute left-1/2 -translate-x-1/2"
          onPointerEnter={() => openSetter(true)}
          onPointerLeave={() => openSetter(false)}
        >
          <GenericMegaMenu bannerUrl={menBanner} />
        </div>
      )}
      {label === 'Women' && openState && (
        <div
          className="absolute left-1/2 -translate-x-1/2"
          onPointerEnter={() => openSetter(true)}
          onPointerLeave={() => openSetter(false)}
        >
          <WomenMegaMenu bannerUrl={womenBanner} />
        </div>
      )}
      {label === 'Kids' && openState && (
        <div
          className="absolute left-1/2 -translate-x-1/2"
          onPointerEnter={() => openSetter(true)}
          onPointerLeave={() => openSetter(false)}
        >
          <KidsMenu />
        </div>
      )}
    </div>
  );

  /* Desktop row only; mobile row removed so Men/Women/Kids are not visible on phones */
  return (
    <div className="w-full bg-white relative">
      {/* Desktop row */}
      <div className="max-w-7xl mx-auto px-4 h-11 hidden md:flex items-center justify-center space-x-10 text-gray-900">
        <MenuButton label="Men" openSetter={setOpenMen} openState={openMen} />
        <MenuButton label="Women" openSetter={setOpenWomen} openState={openWomen} />
        <MenuButton label="Kids" openSetter={setOpenKids} openState={openKids} />
      </div>

      {/* NOTE: Mobile inline menu removed. On mobile users must click the hamburger to open the drawer */}
    </div>
  );
}

/* ========== Exported header (adds MobileDrawer mount) ========== */
export default function V50() {
  const { open, setOpen } = useMobileDrawerBus();

  return (
    <header className="w-full border-b relative z-50">
      <TopBar />
      <MainHeader />
      <NavBar />

      {/* Mobile Drawer mounted once */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}