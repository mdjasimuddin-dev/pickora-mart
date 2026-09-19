import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaLock, FaEnvelope } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router';
import useAuth from './../../Hooks/useAuth';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { userLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userLogin(formData.email, formData.password);

    const reqBody = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', reqBody, {
        withCredentials: true,
      });

      console.log('login Data', res.data.data);
      localStorage.setItem('role', res.data.data.user.role);

      Swal.fire({
        title: 'Successful',
        text: 'User login successful.',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-slate-100 flex items-center justify-center p-4 lg:p-8">
      <div className="relative max-w-md w-full bg-white border border-slate-200/80 rounded-3xl shadow-2xl p-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight">
            Welcome Back!
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Please enter your details to access your shopping cart.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            Sign In to Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
            Sign Up
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
            className="flex items-center justify-center py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl"
          >
            <FcGoogle className="text-xl" />
          </button>
          <button
            type="button"
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
