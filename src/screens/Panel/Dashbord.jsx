import React from 'react'

const Dashbord = () => {
  return (
    <div className='border border-transparent shadow-xl w-[955px] h-[722px] mt-[23px] mr-[34px] bg-[#f3fcf8] rounded-lg'>
         <h3 className='text-gray-600 text-[22px] before:content-["*"] before:text-green-600  mt-[18px] mr-4' >داشبورد</h3>

         <div className='flex  borde border-transparent mt-5'>
            <div className='bg-white border w-[400px] h-[150px] border-transparent rounded mr-16 shadow'></div>
            <div className='bg-white border w-[400px] h-[150px]  border-transparent rounded mr-10 shadow'></div>
         </div>
         <div className='h-[200px] w-[800px] mx-auto border border-transparent shadow mt-5 bg-white rounded'>tghvim</div>
         <div className='w-[300px] h-[250px] border border-transparent shadow mt-5 bg-white rounded'></div>
    </div>
  )
}

export  {Dashbord}