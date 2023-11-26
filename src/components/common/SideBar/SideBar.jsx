import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import Hader from '../../Sidebar/Hader'
import logo3 from "../../../assets/img/logo3.png"
import AOS from "aos";
import "aos/dist/aos.css";



const SideBar = () => {

    const activeClass = ({ isActive}) => 
    isActive ? "w-[224px] h-[40px] border mt-[16px] rounded-lg bg-green-600  border-transparent text-white  block " : "w-[224px] h-[40px] border mt-[16px] rounded-lg bg-transparent border-transparent  block" ;
    

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
        <>
            <div className='flex mt-[30px]'   data-aos="fade-up" >
{/* 
                                <NavLink to="/" className="absolute mr-[30px]"   data-aos="fade-up" >
                        <div className='w-20 h-20 absolute'>
                            <img src={logo3} alt="" />
                        </div>
                        <h2 className='text-[24px] absolute text-green-600 mr-[80px] mt-[25px]'>E404ROR</h2>
                    </NavLink> */}
                <div className='w-[250px] h-[559px] border mr-[45px] border-transparent mt-[50px]'   data-aos="fade-up" >


         
                         <NavLink end to="/panel"  className={activeClass}  >

                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block   mr-[5px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                                <p className=" inline-block mt-[7px] mr-[10px]">
                                    پیشخوان
                                </p>
                        
                         </NavLink>
    

                        

                         <NavLink to="/panel/myCourses"  className={activeClass}>
                         
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>

                            <p className=" inline-block mt-[7px] mr-[10px]">
                                دوره های من
                            </p>
                        
                         </NavLink>
             
                         <NavLink to="/panel/Ticket" className={activeClass}>
               
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>

                            <p className=' inline-block mt-[7px] mr-[10px]'>
                                تیکت ها
                            </p>
                   
                         </NavLink>


                         <NavLink to="/panel/editprofile" className={activeClass}>
            
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                            <p className=' inline-block mt-[7px] mr-[10px]'>
                                ویرایش پروفایل
                            </p>
                    
                         </NavLink>
                         <NavLink to="/logout" >
                         <div className="w-[224px] h-[40px] border mt-[16px] rounded-lg  border-transparent  ">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-[5px] inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>

                            <p className='text-black inline-block mt-[7px] mr-[10px]' >
                                 خروج
                            </p>
                        </div>
                         </NavLink>
                </div>
                <div className='w-[985px] border min-h-[600px] h-auto pb-[30px]  mr-[30px]  bg-[#f3fcf8] rounded-[36px] border-transparent'   data-aos="fade-up" >
                        <Hader/>
                    <Outlet/>
                </div>
              

            </div>
        </>
  )
}

export  {SideBar}