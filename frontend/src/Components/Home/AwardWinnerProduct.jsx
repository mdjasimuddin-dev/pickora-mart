import {
  FaTrophy,
  FaStar,
  FaShoppingBag,
  FaVolumeUp,
  FaBatteryFull,
  FaBluetoothB,
  FaFeatherAlt,
} from 'react-icons/fa';

// Best Selling Product Data

export default function AwardWinnerProduct() {
  return (
    <section className="py-12 bg-[#FBFBFF] text-[#1E1B4B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-2">
            <FaTrophy /> Best-Selling Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
            Award-Winning Best-Selling Product
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            Loved by thousands of customers and recognized for excellence.
          </p>
        </div>

        {/* Featured Award Winner Hero Banner */}
        <div className="bg-gradient-to-r from-[#F5F3FF] via-[#FAF5FF] to-[#F5F3FF] border border-purple-100/60 rounded-[2.5rem] p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Product Info */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="bg-amber-100 text-amber-700 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <FaTrophy className="text-xs" /> AWARD WINNER
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#1E1B4B]">
                Premium Wireless Headphones
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
                Exceptional sound quality, premium comfort, and award-winning design.
              </p>

              {/* Feature Icons Grid */}
              <div className="grid grid-cols-4 gap-4 py-2 text-center w-full max-w-sm">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-purple-100/60 text-purple-700 flex items-center justify-center text-sm mb-1">
                    <FaVolumeUp />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">Hi-Fi Sound</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-purple-100/60 text-purple-700 flex items-center justify-center text-sm mb-1">
                    <FaBatteryFull />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">40H Battery</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-purple-100/60 text-purple-700 flex items-center justify-center text-sm mb-1">
                    <FaBluetoothB />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">Bluetooth 5.3</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-purple-100/60 text-purple-700 flex items-center justify-center text-sm mb-1">
                    <FaFeatherAlt />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">Ultra Light</span>
                </div>
              </div>

              {/* Price & Buy Button */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B]">
                    $129.99
                  </span>
                  <span className="text-sm text-gray-400 line-through font-medium">$199.99</span>
                </div>

                <button className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold py-3 px-6 rounded-2xl transition-all shadow-md active:scale-95 flex items-center gap-2 text-sm">
                  <FaShoppingBag /> Shop Now
                </button>
              </div>
            </div>

            {/* Middle Column: Product Image Showcase */}
            <div className="lg:col-span-4 flex justify-center relative bg-cover bg-right bg-[url('https://i.ibb.co.com/rGK5hLsG/Chat-GPT-Image-Aug-31-2026-10-27-54-PM.png')]">
              <div className="relative w-64 sm:w-80 h-64 sm:h-80 flex items-center justify-center">
                {/* Decorative Laurel Leaves Background Illusion */}
                <div className="absolute inset-0 bg-purple-200/20 rounded-full blur-2xl pointer-events-none" />
                <img
                  src="https://i.ibb.co.com/DDkjdPGL/Chat-GPT-Image-Aug-31-2026-10-38-14-PM.png"
                  alt="Premium Headphones"
                  className=" w-40 object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Golden Trophy Badge Card */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-purple-100 shadow-sm text-center max-w-xs w-full flex flex-col items-center justify-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-3xl shadow-inner">
                  <FaTrophy />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
                    2026
                  </span>
                  <h4 className="text-base font-extrabold text-[#1E1B4B] mt-0.5">
                    Product of the Year
                  </h4>
                  <p className="text-[11px] text-gray-400 font-medium">Tech Excellence Awards</p>
                </div>

                <div className="flex text-amber-400 text-xs gap-0.5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <blockquote className="text-[11px] text-gray-500 italic leading-snug pt-1">
                  “The best combination of performance, design, and value in its class.”
                </blockquote>
                <span className="text-[10px] font-bold text-gray-400">— Tech Review Magazine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
