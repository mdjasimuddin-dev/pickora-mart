import { motion } from 'framer-motion';

const brandPartners = [
  { name: 'Apple', logoText: ' Apple', subtitle: 'Authorized Reseller' },
  { name: 'Samsung', logoText: 'SAMSUNG', subtitle: 'Global Partner' },
  { name: 'Nike', logoText: 'NIKE', subtitle: 'Official Store' },
  { name: 'Sony', logoText: 'SONY', subtitle: 'Authorized Dealer' },
  { name: 'Xiaomi', logoText: 'XIAOMI', subtitle: 'Preferred Brand' },
  { name: 'Adidas', logoText: 'ADIDAS', subtitle: 'Verified Vendor' },
  { name: 'Philips', logoText: 'PHILIPS', subtitle: 'Trusted Partner' },
  { name: 'LG', logoText: 'LG', subtitle: 'Global Brand' },
];

export default function BrandPartners() {
  // Duplicating the list for a seamless loop
  const duplicatedBrands = [...brandPartners, ...brandPartners];

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden relative">
      {/* Background Ambient Lights */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-10 bg-brand-green" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-10 bg-brand-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 text-center">
        {/* Section Header */}
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-green/20 text-brand-purple inline-block mb-3">
          Authorized Partners
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-purple tracking-tight">
          Featured Global Brands
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          We collaborate directly with world-class manufacturers to bring you 100% authentic
          products.
        </p>
      </div>

      {/* Auto Infinite Slider Container */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Side Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Framer Motion Infinite Loop */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="group relative w-64 bg-gray-50/70 p-5 rounded-3xl border border-gray-100 hover:border-brand-green shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-1 overflow-hidden shrink-0"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-green transition-all duration-300" />

              <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-black tracking-tighter text-brand-purple group-hover:text-brand-green transition-colors">
                  {brand.logoText.charAt(0)}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-brand-purple group-hover:text-brand-green transition-colors tracking-wide">
                {brand.logoText}
              </h3>

              <p className="text-xs font-medium text-gray-500 mt-0.5">{brand.subtitle}</p>

              {/* Verified Badge Icon */}
              <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-4 h-4 rounded-full bg-brand-green/20 text-brand-purple flex items-center justify-center text-[9px] font-bold">
                  ✓
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
