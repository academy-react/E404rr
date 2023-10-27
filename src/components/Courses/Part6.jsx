import React from 'react'
import { Item } from '../common/Items/Item'


const Part6 = () => {
  return (
    <>
        <div className="flex xl:mx-auto flex-wrap xl:gap-x-[31.75px] xl:gap-y-[62px] lg:gap-[20px] lg:mr-[40px] xl:mr-auto l mt-[92px] border border-transparent  xl:w-[1250px] lg:w-full md:w-[769px] w-[600px] gap-x-3 gap-y-10">
             <div className='w-[287.5px] h-[340px]  rounded last:mb-20   xl:mx-0 lg:mx-0 md:mx-auto '>

                    <div className='relative'>
                        <div className='absolute left-4 top-[14px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <select id='select' className='bg-[#f3fcf8] w-[280px] h-[50px] tracking-[0.060rem] text-[19px] rounded-lg shadow-md  outline-none text-gray-800 pb-2 pr-2 appearance-none '>
                        <option>مرتب سازی بر اثاث قیمت</option>
                        <option>قدیمی ترین ها</option>
                        <option>جدید ترین ها</option>
                        <option>پرطرفدار ترین ها</option>
                    </select>
                    </div>
                
                        <div className='w-[280px] h-[200px] mt-[41px] rounded-md shadow-lg border border-transparent'>
                            <div className='mr-[20px] leading-[35px]'>
                                <div className='border-b w-[240px] mt-[10px] mb-4'>
                                    <h3 className='text-[19px] text-gray-800 pb-3'>نوع دوره</h3>
                                </div>
                            <div className='mt-20px relative'>
                                 <input type="checkbox" id='free' className='hidden peer' />
                                 <label htmlFor="free" className='border border-green-600 w-[17px] top-[10px] h-[17px] absolute'></label>
                                <label htmlFor="free" className=' text-gray-700 text-[17px] mr-5 '>رایگان</label>
                                <label htmlFor="input-one" className='absolute top-[9px] right-[-q6px] hidden peer-checked:block'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4  text-green-600 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                               </label>
                                <span className='mr-[158px] text-gray-400'>27</span>
                            </div>
                            <div className='relative'>
                            <input type="checkbox" id='cash' className='hidden peer' />
                                 <label htmlFor="cash" className='border border-green-600 w-[17px] top-[10px] h-[17px] absolute'></label>
                                <label htmlFor="cash" className=' text-gray-700 text-[17px] mr-5 '>نقدی</label>
                                <label htmlFor="cash" className='absolute top-[9px]  hidden peer-checked:block'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4  text-green-600 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                               </label>
                                <span className='mr-[163px]  text-gray-400'>18</span>
                            </div>
                            <div className='relative'>
                             <input type="checkbox" id='offer' className='hidden peer' />
                                 <label htmlFor="offer" className='border border-green-600 w-[17px] top-[10px] h-[17px] absolute'></label>
                                <label htmlFor="offer" className=' text-gray-700 text-[17px] mr-5 '>تخفیف ویژه</label>
                                <label htmlFor="offer" className='absolute top-[9px]  hidden peer-checked:block'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4  text-green-600 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                               </label>
                                <span className='mr-[115px]   text-gray-400'>13</span>
                            </div>
                            </div>
                        </div>
                </div>       
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>

                        <Item/>
            <Item/>
            <Item/>
                        <Item/>
            <Item/>
            <Item/>
                        <Item/>
            <Item/>
            <Item/>
                        <Item/>
            <Item/>
            <Item/>            <Item/>
            <Item/>
            <Item/>

            <Item/>
            <Item/>
            <Item/>
                        <Item/>
            <Item/>
            <Item/>
      </div>
    </>
  )
}

export  {Part6}