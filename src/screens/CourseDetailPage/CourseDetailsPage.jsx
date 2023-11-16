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
import { GetCourseById } from "../../core/services/api/getCoursestopbyId";


const CourseDetailsPage = () => {

  // const [lastCoursesList , setLastCoursesList] = useState([]);
  // const params = useParams();

  // const getList = async () => {
  //   const courses = await getLastCoursesList(5);
  //   setLastCoursesList(courses.slice(-4))  
  // } 
  // useEffect(() =>{
  //     getList();
  // },[]);

  const [course, setcours] = useState([]);
  const { _id } = useParams();
  const getCourseApibyid = async () => {
    const courses = await GetCourseById(_id);
    setcours(courses);
    console.log(courses);
    console.log(_id);
  };

  useEffect(() => {
    getCourseApibyid();
  }, []);
  return (
    <>
      <div className="mb-10 max-w-[1250px] mx-auto" data-aos="fade-up">

        <p>title : {course?.teacherName}</p>
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
