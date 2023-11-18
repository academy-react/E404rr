import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Tab2 } from "../../components/Tab/Tab2";
import { About } from "./detailskid/About";
import { Comment } from "./detailskid/Comment";

const ArticleBody = () => {

  const activeClass = ({ isActive}) => 
  isActive ? "py-2 border-b-2  border-[#323E73] " : "py-2 border-b-2  border-[#323E73] border-transparent" ;

  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  
  return (
    <div
      className=" px-14 flex flex-col py-10 mt-10 rounded-3xl bg-gradient-to-bl from-[#f3fcf8] text-[#323E73] to-white"
      data-aos="fade-up"
    >
      <div
        className="px-10 flex items-center gap-7 text-2xl mb-7"
        data-aos="fade-up"
      >

          <Tab2 label="توضیحات" active={activeTab === 'tab1'} onClick={() => openTab('tab1')} />
          <Tab2 label="دیدگاه ها" active={activeTab === 'tab2'} onClick={() => openTab('tab2')} />
     
     

      </div>
      <div
        className=" border-2 border-[#ccc] rounded-3xl p-6"
        data-aos="fade-up"
      >
       <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
       <About/>
        </div>
        <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
        <Comment/>
        </div>
      </div>
      <div
        className="mt-6 flex items-center justify-between border-1 border-t pt-8"
        data-aos="fade-up"
      >
        <p>توسط : مهدیار شیرزاد</p>
        <div className="flex items-center justify-between ">
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
                d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z"
                fill="#000"
              ></path>{" "}
              <path
                d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z"
                fill="#000"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4.10002C3.71776 4.56329 2 6.58104 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 6.58104 20.2822 4.56329 18 4.10002V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10ZM4.17071 8C4.58254 6.83481 5.69378 6 7 6H17C18.3062 6 19.4175 6.83481 19.8293 8H4.17071Z"
                fill="#000"
              ></path>{" "}
            </g>
          </svg>
          <p className="mx-3">10 آبان 1402</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
