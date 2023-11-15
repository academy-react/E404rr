import React from "react";

const CourseRequirements = () => {
  return (
    <div className="flex flex-col mt-10 border-2 border-[#ccc] rounded-3xl px-10 py-8" data-aos="fade-up">
      <p className="text-2xl"> نیاز مندی های دوره</p>
      <ul className="mt-4 flex flex-col gap-2 list-disc">
        <li>رایانه ای که دارای امتیازات ادمین است</li>
        <li>10 گیگابایت فضای خالی روی هارد دیسک خود داشته باشید.</li>
        <li>
          اگرچه می‌توانید برنامه‌های iOS را روی رایانه‌های ویندوزی با Flutter
          بسازید، اما اگر می‌خواهید آن را آزمایش کنید، به مک نیاز دارید.
        </li>
      </ul>
    </div>
  );
};

export default CourseRequirements;
