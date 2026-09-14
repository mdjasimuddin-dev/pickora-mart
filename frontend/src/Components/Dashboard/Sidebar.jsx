import React, { useState } from 'react';
import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Heart,
  User,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

export default function Sidebar({ role = 'user' }) {
  const [isOpen, setIsOpen] = useState(false);

  const adminLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingCart },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  ];

  const userLinks = [
    { name: 'Overview', path: '/user/dashboard', icon: LayoutDashboard },
    { name: 'My Orders', path: '/user/orders', icon: ShoppingCart },
    { name: 'Wishlist', path: '/user/wishlist', icon: Heart },
    { name: 'Profile Settings', path: '/user/profile', icon: User },
  ];

  const links = role === 'admin' ? adminLinks : userLinks;

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Top Header Bar */}
      <div className="md:hidden flex items-center justify-between bg-slate-900 text-white px-4 h-16 border-b border-slate-800 fixed top-0 left-0 right-0 z-50">
        <span className="text-xl font-bold tracking-wide">
          {role === 'admin' ? 'Admin Portal' : 'Pickora Mart'}
        </span>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div onClick={toggleSidebar} className="fixed inset-0 bg-black/50 z-40 md:hidden" />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:min-h-screen
      `}
      >
        <div>
          {/* Brand / Logo Area (Hidden on mobile because of top bar, visible on desktop) */}
          <div className="h-16 hidden md:flex items-center px-6 border-b border-slate-800">
            <span className="text-xl font-bold text-white tracking-wide">
              {role === 'admin' ? 'Admin Portal' : 'Pickora Mart'}
            </span>
          </div>

          {/* Spacer for mobile view so content isn't hidden under the fixed top bar */}
          <div className="h-16 md:hidden" />

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Close sidebar on mobile when a link is clicked
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer / Logout Area */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => console.log('Logging out...')}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
