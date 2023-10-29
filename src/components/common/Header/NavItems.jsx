import React from "react";
import { NavLink } from "react-router-dom";

const activeClass = ({ isActive }) =>
  isActive ? "bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl" : "";

const NavItems = () => {
  return (
    <>
      <NavLink className={activeClass} to="/Course">
        <li>دوره ها</li>
      </NavLink>
      <NavLink className={activeClass} to="/introducing-teachers">
        <li>معرفی مدرسین</li>
      </NavLink>
      <NavLink className={activeClass} to="/blog">
        <li>بلاگ</li>
      </NavLink>

      <NavLink className={activeClass} to="/contact-us">
        <li>تماس با ما</li>
      </NavLink>
      <NavLink className={activeClass} to="/about-us">
        <li>درباره ما</li>
      </NavLink>
    </>
  );
};

export default NavItems;
