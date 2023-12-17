import React, { useEffect, useState } from "react";
import NavLink from "../common/NavLink/NavLink";
import { BestCoursesApi, getLastCoursesList } from "../../core/services/api/course";
import CourseCard from "../common/CourseCard/CourseCardForLanding";

const BestCourses = () => {
    const [lastCoursesList , setLastCoursesList] = useState([]);

    const getList = async () => {
      const courses = await BestCoursesApi();
      setLastCoursesList(courses.slice( length , 4))  
    } 
    useEffect(() =>{
        getList();
    },[]);
  return (
    <>
      <NavLink title="بهترین دوره ها" path="مشاهده همه دوره ها" url="/Course" />

      <div className="flex container max-w-[1250px] mx-auto justify-between items-center flex-wrap max-lg:justify-center mb-16 mt-10">
          {lastCoursesList.map((item , index) => {
                    return(
                           <>
               <CourseCard key={index} tumbImageAddress={item.tumbImageAddress} dissLikeCount={item.dissLikeCount} title={item.title} id={item.courseId} desc={item.desc} teacherName={item.teacherName} cost={item.cost} likeCount={item.likeCount} /> 
                           </>
                    )
          })}
    </div>
    </>

  );
};

export { BestCourses };
