import React from "react";
import CourseSummary from "./CourseSummary";
import TeacherSummary from "./TeacherSummary";
import CourseTopics from "./CourseTopics";
import CourseOpinions from "./CourseOpinions";

const CourseDetailBody = () => {
  return (
    <div className=" bg-gradient-to-bl from-[#f3fcf8] text-[#323E73] to-white rounded-3xl px-10 py-8 mt-10">
      <div className="flex items-center   gap-10 ">
        <div className="text-2xl text-[#323E73] font-black">درباره دوره</div>
        <div className="text-2xl text-[#323E73] font-black">مدرس دوره</div>
        <div className="text-2xl text-[#323E73] font-black">سرفصل های دوره</div>
        <div className="text-2xl text-[#323E73] font-black">نظرات</div>
      </div>
      <div className=" ">
        <CourseOpinions />
      </div>
    </div>
  );
};

export default CourseDetailBody;
