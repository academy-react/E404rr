import React from 'react'

const MyCursesItems = () => {
  return (
        <>
                                        <div className='flex flex-wrap border border-transparent mt-[50px] ' data-aos="fade-up">
                <div className="w-[240px] h-[84px] bg-yellow-500 border border-transparent rounded-xl mr-[30px] flex items-center ">
                    <div className='w-[68px] h-[68px] border border-transparent mr-[5px] rounded-xl bg-white bg-opacity-20 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[36px] h-[36px] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>

                    </div>
        
                    <div className='border border-transparent w-auto h-full text-white mr-[15px] '>
                          <p className='mt-[10px] text-[13px]'> دوره های ثبت نام شده</p>
                          <p className='font-bold mt-[5px] text-[18px]'>0 دوره</p>

                    </div>
                </div>
                <div className="w-[240px] h-[84px] bg-blue-500 border border-transparent rounded-xl mr-[30px] flex items-center ">
                    <div className='w-[68px] h-[68px] border border-transparent mr-[5px] rounded-xl bg-white bg-opacity-20 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[36px] h-[36px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>


                    </div>
        
                    <div className='border border-transparent w-auto h-full text-white mr-[15px] '>
                          <p className='mt-[10px] text-[13px]'> دوره های نقدی</p>
                          <p className='font-bold mt-[5px] text-[18px]'>0 دوره</p>

                    </div>
                </div>
                <div className="w-[240px] h-[84px] bg-green-500 border border-transparent rounded-xl mr-[30px] flex items-center ">
                    <div className='w-[68px] h-[68px] border border-transparent mr-[5px] rounded-xl bg-white bg-opacity-20 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[36px] h-[36px] text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>


                    </div>
        
                    <div className='border border-transparent w-auto h-full text-white mr-[15px] '>
                          <p className='mt-[10px] text-[13px]'>   دوره های رایگان</p>
                          <p className='font-bold mt-[5px] text-[18px]'>0 دوره</p>

                    </div>
                </div>

            </div>

        </>
  )
}

export  {MyCursesItems}