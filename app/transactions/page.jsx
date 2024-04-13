import React from 'react'
import Sidebar from '@/components/Sidebar'
function Page() {
  return (
    <div className='flex flex-row gap-6'>
      <Sidebar />
      <div className="p-5 flex flex-col gap-6 items-start justify-start w-full mt-16">
      <h1 className="text-3xl font-bold">Your card transactions</h1>

      </div>
    </div>
  )
}

export default Page
