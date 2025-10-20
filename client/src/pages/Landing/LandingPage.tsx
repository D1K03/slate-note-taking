import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main>
      <h1>Welcome to the Note-Taking App!</h1>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </main>
  )
}

export default LandingPage