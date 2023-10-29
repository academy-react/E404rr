import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";

const HeaderNav = () => {
  return (
    <div className="w-[65%] h-full hidden md:block text-[17px] max-[940px]:text-[15px] max-[900px]:text-[13px] max-lg:font-medium font-bold">
      <ul className="flex w-full xl:gap-10 max-[1045px]:gap-7 gap-5 items-center h-full text-[#323E73]">
        <NavItems />
      </ul>
    </div>
  );
};

export default HeaderNav;
