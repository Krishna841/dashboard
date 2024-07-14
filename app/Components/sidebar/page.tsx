'use client';
import React, { useState } from 'react'

import logo from "../../assets/logo.svg"
import navigator from "../../assets/ph_compass.svg"
import invoice from "../../assets/Group (1).svg"
import supply from "../../assets/carbon_scis-transparent-supply.svg"
import settings from "../../assets/setting icon.svg"
import invoiceActive from "../../assets/Group (2).svg"
import supplyActive from "../../assets/carbon_scis-transparent-supply (1).svg"
import naviActive from "../../assets/Vector (7).svg"
import settingsActive from "../../assets/Group (3).svg"


const Sidebar = () => {
   const [selected, setSelected] = useState(1);
  return (
    <div className="bg-[#F7FCFF] w-[55px] flex flex-col items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className='flex flex-col items-center w-full h-[40%] justify-evenly'>
     <img src={logo.src} alt='finfi-logo'className='w-[24px] h-[24px]'/>
   
     <div className={`${selected === 0?"bg-[#2E5A75] w-[80%] h-[30px] flex justify-center items-center rounded-l-3xl":""}`}>
      {selected === 0?
    <img src={naviActive.src} alt='navigator' className='w-[24px] h-[24px]'/>:  <img src={navigator.src} alt='invoices' className='w-[24px] h-[24px]' onClick={()=>setSelected(0)}/>}
     </div>     <div className={`${selected === 1?"bg-[#2E5A75] w-[80%] h-[30px] flex justify-center items-center rounded-l-3xl":""}`}>
      {selected === 1?
    <img src={invoiceActive.src} alt='navigator' className='w-[24px] h-[24px]'/>:  <img src={invoice.src} alt='invoices' className='w-[24px] h-[24px]' onClick={()=>setSelected(1)}/>}
     </div>
     <div className={`${selected === 2?"bg-[#2E5A75] w-[80%] h-[30px] flex justify-center items-center rounded-l-3xl":""}`}>
      {selected ===2?
    <img src={supplyActive.src} alt='navigator' className='w-[24px] h-[24px]'/>:  <img src={supply.src} alt='invoices' className='w-[24px] h-[24px]'onClick={()=>setSelected(2)}/>}
     </div>
     <div className={`${selected === 3?"bg-[#2E5A75] w-[80%] h-[30px] flex justify-center items-center rounded-l-3xl":""}`}>
      {selected===3?
    <img src={settingsActive.src} alt='navigator' className='w-[24px] h-[24px]'/>:  <img src={settings.src} alt='invoices' className='w-[24px] h-[24px]'onClick={()=>setSelected(3)}/>}
     </div>
     </div>
    </div>
  )
}

export default Sidebar