import { useState } from 'react';
import Navbar from '../components/Navbar';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <section className="flex flex-col gap-8 items-center justify-center p-8 rounded-md shadow-lg w-fit mt-auto mb-auto">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="rounded-sm bg-transparent outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="rounded-sm bg-transparent outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="rounded-sm bg-transparent outline-none"
              />
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </main>
  );
}

export default Signup;
