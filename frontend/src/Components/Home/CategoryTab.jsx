import React, { useState } from 'react';
import { FaStar, FaShoppingBag, FaHeart, FaEye, FaFire } from 'react-icons/fa';

// Available categories for the filter tabs
const categories = ['All Products', 'Headphones', 'Smartwatches', 'Gaming', 'Accessories'];

// Sample product dataset mapped to categories
const productsData = [
  {
    id: 1,
    category: 'Headphones',
    name: 'Sony WH-1000XM5 Wireless ANC Headphones',
    price: '$299.00',
    oldPrice: '$349.00',
    rating: 5,
    reviews: 128,
    badge: 'BEST SELLER',
    badgeStyle: 'bg-[#6D28D9] text-white',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    category: 'Smartwatches',
    name: 'Apple Watch Ultra 2 GPS + Cellular',
    price: '$799.00',
    oldPrice: '$849.00',
    rating: 4.9,
    reviews: 95,
    badge: 'NEW',
    badgeStyle: 'bg-[#84CC16] text-slate-950 font-black',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    category: 'Gaming',
    name: 'Logitech G Pro X Wireless Gaming Headset',
    price: '$199.00',
    oldPrice: '$229.00',
    rating: 4.8,
    reviews: 64,
    badge: 'HOT',
    badgeStyle: 'bg-amber-400 text-slate-950 font-black',
  },
  {
    id: 4,
    category: 'Accessories',
    name: 'Anker Magnetic Wireless Power Bank 10K',
    price: '$49.00',
    oldPrice: '$59.00',
    rating: 4.7,
    reviews: 42,
    badge: 'SALE',
    badgeStyle: 'bg-rose-500 text-white',
    image:
      'https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    category: 'Headphones',
    name: 'AirPods Max - Space Gray',
    price: '$479.00',
    oldPrice: '$549.00',
    rating: 4.9,
    reviews: 210,
    badge: 'PREMIUM',
    badgeStyle: 'bg-purple-900 text-white',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 6,
    category: 'Smartwatches',
    name: 'Samsung Galaxy Watch 6 Classic',
    price: '$329.00',
    oldPrice: '$379.00',
    rating: 4.6,
    reviews: 87,
    badge: 'POPULAR',
    badgeStyle: 'bg-[#6D28D9] text-white',
    image:
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 7,
    category: 'Gaming',
    name: 'Razer DeathAdder V3 Pro Wireless Mouse',
    price: '$149.00',
    oldPrice: '$169.00',
    rating: 4.9,
    reviews: 154,
    badge: 'PRO',
    badgeStyle: 'bg-[#84CC16] text-slate-950 font-black',
    image:
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 8,
    category: 'Accessories',
    name: 'Keychron K2 Wireless Mechanical Keyboard',
    price: '$89.00',
    oldPrice: '$99.00',
    rating: 4.8,
    reviews: 112,
    badge: 'TOP',
    badgeStyle: 'bg-slate-900 text-white',
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=400',
  },

  {
    id: 9,
    category: 'Headphones',
    name: 'AirPods Max - Space Gray',
    price: '$479.00',
    oldPrice: '$549.00',
    rating: 4.9,
    reviews: 210,
    badge: 'PREMIUM',
    badgeStyle: 'bg-purple-900 text-white',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400',
  },

  {
    id: 10,
    category: 'Smartwatches',
    name: 'Apple Watch Ultra 2 GPS + Cellular',
    price: '$799.00',
    oldPrice: '$849.00',
    rating: 4.9,
    reviews: 95,
    badge: 'NEW',
    badgeStyle: 'bg-[#84CC16] text-slate-950 font-black',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
  },
];

export default function CategoryTab() {
  const [activeTab, setActiveTab] = useState('All Products');

  const filteredProducts =
    activeTab === 'All Products'
      ? productsData
      : productsData.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6 border-b border-gray-200 pb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-[#6D28D9] uppercase mb-1">
              <FaFire className="text-amber-500" /> EXPLORE BY CATEGORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Showcase
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-1">
              Filter top-rated tech gadgets directly from your favorite category.
            </p>
          </div>

          {/* Category Tabs Pill Switcher */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-gray-200/80 shadow-xs">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#6D28D9] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#6D28D9] hover:bg-purple-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Product Grid (Filtered View) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-4 border border-purple-100/80 shadow-xs hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Top Badge & Action Icons */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] uppercase font-black px-3 py-1 rounded-full shadow-xs ${product.badgeStyle}`}
                >
                  {product.badge}
                </span>

                <button className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:text-rose-500 hover:bg-rose-50 flex items-center justify-center transition-colors">
                  <FaHeart className="text-xs" />
                </button>
              </div>

              {/* Product Image */}
              <div className="w-full h-44 flex items-center justify-center p-3 relative overflow-hidden my-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="mt-2 pt-3 border-t border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  {product.category}
                </span>

                <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#6D28D9] transition-colors">
                  {product.name}
                </h3>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-1 my-2 text-amber-400 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-slate-500 font-bold text-[11px] ml-1">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Pricing & Add to Cart Button */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-lg font-black text-slate-900">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through font-semibold ml-2">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  <button className="w-10 h-10 rounded-2xl bg-purple-50 text-[#6D28D9] hover:bg-[#6D28D9] hover:text-white flex items-center justify-center transition-all shadow-xs group-hover:scale-105">
                    <FaShoppingBag className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
