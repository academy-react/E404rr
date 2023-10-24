import React from "react";
import learn from "../../assets/img/learn.png";
import teacher from "../../assets/img/teacher.png";
import gift from "../../assets/img/gift.png";
import support from "../../assets/img/support.png";
import { NavLink } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroItems = () => {
  return (
    <div
      className={` ${styles.heroItems} flex mt-10  mr-16 md:mr-[125px] lg:mr-64 xl:mr-16  gap-4 `}
    >
      <div className="w-25 h-25 border border-transparent hover:scale-110 ">
        <div className="w-[65px] h-[65px] border border-transparent mx-auto">
          <NavLink to="/free-learn">
            <img src={learn} alt="" />
          </NavLink>
        </div>
        <NavLink to="/free-learn">
          <p className="text-[15px] mt-[16.5px] mr-2 text-gray-600">
            دوره های رایگان
          </p>
        </NavLink>
      </div>
      <div className="w-25 h-25 border border-transparent  hover:scale-110">
        <div className="w-[65px] h-[65px] border border-transparent mx-auto">
          <NavLink to="/best-teachers">
            <img src={teacher} alt="" />
          </NavLink>
        </div>
        <NavLink to="/best-teachers">
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">
            مدرسین مجرب
          </p>
        </NavLink>
      </div>
      <div className="w-25 h-25  border border-transparent  hover:scale-110">
        <div className="w-[65px] h-[65px] border border-transparent mx-auto">
          <NavLink to="/gift-code">
            <img src={gift} alt="" />
          </NavLink>
        </div>
        <NavLink to="/gift-code">
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">
            کد های تخفیف
          </p>
        </NavLink>
      </div>
      <div className="w-25 h-25 border border-transparent  hover:scale-110">
        <div className="w-[65px] h-[65px] border border-transparent mx-auto">
          <NavLink to="/support">
            <img src={support} alt="" />
          </NavLink>
        </div>
        <NavLink to="/support">
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">
            پشتیبانی 24/7
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroItems;
