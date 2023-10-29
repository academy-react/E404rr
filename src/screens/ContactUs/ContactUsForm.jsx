import React from "react";

const ContactUsForm = () => {
  return (
    <div className="w-[45%] px-8">
      <p className=" font-bold text-lg">
        پیشنهادات، انتقادات، یا شکایات خود را برای ما می توانید ارسال کنید.
      </p>
      <input
        className="focus:outline-none w-full px-6 py-2 my-5 shadow-md focus:placeholder:opacity-0 bg-[#fbfbfb] shadow-gray-200 rounded-lg placeholder-[#323E73]"
        type="text"
        name=""
        id=""
        placeholder="ایمیل شما"
      />
      <textarea
        className="focus:outline-none w-full px-6 py-4 my-5 shadow-md focus:placeholder:opacity-0 bg-[#fbfbfb] shadow-gray-200 rounded-lg placeholder-[#323E73]"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="پیام شما"
      ></textarea>
    </div>
  );
};

export default ContactUsForm;
