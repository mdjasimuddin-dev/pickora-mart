import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

export default function DailyFlashSale() {
  // কাউন্টডাউন টাইমারের জন্য স্টেট (Hours, Mins, Secs, Days)
  const [timeLeft, setTimeLeft] = useState({
    days: 22,
    hours: 4,
    minutes: 18,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  // সোল্ড কাউন্টের জন্য হিসাব
  const sold = 120;
  const total = 300;
  const progressPercentage = (sold / total) * 100;

  return (
    <section className="py-8 bg-[#F9FAFC] max-w-lg mx-auto px-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">Daily Flash Sale</h2>
          <div className="h-1 w-8 bg-purple-600 rounded-full mt-1 flex gap-1">
            <span className="h-full w-3 bg-lime-500 rounded-full inline-block"></span>
          </div>
        </div>

        <a
          href="#all-deals"
          className="text-purple-600 hover:text-purple-800 font-semibold text-xs sm:text-sm flex items-center gap-1 transition-colors"
        >
          View All Deals <span className="text-sm">→</span>
        </a>
      </div>

      {/* Main Flash Sale Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Purple Banner with Countdown */}
        <div className="bg-[#2D0C5E] text-white p-5 text-center">
          <p className="text-xs text-purple-200 mb-3 font-medium">Hurry Up! Offer ends in:</p>

          <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-xs mx-auto">
            {/* Hours */}
            <div className="bg-[#3B1378] py-2.5 px-1 rounded-xl">
              <span className="block text-lg sm:text-xl font-bold">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] text-purple-300 font-medium">Hours</span>
            </div>

            {/* Minutes */}
            <div className="bg-[#3B1378] py-2.5 px-1 rounded-xl">
              <span className="block text-lg sm:text-xl font-bold">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] text-purple-300 font-medium">Mins</span>
            </div>

            {/* Seconds */}
            <div className="bg-[#3B1378] py-2.5 px-1 rounded-xl">
              <span className="block text-lg sm:text-xl font-bold">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] text-purple-300 font-medium">Secs</span>
            </div>

            {/* Days */}
            <div className="bg-[#3B1378] py-2.5 px-1 rounded-xl">
              <span className="block text-lg sm:text-xl font-bold">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[10px] text-purple-300 font-medium">Days</span>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="p-5 flex flex-col sm:flex-row items-center gap-5">
          {/* Image Box */}
          <div className="w-full sm:w-1/2 bg-gray-50 rounded-2xl p-4 flex items-center justify-center border border-gray-100/80">
            <img
              src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=300"
              alt="Apple AirPods Pro"
              className="w-36 h-36 object-contain mix-blend-multiply"
            />
          </div>

          {/* Product Info */}
          <div className="w-full sm:w-1/2 flex flex-col">
            <h3 className="text-base font-bold text-[#1E1B4B]">Apple AirPods Pro (2nd Gen)</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1.5">
              <div className="flex text-amber-400 text-xs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-amber-200" />
              </div>
              <span className="text-xs text-gray-400 font-medium ml-1">(120)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-2xl font-black text-[#1E1B4B]">$189.00</span>
              <span className="text-xs text-gray-400 line-through font-semibold">$249.00</span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-[11px] font-semibold text-gray-500 mb-1">
                <span>
                  Sold: {sold}/{total}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-lime-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-5 w-full bg-[#7C3AED] hover:bg-[#6D28D9] active:scale-98 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-purple-200 text-sm flex items-center justify-center gap-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
