import React from 'react'

import UploadFiles from './uploadFiles'

const banks = ["Allahabad Bank", "Andhra Bank", "Axis Bank", "Bank of Bahrain and Kuwait", "Bank of Baroda - Corporate Banking", "Bank of Baroda - Retail Banking", "Bank of India", "Bank of Maharashtra", "Canara Bank", "Central Bank of India", "City Union Bank", "Corporation Bank", "Deutsche Bank", "Development Credit Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "IDBI Bank", "Indian Bank", "Indian Overseas Bank", "IndusInd Bank", "ING Vysya Bank", "Jammu and Kashmir Bank", "Karnataka Bank Ltd", "Karur Vysya Bank", "Kotak Bank", "Laxmi Vilas Bank", "Oriental Bank of Commerce", "Punjab National Bank - Corporate Banking", "Punjab National Bank - Retail Banking", "Punjab & Sind Bank", "Shamrao Vitthal Co-operative Bank", "South Indian Bank", "State Bank of Bikaner & Jaipur", "State Bank of Hyderabad", "SBI", "State Bank of Mysore", "State Bank of Patiala", "State Bank of Travancore", "Syndicate Bank", "Tamilnad Mercantile Bank Ltd.", "UCO Bank", "Union Bank of India", "United Bank of India", "Vijaya Bank", "Yes Bank Ltd"];
const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"];

const VendorFormDetails = () => {
  return (
    <div className='flex flex-col justify-start items-start h-full w-full text-sm'>
       <div className='grid grid-rows-3 gap-x-2 gap-y-4 w-full p-4 border-b-[1px]'>
    <div className='grid grid-cols-4 gap-y-4 '>
        <div className='flex flex-col'>
        <label htmlFor="state-select" className="mb-2">Select State<sup>*</sup></label>
        <div className="border-[#01719426] border-[1px] rounded p-2 w-[180px]">
      <select id="state-select" className='w-[150px]' defaultValue='Karnataka' >
        {states.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>
      </div>
        </div>
        <div >
            <div className='pb-2'>Location</div>
            <input type='text' className='border-[#01719426] border-[1px] rounded'/>
        </div>
        <div> 
            <div className='pb-2'>Location GSTIn</div>
            <input type='text' className='border-[#01719426] border-[1px] rounded'/>
        </div>
        <div>
            <div>Location GSTIn Certificate <sup>*</sup></div>
            <div className='w-[180px]'>
            <UploadFiles num={0}/>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-4 gap-y-4 gap-x-2'>
        <div>
            <div className='pb-2'>POC Name <sup>*</sup></div>
            <input type='text' className='border-[#01719426] border-[1px] rounded'/>
        </div>
        <div>
            <div className='pb-2'>POC Designation <sup>*</sup></div>
            <input type='text' className='border-[#01719426] border-[1px] rounded'/>
        </div>
        <div>
            <div className='pb-2'>POC Email ID <sup>*</sup></div>
            <input type='text' className='border-[#01719426] border-[1px] rounded'/>
        </div>
        <div>
            <div className='pb-2'>POC Mobile Number <sup>*</sup></div>
            <input type='text' className='border-[#01719426] border-[1px] rounded'/>
        </div>
    </div>
    <div className='w-[60%]'>
        <div className='pb-2'>Address</div>
        <input type='text' className='border-[#01719426] border-[1px] rounded w-full'/>
    </div>
</div >
    <div className='font-bold px-4 py-6 pt-8'><div className='pl-4 border-l-4 border-red-500'>Account Details</div></div>

<div className="grid grid-cols-4 gap-y-4 gap-x-2 w-full p-4">
  <div className="flex flex-col">
    <label htmlFor="bank-select" className="mb-2">Select Bank<sup>*</sup></label>
    <div className="border-[#01719426] border-[1px] rounded p-2 w-[180px]">
      <select id="bank-select" className=" w-[150px]" defaultValue='SBI'>
        {banks.map((bank, index) => (
          <option key={index} value={bank}>{bank}</option>
        ))}
      </select> 
      </div>
       </div>
  <div className="flex flex-col">
    <div className='pb-2'>Account Name</div>
    <input type="text" className="border-[#01719426] border rounded" />
  </div>
  <div className="flex flex-col">
    <div className='pb-2'>Account Number</div>
    <input type="text" className="border-[#01719426] border rounded" />
  </div>
  <div className="flex flex-col">
    <div className='pb-2'>Confirm Account Number</div>
    <input type="text" className=" border-[#01719426] border rounded" />
  </div>
  <div className="flex flex-col">
    <div className='pb-2'>IFSC Code</div>
    <input type="text" className="border-[#01719426] border rounded" />
  </div>
  <div>
    <div>Cancelled Check</div>
    <div className='w-[180px]'>
    <UploadFiles num={1}/>
    </div>
    </div>
</div>

</div>
  )
}

export default VendorFormDetails
