import logoDark from './../../assets/pickora-mart-dark.png';

const Footer = () => {
  return (
    <footer className="bg-[#1A0B2E] text-gray-300 font-inter pt-16 pb-8 border-t-4 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Newsletter Subscription Section */}
        <div className="bg-brand-purple rounded-2xl p-8 mb-16 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-800">
          <div className="z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white tracking-tight">Join Our Newsletter</h3>
            <p className="text-purple-200 text-sm mt-1">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
          </div>

          <div className="w-full md:w-auto z-10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email address..."
                className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-purple-200 border border-purple-400/30 focus:outline-none focus:border-brand-green text-sm flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-brand-green hover:bg-opacity-90 text-gray-900 font-bold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap shadow-lg shadow-brand-green/20"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-green/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* 2. Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand & Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="">
                <img src={logoDark} alt="" width={300} />
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed pr-6">
              Your ultimate destination for quality products, unbelievable prices, and fast delivery
              right to your doorstep.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 pt-2 text-sm text-gray-300">
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +880 1234 567 890
              </p>
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@shophub.com
              </p>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 border-l-2 border-brand-green pl-3">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#electronics" className="hover:text-brand-green transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#fashion" className="hover:text-brand-green transition-colors">
                  Fashion & Apparel
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-brand-green transition-colors">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="#beauty" className="hover:text-brand-green transition-colors">
                  Beauty & Personal Care
                </a>
              </li>
              <li>
                <a href="#deals" className="hover:text-brand-green transition-colors">
                  Flash Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 border-l-2 border-brand-green pl-3">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#track" className="hover:text-brand-green transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-brand-green transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-brand-green transition-colors">
                  Returns & Refund
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-green transition-colors">
                  FAQs & Support
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-brand-green transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 border-l-2 border-brand-green pl-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-brand-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-brand-green transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-brand-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#affiliate" className="hover:text-brand-green transition-colors">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-green transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Pickora Mart. All rights reserved.</p>

          {/* Payment Methods Badges */}
          <div className="flex items-center gap-3">
            <span className="text-gray-500 font-medium mr-1">We Accept:</span>
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-semibold">VISA</span>
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-semibold">
              MasterCard
            </span>
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-semibold">bKash</span>
            <span className="bg-white/10 px-2.5 py-1 rounded text-white font-semibold">Nagad</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-purple hover:text-brand-green flex items-center justify-center transition-all"
            >
              FB
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-purple hover:text-brand-green flex items-center justify-center transition-all"
            >
              IG
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-purple hover:text-brand-green flex items-center justify-center transition-all"
            >
              TW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
