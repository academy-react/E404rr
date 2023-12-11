import React, { useEffect, useState } from 'react'
import { MyCursesItems } from '../../components/Sidebar/MyCurses/MyCursesItems'
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
import { Card3 } from '../../components/common/Card/Card3';
import { GetMyCoursesStudent } from '../../core/services/api/UserPanel/GetAllCoursesStudent';
import { Card2 } from '../../components/common/Card/Card2';
import { Card } from '../../components/common/Card/Card';
import { getAllCourses, getAllCoursesTotal } from '../../core/services/api/AllCourses';
import { PostCoursesReserve } from '../../core/services/api/PostCourseReserve';
const AllCourses = () => {


    const [CoursesList , setCoursesList] = useState([]);
    const getList = async () => {
      const courses = await getAllCourses();
      setCoursesList(courses)  
    } 
    useEffect(() =>{
        getList();
    },[]);



    const [CoursesList2 , setCoursesList2] = useState([]);
    const getList2 = async () => {
      const courses = await getAllCoursesTotal();
      setCoursesList2(courses)  
    } 
    useEffect(() =>{
        getList2();
    },[]);
    
  return (
        <>
                <MyCursesItems  title={"مجموع دوره ها"} total={CoursesList2}/>
        <div className='border flex flex-wrap  min-h-[300px] border-transparent gap-x-[30px] mr-[10px] mt-[50px]' data-aos="fade-up">
        <div className='xl:w-[850px] min-h-[350px] shadow-xl rounded-xl  bg-[#F3FCF8] bg-opacity-[26%] xl:mx-auto
          lg:w-[650px] lg:mr-[30px]'>
            {/* top */}
            <div className='h-[60px] border text-gray-500   bg-[#61CE70] bg-opacity-[15%] border-transparent '>
                <div className='mt-4'>
                  <span className="xl:mr-[50px] inline-block 
                   lg:mr-[30px] md:mr-[50px] mr-[25px] ">تصویر </span>
                  <span className="xl:mr-[80px] inline-block
                      lg:mr-[70px] md:mr-[70px] mr-[45px]">نام دوره</span>
                  <span className="xl:mr-[85px] inline-block
                      lg:mr-[55px]  md:mr-[70px] mr-[70px]">استاد</span>
                  <span className="xl:mr-[50px] lg:inline-block
                      lg:mr-[25px] hidden">تاریخ شروع</span>
                  <span className="xl:mr-[45px] lg:inline-block
                      lg:mr-[30px] hidden">تاریخ پایان</span>
                  <span className="xl:mr-[75px] inline-block
                      lg:mr-[60px]  md:mr-[60px] mr-[40px]">قیمت</span>
                </div>
            </div>
            <div >
                {/* items */}


              {CoursesList.map((item , index) => {
                return(
                     <>
                                      <Card 
                                      teacheName={item.teacherName}
                                      courseTitle={item.courseTitle} 
                                      lastUpdate={item.lastUpdate} 
                                      courseId={item.courseId}
                                      teacherId={item.teacherId}
                                      title={item.title}
                                      cost={item.cost}
                                      />
                     </>
                )
            })}

            </div>
        </div>
        </div>
        
        
        </>
  )
}

export default AllCourses