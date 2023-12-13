import React, { useEffect, useState } from "react";
import { MyCursesItems } from "../../components/Sidebar/MyCurses/MyCursesItems";
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
import { Card3 } from "../../components/common/Card/Card3";
import {
  DeleteRes,
  GetMyCoursesResrveStudent,
  GetMyCoursesResrveStudentTotal,
  GetMyCoursesStudent,
} from "../../core/services/api/UserPanel/GetAllCoursesStudent";
import { Card4 } from "../../components/common/Card/Card4";
import { Card5 } from "../../components/common/Card/Card5";

const MyResreve = () => {
  const [CoursesList, setCoursesList] = useState([]);
  const getList = async () => {
    const courses = await GetMyCoursesResrveStudent();
    setCoursesList(courses);
  };
  useEffect(() => {
    getList();
  }, []);



  return (
    <>
      {/* <MyCursesItems  title={"دوره های رزرو شده"} total={CoursesList2}/> */}
      <div
        className="border flex flex-wrap  min-h-[300px] border-transparent gap-x-[30px] mr-[10px] mt-[50px]"
        data-aos="fade-up"
      >
        <div
          className="xl:w-[850px] min-h-[350px] shadow-xl rounded-xl  bg-[#F3FCF8] bg-opacity-[26%] xl:mx-auto
          lg:w-[650px] lg:mr-[30px]"
        >
          {/* top */}
          <div className="h-[60px] border text-gray-500   bg-[#61CE70] bg-opacity-[15%] border-transparent ">
            <div className="mt-4">
              <span
                className="xl:mr-[50px] inline-block 
                   lg:mr-[30px] md:mr-[50px] mr-[25px] "
              >
                تصویر{" "}
              </span>
              <span
                className="xl:mr-[80px] inline-block
                      lg:mr-[70px] md:mr-[70px] mr-[45px]"
              >
                نام دوره
              </span>
              <span
                className="xl:mr-[95px] inline-block
                      lg:mr-[55px]  md:mr-[70px] mr-[70px]"
              >
              دانشجو  
              </span>
              <span
                className="xl:mr-[80px] lg:inline-block
                      lg:mr-[25px] hidden"
              >
                تاریخ شروع
              </span>
              <span   className="xl:mr-[90px] lg:inline-block
                      lg:mr-[25px] hidden">
                        وضعیت
              </span>
            </div>
          </div>
          <div>
            {/* items */}

            {CoursesList.map((item, index) => {
              return (
                <>
                  <Card5
                    courseName={item.courseName}
                    studentName={item.studentName}
                    reserverDate={item.reserverDate}
                    accept={item.accept}
                    courseId={item.courseId}
                    reserveId={item.reserveId}
                    teacherName={item.teacherName}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { MyResreve };

// export  {MyResreve}
