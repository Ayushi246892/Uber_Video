import React from 'react'

function UserLogin() {
  return (
    <div className='p-7'>
        <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form>
        <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
        <input 
        type='email' 
        className='bg-[#eeeeee] mb-7  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
        required 
        placeholder='email@example.com'/>

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        required 
        className='bg-[#eeeeee] mb-7  border rounded px-4 w-full text-lg py-2 placeholder:text-base'
        type='password'
        placeholder='password'/>

        <button className='bg-[#111] mb-7 rounded px-4 w-full text-lg py-2 text-white font-semibold '>Login</button>
        </form>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default UserLogin
