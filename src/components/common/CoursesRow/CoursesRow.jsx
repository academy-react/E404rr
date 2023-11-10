import axios from "axios";
import CourseCard from "../CourseCard/CourseCard";
import React, { useState } from "react";
import { useEffect } from "react";
import { getLastCoursesList } from "../../../core/services/api/course";

const CoursesRow = () => {

  const [lastCoursesList , setLastCoursesList] = useState([]);

  const getList = async () => {
    const courses = await getLastCoursesList(5);
    setLastCoursesList(courses.slice(-4))  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
      <>
            <div className="flex container max-w-[1250px] mx-auto justify-between items-center flex-wrap max-lg:justify-center mb-16 mt-10">
          {lastCoursesList.map((item , index) => {
              return <CourseCard key={index} title={item.title} desc={item.desc} teacherName={item.teacherName} cost={item.cost} /> ;
      
          })}
    </div>
      
      
      </>
  );
};

export default CoursesRow;
