import React, { useMemo, useState, useEffect } from 'react';

export default function V68() {
  // ------------------- Data -------------------
  const products = [
    { id: 1, title: 'Women Formal Shirt', price: 4999, rating: 4.4, offer: null,
      gender: 'Women', category: 'Shirt', colors: ['Beige', 'Brown'], tags: ['Semi-formal'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkre179760c6cc1447d8a5180d472658987?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr6c9db496e06b407293bd54d1c3e32cf8?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr2a17afcbfcfb45ca805b90a307e82067?orig=true'
      ],
    },
    { id: 2, title: 'Cotton Shirt', price: 1299, rating: 3.9, offer: '15% OFF',
      gender: 'Men', category: 'Shirt', colors: ['Blue', 'White'], tags: ['Casual'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrc3fac4f7102645be97e8b774e4230b3b?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr526d387867184aeb99e54d3da3b7f18f?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrb47d0be495f541cda444d0eda0a19aa2?orig=true',
      ],
    },
    { id: 3, title: 'Silk Saree', price: 12999, rating: 4.8, offer: '20% OFF',
      gender: 'Women', category: 'Saree', colors: ['Pink'], tags: ['Wedding', 'Festive'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr70b6c56f49f24af5b75b75bd4793244b?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr23516cd6ee044bbbb569e608780c0f27?orig=true',
      ],
    },
    { id: 4, title: 'Festive Kurta', price: 999, rating: 4.1, offer: null,
      gender: 'Men', category: 'Kurta', colors: ['Yellow'], tags: ['Festive'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr3e53080b54234edd90e93e2fa43afebd?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr938b796a09784b33823bd4fba24ac350?orig=true',
      ],
    },
    { id: 5, title: 'Casual Tee', price: 599, rating: 3.7, offer: null,
      gender: 'Unisex', category: 'T-Shirt', colors: ['Black'], tags: ['Casual'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr3db052482ee14c539e229397b090df79?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrfa486066b12644a0a2c4eac0ae5c4b90?orig=true',
      ],
    },
    { id: 6, title: 'Denim Jacket', price: 3499, rating: 4.6, offer: '10% OFF',
      gender: 'Unisex', category: 'Jacket', colors: ['Blue'], tags: ['Street'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr101f5f07aed241aaa1e6670f8ee46fbf?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr41f3bfe2fd4240d8bb3f1d7c36dfad20?orig=true',
      ],
    },
    { id: 7, title: 'Chiffon Dress', price: 2599, rating: 4.0, offer: null,
      gender: 'Women', category: 'Dress', colors: ['Red'], tags: ['Party'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrc2219e7e6c7e480082f40c64f5bd010e?orig=true',
      ],
    },
    { id: 8, title: 'Linen Shorts', price: 799, rating: 3.8, offer: null,
      gender: 'Men', category: 'Shorts', colors: ['Khaki'], tags: ['Summer'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr46e99a2c4fc747c791f3d1ac0984c412?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrfc5467aaed8f434792fef3680e548eb5?orig=true',
      ],
    },
    { id: 9, title: 'Summer Skirt', price: 1199, rating: 4.2, offer: null,
      gender: 'Women', category: 'Skirt', colors: ['Green'], tags: ['Summer'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkrf81f9b844c9e4679b860fff6453b2b06?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr5b96724fc64e4c349bac82879125e8f3?orig=true',
      ],
    },
    { id: 10, title: 'Blazer', price: 4599, rating: 4.5, offer: 'Flat ₹500 OFF',
      gender: 'Men', category: 'Blazer', colors: ['Navy'], tags: ['Formal'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr2c22f1eab44a4c598f5cf593934945f1?orig=true',
      ],
    },
    { id: 11, title: 'Athletic Shorts', price: 699, rating: 3.6, offer: null,
      gender: 'Unisex', category: 'Shorts', colors: ['Gray'], tags: ['Athleisure'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkre5dbd891bd2b44228cee8ccec34c4fe2?orig=true',
      ],
    },
    { id: 12, title: 'Classic Pants', price: 2199, rating: 4.3, offer: null,
      gender: 'Men', category: 'Pants', colors: ['Black'], tags: ['Office'],
      images: [
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr4a155350979141c296968ebe3b31fed1?orig=true',
        'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr978225f688914c0eba0f7913805e331d?orig=true',
      ],
    },

    // additional 8 products (13-20)
    { id: 13, title: 'Printed Maxi Dress', price: 1999, rating: 4.2, offer: '10% OFF',
      gender: 'Women', category: 'Dress', colors: ['Blue', 'White'], tags: ['Summer', 'Beach'],
      images: [
        'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/11364346/2024/4/27/82cd320c-1c06-4d50-814d-52f1e6d540621714189796408-SASSAFRAS-Blue--Peach-Coloured-Floral-Printed-Maxi-Dress-861-6.jpg',
        'https://m.media-amazon.com/images/I/71a3cbiz1aL._AC_SY879_.jpg'
      ],
    },
    { id: 14, title: 'Crew Neck Sweatshirt', price: 1499, rating: 4.1, offer: null,
      gender: 'Unisex', category: 'Sweatshirt', colors: ['Maroon'], tags: ['Casual', 'Winter'],
      images: [
        'https://m.media-amazon.com/images/I/61tjx7cO4HL._UY1100_.jpg'
      ],
    },
    { id: 15, title: 'Pleated Trousers', price: 2599, rating: 4.4, offer: null,
      gender: 'Women', category: 'Pants', colors: ['Beige'], tags: ['Office', 'Formal'],
      images: [
        'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/14/VDZ7NjyG_0ff707fe648f426f92646b8c1a7ca366.jpg'
      ],
    },
    { id: 16, title: 'Graphic Tee', price: 499, rating: 3.5, offer: null,
      gender: 'Unisex', category: 'T-Shirt', colors: ['White'], tags: ['Casual', 'Street'],
      images: [
        'https://dcyphr.in/cdn/shop/files/iiyd0gvqz63zsh9hs4ex.webp?v=1756815754'
      ],
    },
    { id: 17, title: 'Bomber Jacket', price: 3799, rating: 4.7, offer: '15% OFF',
      gender: 'Men', category: 'Jacket', colors: ['Black'], tags: ['Street', 'Winter'],
      images: [
        'https://m.media-amazon.com/images/I/81Nt-P5Xb1L._UY1100_.jpg'
      ],
    },
    { id: 18, title: 'Embroidered Kurti', price: 1399, rating: 4.0, offer: null,
      gender: 'Women', category: 'Kurti', colors: ['Orange'], tags: ['Festive', 'Ethnic'],
      images: [
        'https://www.kashmirvilla.com/cdn/shop/products/black-colour-aari-work-embroidered-kurti-designer-paisleys-pattern-cotton-kurtis-548.jpg?crop=center&height=1200&v=1691413761&width=1200'
      ],
    },
    { id: 19, title: 'Tech Running Shoes', price: 3499, rating: 4.6, offer: 'Flat ₹300 OFF',
      gender: 'Unisex', category: 'Shoes', colors: ['Black', 'White'], tags: ['Athletic'],
      images: [
        'https://m.media-amazon.com/images/I/61-0ocoBucL._UY1000_.jpg'
      ],
    },
    { id: 20, title: 'Casual Loafers', price: 1899, rating: 4.3, offer: null,
      gender: 'Men', category: 'Shoes', colors: ['Brown'], tags: ['Casual', 'Office'],
      images: [
        'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/27845830/2024/2/26/9e6b17c2-73de-4757-980b-8a74cd070dcb1708925509722MastHarbourMenColourblockedSuedeLoafers1.jpg'
      ],
    },
  ];

  // ------------------- UI State -------------------
  const [selectedVariants, setSelectedVariants] = useState(() =>
    products.reduce((acc, p) => ((acc[p.id] = 0), acc), {})
  );
  const [hoverState, setHoverState] = useState(() =>
    products.reduce((acc, p) => ((acc[p.id] = { hovering: false, origin: '50% 50%' }), acc), {})
  );

  // Sorting
  const [sortBy, setSortBy] = useState('popular');

  // Filters
  const [genders, setGenders] = useState(new Set());
  const [categories, setCategories] = useState(new Set());
  const [colors, setColors] = useState(new Set());
  const [tags, setTags] = useState(new Set());
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [filterSearch, setFilterSearch] = useState(''); // search inside sidebar filters

  // Mobile drawer
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Accordion: which section is open. Default: Gender.
  const [openFilter, setOpenFilter] = useState('gender'); // 'gender' | 'category' | 'colors' | 'price' | 'tags' | null

  // ------------------- Helpers -------------------
  useEffect(() => {
    // lock body scroll when mobile drawer open
    if (mobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileFiltersOpen]);

  const currency = (n) => `Rs.${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.00`;

  const toggleSet = (setter, value) =>
    setter((prev) => {
      const next = new Set(prev);
      next.has(value) ? next.delete(value) : next.add(value);
      return next;
    });

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
    setHoverState((s) => ({ ...s, [id]: { ...s[id], origin: `${x}% ${y}%` } }));
  };

  // ------------------- Compute Filtered & Sorted -------------------
  const filtered = useMemo(() => {
    const min = priceMin ? Number(priceMin) : -Infinity;
    const max = priceMax ? Number(priceMax) : Infinity;

    return products.filter((p) => {
      if (!(p.price >= min && p.price <= max)) return false;
      if (genders.size && !genders.has(p.gender)) return false;
      if (categories.size && !categories.has(p.category)) return false;
      if (colors.size && !p.colors?.some((c) => colors.has(c))) return false;
      if (tags.size && !p.tags?.some((t) => tags.has(t))) return false;
      return true;
    });
  }, [products, priceMin, priceMax, genders, categories, colors, tags]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortBy) {
      case 'priceAsc':
        arr.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        arr.sort((a, b) => b.price - a.price);
        break;
      case 'ratingDesc':
        arr.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        arr.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
      default:
        // mock popularity
        arr.sort((a, b) => (b.rating * 1000 - a.rating * 1000) - (b.price - a.price) / 100);
        break;
    }
    return arr;
  }, [filtered, sortBy]);

  // ------------------- Stars -------------------
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    const StarPath = (
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69L9.05 2.927z" />
    );
    const out = [];
    for (let i = 0; i < full; i++) {
      out.push(
        <svg key={`f-${i}`} className="h-3 w-3 text-yellow-400 inline-block" viewBox="0 0 20 20" fill="currentColor">
          {StarPath}
        </svg>
      );
    }
    if (half) {
      out.push(
        <span key="half" className="inline-block align-middle w-3 h-3 relative">
          <svg className="absolute inset-0 w-full h-full text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            {StarPath}
          </svg>
          <span className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '50%' }}>
            <svg className="w-full h-full text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              {StarPath}
            </svg>
          </span>
        </span>
      );
    }
    for (let i = 0; i < empty; i++) {
      out.push(
        <svg key={`e-${i}`} className="h-3 w-3 text-gray-300 inline-block" viewBox="0 0 20 20" fill="currentColor">
          {StarPath}
        </svg>
      );
    }
    return out;
  };

  // ------------------- Unique filter values -------------------
  const unique = (arr) => Array.from(new Set(arr)).sort();
  const genderValues = unique(products.map((p) => p.gender));
  const categoryValues = unique(products.map((p) => p.category));
  const colorValues = unique(products.flatMap((p) => p.colors || []));
  const tagValues = unique(products.flatMap((p) => p.tags || []));

  // For counts beside filter options (based on all products)
  const counts = useMemo(() => {
    const c = {
      gender: {},
      category: {},
      color: {},
      tag: {},
    };
    products.forEach((p) => {
      c.gender[p.gender] = (c.gender[p.gender] || 0) + 1;
      c.category[p.category] = (c.category[p.category] || 0) + 1;
      (p.colors || []).forEach((col) => (c.color[col] = (c.color[col] || 0) + 1));
      (p.tags || []).forEach((t) => (c.tag[t] = (c.tag[t] || 0) + 1));
    });
    return c;
  }, [products]);

  // ---------- UI ----------
  const Section = ({ id, title, children }) => {
    const open = openFilter === id;
    return (
      <div className="border rounded-md bg-white">
        <button
          type="button"
          onClick={() => setOpenFilter((prev) => (prev === id ? null : id))}
          className="w-full flex justify-between items-center px-3 py-2 text-sm font-semibold text-gray-700"
        >
          <span className="flex items-center gap-2">
            <span>{title}</span>
          </span>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open ? 'opacity-100' : 'opacity-0'}`}
          style={{ maxHeight: open ? 420 : 0 }}
          aria-hidden={!open}
        >
          <div className="px-3 pb-3 text-left">{children}</div>
        </div>
      </div>
    );
  };

  // Clear all filters helper
  const clearAll = () => {
    setGenders(new Set());
    setCategories(new Set());
    setColors(new Set());
    setTags(new Set());
    setPriceMin('');
    setPriceMax('');
    setFilterSearch('');
  };

  return (
    <>
      {/* Inline CSS for custom scrollbar and (drawer animation kept) */}
      <style>{`
        /* WebKit */
        .custom-scrollbar::-webkit-scrollbar { width: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f3f4f6; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #c7cbd1; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #a8adb6; }

        /* Firefox */
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #c7cbd1 #f3f4f6; }

        /* Mobile drawer slide (kept for potential future transitions) */
        .drawer-enter { transform: translateX(-100%); }
        .drawer-enter-active { transform: translateX(0); transition: transform 240ms ease-in-out; }
        .drawer-exit { transform: translateX(0); }
        .drawer-exit-active { transform: translateX(-100%); transition: transform 240ms ease-in-out; }
      `}</style>

      <section className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-4">
        {/* Header with title, sort, and mobile filter button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">Dress</h3>
            <div className="text-sm text-gray-600 hidden sm:block">Showing <span className="font-semibold text-gray-800">{sorted.length}</span> of <span className="font-medium">{products.length}</span></div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile filter button (left-aligned content) */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200 text-sm lg:hidden justify-start"
              aria-label="Open filters"
            >
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none">
                <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="whitespace-nowrap">Filters</span>
            </button>

            <span className="text-sm text-gray-500 hidden sm:block">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
            >
              <option value="popular">Most Popular</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="ratingDesc">Rating: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar Filters (left and sticky on large screens) */}
          <aside className="hidden lg:block lg:col-span-3 lg:order-1">
            <div className="lg:sticky lg:top-20">
              <div className="bg-white rounded-lg shadow-md p-4 space-y-4 border h-full">
                {/* Make sidebar body scrollable with custom scrollbar */}
                <div className="flex flex-col gap-4 custom-scrollbar" style={{ maxHeight: 'calc(100vh - 140px)', overflowY: 'auto', paddingRight: 6 }}>
                  {/* Search inside filters */}
                  <div>
                    <input
                      value={filterSearch}
                      onChange={(e) => setFilterSearch(e.target.value)}
                      placeholder="Search filters..."
                      className="w-full text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>

                  {/* Applied filters */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-700">Applied filters</h4>
                      <button onClick={clearAll} className="text-xs text-red-600 hover:underline">Clear</button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[...genders].map((g) => <span key={g} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{g}</span>)}
                      {[...categories].map((c) => <span key={c} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{c}</span>)}
                      {[...colors].map((c) => <span key={c} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{c}</span>)}
                      {[...tags].map((t) => <span key={t} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{t}</span>)}
                      {priceMin || priceMax ? <span className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border">{priceMin || '0'} - {priceMax || '∞'}</span> : null}
                      {!genders.size && !categories.size && !colors.size && !tags.size && !priceMin && !priceMax && (
                        <div className="text-xs text-gray-400">No filters applied</div>
                      )}
                    </div>
                  </div>

                  {/* Gender */}
                  <Section id="gender" title="Gender">
                    <div className="space-y-2">
                      {genderValues
                        .filter((g) => g.toLowerCase().includes(filterSearch.toLowerCase()))
                        .map((g) => (
                          <label key={g} className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={genders.has(g)}
                              onChange={() => toggleSet(setGenders, g)}
                            />
                            <span className="flex-1 text-left">{g}</span>
                            <span className="text-xs text-gray-400">({counts.gender[g] || 0})</span>
                          </label>
                        ))}
                    </div>
                  </Section>

                  {/* Category */}
                  <Section id="category" title="Category">
                    <div className="space-y-2">
                      {categoryValues
                        .filter((c) => c.toLowerCase().includes(filterSearch.toLowerCase()))
                        .map((c) => (
                          <label key={c} className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={categories.has(c)}
                              onChange={() => toggleSet(setCategories, c)}
                            />
                            <span className="flex-1 text-left">{c}</span>
                            <span className="text-xs text-gray-400">({counts.category[c] || 0})</span>
                          </label>
                        ))}
                    </div>
                  </Section>

                  {/* Colors */}
                  <Section id="colors" title="Colors">
                    <div className="flex flex-wrap gap-2">
                      {colorValues
                        .filter((c) => c.toLowerCase().includes(filterSearch.toLowerCase()))
                        .map((c) => {
                          const selected = colors.has(c);
                          const bg = {
                            Black: '#000', White: '#fff', Blue: '#3b82f6', Brown: '#8b5a2b',
                            Beige: '#f5f0e1', Pink: '#fda4af', Red: '#ef4444', Khaki: '#b8a17a',
                            Green: '#10b981', Gray: '#9ca3af', Navy: '#1e40af', Orange: '#fb923c'
                          }[c] || '#d1d5db';

                          return (
                            <button
                              key={c}
                              onClick={() => toggleSet(setColors, c)}
                              title={c}
                              className={`w-9 h-9 rounded-full border-2 transition-all ${selected ? 'ring-2 ring-indigo-500 border-transparent' : 'border-gray-200'}`}
                              style={{ background: bg }}
                            />
                          );
                        })}
                    </div>
                    <div className="text-xs text-gray-400 mt-2">Click swatch to toggle</div>
                  </Section>

                  {/* Price */}
                  <Section id="price" title="Price">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        placeholder="Min"
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        className="w-20 sm:w-24 border px-2 py-1 rounded text-sm"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="number"
                        min="0"
                        placeholder="Max"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        className="w-20 sm:w-24 border px-2 py-1 rounded text-sm"
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-2">Tip: set a range to narrow results</div>
                  </Section>

                  {/* Tags */}
                  <Section id="tags" title="Tags">
                    <div className="flex flex-wrap gap-2">
                      {tagValues
                        .filter((t) => t.toLowerCase().includes(filterSearch.toLowerCase()))
                        .map((t) => (
                          <button
                            key={t}
                            onClick={() => toggleSet(setTags, t)}
                            className={`px-2 py-1 rounded-full text-xs border text-left ${
                              tags.has(t) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200'
                            }`}
                          >
                            {t} <span className="ml-1 text-xs text-gray-300">({counts.tag[t] || 0})</span>
                          </button>
                        ))}
                    </div>
                  </Section>

                  {/* Better clear and apply actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={clearAll}
                      className="flex-1 text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md shadow-sm"
                    >
                      Clear all
                    </button>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid (right on large screens) */}
          <div className="lg:col-span-9 lg:order-2">
            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {sorted.map((p) => {
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
                    {/* Smaller image height */}
                    <div className="relative bg-gray-100 overflow-hidden" style={{ height: 160 }}>
                      {p.offer && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded z-20 shadow">
                          {p.offer}
                        </div>
                      )}

                      <div className="absolute top-2 left-2 bg-white/95 rounded-full px-2 py-1 flex items-center gap-2 text-[11px] z-20 shadow">
                        <span className="flex items-center">{renderStars(p.rating)}</span>
                        <span className="ml-1 text-gray-700 font-medium">{p.rating.toFixed(1)}</span>
                      </div>

                      <img
                        src={p.images[sel]}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={{
                          transform: hovering ? 'scale(1.06)' : 'scale(1)',
                          transformOrigin: origin,
                          filter: hovering ? 'brightness(1.04)' : 'brightness(1)',
                          userSelect: 'none',
                        }}
                        draggable={false}
                      />

                      {/* Variant dots on hover */}
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

                      {/* View button */}
                      <div className={`absolute right-2 bottom-2 hidden sm:flex items-center transition-all duration-150 ${hovering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <button
                          className="pointer-events-auto bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200"
                          onClick={() => alert(`View product: ${p.title}`)}
                        >
                          View product
                        </button>
                      </div>
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
                      <h4 className="text-sm font-medium mb-0.5 line-clamp-1">{p.title}</h4>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <div className="text-sm sm:text-base font-semibold">{currency(p.price)}</div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {sorted.length === 0 && (
              <div className="text-center text-gray-500 text-sm py-10">No products match the selected filters.</div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden" aria-hidden={!mobileFiltersOpen}>
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
          />
          {/* Drawer panel */}
          {/* NOTE: marginTop and calc height create a top gap so the drawer sits below your header (header height ~56px). 
              Adjust '56px' to match your header's actual height if needed. */}
          <div
            className="relative bg-white w-[86%] max-w-xs shadow-xl custom-scrollbar overflow-y-auto"
            style={{ marginTop: '56px', height: 'calc(100% - 56px)' }}
            role="dialog"
            aria-modal="true"
          >
            {/* Sticky header inside the drawer so "Filters" stays visible during scroll */}
            <div className="sticky top-0 bg-white z-20 p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold text-left">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 rounded-md bg-gray-100" aria-label="Close filters">
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Reuse the same content as desktop sidebar (slimmed for mobile) */}
            <div className="space-y-4 p-4">
              <div>
                <input
                  value={filterSearch}
                  onChange={(e) => setFilterSearch(e.target.value)}
                  placeholder="Search filters..."
                  className="w-full text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-700">Applied filters</h4>
                  <button onClick={clearAll} className="text-xs text-red-600 hover:underline">Clear</button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[...genders].map((g) => <span key={g} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{g}</span>)}
                  {[...categories].map((c) => <span key={c} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{c}</span>)}
                  {[...colors].map((c) => <span key={c} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{c}</span>)}
                  {[...tags].map((t) => <span key={t} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded-full border text-left">{t}</span>)}
                </div>
              </div>

              <Section id="gender-mobile" title="Gender">
                <div className="space-y-2">
                  {genderValues
                    .filter((g) => g.toLowerCase().includes(filterSearch.toLowerCase()))
                    .map((g) => (
                      <label key={g} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={genders.has(g)}
                          onChange={() => toggleSet(setGenders, g)}
                        />
                        <span className="flex-1 text-left">{g}</span>
                      </label>
                    ))}
                </div>
              </Section>

              <Section id="category-mobile" title="Category">
                <div className="space-y-2">
                  {categoryValues
                    .filter((c) => c.toLowerCase().includes(filterSearch.toLowerCase()))
                    .map((c) => (
                      <label key={c} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={categories.has(c)}
                          onChange={() => toggleSet(setCategories, c)}
                        />
                        <span className="flex-1 text-left">{c}</span>
                      </label>
                    ))}
                </div>
              </Section>

              <Section id="colors-mobile" title="Colors">
                <div className="flex flex-wrap gap-2">
                  {colorValues
                    .filter((c) => c.toLowerCase().includes(filterSearch.toLowerCase()))
                    .map((c) => {
                      const selected = colors.has(c);
                      const bg = {
                        Black: '#000', White: '#fff', Blue: '#3b82f6', Brown: '#8b5a2b',
                        Beige: '#f5f0e1', Pink: '#fda4af', Red: '#ef4444', Khaki: '#b8a17a',
                        Green: '#10b981', Gray: '#9ca3af', Navy: '#1e40af', Orange: '#fb923c'
                      }[c] || '#d1d5db';

                      return (
                        <button
                          key={c}
                          onClick={() => toggleSet(setColors, c)}
                          title={c}
                          className={`w-9 h-9 rounded-full border-2 transition-all ${selected ? 'ring-2 ring-indigo-500 border-transparent' : 'border-gray-200'}`}
                          style={{ background: bg }}
                        />
                      );
                    })}
                </div>
              </Section>

              <Section id="price-mobile" title="Price">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    placeholder="Min"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="w-20 sm:w-24 border px-2 py-1 rounded text-sm"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="Max"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="w-20 sm:w-24 border px-2 py-1 rounded text-sm"
                  />
                </div>
              </Section>

              <Section id="tags-mobile" title="Tags">
                <div className="flex flex-wrap gap-2">
                  {tagValues
                    .filter((t) => t.toLowerCase().includes(filterSearch.toLowerCase()))
                    .map((t) => (
                      <button
                        key={t}
                        onClick={() => toggleSet(setTags, t)}
                        className={`px-2 py-1 rounded-full text-xs border text-left ${
                          tags.has(t) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                </div>
              </Section>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearAll}
                  className="flex-1 text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md shadow-sm"
                >
                  Clear all
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}