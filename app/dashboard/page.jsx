import React from 'react'
import Sidebar from '@/components/Sidebar'
import Services from '@/components/Services'
function Page() {
  return (
    <div className='flex flex-row gap-6'>
      <Sidebar />
      <Services />
    </div>
  )
}

export default Page
