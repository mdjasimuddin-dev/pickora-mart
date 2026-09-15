import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaLock, FaEnvelope, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router';
import axios from 'axios';

import useAuth from './../../Hooks/useAuth';

import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();
  const { userCreate, userProfileUpdate } = useAuth();

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. user create
      await userCreate(formData.email, formData.password);

      // 02. user update
      await userProfileUpdate(formData.name);

      const reqData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      // 03. user data store into db
      await axios.post('http://localhost:5000/api/auth/signup', reqData, { withCredentials: true });

      // after login successfully then show successfully popup alert
      Swal.fire({
        title: 'Successful',
        text: 'User Create successful.',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // google authentication
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      console.log('User Login Info :', user);
    });
  };

  // facebook login
  const facebookProvider = new FacebookAuthProvider();

  const handleFacebookProvider = () => {
    signInWithPopup(auth, facebookProvider).then((res) => {
      const user = res.user;
      console.log('User Login Info :', user);
    });
  };

  return (
    <div className=" bg-slate-100 flex items-center justify-center p-4 lg:p-8">
      <div className="relative max-w-md w-full bg-white border border-slate-200/80 rounded-3xl shadow-2xl p-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight">
            Create an Account
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Fill in your information to grab your sign-up bonus.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-indigo-600/25 transition-all duration-200 mt-2 text-sm"
          >
            Create Free Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Sign In
          </Link>
        </p>

        {/* Social Logins */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-slate-400 font-medium">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => handleGoogleLogin()}
            className="flex items-center justify-center py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl"
          >
            <FcGoogle className="text-xl" />
          </button>
          <button
            type="button"
            onClick={() => {
              handleFacebookProvider();
            }}
            className="flex items-center justify-center py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl"
          >
            <FaFacebook className="text-xl text-blue-600" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl"
          >
            <FaGithub className="text-xl text-slate-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
