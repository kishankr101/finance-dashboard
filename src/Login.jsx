import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Login:', email, password)
    }

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-4">
            <div className="bg-darkCard p-8 rounded-lg border border-gray-700 w-full max-w-md">
                <h1 className="text-3xl font-bold text-primary mb-6">Finance Dashboard</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary" placeholder="your@email.com" />
                    </div>
                    <div className="mb-6"> 
                        <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="w-full bg-primary text-black font-bold py-2 rounded-lg hover:bg-opacity-90 transition"> Sign In </button>
                </form>
            </div>
        </div>
    )
}

export default Login