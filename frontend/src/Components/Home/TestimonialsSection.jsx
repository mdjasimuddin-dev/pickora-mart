import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'তানভীর আহমেদ',
      role: 'Regular Buyer',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      comment:
        'অসাধারণ সার্ভিস এবং প্রডাক্ট কোয়ালিটি খুব ভালো। অর্ডার করার ২৪ ঘণ্টার মধ্যে হাতে পেয়ে গেছি। ব্র্যান্ড গ্রিন ও পার্পল কম্বিনেশনটা পুরো সাইটে প্রিমিয়াম লুক দেয়!',
      rating: 5,
      date: '২ দিন আগে',
    },
    {
      name: 'সাদিয়া ইসলাম',
      role: 'Verified Customer',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
      comment:
        'প্যাকেজিং থেকে শুরু করে ডেলিভারি—সবকিছু একদম পারফেক্ট ছিল। আমি কসমেটিকস অর্ডার করেছিলাম, ১০০% অরিজিনাল পণ্য পেয়েছি। Highly Recommended!',
      rating: 5,
      date: 'সপ্তাহ খানেক আগে',
    },
    {
      name: 'রাশেদুল হাসান',
      role: 'Tech Enthusiast',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      comment:
        'ইলেকট্রনিক্স গ্যাজেটগুলোর দাম অন্যান্য শপের তুলনায় বেশ রিজনেবল। ইউজার ইন্টারফেস স্মুথ হওয়ায় খুব সহজেই শপিং করতে পেরেছি।',
      rating: 5,
      date: '৩ সপ্তাহ আগে',
    },
    {
      name: 'মেহজাবীন চৌধুরী',
      role: 'Fashion Blogger',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      comment:
        'প্রোডাক্টের কোয়ালিটি নিয়ে একটু চিন্তায় ছিলাম, কিন্তু ডেলিভারি পাওয়ার পর পুরো মুগ্ধ! কাস্টমার সাপোর্ট টিম খুবই হেল্পফুল।',
      rating: 5,
      date: '১ মাস আগে',
    },
    {
      name: 'আরিফুল ইসলাম',
      role: 'Verified Buyer',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      comment:
        'রিটার্ন পলিসি একদম ঝামেলাহীন। ভুল সাইজ অর্ডার করেছিলাম, ২ দিনের মধ্যে এক্সচেঞ্জ পেয়ে গেছি। পিকোরার সার্ভিস চমৎকার!',
      rating: 5,
      date: '১ মাস আগে',
    },
  ];

  // একবারে ৩টি কার্ড দেখানো সাপেক্ষে সর্বোচ্চ কতদূর স্লাইড করা যাবে
  const maxIndex = Math.max(0, reviews.length - 3);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden relative">
      {/* Dynamic Grid Styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header Section */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Slider Track (Scroll/Drag/Button Supported) */}
        <div className="overflow-x-auto no-scrollbar scroll-smooth py-4">
          <div
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {reviews.map((rev, index) => (
              <div
                key={index}
                className="group w-full md:w-[calc(33.333%-21.33px)] shrink-0 bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col justify-between relative overflow-hidden hover:-translate-y-2"
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

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center shadow-xs transition-all duration-300 ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400'
                : 'bg-white text-brand-purple hover:bg-brand-purple hover:text-white cursor-pointer'
            }`}
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center shadow-xs transition-all duration-300 ${
              currentIndex === maxIndex
                ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400'
                : 'bg-white text-brand-purple hover:bg-brand-purple hover:text-white cursor-pointer'
            }`}
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
