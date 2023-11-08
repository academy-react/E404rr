import React from "react";
import lamp from "../../../assets/img/lamp.png";

const WorkingTime = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <img className="w-[50px]" src={lamp} alt="" />
        <p className="text-4xl font-black">ساعت کاری</p>
      </div>
      <div className="flex flex-col gap-4 mt-3 bg-[#609fa2] px-12 py-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <p>شنبه تا چهارشنبه :</p>
          <p>8:00 - 17:00</p>
        </div>
        <div className="flex items-center justify-between">
          <p>پنج شنبه:</p>
          <p>8:00 - 15:00</p>
        </div>
        <div className="flex items-center justify-between">
          <p>جمعه :</p>
          <p>تعطیل</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingTime;
