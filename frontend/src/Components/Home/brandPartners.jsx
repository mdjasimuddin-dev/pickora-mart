import React from 'react';

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

export default function BrandLogosSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
      {/* Subtle background ambient lights */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-10 bg-brand-green" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-10 bg-brand-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        {/* Brand Grid with Premium Card UX */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brandPartners.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-gray-50/60 p-6 rounded-3xl border border-gray-100 hover:border-brand-green shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-green transition-all duration-300" />

              <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-black tracking-tighter text-brand-purple group-hover:text-brand-green transition-colors">
                  {brand.logoText.charAt(0)}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-brand-purple group-hover:text-brand-green transition-colors tracking-wide">
                {brand.logoText}
              </h3>

              <p className="text-xs font-medium text-gray-500 mt-1">{brand.subtitle}</p>

              {/* Verified Badge Icon on Hover */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-purple flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
