import React from 'react'
import bgitem1 from "../../../assets/img/bgitem1.png"

const Card = () => {
  return (
    <>
    <div className=' border-b h-[70px]  flex [&:nth-child(4n)]:border-transparent'>
    <div className='xl:w-[80px] h-[50px] xl:mr-[30px] border border-transparent 
      lg:mr-[10px]  lg:w-[80px] md:w-[80px] md:mr-[30px] mr-1'>
           <img  src={bgitem1} alt="" className="w-full h-full rounded-md mt-3 inline-block " />
    </div>
    <div className=' border border-transparent h-[30px]  mt-[27.5px] text-gray-500 '>
        <p className="inline-block xl:mr-[30px]
            lg:mr-[10px] md:mr-[15px] mr-1">آموزش جامع زبان....</p>
        <p className="inline-block xl:mr-[30px]
            lg:mr-[10px] md:mr-[15px] mr-1">حسامی</p>
        <p className="lg:inline-block xl:mr-[30px]
            lg:mr-[10px] hidden">1397/01/20</p>
        <p className="lg:inline-block xl:mr-[30px]
            lg:mr-[10px] hidden">1398/01/20</p>
        <p className="inline-block xl:mr-[30px]
            lg:mr-[10px] md:mr-[15px] mr-1">  <span>تومان</span> 1,390,000 </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block xl:mr-[90px] lg:mr-[20px] md:mr-[20px]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>


    </div>

</div>
    </>
  )
}

export  {Card}