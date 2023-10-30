import React from "react";

const ConsultationForm = () => {
  return (
    <div>
      <div className="w-1/2 mt-8 mx-auto">
        <label htmlFor="name" className="px-6 text-lg font-bold">
          نام شما
        </label>
        <input
          className="focus:outline-none w-full mx-auto px-6 py-2 my-5 shadow-md focus:placeholder:opacity-0 bg-[#fbfbfb] shadow-gray-200 rounded-lg placeholder-[#323E73] placeholder:text-[13px]"
          type="text"
          name=""
          id="name"
          placeholder="نام شما ..."
        />
      </div>
      <div className="w-1/2 mt-8 mx-auto">
        <label htmlFor="phoneNumber" className="px-6 text-lg font-bold">
          شماره موبایل
        </label>
        <input
          className="focus:outline-none w-full mx-auto px-6 py-2 my-5 shadow-md focus:placeholder:opacity-0 bg-[#fbfbfb] shadow-gray-200 rounded-lg placeholder-[#323E73] placeholder:text-[13px]"
          type="text"
          name=""
          id="phoneNumber"
          placeholder="0912XXXXXXX"
        />
      </div>
      <div className="mt-8 w-1/2 mx-auto">
        <label htmlFor="time" className="text-lg px-6 font-bold">
          چه ساعتی با شما تماس بگیریم ؟
        </label>
        <div>
          <input
            className="focus:outline-none w-full mx-auto px-6 py-2 my-5 shadow-md focus:placeholder:opacity-0 bg-[#fbfbfb] shadow-gray-200 rounded-lg placeholder-[#323E73] placeholder:text-[13px]"
            type="text"
            name=""
            id="time"
            placeholder="9-21"
          />
        </div>
      </div>
      <div className="px-6 mt-7 py-3 mx-auto bg-[#23A455] text-white rounded-lg w-[30%] text-center cursor-pointer ">
        ثبت درخواست
      </div>
    </div>
  );
};

export default ConsultationForm;
