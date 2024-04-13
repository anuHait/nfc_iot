"use client"
import React from 'react';
import Link from 'next/link';

export default function Page() {
  
  return (
    <div>
      {/* Login details */}
      
      <div className='flex flex-col gap-3 transition-all duration-400 ease-in-out'>
      <h1 className='text-2xl font-semibold'>Login</h1>
        <label className='flex flex-col gap-2'>
          Username
          <input className='border rounded-[10px] h-10 p-2 w-64 focus:outline-none focus:border-blue-800' placeholder='Username here..' />
        </label>
        <label className='flex flex-col gap-2'>
          Password
          <input className='border rounded-[10px] h-10 p-2 w-64 focus:outline-none focus:border-blue-800' placeholder='********' />
        </label>
        <button>Login</button>
      </div>
    <Link href="/">  <span>Dont have an account? <p>SignUp</p> </span></Link>
    </div>
  );
}
