import React from "react";
import lamp from "../../../assets/img/lamp.png";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-lg">
      <div className="flex items-center gap-3">
        <img className="w-[50px]" src={lamp} alt="" />
        <p className="text-4xl font-black">پیوندها</p>
      </div>
      <NavLink to="/">صفحه اصلی</NavLink>
      <NavLink to="/Course"> دوره ها</NavLink>
      <NavLink to="/about-us">درباره ما</NavLink>
      <NavLink to="/contact-us">تماس با ما</NavLink>
    </div>
  );
};

export default FooterLinks;
