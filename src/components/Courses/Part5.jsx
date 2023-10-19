import React from 'react'

const Part5 = () => {
  return (
    <div className='xl:w-[1250px] h-[70px] w-full bg-[#f3fcf8] xl:mx-auto mt-[70px] border border-transparent flex'>
    <div className="xl:w-auto h-[50px]  border border-transparent xl:mr-[50px] mt-[10px]  relative ">
       <input className="border border-transparent pr-5 focus:placeholder:opacity-0 caret-green-600  placeholder-green-600 xl:w-[582px] xl:mr-0 mr-3 h-full outline-none rounded-xl w-[300px]  md:w-[400px] lg:w-[650px] " type="search" placeholder="جستوجو دوره های مختلف..." />
       <div className="absolute top-[10px] lg:top-[12px] xl:top-[10px] left-[10px] md:left-[10px] lg:left-[15px] xl:left-[10px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-green-600">
     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
     </svg>
     </div>
    </div>

       <div className='flex border border-transparent xl:mr-[220px] mr-2'>
       <div className='  xl:mr-[30px] relative '>
       <input type="checkbox" id='input-one' className='accent-green-600 hidden  peer  ' />
       <label htmlFor="input-one" className='w-[20px]  h-[20px] border absolute mt-[26px] mr-[-10px] border-green-600  '></label>
       <label htmlFor="input-one" className='leading-[70px] text-[#323E73]  mr-3'>دوره های به اتمام رسیده</label>
        <label htmlFor="input-one" className='absolute top-7 right-[-8px] hidden peer-checked:block'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4  text-green-600 ">
       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
       </svg>
        </label>
       </div>
       <div className=' xl:mr-[30px] mr-2 relative'>
       <input type="checkbox" id='input-two' className='accent-green-600 hidden peer' />
       <label htmlFor="input-two" className='w-[20px]  h-[20px] border absolute mt-[26px] mr-[-10px] border-green-600  '></label>
       <label htmlFor="input-two" className='leading-[70px] text-[#323E73]    mr-3'>  درحال برگزاری  </label>
       <label htmlFor="input-two" className='absolute top-7 right-[-8px] hidden  peer-checked:block'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4  text-green-600 ">
       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
       </svg>
        </label>
   </div>
       </div>

   </div>
  )
}

export  {Part5}