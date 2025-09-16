import React, { useState } from 'react';

export default function V60() {
  const products = [
    { id: 1, title: 'Women Formal Shirt', price: 4999, rating: 4.4, offer: null, 
        images: ['https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkre179760c6cc1447d8a5180d472658987?orig=true', 
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr6c9db496e06b407293bd54d1c3e32cf8?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr2a17afcbfcfb45ca805b90a307e82067?orig=true'
            ] },

    { id: 2, title: 'Cotton Shirt', price: 1299, rating: 3.9, offer: '15% OFF',
        images: ['https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrc3fac4f7102645be97e8b774e4230b3b?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr526d387867184aeb99e54d3da3b7f18f?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrb47d0be495f541cda444d0eda0a19aa2?orig=true',
        ] },

    { id: 3, title: 'Silk Saree', price: 12999, rating: 4.8, offer: '20% OFF', 
        images: ['https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr70b6c56f49f24af5b75b75bd4793244b?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr23516cd6ee044bbbb569e608780c0f27?orig=true',
        ] },

    { id: 4, title: 'Festive Kurta', price: 999, rating: 4.1, offer: null, 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr3e53080b54234edd90e93e2fa43afebd?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr938b796a09784b33823bd4fba24ac350?orig=true',
        ] },

    { id: 5, title: 'Casual Tee', price: 599, rating: 3.7, offer: null, 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr3db052482ee14c539e229397b090df79?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrfa486066b12644a0a2c4eac0ae5c4b90?orig=true',
        ] },

    { id: 6, title: 'Denim Jacket', price: 3499, rating: 4.6, offer: '10% OFF', 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr101f5f07aed241aaa1e6670f8ee46fbf?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr41f3bfe2fd4240d8bb3f1d7c36dfad20?orig=true',
        ] },

    { id: 7, title: 'Chiffon Dress', price: 2599, rating: 4.0, offer: null, 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrc2219e7e6c7e480082f40c64f5bd010e?orig=true',
        ] },

    { id: 8, title: 'Linen Shorts', price: 799, rating: 3.8, offer: null, 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr46e99a2c4fc747c791f3d1ac0984c412?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrfc5467aaed8f434792fef3680e548eb5?orig=true',
        ] },

    { id: 9, title: 'Summer Skirt', price: 1199, rating: 4.2, offer: null, 
        images: ['https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrf81f9b844c9e4679b860fff6453b2b06?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr5b96724fc64e4c349bac82879125e8f3?orig=true',
        ] },

    { id: 10, title: 'Blazer', price: 4599, rating: 4.5, offer: 'Flat ₹500 OFF', 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr2c22f1eab44a4c598f5cf593934945f1?orig=true',
        ] },

    { id: 11, title: 'Athletic Shorts', price: 699, rating: 3.6, offer: null, 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkre5dbd891bd2b44228cee8ccec34c4fe2?orig=true',
        ] },

    { id: 12, title: 'Classic Pants', price: 2199, rating: 4.3, offer: null, 
        images: [
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr4a155350979141c296968ebe3b31fed1?orig=true',
            'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr978225f688914c0eba0f7913805e331d?orig=true',
        ] }

  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const [selectedVariants, setSelectedVariants] = useState(() =>
    products.reduce((acc, p) => {
      acc[p.id] = 0;
      return acc;
    }, {})
  );

  const [hoverState, setHoverState] = useState(() =>
    products.reduce((acc, p) => {
      acc[p.id] = { hovering: false, origin: '50% 50%' };
      return acc;
    }, {})
  );

  const currency = (n) => `Rs.${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.00`;

  const goPrev = () => setPage((s) => (s - 1 + totalPages) % totalPages);
  const goNext = () => setPage((s) => (s + 1) % totalPages);

  const handleDotClick = (productId, idx) =>
    setSelectedVariants((prev) => ({ ...prev, [productId]: idx }));

  const onCardMouseEnter = (id) =>
    setHoverState((s) => ({ ...s, [id]: { ...s[id], hovering: true } }));
  const onCardMouseLeave = (id) =>
    setHoverState((s) => ({ ...s, [id]: { ...s[id], hovering: false, origin: '50% 50%' } }));
  const onCardMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const origin = `${x}% ${y}%`;
    setHoverState((s) => ({ ...s, [id]: { ...s[id], origin } }));
  };

  const start = page * itemsPerPage;
  const visible = showAll ? products : products.slice(start, start + itemsPerPage);

  // Deterministic star renderer with very small sizes
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    const stars = [];
    const StarPath = (
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69L9.05 2.927z" />
    );

    for (let i = 0; i < full; i++) {
      stars.push(
        <svg key={`f-${i}`} className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          {StarPath}
        </svg>
      );
    }

    if (half) {
      stars.push(
        <span key="half" className="inline-block align-middle w-2 h-2 sm:w-3 sm:h-3 relative">
          <svg className="absolute inset-0 w-full h-full text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {StarPath}
          </svg>
          <span className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '50%' }}>
            <svg className="w-full h-full text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              {StarPath}
            </svg>
          </span>
        </span>
      );
    }

    for (let i = 0; i < empty; i++) {
      stars.push(
        <svg key={`e-${i}`} className="h-2 w-2 sm:h-3 sm:w-3 text-gray-300 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          {StarPath}
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg sm:text-3xl font-semibold tracking-tight">New Arrivals</h3>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 active:scale-95 transition"
            >
              

               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 3.707a1 1 0 010 1.414L4.414 9H16a1 1 0 110 2H4.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            <button
              aria-label="Next"
              onClick={goNext}
              className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 active:scale-95 transition"
            >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                if (showAll) setPage(0);
                setShowAll((s) => !s);
              }}
              className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-200 transition"
            >
              {showAll ? 'Show less' : 'Show all'}
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {visible.map((p) => {
            const sel = selectedVariants[p.id] ?? 0;
            const { hovering, origin } = hoverState[p.id] || { hovering: false, origin: '50% 50%' };

            return (
              <article
                key={p.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden relative shadow-sm"
                onMouseEnter={() => onCardMouseEnter(p.id)}
                onMouseLeave={() => onCardMouseLeave(p.id)}
                onMouseMove={(e) => onCardMouseMove(e, p.id)}
              >
                <div className="relative h-32 sm:h-44 lg:h-[240px] bg-gray-100 overflow-hidden">
                  {p.offer && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] sm:text-[9px] font-semibold px-1 py-0.5 rounded z-20 shadow">
                      {p.offer}
                    </div>
                  )}

                  <div className="absolute top-2 left-2 bg-white/95 rounded-full px-1 py-0.5 flex items-center gap-1 text-[8px] sm:text-[9px] z-20 shadow">
                    <span className="flex items-center">{renderStars(p.rating)}</span>
                    <span className="ml-1 text-gray-700 font-medium text-[8px] sm:text-[9px]">{p.rating.toFixed(1)}</span>
                  </div>

                  <img
                    src={p.images[sel]}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{
                      transform: hovering ? 'scale(1.06)' : 'scale(1)',
                      transformOrigin: origin,
                      filter: hovering ? 'brightness(1.04)' : 'brightness(1)',
                    }}
                    draggable={false}
                  />

                  {/* variant dots (appear on hover) */}
                  <div
                    className={`absolute left-2 bottom-2 flex items-center gap-2 transition-opacity duration-200 ${hovering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{ pointerEvents: hovering ? 'auto' : 'none' }}
                  >
                    {p.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(p.id, idx)}
                        aria-label={`Select variant ${idx + 1} for ${p.title}`}
                        className={`w-2.5 h-2.5 rounded-full ring-1 ring-white shadow-sm transform transition-all duration-150 ${
                          sel === idx ? 'scale-110 ring-2 ring-gray-900' : 'opacity-80'
                        }`}
                        style={{ backgroundImage: `url("${img}&w=40&h=40&fit=crop")`, backgroundSize: 'cover' }}
                      />
                    ))}
                  </div>

                  {/* Desktop: small view button on hover aligned right-bottom */}
                  <div
                    className={`absolute right-2 bottom-2 transition-all duration-150 pointer-events-none hidden sm:flex items-center ${hovering ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden={!hovering}
                  >
                    <button
                      className="pointer-events-auto bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200"
                      onClick={() => alert(`View product: ${p.title}`)}
                    >
                      View product
                    </button>
                  </div>

                  {/* Mobile: always visible tiny view button on right-bottom */}
                  <div className="absolute right-2 bottom-2 sm:hidden">
                    <button
                      className="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded-full shadow-sm border border-gray-200"
                      onClick={() => alert(`View product: ${p.title}`)}
                    >
                      View product
                    </button>
                  </div>
                </div>

                <div className="p-2 sm:p-3 text-center">
                  <h4 className="text-sm sm:text-sm font-medium mb-0.5 line-clamp-1">{p.title}</h4>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <div className="text-sm sm:text-base font-semibold">{currency(p.price)}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}