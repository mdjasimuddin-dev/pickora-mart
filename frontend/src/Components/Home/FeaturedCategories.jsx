import React, { useRef, useState } from 'react';

const categories = [
  {
    name: 'Apparel',
    itemCount: '120+ Items',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Up to 40% Off',
  },
  {
    name: 'Footwear',
    itemCount: '85+ Items',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Hot Deals',
  },
  {
    name: 'Electronics',
    itemCount: '50+ Items',
    image:
      'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'New Arrival',
  },
  {
    name: 'Cosmetics',
    itemCount: '95+ Items',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Trending',
  },
  {
    name: 'Accessories',
    itemCount: '64+ Items',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Best Seller',
  },
  {
    name: 'Home Decor',
    itemCount: '40+ Items',
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Flat 20% Off',
  },
  {
    name: 'Groceries',
    itemCount: '230+ Items',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Daily Needs',
  },
  {
    name: 'Sports & Fitness',
    itemCount: '75+ Items',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c6232669e02?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Save 30%',
  },
  {
    name: 'Toys & Baby',
    itemCount: '110+ Items',
    image:
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Top Rated',
  },
  {
    name: 'Books & Stationery',
    itemCount: '300+ Items',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Exclusive',
  },
  {
    name: 'Kitchen & Dining',
    itemCount: '90+ Items',
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Popular',
  },
  {
    name: 'Furniture',
    itemCount: '45+ Items',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Luxury',
  },
  {
    name: 'Jewelry',
    itemCount: '150+ Items',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Special',
  },
  {
    name: 'Watches',
    itemCount: '60+ Items',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Limited',
  },
  {
    name: 'Pet Supplies',
    itemCount: '80+ Items',
    image:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Best Value',
  },
  {
    name: 'Automotive',
    itemCount: '55+ Items',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Pro Choice',
  },
  {
    name: 'Health & Wellness',
    itemCount: '130+ Items',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Organic',
  },
  {
    name: 'Gardening',
    itemCount: '70+ Items',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Fresh',
  },
  {
    name: 'Office Supplies',
    itemCount: '95+ Items',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Essentials',
  },
  {
    name: 'Musical Instruments',
    itemCount: '35+ Items',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Featured',
  },
  {
    name: 'Travel & Luggage',
    itemCount: '50+ Items',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Adventure',
  },
  {
    name: 'Art & Craft',
    itemCount: '115+ Items',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Creative',
  },
  {
    name: 'Gaming',
    itemCount: '85+ Items',
    image:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Next-Gen',
  },
  {
    name: 'Lighting & Tools',
    itemCount: '65+ Items',
    image:
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Smart Home',
  },
  {
    name: 'Party Supplies',
    itemCount: '90+ Items',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=300',
    link: '#',
    discount: 'Celebration',
  },
];

export default function FeaturedCategories() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50/60 via-white to-gray-50/60 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 bg-brand-green" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 bg-brand-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full animate-pulse bg-brand-green" />
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs bg-brand-purple/10 text-brand-purple">
              Explore Collections
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-purple">
            Featured Categories
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl font-normal">
            Immerse yourself in our handpicked 25+ categories designed for an effortless shopping
            experience.
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 group active:scale-95 text-brand-purple"
            aria-label="Previous Categories"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 group active:scale-95 text-brand-purple"
            aria-label="Next Categories"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-6 px-2 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.link}
              draggable="false"
              className="group relative flex flex-col items-center bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/80 w-56 sm:w-60 flex-shrink-0 snap-start overflow-hidden hover:-translate-y-2.5"
            >
              <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs transition-transform duration-300 group-hover:scale-105 z-20 bg-brand-green/20 text-brand-purple">
                {cat.discount}
              </span>

              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-5 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center relative shadow-inner border-4 border-gray-100 group-hover:border-brand-green transition-all duration-500 group-hover:shadow-lg">
                <img
                  src={cat.image}
                  alt={cat.name}
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="text-center z-10 w-full">
                <h3 className="text-base sm:text-lg font-bold transition-colors duration-300 truncate w-full px-2 text-brand-purple group-hover:text-brand-green">
                  {cat.name}
                </h3>
                <p className="text-xs font-medium text-gray-500 mt-1 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-brand-green transition-colors" />
                  {cat.itemCount}
                </p>
              </div>

              <div className="mt-4 w-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 shadow-sm transition-colors bg-brand-purple text-white hover:bg-brand-green hover:text-brand-purple">
                  Explore Now
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-green group-hover:bg-brand-green transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
