import React from "react";
import flutter from "../../assets/img/flutter.png";
import AboutCourse from "./AboutCourse";

const CourseHero = () => {
  return (
    <div className=" bg-[#1c543b] px-20 rounded-3xl" data-aos="fade-up">
      <div className=" flex items-center justify-between ">
        <div className="max-w-[35%] ">
          <h2 className="text-5xl my-4 font-black text-white">متخصص فلاتر</h2>
          <p className="text-[#ddd] my-3">
            یک فریم‌ورک برای توسعه در چند پلتفرم
          </p>
          <button className="bg-[#f3fcf8] px-4 py-3 mt-8 rounded-2xl">
            <p>ثبت نام در دوره</p>
          </button>
        </div>
        <div className="max-w-[60%] flex items-center justify-center">
          <img src={flutter} alt="" />
        </div>
      </div>
      <AboutCourse />
    </div>
  );
};

export default CourseHero;
