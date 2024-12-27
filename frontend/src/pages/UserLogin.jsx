import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To track the loading state
  const { setUser } = useContext(UserDataContext); // Accessing setUser from context
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: email,
      password: password, // Ensure password is included in the request
    };

    try {
      // Send POST request to backend
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

      // If login is successful
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user); // Set user data in context
        localStorage.setItem('token', data.token); // Store token in localStorage
        navigate('/home'); // Redirect to home page after login
      }
    } catch (err) {
      console.error(err);
      alert('Invalid credentials. Please try again.'); // Show error message
    } finally {
      setLoading(false); // End loading
    }

    // Clear input fields after submitting
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s'
          alt='Logo'
        />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            placeholder='password'
          />

          <button disabled={loading} className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg'>
            {loading ? 'Logging in...' : 'Login'}
           </button>

        </form>

        <p className='text-center'>
          New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link>
        </p>
      </div>

      <div>
        <Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
