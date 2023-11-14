import React from "react";
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
import { useEffect } from "react";
import { getAllCourses } from "../../core/services/api/AllCourses";
import { useState } from "react";
const CourseCountainer = () => {

  const [CoursesList , setCoursesList] = useState([]);
  const getList = async () => {
    const courses = await getAllCourses();
    setCoursesList(courses)  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
    <div className="flex flex-wrap max-w-[900px] items-start justify-between mt-8">
        {CoursesList.map((item , index) => {
                return(
                  <CourseCard 
                  key={index} id={item.id} title={item.title} desc={item.desc} teacherName={item.teacherName} cost={item.cost} likeCount={item.likeCount}
                  />
                )
        })}
    </div>
  );
};

export default CourseCountainer;
