import { useState } from 'react'
import Navbar from '../components/Navbar'


function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()

    return (
        <main className='min-h-screen flex flex-col items-center justify-center'>
            <section className='flex flex-col gap-8 items-center justify-center p-8 rounded-md shadow-lg'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <div></div>
                        <div>
                            <input
                                type='email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                required
                                className='rounded-sm bg-transparent shadow-lg'
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                required
                                className='rounded-sm bg-transparent shadow-lg'
                            />
                        </div>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </section>
        </main>
    )
}

export default Signup