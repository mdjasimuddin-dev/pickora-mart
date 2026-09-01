import React from 'react';

export default function PromoBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-brand-purple text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-4 max-w-xl text-center md:text-left z-10">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-green text-brand-purple inline-block">
            Mega Season Sale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Get Up to 50% Off On Your First Order
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Don't miss out on massive discounts across fashion, electronics, and home essentials.
            Shop now and save big!
          </p>
          <button className="px-8 py-3.5 rounded-xl text-sm font-bold bg-brand-green text-brand-purple hover:bg-white transition-colors shadow-lg">
            Claim Your Discount
          </button>
        </div>

        {/* Decorative graphic or background shape */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 md:opacity-40 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600')`,
          }}
        />
      </div>
    </section>
  );
}
