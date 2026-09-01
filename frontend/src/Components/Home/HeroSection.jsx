import React, { useState, useEffect, useRef, useCallback } from 'react';

const slides = [
  {
    id: 1,
    title: 'Upgrade your tech lifestyle',
    subtitle: 'Exclusive premium smartwatches & modern audio gadgets.',
    badge: 'Special offer — up to 50% off',
    ctaText: 'Shop tech now',
    ctaLink: '#tech',
    bgImage: 'https://i.ibb.co.com/DfNWwrSB/Gemini-Generated-Image-af3oyaaf3oyaaf3o.jpg',
  },
  {
    id: 2,
    title: 'Trending fashion collections',
    subtitle: 'Discover the latest urban wear & style trends for this season.',
    badge: 'New arrival 2026',
    ctaText: 'Explore collection',
    ctaLink: '#fashion',
    bgImage: 'https://i.ibb.co.com/q3nJW7D3/Gemini-Generated-Image-7y9ve77y9ve77y9v.jpg',
  },
  {
    id: 3,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage: 'https://i.ibb.co.com/LdWcTCGJ/957f62ad-a1ad-40e3-a2f6-1aa37ac5033f.webp',
  },
  {
    id: 4,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/f0fdb016-209c-4ecf-943f-5ed63815ae4b_BD-1976-688.jpg_2200x2200q80.jpg',
  },
  {
    id: 5,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/92f08866-ea0b-4ac0-8fd2-445134ca467a_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 6,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/b3493235-f9a8-45ae-85cd-1f81aa574357_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 7,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/b3493235-f9a8-45ae-85cd-1f81aa574357_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 8,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/8520bdb8-71f4-4377-8856-9bfd0024fe40_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 9,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/22ef2c64-2907-4c6e-9d4d-0ab37d54250f_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 10,
    title: 'Premium sound experience',
    subtitle: 'Wireless noise-canceling headphones with high-fidelity audio.',
    badge: 'Flash sale',
    ctaText: 'Grab yours today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/234795cb-0fb8-4d0e-a05a-34f3cc98ee92_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
];

const SLIDE_DURATION = 5000;

// --- design tokens -----------------------------------------------------
// bg ink   #0A0F14   deep, near-black navy — lets product photography read as premium
// panel    #10161D   slightly lifted surface for controls
// text     #F3F6F8   warm-white
// muted    #93A1AC   secondary copy
// accent   #2DD4BF   single signature teal, used sparingly (CTA, active states)
// display  'Space Grotesk' — geometric, confident, for headlines
// body     'Inter'   — for everything else
// -------------------------------------------------------------------------

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

  // Autoplay
  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [paused, reducedMotion, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextSlide, prevSlide]);

  // Touch / swipe
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
    <section
      className="relative w-full mx-auto h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden bg-[#0A0F14]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured offers"
    >
      {/* Slides */}
      {slides.map((s, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${s.bgImage}')`,
                transform: isActive && !reducedMotion ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 6500ms ease-out',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F14] via-[#0A0F14]/85 to-[#0A0F14]/40 sm:to-[#0A0F14]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14]/70 via-transparent to-transparent" />
            </div>
          </div>
        );
      })}

      {/* Content */}
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex items-center relative z-20">
        <div className="max-w-xl">
          <div
            key={`badge-${slide.id}`}
            className="inline-flex items-center gap-2 text-brand-green text-sm font-medium mb-5 animate-[fadeIn_0.6s_ease-out]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            {slide.badge}
          </div>

          <h1
            key={`title-${slide.id}`}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#F3F6F8] leading-[1.05] tracking-tight mb-4 animate-[fadeIn_0.6s_ease-out]"
            style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui" }}
          >
            {slide.title}
          </h1>

          <p
            key={`subtitle-${slide.id}`}
            className="text-[#93A1AC] text-base sm:text-lg leading-relaxed mb-8 max-w-md animate-[fadeIn_0.6s_ease-out]"
          >
            {slide.subtitle}
          </p>

          <a
            href={slide.ctaLink}
            className="inline-flex items-center gap-2.5 bg-brand-green hover:bg-brand-green text-[#04201C] font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F14]"
          >
            {slide.ctaText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-[#F3F6F8] border border-white/10 backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-[#F3F6F8] border border-white/10 backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress indicators + counter */}
      <div className="absolute bottom-7 left-6 right-6 sm:left-8 sm:right-8 lg:left-12 lg:right-12 z-30 flex items-center gap-4">
        <div className="flex-1 flex gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1} of ${total}`}
              aria-current={idx === currentSlide}
              className="relative h-[3px] flex-1 rounded-full bg-white/15 overflow-hidden max-w-[56px]"
            >
              {idx === currentSlide && (
                <span
                  className="absolute inset-y-0 left-0 bg-brand-green rounded-full"
                  style={{
                    animation:
                      !paused && !reducedMotion
                        ? `fillBar ${SLIDE_DURATION}ms linear forwards`
                        : 'none',
                    width: paused || reducedMotion ? '100%' : undefined,
                  }}
                />
              )}
              {idx < currentSlide && (
                <span className="absolute inset-0 bg-[#2DD4BF]/60 rounded-full" />
              )}
            </button>
          ))}
        </div>
        <span className="text-[#93A1AC] text-xs font-medium tabular-nums shrink-0">
          {String(currentSlide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div className="sr-only" aria-live="polite">
        {`Slide ${currentSlide + 1} of ${total}: ${slide.title}`}
      </div>

      <style>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
