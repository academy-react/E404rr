import bg from "../../assets/img/bg-1.png";
import TextInput from "../common/TextInput";
import HeroItems from "./HeroItems";
import searchImg from "../../assets/img/search.svg";

import SiteIntro from "./SiteIntro";
import { useState } from "react";

const HeroSection = () => {
  // const styles = useSpring({
  //   from: {
  //     opacity: 0,
  //   },
  //   to: {
  //     opacity: 1,
  //   },
  // });


  return (
    <>
      <div className=" max-w-[1250px] mx-auto w-full h-[400px] border border-transparent  rounded-lg xl:mt-9 mt-5 flex flex-row bg-[#f3fcf8] ">
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <SiteIntro />
          <div className="relative  md:w-[450px] mx-auto mt-14">
            <TextInput type="text" placeholder="جستجو مطالب های مختلف..." />
            <img
              src={searchImg}
              onClick={(v) => console.log(v)}
              className="absolute left-0 top-1/2 w-[20px] ml-4 -translate-y-1/2 rounded-md cursor-pointer"
            />
          </div>

          <HeroItems />
        </div>
        <div className="lg:w-1/2 max-lg:hidden">
          <img src={bg} alt="" className="float-left" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
