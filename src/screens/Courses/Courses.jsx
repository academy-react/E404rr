import React from "react";
import CourseNav from "./CourseNav";
import CourseFilter from "./CourseFilter";
import CourseCountainer from "./CourseCountainer";
import Footer from "../../components/common/footer/Footer";




const Courses = () => {
  
  
 


  return (
    <>
      <CourseNav />
      <div className="container max-w-[1255px] mx-auto flex justify-between items-start">
        <CourseFilter />
        <CourseCountainer/>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
