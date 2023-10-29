import React from "react";
import ConsultationForm from "./ConsultationForm";
import img from "../../assets/img/consultational.jpg";

const ConsultaitionReq = () => {
  return (
    <div className="container max-w-[1250px] mx-auto flex xl:justify-between justify-center items-center">
      <div className="xl:w-1/2 w-full text-[#323e73]">
        <p className="text-center text-4xl font-extrabold mt-8">
          در کنار شما هستیم
        </p>
        <p className="text-center text-2xl mt-5">
          مشاوره و ثبت نام در دوره های
          <span className="text-rose-700">!E404rr</span>
        </p>
        <ConsultationForm />
      </div>
      <div className="w-1/2 hidden xl:block">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ConsultaitionReq;
