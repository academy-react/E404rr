import React from "react";
import logo3 from "../../../assets/img/logo3.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="h-full p-2">
      <NavLink to="/">
        <img className="w-full h-full" src={logo3} alt="" />
      </NavLink>
    </div>
  );
};

export default Logo;
