import React from 'react'

import TopBar from '../Components/topBar'
import Details from '../Components/details'
import back from '../assets/clarity_arrow-line.svg'
import info from '../assets/Vector (1).svg'
import time from '../assets/Vector (2).svg'
import msg from '../assets/Vector (3).svg'
import download from '../assets/Vector (4).svg'
import forward from '../assets/Vector (5).svg'
import book from '../assets/Group.svg'
import saved from '../assets/material-symbols_sync-saved-locally-outline-rounded.svg'
import arrow from '../assets/down arrow heavy.svg'

const VendorDetails = () => {
  return (
    <div className='flex justify-evenly items-center w-full h-full'>
       <div className='flex flex-col w-full'>
      <TopBar heading='Manage Vendor'/>
      <div className='flex w-full justify-between items-center pt-2'>
        <div className='flex justify-evenly items-center w-[60%]'>
        <img src={back.src} alt='backArrow'/>
        <div className='font-bold text-base'>OlaMoney Technologies India Pvt Ltd</div>
        <div className=' border-[#5E4CFE] border-[1px] rounded-3xl px-4 py-2 bg-[#F5F4FE] text-[#5E4CFE] text-[10px] font-bold'> Awaiting Business Approval</div>
       <div className='flex justify-evenly items-center w-[300px]'>
        <img src={info.src} alt='info' className='w-[24px] h-[24px]'/>
        <img src={book.src} alt='info'className='w-[24px] h-[24px]'/>
        <img src={time.src} alt='info'className='w-[24px] h-[24px]'/>
        <img src={msg.src} alt='info'className='w-[24px] h-[24px]'/>
        <img src={download.src} alt='info' className='w-[24px] h-[24px]'/>
        <img src={forward.src} alt='info' className='w-[24px] h-[24px]'/>
        </div>
        </div>
        <div className='flex justify-evenly items-center  w-[400px]'>
        <div className='flex bg-[#F5FAF4] h-[36px] justify-center items-center p-[16px] rounded '>
            <img src={saved.src} alt='saved' className='w-[20px] h-[20px] mr-2'/>
            Saved Draft
        </div>
        <div className='flex items-center bg-[#017194] p-2 text-white justify-around w-[100px] h-[36px] rounded'>
            Submit
            <img src={arrow.src} alt='arrow' className='w-[20px] h-[20px]'/>
        </div>
      </div>
      </div>
      <Details/>
      </div>
    </div>
  )
}

export default VendorDetails
