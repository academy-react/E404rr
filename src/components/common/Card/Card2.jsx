import React from 'react'
import bgitem1 from "../../../assets/img/bgitem1.png"
const Card2 = () => {
  return (
    <>
    <div className=' border-b h-[70px]  flex [&:nth-child(4n)]:border-transparent'>
    <div className='w-[80px] h-[50px] mr-[30px] border border-transparent '>
           <img  src={bgitem1} alt="" className="w-full h-full rounded-md mt-3 inline-block " />
    </div>
    <div className=' border border-transparent h-[30px]  mt-[27.5px] text-gray-500 '>
        <p className="inline-block  mr-[30px]">آموزش جامع زبان....</p>
        <p className="inline-block mr-[30px]">حسامی</p>
        <p className="inline-block mr-[30px]">1397/01/20</p>
        <p className="inline-block mr-[30px]">1398/01/20</p>
        <p className="inline-block mr-[30px]">  <span>تومان</span> 1,390,000 </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-[90px]">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
       </svg>

    </div>

</div>
</>
  )
}

export  {Card2}