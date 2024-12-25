import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CaptainSignup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userdata, setUserdata] = useState({})
    const navigate = useNavigate() // To handle redirection

    const submitHandler = (e) => {
        e.preventDefault()

        // Create userdata object
        const userData = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            password: password,
            email: email
        }

        // Set userdata state
        setUserdata(userData)

        // Log the data to the console
        console.log(userData)

        // Reset form fields
        setEmail('')
        setFirstname('')
        setLastname('')
        setPassword('')

        // Redirect to /captain-login after the form is submitted
        navigate('/captain-login')
    }

    return (
        <div>
            <div className='py-5 px-5 flex flex-col justify-between h-screen'>
                <div>
                    <img
                        className="w-20 mb-2"
                        src="assets/images/download.png"
                        alt=""
                    />
                    <form onSubmit={submitHandler}>
                        <h3 className='text-lg w-full font-medium mb-2 '>What's our Captain's name</h3>
                        <div className='flex gap-4 mb-7'>
                            <input 
                                required    
                                className='bg-[#eeeeee]  w-1/2 border rounded px-4  text-lg py-2 placeholder:text-base'
                                type='text'
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder='first name'
                            />
                            <input 
                                required    
                                className='bg-[#eeeeee]  w-1/2 border rounded px-4  text-lg py-2 placeholder:text-base'
                                type='text'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder='last name'
                            />
                        </div>

                        <h3 className='text-lg font-medium mb-2 '>What's our Captain's email</h3>
                        <input 
                            type='email' 
                            className='bg-[#eeeeee] mb-6  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email@example.com'
                        />

                        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                        <input 
                            required    
                            className='bg-[#eeeeee] mb-6 border rounded px-4 w-full text-lg py-2 placeholder:text-base'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='password'
                        />

                        <button className='bg-[#111] mb-3 rounded px-4 w-full text-lg py-2 text-white font-semibold '>Sign Up</button>
                        <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
                    </form>
                </div>
                <div>
                    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the  <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignup
