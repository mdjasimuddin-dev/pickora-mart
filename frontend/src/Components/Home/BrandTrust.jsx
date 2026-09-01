import React from 'react';

export default function BrandTrust() {
  const features = [
    { title: 'Free Shipping', desc: 'On orders over ৳ ১,০০০', icon: '🚚' },
    { title: 'Secure Payment', desc: '100% secure checkout', icon: '🔒' },
    { title: 'Easy Returns', desc: '7 days hassle-free return', icon: '🔄' },
    { title: '24/7 Support', desc: 'Dedicated customer care', icon: '📞' },
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-xs border border-gray-100"
            >
              <span className="text-3xl p-3 rounded-2xl bg-brand-green/20">{feat.icon}</span>
              <div>
                <h4 className="font-bold text-brand-purple text-base">{feat.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
