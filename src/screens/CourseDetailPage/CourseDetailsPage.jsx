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
      const [Course , setCourse] = useState([]);
      const {_id} = useParams();
      const GetCourseApiById = async () => {
        const course = await GetCourseById(_id);
        setCourse(course);
        console.log("see course: " + course);
      };
      useEffect(() => {
        GetCourseApiById();
      }, [])
  return (
    <>
      <div className="mb-10 max-w-[1250px] mx-auto" data-aos="fade-up">

        <p>title : {Course ?.title}</p>
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
