import React from 'react'

const Part5 = () => {
  return (
    <div className='w-[1250px] h-[70px] bg-[#f3fcf8] mx-auto mt-[70px] border border-transparent flex'>
    <div className="w-[510px] h-[50px]  border border-transparent mr-[50px] mt-[10px]  relative">
       <input className="border border-transparent pr-5 focus:placeholder:opacity-0 caret-green-600  placeholder-green-600 w-full h-full outline-none rounded-xl md:mr-[60px] lg:mr-[200px] lg:mt-[10px] xl:mt-auto  xl:mr-0 " type="search" placeholder="جستوجو دوره های مختلف..." />
       <div className="absolute top-[10px] lg:top-[20px] xl:top-[10px] left-[10px] md:left-[-40px] lg:left-[-190px] xl:left-[10px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-green-600">
     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
     </svg>
     </div>
    </div>

       <div className='flex border border-transparent mr-[220px]'>
       <div className='  mr-[30px]'>
       <input type="checkbox" id='input-one' className='accent-green-600 inline-block  ' />
       <label htmlFor="input-one" className='leading-[70px] text-[#323E73]  mr-3'>دوره های به اتمام رسیده</label>
       </div>
       <div className=' mr-[30px]'>
       <input type="checkbox" id='input-two' className='accent-green-600' />
       <label htmlFor="input-two" className='leading-[70px] text-[#323E73]    mr-3'>  درحال برگزاری  </label>
   </div>
       </div>

   </div>
  )
}

export  {Part5}