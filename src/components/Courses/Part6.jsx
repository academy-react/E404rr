import React from 'react'
import { Item } from '../common/Items/Item'


const Part6 = () => {
  return (
    <>
        <div className="flex xl:mx-auto flex-wrap xl:gap-x-[31.75px] xl:gap-y-[62px] lg:gap-[20px] lg:mr-[40px] xl:mr-auto l mt-[92px] border border-transparent  xl:w-[1250px] lg:w-full md:w-[769px] w-[600px] gap-x-3 gap-y-10">
             <div className='w-[287.5px] h-[340px]  rounded last:mb-20   xl:mx-0 lg:mx-0 md:mx-auto '>
                   
                    <select id='select' className='bg-[#f3fcf8] w-[280px] h-[50px] rounded-lg shadow-md outline-none'>
                        <option>مرتب سازی بر اثاث قیمت</option>
                        <option>قدیمی ترین ها</option>
                        <option>جدید ترین ها</option>
                        <option>پرطرفدار ترین ها</option>
                    </select>
                
                        <div className='w-[280px] h-[200px] mt-[41px] rounded-md shadow-lg border border-transparent'>
                            <div className='mr-[20px] leading-[35px]'>
                                <div className='border-b w-[240px] mt-[10px] mb-4'>
                                    <h3 className='text-lg text-gray-800 pb-3'>نوع دوره</h3>
                                </div>
                            <div className='mt-20px'>
                                 <input type="checkbox" id='free' />
                                <label htmlFor="free" className='text-[13px] text-gray-600 '>رایگان</label>
                          
                                <span className='mr-[165px]'>27</span>
                            </div>
                            <div>
                            <input type="checkbox" id='cash' />
                            <label htmlFor="cash" className='text-[13px] text-gray-600 '>نقدی</label>
                           
                                <span className='mr-[168px]'>18</span>
                            </div>
                            <div>
                            <input type="checkbox" id='checkbox-offer' />
                            <label htmlFor="checkbox-offer" className='text-[13px] text-gray-600'>تخفیف ویژه</label>
                
                                <span className='mr-[132px]'>13</span>
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