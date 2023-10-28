import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="w-[60%] h-full">
      <ul className="flex w-full gap-10 items-center h-full text-[#323E73]">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl"
              : ""
          }
          to="/Course"
        >
          <li>دوره ها</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl"
              : ""
          }
          to="/introducing-teachers"
        >
          <li>معرفی مدرسین</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl"
              : ""
          }
          to="/blog"
        >
          <li>بلاگ</li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl"
              : ""
          }
          to="/Q&A"
        >
          <li>پرسش و پاسخ</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white shadow-md shadow-gray-300 px-2 py-1 rounded-2xl"
              : ""
          }
          to="/about-us"
        >
          <li>درباره ما</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default HeaderNav;
