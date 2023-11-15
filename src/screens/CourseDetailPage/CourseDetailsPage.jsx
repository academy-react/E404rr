import Footer from "../../components/common/footer/Footer";
import flutter from "../../assets/img/flutter.png";
import CourseHero from "./CourseHero";
import CourseDetailBody from "./CourseDetailBody";
import WillLearn from "../../components/common/CourseCard/WillLearn";
import CourseRequirements from "./CourseRequirements";
import StudentsBought from "./StudentsBought";
import React, { useState } from "react";
import { useEffect } from "react";
import { getLastCoursesList } from "../../core/services/api/course";
import { useParams } from "react-router-dom";


const CourseDetailsPage = () => {

  const [lastCoursesList , setLastCoursesList] = useState([]);
  const params = useParams();

  const getList = async () => {
    const courses = await getLastCoursesList(5);
    setLastCoursesList(courses.slice(-4))  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
    <>
      <div className="mb-10 max-w-[1250px] mx-auto">

        <p>title : {params.title}</p>
        <CourseHero />
        <WillLearn />
        <CourseDetailBody />
        <CourseRequirements />
        <StudentsBought />
      </div>
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
