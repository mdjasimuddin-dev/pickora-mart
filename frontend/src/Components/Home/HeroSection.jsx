import { useState, useEffect, useRef, useCallback } from 'react';
import { FaCamera, FaHeadphonesAlt, FaSitemap, FaPlay } from 'react-icons/fa';
import { IoIosPhonePortrait, IoMdWatch } from 'react-icons/io';
import { MdLaptopChromebook } from 'react-icons/md';

const slides = [
  {
    id: 1,
    title: 'Upgrade Your Tech Lifestyle',
    subtitle: 'Discover the latest gadgets with unbeatable deals and best quality.',
    badge: 'New Collection 2026',
    ctaText: 'Shop Now',
    ctaLink: '#tech',
    bgImage: 'https://i.ibb.co.com/Ps0KwjQT/Chat-GPT-Image-Aug-31-2026-08-38-32-PM.png',
  },
  {
    id: 2,
    title: 'Trending Fashion Collections',
    subtitle: 'Discover the latest urban wear & style trends for this season.',
    badge: 'New Arrival 2026',
    ctaText: 'Explore Collection',
    ctaLink: '#fashion',
    bgImage: 'https://i.ibb.co.com/Ps0KwjQT/Chat-GPT-Image-Aug-31-2026-08-38-32-PM.png',
  },
];

const SLIDE_DURATION = 5000;

const useGoogleFonts = () => {
  useEffect(() => {
    if (document.getElementById('hero-fonts')) return;
    const link = document.createElement('link');
    link.id = 'hero-fonts';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap';
    document.head.appendChild(link);
  }, []);
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  useGoogleFonts();

  const total = slides.length;

  const goTo = useCallback(
    (index) => {
      setCurrentSlide(((index % total) + total) % total);
    },
    [total]
  );

  const nextSlide = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prevSlide = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [paused, reducedMotion, nextSlide]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextSlide, prevSlide]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
  };

  const slide = slides[currentSlide];

  return (
    <div className="bg-gray-100">
      <section
        className="relative w-full bg-[#0A0F14] pb-24 pt-12 lg:pt-20 px-4 sm:px-8"
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="Featured offers"
      >
        {/* Background Slides */}
        {slides.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${s.bgImage}')`,
                  transform: isActive && !reducedMotion ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 6500ms ease-out',
                }}
              />
            </div>
          );
        })}

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto min-h-[420px] sm:min-h-[480px] flex items-center relative z-20">
          <div className="max-w-xl text-white">
            <span
              key={`badge-${slide.id}`}
              className="inline-block bg-[#805AD5]/30 text-lime-400 border border-lime-400/30 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 animate-[fadeIn_0.6s_ease-out]"
            >
              {slide.badge}
            </span>

            <h1
              key={`title-${slide.id}`}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-[fadeIn_0.6s_ease-out]"
              style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui" }}
            >
              {slide.title.split('Tech')[0]}
              {slide.title.includes('Tech') && <span className="text-lime-400">Tech </span>}
              {slide.title.split('Tech')[1]}
            </h1>

            <p
              key={`subtitle-${slide.id}`}
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-md animate-[fadeIn_0.6s_ease-out]"
            >
              {slide.subtitle}
            </p>

            <div className="flex items-center gap-4">
              <a
                href={slide.ctaLink}
                className="inline-flex items-center justify-center bg-lime-400 hover:bg-lime-500 text-black font-bold px-7 py-3 rounded-xl transition-all shadow-lg"
              >
                {slide.ctaText}
              </a>
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-xl backdrop-blur-md transition-all">
                <FaPlay className="text-xs" /> Play Video
              </button>
            </div>
          </div>
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
        >
          ›
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goTo(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-lime-400' : 'w-2.5 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Floating Category Grid (Bottom overlapping card) */}
        <div className="max-w-7xl mx-auto relative z-40 -mb-40 mt-8">
          <div className="bg-white rounded-3xl shadow-xl p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center p-2 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors">
                <IoIosPhonePortrait className="text-purple-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Smartphones</h4>
              <p className="text-xs text-gray-400 mt-1">Up to 40% Off</p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center p-2 group cursor-pointer pt-4 sm:pt-2">
              <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors">
                <FaHeadphonesAlt className="text-purple-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Headphones</h4>
              <p className="text-xs text-gray-400 mt-1">Up to 30% Off</p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center justify-center p-2 group cursor-pointer pt-4 sm:pt-2">
              <div className="w-14 h-14 rounded-full bg-lime-50 flex items-center justify-center mb-3 group-hover:bg-lime-100 transition-colors">
                <IoMdWatch className="text-lime-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Smart Watches</h4>
              <p className="text-xs text-gray-400 mt-1">Up to 35% Off</p>
            </div>

            {/* 4 */}
            <div className="flex flex-col items-center justify-center p-2 group cursor-pointer pt-4 sm:pt-2">
              <div className="w-14 h-14 rounded-full bg-lime-50 flex items-center justify-center mb-3 group-hover:bg-lime-100 transition-colors">
                <FaSitemap className="text-lime-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Accessories</h4>
              <p className="text-xs text-gray-400 mt-1">Up to 20% Off</p>
            </div>

            {/* 5 */}
            <div className="flex flex-col items-center justify-center p-2 group cursor-pointer pt-4 sm:pt-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <MdLaptopChromebook className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Laptops</h4>
              <p className="text-xs text-gray-400 mt-1">Up to 25% Off</p>
            </div>

            {/* 6 */}
            <div className="flex flex-col items-center justify-center p-2 group cursor-pointer pt-4 sm:pt-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <FaCamera className="text-blue-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Cameras</h4>
              <p className="text-xs text-gray-400 mt-1">Up to 30% Off</p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* Space compensation for bottom category section overlap */}
      <div className="h-24" />
    </div>
  );
};

export default HeroSection;
