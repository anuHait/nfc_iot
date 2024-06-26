"use client"
import React from 'react';
import Link from 'next/link';

export default function PreviewPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex flex-row items-start justify-between'>
    <div className='m-20 flex flex-col gap-4 items-start justify-start '>
    <div className='flex flex-col gap-3 mt-10'>
    <h1 className='text-3xl font-bold '>Transit Ease Pass</h1>
    <p className='text-md leading-6 tracking-wider w-[80%]'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed fugit sunt error facilis a, dicta nam. Alias, explicabo deleniti.
    </p>
    </div>
     
      
    <div className='flex flex-col gap-5 mt-5'>
    
      <label className='flex flex-col gap-2'>
        <p className='font-semibold'>CardUID</p>
        <input className='border-2  border-[#EFA6AB] rounded-lg h-10 p-1 w-64 focus:outline-none focus:border-blue-800' placeholder='Username here..' />
      </label>
      <label className='flex flex-col gap-2'>
      <p className='font-semibold'>Password</p>
        <input className='border-2  border-[#EFA6AB] rounded-lg h-10 p-2 w-64 focus:outline-none focus:border-blue-800' placeholder='********' />
      </label>
      <button className='text-white font-semibold bg-[#40C0E7] p-1.5 rounded-[10px] w-40 mb-2'>Submit</button>
    </div>
   <Link href="/"><span className='text-md flex gap-2 '>Alredy have an account? 
   <p className='font-semibold text-[#e0666e]'>Signup</p> 
   </span></Link> 
   </div>
   <div className='hidden lg:block'>
   <img src='/assets/landing.png' className='w-full h-screen z-20 ' />
   </div>

      
    </div>
  );
}
