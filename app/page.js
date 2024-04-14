"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function PreviewPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
   
    if ((username === '1619f204' || username === '1a26687e') && password === '1234') {
      localStorage.setItem('cardId', username);
      toast.success('Login successful');
      router.push('/dashboard');
    } else {
      // Show a toast message for failed login
      toast.error('Invalid card ID or password');
    }
  };

  return (
    <div className='flex flex-row items-start justify-between'>
      <div className='ml-20 mt-20 flex flex-col  items-start justify-start w-[55%] '>
        <div className='flex flex-col gap-5 mt-10 '>
          <h1 className='text-3xl font-bold '>Transit Ease Pass</h1>
          <p className='text-md leading-6 tracking-wider'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed fugit sunt error facilis a, dicta
            nam. Alias, explicabo deleniti.
          </p>
        </div>

        <div className='flex flex-col gap-5 mt-16'>
          <label className='flex flex-col gap-2'>
            <p className='font-semibold'>CardUID</p>
            <input
              className='border-2  border-[#EFA6AB] rounded-lg h-10 p-1 w-64 focus:outline-none focus:border-blue-800'
              placeholder='Username here..'
              value={username}
              onChange={handleChangeUsername}
            />
          </label>
          <label className='flex flex-col gap-2'>
            <p className='font-semibold'>Password</p>
            <input
              type='password'
              className='border-2  border-[#EFA6AB] rounded-lg h-10 p-2 w-64 focus:outline-none focus:border-blue-800'
              placeholder='********'
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <button
            className='text-white font-semibold bg-[#40C0E7] p-1.5 rounded-[10px] w-40 mb-2'
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        
      </div>
      <div className='hidden lg:block'>
        <img src='/assets/landing.png' className='w-[100%] h-screen z-20 ' />
      </div>
    </div>
  );
}
