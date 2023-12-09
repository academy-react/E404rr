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
import CourseOpinions from "./CourseOpinions";
import { CoursesOption3 } from "./CoursesOption";

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
            <CourseHero
              title={data.title}
              teacherName={data.teacherName}
              courseLevelName={data.courseLevelName}
              describe={data.describe}
              courseStatusName={data.courseStatusName}
              courseId={data.courseId}
            />
            <WillLearn />
            <CourseDetailBody        courseId={data.courseId} teacherName={data.teacherName} />
            <CourseRequirements />
            {/* <StudentsBought /> */}
          </div>
          <CoursesOption3  />
          <Footer />
        </>
      ) : (
        <p> چیزی وجود ندارد</p>
      )}
    </>
  );
};

export default CourseDetailsPage;
