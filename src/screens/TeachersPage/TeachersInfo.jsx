import React from "react";

const TeachersInfo = () => {
  return (
    <div className="max-lg:mt-10  px-32">
      <p className="text-[#323e73] text-2xl max-lg:text-lg   font-extrabold mb-4">
        دکتر امیر ابراهیمی
      </p>
      <p className="text-[#323e73] text-lg max-lg:text-base font-bold mb-3">
        مدیریت
      </p>
      <p className="text-[#323e73] max-w-[400px] max-lg:text-sm mb-3">
        مدرس در آموزشگاه، مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر،
        مدرس دوره های وب
      </p>
      <p className="text-[#323e73] max-lg:text-sm flex">
        amirEbrahimi.info@gmail.com
        <svg
          className="w-5 mr-2 items-center"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#cccccc"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14.5 9.50012H9.5M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z"
              stroke="#cccccc"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </p>
    </div>
  );
};

export default TeachersInfo;
