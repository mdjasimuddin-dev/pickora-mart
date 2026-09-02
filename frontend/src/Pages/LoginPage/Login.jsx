import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {
  FaFacebook,
  FaGithub,
  FaLock,
  FaEnvelope,
  FaUser,
  FaCheckCircle,
  FaTag,
  FaGift,
} from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import useAuth from './../../Hooks/useAuth';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();
  const isActiveUser = false;
  const { userCreate, userLogin, userProfileUpdate } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isActiveUser) {
      await userLogin(formData.email, formData.password)
        .then(() => {
          Swal.fire({
            title: 'Successfull',
            text: 'User login successfull.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });

          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await userCreate(formData.email, formData.password)
        .then(() => {
          Swal.fire({
            title: 'Successfull',
            text: 'User Create successfull.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });

          userProfileUpdate(formData.name);

          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });

      console.log('Signing up with:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 lg:p-8">
      {/* Background Decorative Blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/50 rounded-full mix-blend-multiply filter blur-3xl"></div>

      {/* Main Container */}
      <div className="relative max-w-5xl w-full bg-white border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: E-commerce Perks & Offers Showcase */}
        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div>
            <div className="flex items-center space-x-2 mb-8">
              <span className="bg-indigo-600 text-white p-2 rounded-xl text-xl font-bold">🛒</span>
              <span className="text-2xl font-extrabold tracking-tight">Pickora Mart</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              Unlock Exclusive Shopping Rewards & Offers!
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Sign in to your account to access members-only deals, track your orders seamlessly,
              and enjoy faster checkouts.
            </p>

            {/* Perks List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mt-0.5">
                  <FaGift className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Welcome Discount</h3>
                  <p className="text-xs text-slate-400">
                    Get up to 20% OFF on your very first order after signing up.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg mt-0.5">
                  <FaTag className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Daily Flash Deals</h3>
                  <p className="text-xs text-slate-400">
                    Early access to limited-time sales and popular trending categories.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-amber-500/20 text-amber-400 p-2 rounded-lg mt-0.5">
                  <FaCheckCircle className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Reward Points</h3>
                  <p className="text-xs text-slate-400">
                    Earn coins on every purchase and redeem them for future discounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Trusted by 10k+ Shoppers</span>
            <span className="text-indigo-400 font-medium">Secure Checkout</span>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-white">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight">
              {isLogin ? 'Welcome Back!' : 'Create an Account'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {isLogin
                ? 'Please enter your details to access your shopping cart.'
                : 'Fill in your information to grab your sign-up bonus.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                isLogin
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                !isLogin
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm pt-1">
                <label className="flex items-center text-slate-500 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mr-2"
                  />
                  Remember me
                </label>
                <a href="#forgot" className="text-indigo-600 font-medium hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-indigo-600/25 transition-all duration-200 mt-2 text-sm"
            >
              {isLogin ? 'Sign In to Account' : 'Create Free Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-medium">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="flex items-center justify-center py-3 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-slate-700 text-sm font-medium transition-all shadow-sm"
              onClick={() => console.log('Google login')}
            >
              <FcGoogle className="text-xl" />
            </button>

            <button
              type="button"
              className="flex items-center justify-center py-3 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-slate-700 text-sm font-medium transition-all shadow-sm"
              onClick={() => console.log('Facebook login')}
            >
              <FaFacebook className="text-xl text-blue-600" />
            </button>

            <button
              type="button"
              className="flex items-center justify-center py-3 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-slate-700 text-sm font-medium transition-all shadow-sm"
              onClick={() => console.log('Github login')}
            >
              <FaGithub className="text-xl text-slate-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
