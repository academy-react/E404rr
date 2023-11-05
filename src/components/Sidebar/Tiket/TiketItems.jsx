import React from 'react'
import { useNavigate } from "react-router-dom";

const TiketItems = () => {
    const navigate = useNavigate();
    const goAdd = () =>{
        navigate("/panel2/Addticket")
      }
  return (
    <>
                                                    <div className='flex flex-wrap border border-transparent mt-[50px] '>
                <div className="w-[240px] h-[84px] bg-yellow-500 border border-transparent rounded-xl mr-[30px] flex items-center ">
                    <div className='w-[68px] h-[68px] border border-transparent mr-[5px] rounded-xl bg-white bg-opacity-20 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[36px] h-[36px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                    </svg>


                    </div>
        
                    <div className='border border-transparent w-auto h-full text-white mr-[15px] '>
                          <p className='mt-[10px] text-[13px]'> همه تیکت ها</p>
                          <p className='font-bold mt-[5px] text-[18px]'>0 تیکت</p>

                    </div>
                </div>
                <div className="w-[240px] h-[84px] bg-blue-500 border border-transparent rounded-xl mr-[30px] flex items-center ">
                    <div className='w-[68px] h-[68px] border border-transparent mr-[5px] rounded-xl bg-white bg-opacity-20 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[36px] h-[36px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                    </svg>



                    </div>
        
                    <div className='border border-transparent w-auto h-full text-white mr-[15px] '>
                          <p className='mt-[10px] text-[13px]'>   تیکت های باز</p>
                          <p className='font-bold mt-[5px] text-[18px]'>0 تیکت</p>

                    </div>
                </div>
                <div className="w-[240px] h-[84px] bg-pink-500 border border-transparent rounded-xl mr-[30px] flex items-center ">
                    <div className='w-[68px] h-[68px] border border-transparent mr-[5px] rounded-xl bg-white bg-opacity-20 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[36px] h-[36px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>


                    </div>
        
                    <div className='border border-transparent w-auto h-full text-white mr-[15px] '>
                          <p className='mt-[10px] text-[13px]'>     بسته شده</p>
                          <p className='font-bold mt-[5px] text-[18px]'>0 تیکت</p>

                    </div>
                </div>

                <div onClick={goAdd} className="w-[194px] cursor-pointer h-[80px] bg-blue-500 mt-[15px] border border-transparent rounded-xl mr-[30px] flex items-center ">
                    <div className='w-[68px] h-[68px] border border-transparent mr-[5px] rounded-xl bg-opacity-20 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[36px] h-[36px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>



                    </div>
        
                    <div  className=' border border-transparent w-auto h-full text-white mr-[5px] flex justify-center items-center '>
                          <p className=' text-[20px]'>  تیکت جدید</p>
                          

                    </div>
                </div>

            </div>

    </>
  )
}

export  {TiketItems}