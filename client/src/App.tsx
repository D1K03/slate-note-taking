import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import LandingPage from './pages/Landing/LandingPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App