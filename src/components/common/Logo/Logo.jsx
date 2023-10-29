import React from "react";
import logo3 from "../../../assets/img/logo3.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="h-full p-2 max-md:w-[60%]">
      <NavLink className="h-full flex items-center justify-between" to="/">
        <img className="w-12 h-12" src={logo3} alt="" />
      </NavLink>
    </div>
  );
};

export default Logo;
