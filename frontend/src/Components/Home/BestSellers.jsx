import React from 'react';

export default function BestSellers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-purple">
            Best Selling Products
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Explore our most popular items loved and trusted by thousands of customers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="group bg-gray-50/60 rounded-3xl p-4 shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-white mb-4">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-bold text-brand-purple text-base truncate">
                  Wireless Noise Cancelling Headphones
                </h3>
                <p className="text-xs text-gray-500 mt-1">Electronics & Audio</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-extrabold text-brand-purple">৳ ৪,২০০</span>
                  <div className="flex items-center text-amber-500 text-xs font-bold">
                    ★ 4.9 (120)
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2.5 rounded-xl text-xs font-semibold bg-brand-purple text-white hover:bg-brand-green hover:text-brand-purple transition-colors">
                Quick View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
