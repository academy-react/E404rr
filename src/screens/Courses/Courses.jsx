import React from "react";
import CourseNav from "./CourseNav";
import CourseFilter from "./CourseFilter";
import Footer from "../../components/common/footer/Footer";
import { AllCourseCountainer } from "./AllCourseCountainer";




const Courses = () => {
  
  
 


  return (
    <>
      <CourseNav />
      <div className="container max-w-[1255px] mx-auto flex justify-between items-start">
        <CourseFilter />
        <AllCourseCountainer/>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
