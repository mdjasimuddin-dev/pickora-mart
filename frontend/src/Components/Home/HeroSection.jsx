import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Upgrade Your Tech Lifestyle',
    subtitle: 'Exclusive Premium Smartwatches & Modern Audio Gadgets.',
    badge: 'Special Offer • Up to 50% Off',
    ctaText: 'Shop Tech Now',
    ctaLink: '#tech',
    bgImage: 'https://i.ibb.co.com/84ccdt84/ef6cf081-6b8a-4d04-9275-1014e49cc678.webp',
  },
  {
    id: 2,
    title: 'Trending Fashion Collections',
    subtitle: 'Discover the latest urban wear & style trends for this season.',
    badge: 'New Arrival 2026',
    ctaText: 'Explore Collection',
    ctaLink: '#fashion',
    bgImage: 'https://i.ibb.co.com/hRnQVRsb/6bcf24cd-d3f2-4dd9-8cec-948d4be123a1.webp',
  },
  {
    id: 3,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage: 'https://i.ibb.co.com/LdWcTCGJ/957f62ad-a1ad-40e3-a2f6-1aa37ac5033f.webp',
  },
  {
    id: 4,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/f0fdb016-209c-4ecf-943f-5ed63815ae4b_BD-1976-688.jpg_2200x2200q80.jpg',
  },
  {
    id: 5,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/92f08866-ea0b-4ac0-8fd2-445134ca467a_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 6,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/b3493235-f9a8-45ae-85cd-1f81aa574357_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 7,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/b3493235-f9a8-45ae-85cd-1f81aa574357_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 8,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/8520bdb8-71f4-4377-8856-9bfd0024fe40_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 9,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/22ef2c64-2907-4c6e-9d4d-0ab37d54250f_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
  {
    id: 10,
    title: 'Premium Sound Experience',
    subtitle: 'Wireless Noise-Canceling Headphones with High-Fidelity Audio.',
    badge: 'Flash Sale 🔥',
    ctaText: 'Grab Yours Today',
    ctaLink: '#audio',
    bgImage:
      'https://img.lazcdn.com/us/domino/234795cb-0fb8-4d0e-a05a-34f3cc98ee92_BD-1976-688.jpg_2200x2200q80.jpg_.avif',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider (Every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden bg-brand-purple font-inter">
      {/* Slides List */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 z-10 pointer-events-auto'
              : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background High-Quality Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[7000ms]"
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          >
            {/* Dark Overlay gradient seamlessly blending right side into purple */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-purple/80 to-brand-purple/90 sm:to-brand-purple/60"></div> */}
          </div>

          {/* Slide Text & CTA Content */}
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center relative z-20">
            <div className="max-w-xl space-y-5 text-left">
              {/* Offer Badge */}
              {/* <span className="inline-block bg-brand-green text-gray-950 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                {slide.badge}
              </span> */}

              {/* Title */}
              {/* <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {slide.title}
              </h1> */}

              {/* Subtitle */}
              {/* <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{slide.subtitle}</p> */}

              {/* CTA Button */}
              {/* <div className="pt-2">
                <a
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-opacity-90 text-gray-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
                >
                  <span>{slide.ctaText}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-brand-green text-white hover:text-gray-950 border border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-brand-green text-white hover:text-gray-950 border border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots / Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-8 h-2.5 bg-brand-green'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
