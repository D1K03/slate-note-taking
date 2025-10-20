import { useState } from 'react'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()

    return (
        <main>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </main>
    )
}

export default Signup