import axios from "axios";
import CourseCard from "../CourseCard/CourseCard";
import React, { useState } from "react";
import { useEffect } from "react";

const CoursesRow = () => {

  const [lastCoursesList , setLastCoursesList] = useState([]);

  const getLastCoursesList = async () => {
    console.log("Fetching started ...");
    //url => https://api-academy.iran.liara.run/api/Home/GetCoursesTop?Count=5

    const result = await axios.get(
      "https://api-academy.iran.liara.run/api/Home/GetCoursesTop?Count=4"
    );
    console.log(result.data);
    setLastCoursesList(result.data)
  }
  useEffect(() =>{
      getLastCoursesList();
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
