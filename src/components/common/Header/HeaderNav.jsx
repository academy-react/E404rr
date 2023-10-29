import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";

const HeaderNav = () => {
  return (
    <div className="w-[65%] h-full hidden md:block text-[17px] max-lg:text-[12px] max-lg:font-medium font-bold">
      <ul className="flex w-full gap-10 items-center h-full text-[#323E73]">
        <NavItems />
      </ul>
    </div>
  );
};

export default HeaderNav;
