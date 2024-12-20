import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {

    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    const [userdata,setuserdata] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault();
        setuserdata({
            email:email,
            password:password
        })
        console.log(userdata); 
        setEmail('')
        setpassword('')
    } 

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}>
        <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
        <input 
        type='email' 
        className='bg-[#eeeeee] mb-7  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
        required 
        value={email}
        onChange={(e)=>{
        setEmail(e.target.value)
        }}
        placeholder='email@example.com'/>

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        required 
        value={password}
        onChange={(e)=>{
        setpassword(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
        type='password'
        placeholder='password'/>

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
