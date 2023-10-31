import React from 'react'
import emptyprofile from '../../../assets/img/emptyprofile.png'
import { NavLink, Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    
        <>
                      <div className='flex'>
                 <nav className='border border-[#f3fcf8] xl:w-[326px] lg:w-[300px] md:w-[250px] sm:w-[200px] h-[722px] mt-[23px] shadow-xl '>
                {/* top */}
                <div className='border border-transparent h-[195px]  bg-[#f3fcf8]  relative'>
                    {/* img div */}
                    <div className='w-[110px] h-[110px] border border-transparent rounded-full mx-auto mt-[32px] '>
                        <img src={emptyprofile} alt="" className='w-full h-full rounded-full' />
                    </div>
                    {/* name */}
                    <div className='text-center'>
                        <p className='mt-[14px] text-green-600'>
                            مسعود حسامی
                        </p>
                    </div>
                    {/* icon arrow */}
                    <div className='absolute left-3 top-[13px]'>
                        <NavLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                        </NavLink>
                    </div>
                    {/* icon right */}
                        <div className='absolute top-[-9px] right-[-20px]'>
                             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="213" viewBox="0 0 344 213">
                            <defs>
                                <filter id="p4" x="0" y="0" width="344" height="213" filterUnits="userSpaceOnUse">
                                <feOffset dx="2" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="3" result="blur"/>
                                <feFlood flood-color="#f3fcf8"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                                </filter>
                            </defs>
                            <g id="Group_6" data-name="Group 6" transform="translate(-1011 -17)">
                                <g transform="matrix(1, 0, 0, 1, 1011, 17)" filter="url(#p4)">
                                <path id="p4-2" data-name="p4" d="M15,0H311a15,15,0,0,1,15,15V195H0V15A15,15,0,0,1,15,0Z" transform="translate(7 6)" fill="rgba(243,252,248,0.41)" opacity="0.45"/>
                                </g>
                                <path id="Path_2" data-name="Path 2" d="M2840.687,60.4a162.331,162.331,0,0,1-21.809-37.434l42.918.135a15.59,15.59,0,0,1,7.969,3.412,15.334,15.334,0,0,1,3.938,5.4,10.759,10.759,0,0,1,1.255,4.672L2875,93.52S2854.848,78.181,2840.687,60.4Z" transform="translate(-1531)" fill="rgba(97,206,112,0.15)"/>
                            </g>
                            </svg>
                        </div>
                </div>
                {/* bottom */}
                <div className=' pb-32'>

                <NavLink to="/">
                    <div className='border border-transparent h-10 mt-[18px] relative hover:shadow-lg '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-2 top-2  text-green-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <p  className=' mr-9 mt-[8px] inline-block  text-green-600'>خانه</p>
                        </div>
                    </NavLink>
                    <NavLink to="/panel">
                    <div className='border border-transparent h-10 mt-[18px] relative hover:shadow-lg '>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-2 top-2  text-green-600">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>

                            <p  className=' mr-9 mt-[8px] inline-block  text-green-600'>داشبرد</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-green-600  absolute  left-3 top-2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                           </svg>

                        </div>
                    </NavLink>
                        <NavLink to="/panel/listcurses" >
                        <div className='border border-transparent h-10  relative hover:shadow-lg mt-[13px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-2 top-2  text-green-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>



                            <p className=' mr-9 mt-[8px] inline-block  text-green-600'>لیست دوره ها</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-green-600  absolute  left-3 top-2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                           </svg>

                        </div>
                        </NavLink>
                    <NavLink to="/panel/editprofile">
                    <div className='border border-transparent h-10  relative hover:shadow-lg mt-[13px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-2 top-2  text-green-600">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>


                            <p  className=' mr-9 mt-[8px] inline-block  text-green-600'> ویرایش پروفایل </p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-green-600  absolute  left-3 top-2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                           </svg>

                        </div>
                    </NavLink>
                        <NavLink to="/panel/mycurses">
                        <div className='border border-transparent h-10  relative hover:shadow-lg mt-[13px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-2 top-2  text-green-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>


                            <p className=' mr-9 mt-[8px] inline-block  text-green-600'> دوره های من</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-green-600  absolute  left-3 top-2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                           </svg>

                        </div>
                        </NavLink>
                </div>
            </nav>
            <Outlet/>




            </div>
        </>

  )
}

export  {Navbar}