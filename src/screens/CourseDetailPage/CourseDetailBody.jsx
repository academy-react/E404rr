import React from "react";
import CourseSummary from "./CourseSummary";
import TeacherSummary from "./TeacherSummary";
import CourseTopics from "./CourseTopics";
import CourseOpinions from "./CourseOpinions";
import { NavLink, Outlet } from "react-router-dom";
const activeClass = ({ isActive}) => 
isActive ? "  text-2xl text-green-600 font-black" : "text-2xl text-[#323E73] font-black" ;



const CourseDetailBody = () => {
  return (
    <div className=" bg-gradient-to-bl from-[#f3fcf8] text-[#323E73] to-white rounded-3xl px-10 py-8 mt-10" data-aos="fade-up">
      <div className="flex items-center   gap-10 ">
        <NavLink to={"/CoursePage/:id"} end className={activeClass} >درباره دوره</NavLink>
        <NavLink to={"/CoursePage/:id/modares"} className={activeClass}>مدرس دوره</NavLink>
        <NavLink to={"/CoursePage/:id/sarfasl"} className={activeClass}>سرفصل های دوره</NavLink>
        <NavLink to={"/CoursePage/:id/comment"} className={activeClass}>نظرات</NavLink>
      </div>
      <div className="">

        
      {/* <CourseSummary /> */}
      {/* <TeacherSummary/> */}
      {/* <CourseTopics/> */}
      {/* <CourseOpinions/> */}
      <Outlet/>
      </div>
    </div>
  );
};

export default CourseDetailBody;
