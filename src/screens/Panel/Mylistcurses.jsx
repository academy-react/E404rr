import React from 'react'
import { Card2 } from '../../components/common/Card/Card2'

const Mylistcurses = () => {
  return (
        <>
                <div className='border border-transparent shadow-xl xl:w-[955px] h-[722px] mt-[23px] mr-[34px] rounded-lg  bg-[#f3fcf8]
                  lg:w-[700px] md:w-[490px] w-[405px] '>
    <h3 className='text-gray-600 text-[22px] before:content-["*"] before:text-green-600  mt-[18px] mr-4' >   دوره های من</h3>
    <div className="lg:w-[400px] md:w-[300px] w-[250px] h-[40px]  border border-transparent xl:ml-[50px] mt-[60px]  relative float-left 
      lg:ml-[10px] md:ml-[20px] ml-[30px]">
        <input className="border border-transparent pr-5 focus:placeholder:opacity-0 caret-green-600  placeholder-green-600 w-full h-full outline-none rounded-xl  xl:mt-auto  xl:mr-0 " type="search" placeholder="جستوجو دوره های مختلف..." />
          <div className="absolute  xl:top-[7px]  xl:left-[10px]
                lg:left-[8px] lg:top-[8px] md:left-[10px] md:top-[5px] top-[5px] left-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
        <div className='xl:w-[850px] h-[350px] shadow-xl rounded-xl  bg-[#F3FCF8] bg-opacity-[26%] mt-[140px] xl:mx-auto
          lg:w-[650px] lg:mr-[30px]'>
            {/* top */}
            <div className='h-[60px] border text-gray-500   bg-[#61CE70] bg-opacity-[15%] border-transparent '>
                <div className='mt-4'>
                  <span className="xl:mr-[50px] inline-block 
                   lg:mr-[30px] md:mr-[50px] mr-[25px] ">تصویر </span>
                  <span className="xl:mr-[80px] inline-block
                      lg:mr-[70px] md:mr-[70px] mr-[45px]">نام دوره</span>
                  <span className="xl:mr-[85px] inline-block
                      lg:mr-[55px]  md:mr-[70px] mr-[70px]">استاد</span>
                  <span className="xl:mr-[50px] lg:inline-block
                      lg:mr-[25px] hidden">تاریخ شروع</span>
                  <span className="xl:mr-[45px] lg:inline-block
                      lg:mr-[30px] hidden">تاریخ پایان</span>
                  <span className="xl:mr-[75px] inline-block
                      lg:mr-[60px]  md:mr-[60px] mr-[40px]">قیمت</span>
                </div>
            </div>
            <div >
                {/* items */}
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                    
            </div>
        </div>
    </div>
        </>
  )
}

export  {Mylistcurses}