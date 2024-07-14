import React from 'react'

import attachments from "../assets/Vector.svg"
import VendorFormDetails from './VendorFormDetails'
import UploadFiles from './uploadFiles'

const Details = () => {
  return (
    <div className='flex justify-evenly w-full h-[80%] pt-[15px] '>
      <div className='w-[80%] h-full text-[13px]'>
        <div className='flex w-full justify-start border-[1px] rounded-t-lg p-2'>
            <div className='text-[#2e5a7599] font-bold px-2'>Vendor Request Details</div>
            <div className='text-[#2E5A75] font-bold px-2'>Vendor Form Details</div>
            <div className='text-[#00000033] px-2'> Add Finance Details</div>
        </div>
        <div className='flex flex-col w-full h-[80vh] justify-evenly items-start border-[1px]'>
          <VendorFormDetails/>
        </div>
        </div>
      <div className='flex flex-col w-[18%] text-[13px] font-bold'>
        <div className='flex w-full justify-around border-[1px] rounded-t-lg p-2'>
            <div className='text-[#2E5A75]'>Attachments</div>
            <img src={attachments.src} alt='attachments'/>
        </div>
        <div className='flex flex-col justify-start items-start h-[40%] w-full p-4 border-x-[1px]'>
            <div><div>GST Certificate </div>
            <div className='w-[150px]'>
            <UploadFiles num={2}/>
            </div>
            </div>
            <div> 
                <div>PAN Number</div>  
                <div className='w-[150px]'>
                <UploadFiles num={3}/>
            </div>
            </div>
        <div>
            <div> MSME Certificate</div>
            <div className='w-[150px]'>
            <UploadFiles num={4}/>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start border-x-[1px] border-y-[1px] h-[60%] w-full p-4'>
            <div>
            <div>Vendor Contract</div>
            <div className='w-[150px]'>
            <UploadFiles num={5}/>
            </div>
            </div>
            <div>
            <div>Vendor Final Proposal</div>
            <div className='w-[150px]'>
            <UploadFiles num={6}/>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details


