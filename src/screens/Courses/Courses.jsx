import React from "react";
import CourseNav from "./CourseNav";
import CourseFilter from "./CourseFilter";
import Footer from "../../components/common/footer/Footer";
import { AllCourseCountainer } from "./AllCourseCountainer";




const Courses = () => {
  
  
 


  return (
    <>
      <CourseNav />
      <div className="container max-w-[1255px] mx-auto flex-wrap flex justify-between items-start">
      <CourseFilter />
        <AllCourseCountainer/>
 
        <ul className="border h-auto flex mt-[100px] mb-32 w-full justify-center border-transparent mr-[50px] ">
        <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center "> {"<"} </li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">1</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">2</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">{"..."}</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">10</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">  {">"} </li>

         </ul>
      </div>
      
      <Footer />
    </>
  );
};

export default Courses;
