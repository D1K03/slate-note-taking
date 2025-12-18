import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <main className="min-h-screen bg-slate-300">
      <Navbar />
      <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">Welcome Back</h2>
          <p className="text-slate-600 text-base mb-8 text-center">Login to your Slate account</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-slate-700 font-semibold text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 border-2 border-slate-300 rounded-md focus:border-slate-600 focus:outline-none transition-colors text-base bg-slate-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-slate-700 font-semibold text-base">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="px-4 py-3 border-2 border-slate-300 rounded-md focus:border-slate-600 focus:outline-none transition-colors text-base bg-slate-50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-3 rounded-md hover:bg-slate-700 transition-colors font-semibold text-base mt-2"
            >
              Login
            </button>
          </form>

          <p className="text-slate-600 text-center mt-6 text-base">
            Don't have an account?{' '}
            <Link to="/signup" className="text-slate-800 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
