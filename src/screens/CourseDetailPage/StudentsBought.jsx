import React from "react";
import Slider from "../../components/Teachers/Slider";
import CourseSlider from "./CourseSlider";

const StudentsBought = () => {
  return (
    <div className="my-20">
      <div className="text-2xl mb-8" data-aos="fade-up">دانش آموزان اینها را نیز خریدند </div>
      <div className="mt-5">
        <CourseSlider />
      </div>
    </div>
  );
};

export default StudentsBought;
