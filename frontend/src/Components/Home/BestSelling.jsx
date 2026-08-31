import React from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaFire, FaArrowRight } from 'react-icons/fa';

const bestSellingProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    price: '$299.00',
    oldPrice: '$349.00',
    sales: '1.2k+ Sold',
    rating: 5,
    reviews: 320,
    badge: 'TOP #1',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 2,
    name: 'Apple Watch Series 9 GPS 41mm',
    price: '$399.00',
    oldPrice: '$499.00',
    sales: '950+ Sold',
    rating: 5,
    reviews: 210,
    badge: 'HOT',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 3,
    name: 'Canon EOS R50 Mirrorless Camera',
    price: '$679.00',
    oldPrice: '$799.00',
    sales: '540+ Sold',
    rating: 4.5,
    reviews: 142,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 4,
    name: 'iPhone 15 Pro Max 256GB',
    price: '$1,099.00',
    oldPrice: '$1,199.00',
    sales: '2.1k+ Sold',
    rating: 5,
    reviews: 480,
    badge: 'TOP #2',
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 5,
    name: 'Logitech MX Master 3S Wireless Mouse',
    price: '$89.00',
    oldPrice: '$99.00',
    sales: '820+ Sold',
    rating: 5,
    reviews: 195,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 6,
    name: 'Samsung Galaxy Buds 2 Pro',
    price: '$149.00',
    oldPrice: '$229.00',
    sales: '1.5k+ Sold',
    rating: 4.5,
    reviews: 310,
    badge: 'POPULAR',
    image:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 7,
    name: 'iPad Air 5th Gen M1 Chip',
    price: '$549.00',
    oldPrice: '$599.00',
    sales: '670+ Sold',
    rating: 5,
    reviews: 164,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 8,
    name: 'Apple Watch Series 9 GPS 41mm',
    price: '$399.00',
    oldPrice: '$499.00',
    sales: '950+ Sold',
    rating: 5,
    reviews: 210,
    badge: 'HOT',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300',
  },

  {
    id: 9,
    name: 'iPhone 15 Pro Max 256GB',
    price: '$1,099.00',
    oldPrice: '$1,199.00',
    sales: '2.1k+ Sold',
    rating: 5,
    reviews: 480,
    badge: 'TOP #2',
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=300',
  },

  {
    id: 10,
    name: 'iPad Air 5th Gen M1 Chip',
    price: '$549.00',
    oldPrice: '$599.00',
    sales: '670+ Sold',
    rating: 5,
    reviews: 164,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300',
  },
];

export default function BestSelling() {
  return (
    <section className="py-12 bg-[#F9FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
              <FaFire /> Customer Choice
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B]">
              Best Selling Products
            </h2>
            <div className="h-1 w-12 bg-purple-600 rounded-full mt-1.5 flex gap-1">
              <span className="h-full w-4 bg-lime-500 rounded-full inline-block"></span>
            </div>
          </div>

          {/* Top View All Button */}
          <a
            href="/best-sellers"
            className="hidden sm:flex items-center gap-1.5 text-purple-700 hover:text-purple-900 font-bold text-sm transition-colors group"
          >
            View All Products
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 8 Product Grid (Responsive: Mobile 2, Tablet 3, Desktop 4) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-10">
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Badge & Wishlist */}
              <div className="flex items-center justify-between mb-3 z-10">
                {product.badge ? (
                  <span className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {product.badge}
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold text-gray-400">{product.sales}</span>
                )}

                <button
                  className="w-8 h-8 rounded-full bg-gray-50 hover:bg-red-50 text-gray-300 hover:text-red-500 flex items-center justify-center transition-colors"
                  aria-label="Add to Wishlist"
                >
                  <FaHeart className="text-xs" />
                </button>
              </div>

              {/* Product Image */}
              <div className="w-full h-40 sm:h-44 flex items-center justify-center p-3 mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow flex flex-col justify-end">
                {/* Rating & Sold count */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex text-amber-400 text-[10px] gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">({product.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-[#1E1B4B] group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug mb-3">
                  {product.name}
                </h3>

                {/* Price & Cart Button */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-extrabold text-[#1E1B4B]">
                      {product.price}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 line-through font-medium">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button
                    className="w-9 h-9 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white flex items-center justify-center shadow-md active:scale-90 transition-all"
                    aria-label="Add to Cart"
                  >
                    <FaShoppingCart className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Full View All Button */}
        <div className="flex justify-center">
          <a
            href="/best-sellers"
            className="w-full sm:w-auto bg-white hover:bg-purple-50 text-purple-700 border-2 border-purple-200 hover:border-purple-600 font-bold py-3.5 px-8 rounded-2xl transition-all text-sm flex items-center justify-center gap-2 shadow-xs active:scale-95"
          >
            View All Best Sellers
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}
