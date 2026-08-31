import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  {
    name: 'Headphones',
    itemCount: '125 Products',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300',
    link: '#',
  },
  {
    name: 'Smart Watches',
    itemCount: '86 Products',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300',
    link: '#',
  },
  {
    name: 'Gaming',
    itemCount: '58 Products',
    image:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=300',
    link: '#',
  },
  {
    name: 'Camera & Photo',
    itemCount: '74 Products',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300',
    link: '#',
  },
  {
    name: 'Accessories',
    itemCount: '96 Products',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300',
    link: '#',
  },
  {
    name: 'Laptops',
    itemCount: '45 Products',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=300',
    link: '#',
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
      const scrollAmount = clientWidth * 0.7;
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
    <section className="py-12 bg-[#F9FAFC] relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B]">Featured Categories</h2>
            <div className="h-1 w-10 bg-brand-purple rounded-full mt-1.5 flex gap-1">
              <span className="h-full w-4 bg-brand-green rounded-full inline-block"></span>
            </div>
          </div>

          {/* Action Links & Navigation Controls */}
          <div className="flex items-center gap-4">
            <a
              href="#all"
              className="text-brand-purple hover:text-brand-purple/80 font-semibold text-sm flex items-center gap-1.5 transition-colors"
            >
              View All Categories <span className="text-base">→</span>
            </a>

            {/* Slider Navigation Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs hover:bg-gray-50 flex items-center justify-center transition-all text-gray-700 active:scale-95"
                aria-label="Previous Categories"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs hover:bg-gray-50 flex items-center justify-center transition-all text-gray-700 active:scale-95"
                aria-label="Next Categories"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Slider Container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-5 overflow-x-auto scrollbar-hide py-3 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.link}
              draggable="false"
              className="group flex flex-col items-center bg-white p-4 sm:p-5 rounded-3xl ... w-[calc(25%-15px)] min-w-[160px] flex-shrink-0"
            >
              {/* Circular Image Container */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gray-50 flex items-center justify-center mb-5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src={cat.image}
                  alt={cat.name}
                  draggable="false"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Title & Count */}
              <h3 className="text-base text-center font-bold text-[#1E1B4B] group-hover:text-brand-purple transition-colors truncate w-full">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-medium">{cat.itemCount}</p>
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
