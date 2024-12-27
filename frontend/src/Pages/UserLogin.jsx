import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UserLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userdata, setUserdata] = useState({})
    const navigate = useNavigate() // To handle redirection

    const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        setUserdata(userData)
        
        // Log the data before redirecting
        console.log(userData)

        // Reset form fields
        setEmail('')    
        setPassword('')

        // Redirect to /login after the form is submitted
        navigate('/home')
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img
                    className="w-16 mb-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt=""
                />
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
                    <input 
                        type='email' 
                        className='bg-[#eeeeee] mb-7  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                    <input 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-7  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
                        type='password'
                        placeholder='password'
                    />

                    <button className='bg-[#111] mb-3 rounded px-4 w-full text-lg py-2 text-white font-semibold '>Login</button>
                    <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create a new Account</Link></p>
                </form>
            </div>
            <div>
                <Link to='/captain-login' className='bg-[#10b461] mb-5 rounded px-4 w-full text-lg py-2 text-white font-semibold  flex items-center justify-center'>Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
