import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';

const flashSaleProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    price: '$299.00',
    oldPrice: '$349.00',
    discount: '-14%',
    rating: 5,
    reviews: 98,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 2,
    name: 'Apple Watch Series 9 GPS 41mm',
    price: '$399.00',
    oldPrice: '$499.00',
    discount: '-20%',
    rating: 5,
    reviews: 76,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 3,
    name: 'Canon EOS R50 Mirrorless Camera',
    price: '$679.00',
    oldPrice: '$799.00',
    discount: '-15%',
    rating: 4.5,
    reviews: 54,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 4,
    name: 'iPhone 15 Pro Max 256GB',
    price: '$1,099.00',
    oldPrice: '$1,199.00',
    discount: '-8%',
    rating: 5,
    reviews: 82,
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 5,
    name: 'Dell XPS 13 Plus Laptop',
    price: '$1,299.00',
    oldPrice: '$1,499.00',
    discount: '-13%',
    rating: 4.5,
    reviews: 46,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 6,
    name: 'Logitech MX Master 3S Wireless Mouse',
    price: '$89.00',
    oldPrice: '$99.00',
    discount: '-10%',
    rating: 5,
    reviews: 112,
    image:
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 7,
    name: 'iPad Air 5th Gen M1 Chip',
    price: '$549.00',
    oldPrice: '$599.00',
    discount: '-8%',
    rating: 5,
    reviews: 64,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 8,
    name: 'Samsung Galaxy Buds 2 Pro',
    price: '$149.00',
    oldPrice: '$229.00',
    discount: '-35%',
    rating: 4.5,
    reviews: 88,
    image:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 9,
    name: 'Anker Power Bank 24000mAh',
    price: '$119.00',
    oldPrice: '$149.00',
    discount: '-20%',
    rating: 5,
    reviews: 140,
    image:
      'https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 10,
    name: 'PlayStation 5 DualSense Controller',
    price: '$59.00',
    oldPrice: '$69.00',
    discount: '-14%',
    rating: 5,
    reviews: 210,
    image:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=300',
  },
];

export default function FlashSaleSection() {
  return (
    <section className="py-10 bg-[#F9FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B]">Flash Sale Offers</h2>
            <div className="h-1 w-10 bg-purple-600 rounded-full mt-1.5 flex gap-1">
              <span className="h-full w-4 bg-lime-500 rounded-full inline-block"></span>
            </div>
          </div>

          {/* View All Button */}
          <a
            href="/flash-sale"
            className="text-purple-600 hover:text-purple-800 font-semibold text-sm flex items-center gap-1.5 transition-colors"
          >
            View All Offers <span className="text-base">→</span>
          </a>
        </div>

        {/* 2-Row Responsive Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {flashSaleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 border border-gray-100/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Discount Badge & Wishlist Button */}
              <div className="flex items-center justify-between mb-2">
                <span className="bg-lime-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                  {product.discount}
                </span>
                <button
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  aria-label="Add to Wishlist"
                >
                  <FaHeart className="text-sm" />
                </button>
              </div>

              {/* Product Image */}
              <div className="w-full h-36 flex items-center justify-center p-2 mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow flex flex-col justify-end">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 leading-snug">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-amber-400 text-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">({product.reviews})</span>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-bold text-[#1E1B4B]">
                      {product.price}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 line-through font-medium">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button
                    className="w-8 h-8 rounded-xl bg-purple-700 hover:bg-purple-800 text-white flex items-center justify-center transition-all active:scale-90 shadow-sm"
                    aria-label="Add to Cart"
                  >
                    <FaShoppingCart className="text-xs" />
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
