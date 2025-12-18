import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <main className="min-h-screen bg-slate-300">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold text-slate-800 mb-6">Welcome to Slate</h1>
          <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
            The minimal note-taking app for focused minds. Capture your thoughts, organize your
            ideas, and keep everything in one place.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/signup"
              className="bg-slate-800 text-white px-8 py-4 rounded-md hover:bg-slate-700 transition-colors font-semibold text-base"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white text-slate-800 px-8 py-4 rounded-md hover:bg-slate-100 transition-colors font-semibold text-base border-2 border-slate-800"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Simple. Powerful. Yours.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Distraction-Free Writing</h3>
              <p className="text-slate-600 text-base">
                Focus on your thoughts without clutter. Clean interface designed for clarity.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Organize Effortlessly</h3>
              <p className="text-slate-600 text-base">
                Keep all your notes organized and easily accessible whenever you need them.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Secure & Private</h3>
              <p className="text-slate-600 text-base">
                Your notes are encrypted and private. Only you have access to your content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
