import React from 'react'

import profile from "../assets/Ellipse 1.svg"
import Notification from "../assets/Group 1.svg"

const TopBar = ({heading}: {heading: string}) => {
  return (
    <div className='flex justify-between w-full items-center p-10 border-b-[1px] h-16'>
      <div className='font-semibold text-2xl'>{heading}</div>
      <div className='flex w-[20%] justify-around items-center'>
        <img src={Notification.src} alt='notification' className='w-[42px] h-[42px]'/>
        <div className='border-r-[1px] h-6 border-[rgba(46, 90, 117, 0.15)] pl-3'></div>
        <div className='flex justify-evenly w-full'>
            <img src={profile.src} alt='profile' className='w-[42px] h-[42px]'/>
            <div>
                <div className='font-semibold text-sm'>Rohit Sharma</div>
                <div className='text-[10px]' >rohit.sharma@growquest.in</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
