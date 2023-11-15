import React from "react";
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
import { useEffect } from "react";
import { getAllCourses } from "../../core/services/api/AllCourses";
import { useState } from "react";
import { CourseCardForAllCourse } from "../../components/common/CourseCard/CourseCardForAllCourse";
const AllCourseCountainer = () => {

  const [CoursesList , setCoursesList] = useState([]);
  const getList = async () => {
    const courses = await getAllCourses();
    setCoursesList(courses)  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
    <div className="flex flex-wrap max-w-[900px] items-start justify-between mt-8" data-aos="fade-up">
        {CoursesList.map((item , index) => {
                return(
                  <CourseCardForAllCourse 
                  key={index} id={item.id} title={item.title} desc={item.desc} teacherName={item.teacherName} cost={item.cost} likeCount={item.likeCount}
                  />
                )
        })}
    </div>
  );
};

export  {AllCourseCountainer}
