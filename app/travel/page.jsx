"use client";
import React,{useState} from 'react'

function Page() {
    const [currentStop, setCurrentStop] = useState("A");


  return (
    <div className='m-20 flex flex-col gap-5 items-center justify-start'>
      <h1 className='text-2xl font-semibold mb-10'>Your Current Travel Status</h1>
<ol class="items-center sm:flex">
<li class="relative mb-6 sm:mb-0">
    <div class="flex items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 bg-[#e95b65] rounded-full ring-0 ring-white shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3 sm:pe-8">
        <time class="block mb-2 text-lg font-semibold leading-nonetext-gray-500">Stop A</time>
        {
            currentStop==="A" &&(
                <p class="text-base font-normal text-gray-500 dark:text-gray-400 w-52">In transit from A to B</p>

            )
        }
    </div>
</li>
<li class="relative mb-6 sm:mb-0">
    <div class="flex items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 bg-[#e95b65] rounded-full ring-0 ring-white shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3 sm:pe-8">
    <time class="block mb-2 text-lg font-semibold leading-nonetext-gray-500">Stop B</time>
    <p class="text-base font-normal text-gray-500  w-52">In transit from B to C</p>
    </div>
</li>
<li class="relative mb-6 sm:mb-0">
    <div class="flex items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 bg-[#e95b65] rounded-full ring-0 ring-white shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3 sm:pe-8">
    <time class="block mb-2 text-lg font-semibold leading-nonetext-gray-500">Stop C</time>
    <p class="text-base font-normal text-gray-500  w-52">In transit from C to D</p>
    </div>
</li>
<li class="relative mb-6 sm:mb-0">
    <div class="flex items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 bg-[#e95b65] rounded-full ring-0 ring-white shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3 sm:pe-8">
    <time class="block mb-2 text-lg font-semibold leading-nonetext-gray-500">Stop D</time>
    <p class="text-base font-normal text-gray-500  w-52">Going back to terminus</p>
    </div>
</li>

</ol>


    </div>
  )
}

export default Page
