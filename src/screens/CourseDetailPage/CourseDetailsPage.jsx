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
  // const [Course , setCourse] = useState([]);
  const [data, setData] = useState([]);
  const UserId = useParams().id;
  const GetCourseApiById = async () => {
    const items = await GetCourseById(UserId);
    setData(items);
    console.log("see course: " + data);
  };
  useEffect(() => {
    GetCourseApiById();
  }, [UserId]);
  return (
    <>
      {UserId ? (
        <>
          <div className="mb-10 max-w-[1250px] mx-auto" data-aos="fade-up">
            <p>title : {data.title}</p>
            <p>title : {data.cost}</p>
            <p>title : {data.courseId}</p>

            <CourseHero />
            <WillLearn />
            <CourseDetailBody />
            <CourseRequirements />
            <StudentsBought />
          </div>
          <Footer />
        </>
      ) : (
        <p> چیزی وجود ندارد</p>
      )}
    </>
  );
};

export default CourseDetailsPage;
