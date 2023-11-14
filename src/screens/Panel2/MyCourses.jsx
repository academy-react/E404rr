import React from 'react'
import { MyCursesItems } from '../../components/Sidebar/MyCurses/MyCursesItems'
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";

const MyCourses = () => {
  return (
    <>
        <MyCursesItems/>
        <div className='border flex flex-wrap max-w-[1000px] border-transparent gap-x-[30px] mt-[30px] mr-[30px]'>
            <CourseCard />
            <CourseCard/>
            <CourseCard />
            <CourseCard/>
            <CourseCard />
            <CourseCard/>
            <CourseCard />
            <CourseCard/>
            <CourseCard />
            <CourseCard/>

        </div>
    </>
  )
}

export default MyCourses