import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-between py-0.5 px-12 sticky top-0 z-50 shadow-md w-full'>
            <h1>
                <Link to='/'>Slate</Link>
            </h1>
            <div className='flex gap-8'>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Navbar
