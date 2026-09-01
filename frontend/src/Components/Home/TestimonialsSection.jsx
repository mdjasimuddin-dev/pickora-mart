import React, { useRef } from 'react';

// ১. কাস্টমার রিভিউ ও টেস্টোমোনিয়াল কম্পোনেন্ট
export function TestimonialsSection() {
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: 'তানভীর আহমেদ',
      role: 'Regular Buyer',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      comment:
        'অসাধারণ সার্ভিস এবং প্রডাক্ট কোয়ালিটি খুব ভালো। অর্ডার করার ২৪ ঘণ্টার মধ্যে হাতে পেয়ে গেছি। ব্র্যান্ড গ্রিন ও পার্পল কম্বিনেশনটা পুরো সাইটে প্রিমিয়াম লুক দেয়!',
      rating: 5,
      date: '২ দিন আগে',
    },
    {
      name: 'সাদিয়া ইসলাম',
      role: 'Verified Customer',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
      comment:
        'প্যাকেজিং থেকে শুরু করে ডেলিভারি—সবকিছু একদম পারফেক্ট ছিল। আমি কসমেটিকস অর্ডার করেছিলাম, ১০০% অরিজিনাল পণ্য পেয়েছি। Highly Recommended!',
      rating: 5,
      date: 'সপ্তাহ খানেক আগে',
    },
    {
      name: 'রাশেদুল হাসান',
      role: 'Tech Enthusiast',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      comment:
        'ইলেকট্রনিক্স গ্যাজেটগুলোর দাম অন্যান্য শপের তুলনায় বেশ রিজনেবল। ইউজার ইন্টারফেস স্মুথ হওয়ায় খুব সহজেই শপিং করতে পেরেছি।',
      rating: 5,
      date: '৩ সপ্তাহ আগে',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-green/20 text-brand-purple inline-block mb-3">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-purple">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
          Real experiences from our valued shoppers who trust our quality and service.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col justify-between relative overflow-hidden hover:-translate-y-2"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-green/20 transition-all" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-green shadow-xs"
                  />
                  <div>
                    <h4 className="font-bold text-brand-purple text-base">{rev.name}</h4>
                    <p className="text-xs text-gray-500">{rev.role}</p>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ২. ব্র্যান্ড লোগো বা পার্টনার শোকেস কম্পোনেন্ট
export function BrandLogosSection() {
  const brands = [
    { name: 'Apple', logo: '🍎 Apple Authorized' },
    { name: 'Samsung', logo: '📱 Samsung' },
    { name: 'Nike', logo: '👟 Nike Official' },
    { name: 'Loreal', logo: "✨ L'Oréal Paris" },
    { name: 'Sony', logo: '🎧 Sony Global' },
    { name: 'Xiaomi', logo: '⚡ Xiaomi Store' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          Trusted By World-Class Brands & Partners
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-2xl bg-gray-50/60 border border-gray-100 hover:border-brand-green hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <span className="font-extrabold text-gray-600 group-hover:text-brand-purple transition-colors text-sm sm:text-base tracking-wide">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
