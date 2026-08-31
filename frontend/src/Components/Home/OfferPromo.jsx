import React, { useState, useEffect } from 'react';
import { FaCopy, FaCheck, FaArrowRight, FaClock, FaFire } from 'react-icons/fa';

const promoSlides = [
  {
    id: 1,
    badge: 'LIMITED TIME OFFER',
    title: 'Experience Next-Gen Audio',
    subtitle:
      'Immerse yourself in crystal clear sound with studio-grade noise-canceling headphones.',
    code: 'AUDIO2026',
    buttonText: 'Claim 20% Discount',
    discount: 'SAVE $70',
    // Ultra Glow Colors
    bgGradient: 'from-[#0F0720] via-[#1E0E3E] to-[#0D041A]',
    glowColor: 'bg-purple-600/30',
    borderColor: 'border-purple-500/30',
    btnGradient:
      'from-lime-400 to-emerald-400 text-[#0F0720] hover:from-lime-300 hover:to-emerald-300',
    accentText: 'text-lime-400',
    // Product PNG
    productImg:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
    initialTime: { hours: 04, minutes: 25, seconds: 10 },
  },
  {
    id: 2,
    badge: 'EXCLUSIVE TECH DEAL',
    title: 'Ultra-Smart AMOLED Watch',
    subtitle:
      'Stay connected and track your fitness performance in real time with sleek metallic aesthetics.',
    code: 'SMART50',
    buttonText: 'Order Yours Now',
    discount: 'FLAT 35% OFF',
    // Ultra Glow Colors
    bgGradient: 'from-[#031525] via-[#082B4C] to-[#020B14]',
    glowColor: 'bg-cyan-500/30',
    borderColor: 'border-cyan-500/30',
    btnGradient:
      'from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 font-extrabold',
    accentText: 'text-cyan-400',
    // Product PNG
    productImg:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    initialTime: { hours: 11, minutes: 40, seconds: 55 },
  },
  {
    id: 3,
    badge: 'WEEKEND SPECIAL',
    title: 'Pro Wireless Gaming Gear',
    subtitle:
      'Dominate every game with ultra-low latency optical response and customizable RGB design.',
    code: 'GAMEPRO',
    buttonText: 'Grab Gaming Pack',
    discount: 'BUY 1 GET 1',
    // Ultra Glow Colors
    bgGradient: 'from-[#170512] via-[#350A29] to-[#0D020A]',
    glowColor: 'bg-pink-600/30',
    borderColor: 'border-pink-500/30',
    btnGradient:
      'from-amber-400 to-pink-500 text-black hover:from-amber-300 hover:to-pink-400 font-extrabold',
    accentText: 'text-amber-400',
    // Product PNG
    productImg:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600',
    initialTime: { hours: 18, minutes: 12, seconds: 00 },
  },
];

export default function OfferPromo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide after 5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const slide = promoSlides[currentSlide];

  // Countdown logic
  const [timeLeft, setTimeLeft] = useState(slide.initialTime);

  useEffect(() => {
    setTimeLeft(promoSlides[currentSlide].initialTime);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8 bg-[#F9FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`bg-gradient-to-r ${slide.bgGradient} rounded-[2.5rem] p-6 sm:p-12 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden border ${slide.borderColor} transition-all duration-1000 ease-in-out`}
        >
          {/* Ambient Lighting & Mesh Grids */}
          <div
            className={`absolute top-0 right-1/4 w-96 h-96 ${slide.glowColor} rounded-full blur-[120px] pointer-events-none transition-all duration-1000`}
          />
          <div
            className={`absolute -bottom-20 -left-20 w-96 h-96 ${slide.glowColor} rounded-full blur-[120px] pointer-events-none transition-all duration-1000`}
          />

          {/* Grid Container */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[340px]">
            {/* Left Section (Details) */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Badge & Live Countdown */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-inner">
                  <FaFire className="text-amber-400 text-xs animate-pulse" />
                  {slide.badge}
                </span>

                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium">
                  <FaClock className="text-gray-400 text-xs" />
                  <span className="text-gray-300">Ends In:</span>
                  <div
                    className={`font-mono font-extrabold ${slide.accentText} flex items-center gap-1`}
                  >
                    <span>{formatNumber(timeLeft.hours)}h</span>:
                    <span>{formatNumber(timeLeft.minutes)}m</span>:
                    <span>{formatNumber(timeLeft.seconds)}s</span>
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-xl">
                {slide.title}
              </h2>

              <p className="text-xs sm:text-base text-gray-300 font-normal max-w-xl leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Action Buttons & Copy Coupon */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  className={`bg-gradient-to-r ${slide.btnGradient} font-black py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl active:scale-95 text-xs sm:text-sm flex items-center gap-2 group cursor-pointer`}
                >
                  {slide.buttonText}
                  <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>

                {/* Glassmorphic Promo Code Box */}
                <div
                  onClick={() => handleCopyCode(slide.code)}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 py-3.5 px-5 rounded-2xl cursor-pointer transition-all duration-300 active:scale-95 backdrop-blur-md shadow-lg group"
                  title="Click to copy promo code"
                >
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Code:
                  </span>
                  <span className="text-sm font-mono font-black tracking-widest text-white">
                    {slide.code}
                  </span>
                  {copied ? (
                    <FaCheck className="text-lime-400 text-sm ml-1" />
                  ) : (
                    <FaCopy className="text-gray-400 text-xs ml-1 group-hover:text-white transition-colors" />
                  )}
                </div>
              </div>
            </div>

            {/* Right Section (Floating Product Card) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              {/* Floating Glowing Offer Badge */}
              <div className="absolute -top-4 right-2 sm:right-6 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-slate-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(245,158,11,0.5)] z-20 animate-bounce">
                {slide.discount}
              </div>

              {/* Glassmorphism Product Showcase Card */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-center group overflow-hidden">
                {/* Background Radial Glow Inside Card */}
                <div
                  className={`absolute inset-0 ${slide.glowColor} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <img
                  src={slide.productImg}
                  alt={slide.title}
                  className="max-h-full max-w-full object-contain rounded-2xl drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 ease-out relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Luxury Progress Indicators / Dots */}
          <div className="flex justify-center items-center gap-3 mt-8 relative z-10">
            {promoSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentSlide === idx
                    ? `w-12 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]`
                    : 'w-2.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
