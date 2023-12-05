import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingNum from "./ShoppingNum";

const HeaderLeft = ({isLog , logOut}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [isModalOpenRelOut, setIsModalOpenRelOut] = useState(false);
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };


      const openModalRelOut = () => {
        setIsModalOpenRelOut(true);
      };
    
      const closeModalRelOut = () => {
        setIsModalOpenRelOut(false);
      };


      const closeAndOut = () =>{
        logOut()
        closeModalRelOut()
      }
  
  return (
    <div className="flex" >
      <NavLink to="/Cart"   data-aos="fade-up">
        <div className="p-3 relative mx-2 bg-[#23A455] rounded-full flex cursor-pointer ">
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M3 3H4.37144C5.31982 3 6.13781 3.66607 6.32996 4.59479L8.67004 15.9052C8.86219 16.8339 9.68018 17.5 10.6286 17.5H17.5"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M6.82422 7H19.6743C20.3386 7 20.8183 7.6359 20.6358 8.27472L19.6217 11.8242C19.2537 13.1121 18.0765 14 16.7371 14H8.27734"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <circle
                cx="16.5"
                cy="20.5"
                r="0.5"
                fill="#fff"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>{" "}
              <circle
                cx="0.5"
                cy="0.5"
                r="0.5"
                transform="matrix(1 0 0 -1 10 21)"
                fill="#fff"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>{" "}
            </g>
          </svg>
          <ShoppingNum />
        </div>
      </NavLink>

      {isLog ?
    <>
                <div  onClick={openModal}>
          <div className="p-3 mx-2  bg-[#23A455] rounded-full flex  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 border-1  border-[#000]  stroke-white fill-white "
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>

        </div>

        {isModalOpen && (
            
            <>
                <div  className="border top-[30] w-[200px] h-[200px] rounded-xl text-white absolute bg-green-700 z-50">
                    <NavLink className="block" to={"/"}>
                          خانه
                    </NavLink>
                    <NavLink className="block" to={"/panel"}>
                          پنل دانشجو
                    </NavLink>
                    <p className="block" onClick={openModalRelOut}>
                          خروج
                    </p>

                    <div className="absolute left-1 top-1" onClick={closeModal}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    </div>
                </div>
            </>
          )}


          {isModalOpenRelOut &&( 
            <>
                <div className=" border w-[400px] h-[400px] absolute bg-green-500 left-[500px]">
                      <p>  آیا مطمعنید که میخاهید از حساب کاربری خود خارج شوید؟</p>
                      <p className="inline-block" onClick={closeModalRelOut}>خیر</p>
                      <p className="inline-block mr-[30px]" onClick={closeAndOut}>بله</p>
                </div> 
            </>
          )}
    </>
    

    
    :


<NavLink to="/login">
<div className="p-3 mx-2  bg-[#23A455] rounded-full flex cursor-pointer ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 border-1  border-[#000]  stroke-white fill-white "
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
</div>
</NavLink>
    
          }

    </div>
  );
};

export default HeaderLeft;
