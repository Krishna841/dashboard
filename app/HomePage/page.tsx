import React from 'react'
import Sidebar from '../Components/sidebar/page'
import VendorDetails from '../Components/VendorDetails'

const HomePage = () => {
  return (
    <div className='flex h-full w-full'>
      <Sidebar />
     <VendorDetails/>
    </div>
  )
}

export default HomePage
