import React from "react";
import TextInput from "../../components/common/TextInput";
import searchImg from "../../assets/img/search.svg";

const Part5 = () => {
  return (
    <div className="bg-[#f3fcf8] container max-w-[1250px] mx-auto rounded-lg py-3 px-10 flex justify-start">
      <div className="relative  md:w-[450px] ">
        <TextInput type="text" placeholder="جستجو مقاله های مختلف..." />
        <img
          src={searchImg}
          onClick={(v) => console.log(v)}
          className="absolute left-0 top-1/2 w-[20px] ml-4 -translate-y-1/2 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Part5;
