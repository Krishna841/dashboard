'use client';
import React, { useState } from 'react'

import upload from '../assets/Vector (6).svg'

const UploadFiles = ({num}: {num : number}) => {
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event: any) => {
      const uploadedFile = event.target.files[0];
      setFileName(uploadedFile ? uploadedFile.name : '');
   
  };
  return (
    <>
         {fileName ?
        <div className="w-full my-2 p-2 items-center h-[32px] rounded bg-[#EBF5FF] border-[#2e5a7580] border-[1px] flex justify-around text-[10px]">
         <span className="font-bold">{fileName}</span>
        </div>
      : 
     <>  <input type='file' className= 'hidden' id={`uploadFiles_${num}`} onChange={handleFileUpload}/>
            <div  onClick={() => document.getElementById('uploadFiles_' +num +'')?.click()}  className='w-full my-2 p-2 items-center h-[32px] rounded bg-[#EBF5FF] border-[#2e5a7580] border-[1px] flex justify-around text-[10px]'>
                Browse or drop files
                <img src={upload.src} alt='upload'/>
            </div> 
            </>
}
    </>
  )
}

export default UploadFiles
