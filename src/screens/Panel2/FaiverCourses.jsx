import React from 'react'
import { MyCursesItems } from '../../components/Sidebar/MyCurses/MyCursesItems'
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
import { Card3 } from '../../components/common/Card/Card3';
import { Card4 } from '../../components/common/Card/Card4';
import { useState } from 'react';
import { useEffect } from 'react';
import { GetMyFiver } from '../../core/services/api/UserPanel/GetMyFaiverit';

const FaiverCourses = () => {

    
  const [CoursesList , setCoursesList] = useState([]);
  const getList = async () => {
    const courses = await GetMyFiver();
    setCoursesList(courses)  
  } 
  useEffect(() =>{
      getList();
  },[]);

  return (
    <>  

      

        <MyCursesItems/>
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
                      lg:mr-[60px]  md:mr-[60px] mr-[40px]"></span>
                </div>
            </div>
            <div >
                {/* items */}
   


              {CoursesList.map((item , index) => {
                return(
                     <>
                                      <Card4 
                                      favoriteId={item.favoriteId}
                                      teacheName={item.teacheName}
                                      courseTitle={item.courseTitle} 
                                      lastUpdate={item.lastUpdate} 
                                      courseId={item.courseId}
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

export  {FaiverCourses}