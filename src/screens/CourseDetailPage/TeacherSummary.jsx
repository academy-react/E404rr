import React from "react";
import jobs from "../../assets/img/SteveJobs.jpg";

const TeacherSummary = ({teacherName}) => {
  return (
    <div className="flex bg-[#1c543b] rounded-3xl px-8 py-6 mt-8 text-white">
      <div className="bg-[#1c543b] py-4 px-6  flex flex-col items-center border-l-2 border-[#ccc]">
        <div className="w-28 flex items-center justify-center">
          <img className="rounded-full" src={jobs} alt="" />
        </div>
        <div className="text-center">
          <p className="text-xl my-2">{teacherName} </p>
          <button className="bg-[#f3fcf8] text-black px-4 py-2 rounded-xl mt-3">
            رزومه و نمونه تدریس
          </button>
        </div>
      </div>
      <div className="px-8 py-8 leading-10">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </div>
    </div>
  );
};

export default TeacherSummary;
