import React from 'react'
import { MyCursesItems } from '../../components/Sidebar/MyCurses/MyCursesItems'
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
import { Card3 } from '../../components/common/Card/Card3';
import { Card4 } from '../../components/common/Card/Card4';
import { useState } from 'react';
import { useEffect } from 'react';
import { GetMyFiver, GetMyFiverNews, GetMyFiverNewsTotal } from '../../core/services/api/UserPanel/GetMyFaiverit';
import { Card6 } from '../../components/common/Card/Card6';

const FaiverNews = () => {

    
  const [CoursesList , setCoursesList] = useState([]);
  const getList = async () => {
    const courses = await GetMyFiverNews();
    setCoursesList(courses)  
  } 
  useEffect(() =>{
      getList();
  },[]);

  const [CoursesList2 , setCoursesList2] = useState([]);
  const getList2 = async () => {
    const courses = await GetMyFiverNewsTotal();
    setCoursesList2(courses)  
  } 
  useEffect(() =>{
      getList2();
  },[]);


  return (
    <>  

      

        <MyCursesItems total={CoursesList2} title={"خبر های مورد علاقه"}/>
        <div className='border flex flex-wrap  min-h-[300px] border-transparent gap-x-[30px] mr-[10px] mt-[50px]' data-aos="fade-up">
        <div className='xl:w-[850px] min-h-[350px] shadow-xl rounded-xl  bg-[#F3FCF8] bg-opacity-[26%] xl:mx-auto
          lg:w-[650px] lg:mr-[30px]'>
            {/* top */}
            <div className='h-[60px] border text-gray-500   bg-[#61CE70] bg-opacity-[15%] border-transparent '>
                <div className='mt-4'>
                  <span className="xl:mr-[50px] inline-block 
                   lg:mr-[30px] md:mr-[50px] mr-[25px] ">تصویر </span>
                  <span className="xl:mr-[80px] inline-block
                      lg:mr-[70px] md:mr-[70px] mr-[45px]">نام خبر</span>
                  <span className="xl:mr-[85px] inline-block
                      lg:mr-[55px]  md:mr-[70px] mr-[70px]"> تعداد بازدید</span>
                  <span className="xl:mr-[50px] lg:inline-block
                      lg:mr-[25px] hidden"> تعداد لایک</span>
                  <span className="xl:mr-[45px] lg:inline-block
                      lg:mr-[30px] hidden"> اخرین اپدیت</span>
                </div>
            </div>
            <div >
                {/* items */}
    


              {CoursesList.map((item , index) => {
                return(
                     <>
                                      <Card6
                                          title={item.title}
                                          currentView={item.currentView}
                                          currentLikeCount={item.currentLikeCount}
                                          updateDate={item.updateDate}
                                          favoriteId={item.favoriteId}
                                          newsId={item.newsId}
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

export  {FaiverNews}