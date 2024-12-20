import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserSignup() {
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    const [firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState('')
    const [userdata,setuserdata] = useState({})
    
    const submitHandler = (e) =>{
        e.preventDefault()
        
        setuserdata({
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            password:password,
            email:email
        })
        console.log(userdata);
        
        setEmail('')
        setfirstname('')
        setlastname('')
        setpassword('')
    }

  return (
    <div>
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

    <h3 className='text-lg font-medium mb-2 '>What's your name</h3>
    <div className='flex gap-4 mb-7'>
    <input 
    required    
    className='bg-[#eeeeee]  w-1/2 border rounded px-4  text-lg py-2 placeholder:text-base'
    type='text'
    value={firstname}
    onChange={(e)=>{
        setfirstname(e.target.value)
    }}
    placeholder='first name'/>
    <input 
    required    
    className='bg-[#eeeeee]  w-1/2 border rounded px-4  text-lg py-2 placeholder:text-base'
    type='text'
    value={lastname}
    onChange={(e)=>{
        setlastname(e.target.value)
    }}
    placeholder='last name'/>
    </div>

    <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
    <input 
    type='email' 
    className='bg-[#eeeeee] mb-6  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
    required 
    value={email}
    onChange={(e)=>{
        setEmail(e.target.value)
    }}
    placeholder='email@example.com'/>

    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

    <input 
    required    
    className='bg-[#eeeeee] mb-6 border rounded px-4 w-full text-lg py-2 placeholder:text-base'
    type='password'
    value={password}
    onChange={(e)=>{
        setpassword(e.target.value)
    }}
    placeholder='password'/>

    <button className='bg-[#111] mb-3 rounded px-4 w-full text-lg py-2 text-white font-semibold '>Login</button>
    <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
    </form>
    </div>
    <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the  <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
</div>
</div>
  )
}

export default UserSignup
