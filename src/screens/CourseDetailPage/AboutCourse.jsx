import React from "react";

const AboutCourse = ({teacherName , courseLevelName , courseStatusName}) => {
  return (
    <div className="flex items-center justify-between px-10   py-10 text-center text-white">
      <div>
        <p className="text-xl py-3">  وضعیت شروع دوره</p>
        {/* <p className="text-sm">بلافاصله بعد از ثبت نام</p> */}
        <p className="text-sm"> {courseStatusName}   </p>

      </div>
      <div>
        <p className="text-xl py-3">قیمت دوره</p>
        <p className="text-sm">2,000,000 تومان</p>
      </div>
      <div>
        <p className="text-xl py-3">سطح دوره</p>
        {/* <p>90 ساعت آموزش</p> */}
        <p>{courseLevelName}</p>
      </div>
      <div>
        <p className="text-xl py-3">برنامه زمانی پیشنهادی</p>
        <p className="text-sm">۶ ماه با روزی ۱ ساعت وقت گذاشتن</p>
      </div>
      <div>
        <p className="text-xl py-3">مدرس :  {teacherName}</p>
        {/* <p className="text-sm">بیکار</p> */}
      </div>
    </div>
  );
};

export default AboutCourse;
