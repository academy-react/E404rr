import React from "react";

const Part5 = () => {
  return (
    <div className="xl:w-[1250px] h-[70px] w-full bg-[#f3fcf8] xl:mx-auto mt-[70px] border border-transparent flex">
      <div className="xl:w-auto h-[50px]  border border-transparent xl:mr-[50px] mt-[10px]  relative ">
        <input
          className="border border-transparent pr-5 npm  caret-green-600 focus:placeholder:opacity-0  placeholder-green-600 xl:w-[582px] xl:mr-0 mr-3 h-full outline-none rounded-xl w-[300px]  md:w-[400px] lg:w-[650px] "
          type="search"
          placeholder="جستوجو دوره های مختلف..."
        />
        <div className="absolute top-[10px] lg:top-[12px] xl:top-[10px] left-[10px] md:left-[10px] lg:left-[15px] xl:left-[10px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Part5;
