import React from 'react';

export default function FlashSale() {
  return (
    <section className=" bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Timer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-green/20 text-brand-purple">
              Limited Time Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-purple mt-2">
              Flash Sale
            </h2>
          </div>

          {/* Countdown Timer Mock */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-600">Ends in:</span>
            <div className="flex gap-1.5 text-center font-bold text-white">
              <span className="px-3 py-1.5 rounded-lg bg-brand-purple text-xs">05</span>:
              <span className="px-3 py-1.5 rounded-lg bg-brand-purple text-xs">42</span>:
              <span className="px-3 py-1.5 rounded-lg bg-brand-purple text-xs">18</span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <span className="absolute top-3 left-3 bg-brand-green text-brand-purple text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                  -30% Off
                </span>
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-bold text-brand-purple text-base truncate">
                  Premium Smart Watch
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-extrabold text-brand-purple">৳ ২,৫০০</span>
                  <span className="text-sm text-gray-400 line-through">৳ ৩,৫০০</span>
                </div>
              </div>
              <button className="mt-4 w-full py-2.5 rounded-xl text-xs font-semibold bg-brand-purple text-white hover:bg-brand-green hover:text-brand-purple transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
