import React from 'react'

const Dashbord = () => {
  return (
    <div className='border border-transparent shadow-xl w-[955px] h-[722px] mt-[23px] mr-[34px] bg-[#f3fcf8] rounded-lg'>
         <h3 className='text-gray-600 text-[22px] before:content-["*"] before:text-green-600  mt-[18.5px] mr-4' >داشبورد</h3>

         <div className='flex  border border-transparent mt-5'>
            <div className='bg-white border w-[400px] h-[125px] border-transparent rounded mr-16 shadow'></div>
            <div className='bg-white border w-[400px] h-[125px]  border-transparent rounded mr-[38px] shadow'></div>
         </div>
         <div className='h-[225px] w-[840px] mr-16 border border-transparent shadow mt-5 bg-white rounded'>
            {/* top */}
            <div className='h-[50px] border-b border-transparent'>
                <div className='float-right text-center  w-[100px] h-full rounded relative  border-transparent bg-[#f3fcf8] text-gray-500'>
                    <p className='mt-3'>تقویم</p>
                </div>
                  <div className='float-left w-[100px] h-full rounded relative  border-transparent bg-[#f3fcf8]'> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute top-3 text-green-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>

                    <select name="" id="" className='outline-none bg-transparent w-full h-full text-center appearance-none text-gray-500  '>
                        <option value="">شمسی</option>
                        <option value="">قمری</option>
                        <option value="">میلادی</option>
                    </select>
                </div>
            </div>
            {/* content */}
            <div>
              <p className="inline-block">شنبه</p>
              <p className="inline-block">یکشنبه</p>
              <p className="inline-block">دوشنبه</p>
              <p className="inline-block">سه شنبه</p>
              <p className="inline-block">چهارشنبه</p>
              <p className="inline-block">پنجشنبه</p>
              <p className="inline-block">جمعه</p>
            </div>
         </div>
         <div className='w-[300px] h-[250px] border border-transparent shadow mt-5 bg-white rounded'></div>
    </div>
  )
}

export  {Dashbord}