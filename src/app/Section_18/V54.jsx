import React, { useState } from 'react';
import Image from 'next/image';

export default function V54() {
  const initialItem = {
    id: 1,
    title: 'Cotton Shirt — S',
    size: 'S',
    color: 'Blue',
    price: 1299,
    originalPrice: 1599,
    // Example external image
    img: 'https://files-accl.zohoexternal.com/public/workdrive-external/previewdata/sdmkr4b593f7a7b314a3fa78fc73e13f5704c?orig=true',
  };

  const [item, setItem] = useState(initialItem);
  const [qty, setQty] = useState(1);

  const discountPct = item ? ((1 - item.price / item.originalPrice) * 100).toFixed(0) : '0';
  const subtotal = item ? item.price * qty : 0;
  const savings = item ? (item.originalPrice - item.price) * qty : 0;

  function formatCurrency(n) {
    return `Rs.${n.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
  }

  const decQty = () => setQty(q => (q > 1 ? q - 1 : 1));
  const incQty = () => setQty(q => q + 1);
  const removeItem = () => {
    setItem(null);
    setQty(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-8">
      <div className="max-w-6xl mx-auto p-6">
        <div className="border-b pb-4 mb-4">
          <div className="text-sm text-gray-500 font-medium">Items</div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left: Items List */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-4">
              {item ? (
                <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg shadow-sm p-4 md:p-5">
                  {/* Image column */}
                  <div className="w-full sm:w-44 flex-shrink-0 flex flex-col items-center">
                    <div className="w-40 h-46 bg-gray-100 rounded overflow-hidden relative">
                      {/* Next.js Image - fixed to match 160x224 (w-40 h-56) */}
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={160}
                        height={224}
                        className="object-cover"
                        priority={false}
                      />
                    </div>

                    <button
                      onClick={removeItem}
                      className="mt-3 text-sm text-red-600 border border-red-100 hover:bg-red-50 px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Details column (center on mobile, left on sm+) */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-orange-600 text-lg font-semibold">{item.title}</h3>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="mr-3"><span className="text-gray-400">Size:</span> <strong>{item.size}</strong></span>
                          <span><span className="text-gray-400">Color:</span> <strong>{item.color}</strong></span>
                        </div>
                      </div>

                      <div className="text-center sm:text-right">
                        <div className="text-2xl font-bold text-gray-900">{formatCurrency(item.price)}</div>
                        <div className="text-sm text-gray-400 line-through">{formatCurrency(item.originalPrice)}</div>
                        <div className="mt-1 inline-block bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded">
                          {discountPct}% off
                        </div>
                      </div>
                    </div>

                    {/* Quantity and Total (inside the left box) */}
                    <div className="mt-4 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-4">
                        {/* Quantity control */}
                        <div className="inline-flex items-center border rounded overflow-hidden">
                          <button
                            onClick={decQty}
                            className="px-3 py-2 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <div className="px-4 py-2 select-none min-w-[48px] text-center">{qty || 0}</div>
                          <button
                            onClick={incQty}
                            className="px-3 py-2 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-sm text-gray-500 hidden sm:block">Each: {formatCurrency(item.price)}</div>
                      </div>

                      {/* Total and amount on a single row (center on mobile, right on larger screens) */}
                      <div className="text-left sm:text-right font-medium text-gray-800 w-full sm:w-auto">
                        <div className="flex items-baseline gap-3 justify-center sm:justify-end">
                          <div className="text-sm text-gray-500">Total</div>
                          <div className="text-lg">{qty > 0 ? formatCurrency(item.price * qty) : '—'}</div>
                        </div>
                        <div className="text-xs text-gray-400 mt-1 sm:hidden">Each: {formatCurrency(item.price)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
                  No items in cart.
                </div>
              )}
            </div>
          </div>

          {/* Right: Summary */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white border rounded-lg p-5 shadow-sm sticky top-6">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal ({qty} {qty === 1 ? 'Item' : 'Items'})</span>
                <span className="text-lg">{formatCurrency(subtotal)}</span>
              </div>

              <div className="text-left mt-4 text-sm">
                <div className="text-gray-600">
                  You have saved <span className="font-semibold">{formatCurrency(savings)}</span>
                </div>
                <div className="text-gray-500 mt-3">
                  Shipping and taxes will be calculated at checkout
                </div>
              </div>

              <button
                disabled={!item}
                className={`mt-5 w-full text-white py-3 rounded ${item ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                Checkout
              </button>

              <button className="mt-4 w-full text-orange-600 hover:underline text-sm">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}