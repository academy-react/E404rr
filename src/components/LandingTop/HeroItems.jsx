import React from "react";
import learn from "../../assets/img/learn.png";
import teacher from "../../assets/img/teacher.png";
import gift from "../../assets/img/gift.png";
import support from "../../assets/img/support.png";
import styles from "./HeroSection.module.css";

const HeroItems = () => {
  return (
    <div
      className={` ${styles.heroItems} flex mt-10  items-center justify-between  mx-auto  gap-4 `}
      // max-w-[450px]
    >
      <div className="w-25 h-25 border border-transparent hover:scale-110 ">
  
          <div className="w-[65px] h-[65px] border border-transparent mx-auto">
            <img src={learn} alt="" />
          </div>
          <p className="text-[15px] mt-[16.5px] mr-2 text-gray-600">
            دوره های رایگان
          </p>

      </div>
      <div className="w-25 h-25 border border-transparent  hover:scale-110">
  
          <div className="w-[65px] h-[65px] border border-transparent mx-auto">
            <img src={teacher} alt="" />
          </div>
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">
            مدرسین مجرب
          </p>
    
      </div>
      <div className="w-25 h-25  border border-transparent  hover:scale-110">
   
          {" "}
          <div className="w-[65px] h-[65px] border border-transparent mx-auto">
            <img src={gift} alt="" />
          </div>
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">
            کد های تخفیف
          </p>
     
      </div>
      <div className="w-25 h-25 border border-transparent  hover:scale-110">

          <div className="w-[65px] h-[65px] border border-transparent mx-auto">
            <img src={support} alt="" />
          </div>
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">
            پشتیبانی 24/7
          </p>
       
      </div>
    </div>
  );
};

export default HeroItems;
