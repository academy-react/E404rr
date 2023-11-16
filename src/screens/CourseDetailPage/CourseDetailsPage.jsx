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
import axios from "axios";


const CourseDetailsPage = () => {
  const [course, setCourse] = useState({});
  const params = useParams();

  const getCourseById = async () => {
    try {
      const courseId = params.id; // یا هر نام پارامتری که در آدرس مسیر دوره دارید
      const courseData = await GetCourseById(courseId);
      setCourse(courseData);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    getCourseById();
  }, [params.id]);

  // ... بقیه قطعه کد

  return (
    <>
      <div className="mb-10 max-w-[1250px] mx-auto" data-aos="fade-up">
        <CourseHero />
        {/* از متغیر course برای نمایش اطلاعات دوره استفاده کنید */}
          <p>{params.title}</p>
        {/* سایر اطلاعات دوره را نمایش دهید */}
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