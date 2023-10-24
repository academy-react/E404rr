import React from 'react'
import { Card } from '../../components/common/Card/Card'

const Listcurses = () => {
  return (
    <div className='border border-transparent shadow-xl w-[955px] h-[722px] mt-[23px] mr-[34px] rounded-lg  bg-[#f3fcf8] '>
    <h3 className='text-gray-600 text-[22px] before:content-["*"] before:text-green-600  mt-[18px] mr-4' > لیست دوره ها</h3>
    <div className="w-[400px] h-[40px]  border border-transparent ml-[50px] mt-[60px]  relative float-left ">
        <input className="border border-transparent pr-5 focus:placeholder:opacity-0 caret-green-600  placeholder-green-600 w-full h-full outline-none rounded-xl md:mr-[60px] lg:mr-[200px] lg:mt-[10px] xl:mt-auto  xl:mr-0 " type="search" placeholder="جستوجو دوره های مختلف..." />
          <div className="absolute top-[10px] lg:top-[20px] xl:top-[7px]  left-[10px] md:left-[-40px] lg:left-[-190px] xl:left-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
        <div className='w-[850px] h-[350px] shadow-xl rounded-xl bg-white  mt-[140px] mx-auto'>
            {/* top */}
            <div className='h-[60px] border'>
                <div className='mt-4'>
                  <span className="mr-5 ">تصویر </span>
                  <span className="mr-5 inline-block">نام دوره</span>
                  <span className="mr-5 inline-block">استاد</span>
                  <span className="mr-5 inline-block">تاریخ شروع</span>
                  <span className="mr-5 inline-block">تاریخ پایان</span>
                  <span className="mr-5 inline-block">قیمت</span>
                </div>
            </div>
            <div>
                {/* items */}
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
            </div>
        </div>
    </div>
  )
}

export  {Listcurses}