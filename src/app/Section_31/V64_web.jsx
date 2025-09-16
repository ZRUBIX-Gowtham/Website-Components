import React, { useEffect, useState } from 'react';

export default function V64() {
  const products = [
    {
      id: 1, title: 'Floral Midi Dress', price: 2999, rating: 4.6, offer: '10% OFF',
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrke85b2520593874f469341df39ed36c456?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrkeca0ca89a5470494b87c7ade67f48dbae?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrke7de3d95101774366b62ade4b84f05666?orig=true'
      ]
    },
    {
      id: 2, title: 'Linen Wrap Dress', price: 1599, rating: 4.2, offer: '15% OFF',
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrkecc6474aa527d48258fb8cd773d7da068?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrke1e55ee59ed9e4710894eea2e1e9b8df8?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrke584f65660fc3433e85e5e38c3532f968?orig=true'
      ]
    },
    {
      id: 3, title: 'Silk Party Gown', price: 14999, rating: 4.9, offer: '25% OFF',
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrkef138e25857774829b5c392b3e44bf25a?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/vjrke5d42f062cf9a4b079c38895fe95bd740?orig=true'
      ]
    },
    {
      id: 4, title: 'Festive Dress Male', price: 2499, rating: 4.5, offer: null,
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih2fb50ed9fc7a442794f458a2ff90a364?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih31ba5b0ac6b14a95ab34d8c55045a3ae?orig=true'
      ]
    },
    {
      id: 5, title: 'Casual Slip Dress', price: 799, rating: 3.9, offer: null,
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih95198935a9334bb59bae09f60bc0bce6?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih4637c33ca4194d468ae25de4944c6ee1?orig=true'
      ]
    },
    {
      id: 6, title: 'Denim Shirt Dress', price: 3299, rating: 4.4, offer: '10% OFF',
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr101f5f07aed241aaa1e6670f8ee46fbf?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih15f7a09f01654a898197f837c0f2ce4d?orig=true'
      ]
    },
    {
      id: 7, title: 'Chiffon Maxi Dress', price: 2599, rating: 4.3, offer: null,
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih237e3310e1094eaf92a38b70ccc45083?orig=true'
      ]
    },
    {
      id: 8, title: 'Linen Utility Dress', price: 999, rating: 3.8, offer: null,
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih7e4e2e5d373f476a8619312ff4a2b88e?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzihc1e56ebddd484156bedbf177b304612d?orig=true'
      ]
    },
    {
      id: 9, title: 'Summer Wrap Dress', price: 1199, rating: 4.1, offer: null,
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzihcb0eb65e13124613a8b4b7655d576a12?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yziha7197dcd395d429796912b52ddedb125?orig=true'
      ]
    },
    {
      id: 10, title: 'Tailored Blazer Dress', price: 4999, rating: 4.6, offer: 'Flat ₹500 OFF',
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih22256fdb59bf4df885c58e6b948c2e7c?orig=true'
      ]
    },
    {
      id: 11, title: 'Athletic Jersey Dress', price: 899, rating: 3.7, offer: null,
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yziha7b0e1fd900e4724a68674bb0a7fc295?orig=true'
      ]
    },
    {
      id: 12, title: 'Classic Midi Dress', price: 2199, rating: 4.2, offer: null,
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih020d2b9d8dda474d998fce495f0c4c35?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/3yzih2defee237a9f4c03a72653022d8bcd35?orig=true'
      ]
    }
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

  // cart state (simple)
  const [cart, setCart] = useState([]);

  // toast (product added) state
  const [toast, setToast] = useState({ visible: false, product: null, qty: 1 });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setPage((s) => (s - 1 + totalPages) % totalPages);
      if (e.key === 'ArrowRight') setPage((s) => (s + 1) % totalPages);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [totalPages]);

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
        <svg key={`f-${i}`} className="h-3 w-3 text-yellow-400 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          {StarPath}
        </svg>
      );
    }

    if (half) {
      stars.push(
        <span key="half" className="inline-block align-middle w-3 h-3 relative">
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
        <svg key={`e-${i}`} className="h-3 w-3 text-gray-300 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          {StarPath}
        </svg>
      );
    }

    return stars;
  };

  // compute discounted price if offer exists (supports 'NN% OFF' and 'Flat ₹NNN OFF')
  const getDiscountedPrice = (price, offer) => {
    if (!offer) return null;
    const percentMatch = offer.match(/(\d+)\s*%/);
    if (percentMatch) {
      const pct = Number(percentMatch[1]);
      return Math.round(price * (1 - pct / 100));
    }
    const flatMatch = offer.match(/(\d+)/);
    if (flatMatch) {
      const flat = Number(flatMatch[1]);
      if (/flat|₹|rs|rs\./i.test(offer) || offer.toLowerCase().includes('flat')) {
        return Math.max(0, price - flat);
      }
    }
    return null;
  };

  // Add to cart handler — shows toast
  const addToCart = (product, variantIndex = 0) => {
    const item = {
      productId: product.id,
      title: product.title,
      price: product.price,
      variantIndex,
      image: product.images[variantIndex] ?? product.images[0],
      qty: 1,
    };

    setCart((c) => {
      const existIndex = c.findIndex(ci => ci.productId === item.productId && ci.variantIndex === item.variantIndex);
      if (existIndex >= 0) {
        const next = [...c];
        next[existIndex] = { ...next[existIndex], qty: next[existIndex].qty + 1 };
        return next;
      }
      return [...c, item];
    });

    setToast({ visible: true, product: item, qty: 1 });

    window.clearTimeout(window.__v63_toast_timeout);
    window.__v63_toast_timeout = window.setTimeout(() => {
      setToast({ visible: false, product: null, qty: 1 });
    }, 3500);
  };

  const closeToast = () => {
    window.clearTimeout(window.__v63_toast_timeout);
    setToast({ visible: false, product: null, qty: 1 });
  };

  // Mobile icon SVGs
  const EyeIcon = ({ className = 'h-5 w-5' }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4.5c4.5 0 8.1 3.04 9.5 5.5-1.4 2.46-5 5.5-9.5 5.5S1.9 12.96.5 10.5C1.9 8.04 5.5 4.5 10 4.5zM10 7.5a3 3 0 100 6 3 3 0 000-6z" />
      <path d="M10 9a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  );

  const CartIcon = ({ className = 'h-5 w-5' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="none" />
      <path d="M7 13l-1.2 5.6A1 1 0 006.8 20h10.4a1 1 0 00.999-.874L19.6 13H7z" />
      <circle cx="10" cy="21" r="1" />
      <circle cx="18" cy="21" r="1" />
    </svg>
  );

  return (
    <section
      className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6"
      aria-label="Trending products"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg sm:text-3xl font-semibold tracking-tight">Trending</h3>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 3.707a1 1 0 010 1.414L4.414 9H16a1 1 0 110 2H4.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            <button
              aria-label="Next"
              onClick={goNext}
              className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
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
              className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-200 transition focus:outline-none focus:ring-2 focus:ring-indigo-200"
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
            const discounted = getDiscountedPrice(p.price, p.offer);

            return (
              <article
                key={p.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden relative shadow-sm hover:shadow-lg transition-shadow duration-200 focus-within:shadow-lg"
                onMouseEnter={() => onCardMouseEnter(p.id)}
                onMouseLeave={() => onCardMouseLeave(p.id)}
                onMouseMove={(e) => onCardMouseMove(e, p.id)}
                tabIndex={0}
                aria-labelledby={`title-${p.id}`}
              >
                <div className="relative h-36 sm:h-44 lg:h-[240px] bg-gray-100 overflow-hidden">
                  {/* Desktop: Offer badge (keeps original placement) */}
                  {p.offer && (
                    <div className="hidden sm:block absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded z-20 shadow">
                      {p.offer}
                    </div>
                  )}

                  {/* Mobile: vertical offer badge along left edge */}
                  {p.offer && (
                    <div
                      className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-30"
                      aria-hidden={false}
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      <div
                        className="bg-pink-500 text-white text-[10px] font-semibold px-2 py-1 rounded-r-md shadow"
                        style={{ letterSpacing: '0.4px' }}
                      >
                        {p.offer}
                      </div>
                    </div>
                  )}

                  {/* rating pill */}
                  <div className="absolute top-2 right-2 bg-white/95 rounded-full px-2 py-0.5 flex items-center gap-1 text-xs z-20 shadow-sm">
                    <span className="flex items-center">{renderStars(p.rating)}</span>
                    <span className="ml-1 text-gray-700 font-medium text-xs">{p.rating.toFixed(1)}</span>
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
                    loading="lazy"
                  />

                  {/* Variant thumbnails (appear on hover) */}
                  <div
                    className={`absolute left-2 bottom-2 flex items-center gap-2 transition-all duration-200 ${hovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                    style={{ pointerEvents: hovering ? 'auto' : 'none' }}
                    aria-hidden={!hovering}
                  >
                    {p.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(ev) => {
                          ev.stopPropagation();
                          handleDotClick(p.id, idx);
                        }}
                        aria-label={`Select variant ${idx + 1} for ${p.title}`}
                        className={`w-8 h-8 rounded-md ring-1 ring-white shadow-sm transform transition-all duration-150 overflow-hidden bg-gray-100 p-[1px] ${sel === idx ? 'ring-2 ring-indigo-500 scale-105' : 'opacity-90'
                          }`}
                      >
                        <img
                          src={img}
                          alt={`${p.title} variant ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          draggable={false}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Hover action buttons (desktop) */}
                  <div
                    className={`absolute right-2 bottom-2 transition-all duration-150 hidden sm:flex flex-col items-end gap-2 ${hovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                    aria-hidden={!hovering}
                  >
                    <button
                      className="pointer-events-auto bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200"
                      onClick={() => alert(`View product: ${p.title}`)}
                    >
                      View product
                    </button>

                    <button
                      className="pointer-events-auto bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-sm border border-indigo-600 hover:bg-indigo-700"
                      onClick={() => addToCart(p, sel)}
                    >
                      Add to cart
                    </button>
                  </div>

                  {/* Mobile: small icon actions (stacked vertically) on right-bottom */}
                  <div className="absolute right-2 bottom-2 sm:hidden flex flex-col items-end gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); alert(`View details: ${p.title}`); }}
                      aria-label={`View details of ${p.title}`}
                      title="View details"
                      className="bg-white text-gray-800 w-6 h-6 rounded-full flex items-center justify-center shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                      <EyeIcon className="h-3 w-3 text-gray-700" />
                    </button>

                    <button
                      onClick={(e) => { e.stopPropagation(); addToCart(p, sel); }}
                      aria-label={`Add ${p.title} to cart`}
                      title="Add to cart"
                      className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                      <CartIcon className="h-3 w-3 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-3 text-center">
                  <h4 id={`title-${p.id}`} className="text-sm sm:text-sm font-medium mb-1 line-clamp-1">{p.title}</h4>

                  <div className="flex items-center justify-center gap-2 mt-1">
                    {discounted !== null ? (
                      <div className="flex flex-col items-center">
                        <div className="text-sm sm:text-base font-semibold text-indigo-700">{currency(discounted)}</div>
                        <div className="text-xs text-gray-500 line-through">{currency(p.price)}</div>
                      </div>
                    ) : (
                      <div className="text-sm sm:text-base font-semibold">{currency(p.price)}</div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Toast / popup for "Product added to cart" */}
      <div
        aria-live="polite"
        className="fixed inset-0 pointer-events-none flex items-end justify-end p-4 z-50"
      >
        <div className="w-full sm:max-w-xs flex flex-col items-end gap-2">
          <div
            role="status"
            aria-atomic="true"
            className={`transform transition-all duration-300 pointer-events-auto ${toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {toast.product && (
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden w-80 sm:w-72">
                <div className="flex items-center gap-3 p-3">
                  <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src={toast.product.image} alt={toast.product.title} className="w-full h-full object-cover" loading="lazy" draggable={false} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{toast.product.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{currency(toast.product.price)}</div>
                    <div className="text-xs text-green-600 mt-1 font-semibold">Added to cart</div>
                  </div>

                  <button
                    onClick={closeToast}
                    aria-label="Close"
                    className="ml-2 text-gray-400 hover:text-gray-600 p-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div className="border-t border-gray-100 px-3 py-2 bg-gray-50 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      console.log('View cart clicked', cart);
                      closeToast();
                      alert('Go to cart (implement your routing)');
                    }}
                    className="flex-1 bg-indigo-600 text-white text-sm py-2 rounded-md text-center hover:bg-indigo-700"
                  >
                    View cart
                  </button>

                  <button
                    onClick={() => {
                      console.log('Checkout clicked', cart);
                      closeToast();
                      alert('Checkout (implement your flow)');
                    }}
                    className="ml-2 text-sm px-3 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: center-bottom toast alternative for small screens */}
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-40 sm:hidden pointer-events-none">
        <div className={`transition-all duration-300 pointer-events-auto ${toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {toast.product && (
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden w-[92vw] max-w-sm">
              <div className="flex items-center gap-3 p-3">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                  <img src={toast.product.image} alt={toast.product.title} className="w-full h-full object-cover" loading="lazy" draggable={false} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{toast.product.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{currency(toast.product.price)}</div>
                </div>

                <button
                  onClick={closeToast}
                  aria-label="Close"
                  className="ml-2 text-gray-400 hover:text-gray-600 p-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}