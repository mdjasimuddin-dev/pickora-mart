import { useState } from 'react';
import logo from './../../assets/pickora-mart.png';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(5);
  const { user } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Flash Sale', path: '/flash-sale' },
    { name: 'New Arrive', path: '/new-arrive' },
    { name: 'Best Seller', path: '/best-seller' },
    { name: 'Brand', path: '/brand' },
  ];

  return (
    <header className="w-full font-inter">
      {/* 1. Top Announcement Bar */}
      <div className="bg-brand-purple text-white text-xs py-2 px-4">
        <div className=" mx-auto flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="bg-brand-green text-gray-900 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Offer
            </span>
            Free shipping on orders over $50! Use code:{' '}
            <strong className="text-brand-green">FREESHIP</strong>
          </p>
          <div className="hidden sm:flex items-center gap-6 text-gray-300">
            <a href="#track" className="hover:text-white transition-colors">
              Track Order
            </a>
            <a href="#help" className="hover:text-white transition-colors">
              Help & Support
            </a>
            <select className="bg-transparent text-white border-none text-xs focus:ring-0 cursor-pointer">
              <option value="usd" className="text-gray-900">
                USD $
              </option>
              <option value="bdt" className="text-gray-900">
                BDT ৳
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Main Search & Action Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4 md:gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div>
                <img src={logo} alt="" className="w-36 md:w-52" />
              </div>
            </a>

            {/* Middle Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <div className="flex w-full rounded-full border-2 border-brand-purple/20 focus-within:border-brand-purple overflow-hidden transition-all">
                <select className="bg-gray-50 text-gray-600 text-xs px-4 border-r border-gray-200 outline-none cursor-pointer hover:bg-gray-100 transition-colors">
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home & Living</option>
                  <option value="beauty">Beauty & Care</option>
                </select>
                <input
                  type="text"
                  placeholder="Search for items, brands, or categories..."
                  className="w-full px-4 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="bg-brand-purple hover:bg-purple-900 text-brand-green px-6 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Header Actions */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Account Link */}
              <a
                href="#account"
                className="hidden sm:flex items-center gap-2.5 text-gray-700 hover:text-brand-purple transition-colors"
              >
                {user ? (
                  <>
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png'
                      }
                      className="w-10 h-10 rounded-full border-1"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </>
                )}

                {/* <div className="p-2 rounded-full bg-gray-50"></div> */}
                {user && (
                  <div className="text-left hidden lg:block">
                    <p className="text-[11px] text-gray-400 font-medium leading-none">
                      Hello,{' '}
                      {user?.displayName ? user.displayName.split(' ')[1] : 'Username not update'}
                    </p>
                    <Link to="admin/overview" className="text-xs font-bold text-gray-800 mt-1">
                      My Account
                    </Link>
                  </div>
                )}

                {!user && <NavLink to="/login">Login</NavLink>}
              </a>

              {/* Wishlist */}
              <a
                href="#wishlist"
                aria-label="Wishlist"
                className="relative p-2 rounded-full bg-gray-50 text-gray-700 hover:text-brand-purple hover:bg-purple-50 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-green text-gray-900 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {wishlistCount}
                  </span>
                )}
              </a>

              {/* Shopping Cart Button */}
              <a
                href="#cart"
                className="flex items-center gap-3 bg-purple-50 hover:bg-purple-100/80 p-2 sm:px-4 sm:py-2.5 rounded-full transition-all group"
              >
                <div className="relative">
                  <svg
                    className="w-6 h-6 text-brand-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-brand-purple text-brand-green font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-[10px] text-gray-500 font-medium leading-none">My Cart</p>
                  <p className="text-xs font-bold text-brand-purple mt-0.5">$145.00</p>
                </div>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Bottom Navigation Links (Desktop) */}
        <div className="hidden md:block border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
            {/* All Categories Dropdown Button */}
            <button className="flex items-center gap-2 bg-brand-purple text-white px-5 py-3 rounded-t-lg hover:bg-purple-900 transition-colors">
              <svg
                className="w-4 h-4 text-brand-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span>All Categories</span>
              <svg
                className="w-3.5 h-3.5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Navigation Category Links */}
            <nav className="flex items-center space-x-8 text-gray-700">
              {navItems.map((item, index) => (
                <ul key={index}>
                  <li>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                </ul>
              ))}
            </nav>

            {/* Special Promo Link */}
            <a
              href="#deal"
              className="text-brand-purple font-bold hover:text-brand-green transition-colors py-3"
            >
              Get 20% Off Code: SAVE20
            </a>
          </div>
        </div>
      </div>

      {/* 4. Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          {/* Mobile Search Input */}
          <div className="flex rounded-lg border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-2 text-sm outline-none"
            />
            <button
              type="button"
              aria-label="Search"
              className="bg-brand-purple text-brand-green px-4 flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 text-sm font-medium text-gray-700">
            <a href="#home" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
              Home
            </a>
            <a href="#shop" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
              Shop All
            </a>
            <a href="#categories" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
              Categories
            </a>
            <a
              href="#deals"
              className="block px-3 py-2 rounded-lg text-red-600 font-semibold hover:bg-red-50"
            >
              Flash Sale 🔥
            </a>
            <a href="#account" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
              My Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
