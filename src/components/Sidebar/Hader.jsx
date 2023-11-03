import React, { useState } from 'react';
import emptyprofile from "../../assets/img/emptyprofile.png"
import Emoji from 'react-emoji-render';

const Hader = () => {
    const [isNightMode, setIsNightMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        setIsNightMode(!isNightMode); // تغییر وضعیت شب به روز و برعکس
      };
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
        <>  
                                <header className='flex h-[56px] mt-[30px]  border border-transparent justify-between'>
                        <div className='flex-1 border border-transparent mt-[10px] mr-[30px]'> 
                            <p className='text-[24px]'>کاربر عزیز خوش اومدی  <Emoji text=':heart:'/></p>
                        </div>
                        <div className='flex-2 border flex flex-row-reverse border-transparent   '>
                                   <div className="w-[56px] h-[56px] border border-transparent rounded-full ml-[30px]">
                                        <img src={emptyprofile} alt="" className='w-full h-full rounded-full block' />
                                   </div>
                                   {/* تغییر حالت روز و شب */}
                                   <div onClick={handleClick} className="w-[56px] h-[56px]  border border-transparent rounded-full bg-white ml-[15px] flex items-center justify-center  ">
                                   {isNightMode ? (
                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                       </svg>
                                       
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                            </svg>

                                        )}
  
                                   </div>
                                   {/* مدال اعلان ها */}
                            <div className='relative '>
                            <div onClick={openModal} className="w-[56px] h-[56px]  border border-transparent rounded-full bg-white ml-[15px] flex items-center justify-center   ">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                            </div>

                                   {isModalOpen && (
                                    <>
                                            <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-filter  backdrop-grayscale-[0.5] bg-black bg-opacity-10   '></div>
                                            <div className="absolute mt-[10px] left-10 w-[384px] h-[145px] bg-white rounded-2xl border border-transparent shadow    ">
                                    
                                    <div className="relative ">
                                    <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-5 top-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        <h3 className='text-[20px] mt-[10px] mr-[15px] pb-4'>اعلان ها</h3>
                                        <div className='border-b w-[90%] mx-auto'></div>
                                    </div>

                                    <div className='w-[90%] h-[50px] rounded-lg bg-gray-100 mx-auto mt-5 flex items-center justify-center'>
                                        <p>
                                            اعلان جدیدی وجود ندارد
                                        </p>
                                    </div>
                                    </div>
                                    </>
        
                                 )}

                            </div>
                        </div>
                    </header>
        </>
  )
}

export default Hader