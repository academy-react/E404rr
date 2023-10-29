import React from "react";
import { TypeAnimation } from "react-type-animation";

const SiteIntro = () => {
  return (
    <div className="h-20">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          1000,
          "آموزش برنامه نویسی ، خودآموزی ، ورود به بازار کار ",
        ]}
        wrapper="h2"
        speed={50}
        // style={styles}
        repeat="0"
        className="text-[#323e73] text-center text-[24px] my-6"
        cursor={false}
      />
      <TypeAnimation
        sequence={[" ", 4000, "حرفه ایی شدن رو از امروز شروع کن"]}
        wrapper="h2"
        speed={50}
        // style={styles}
        del
        repeat="0"
        className=" text-[#323e73] text-center font-thin text-[20px] mb-8"
        cursor={false}
      />
      {/* <h2 className=" text-gray-600 text-[24px] mt-10 xl:mr-16 md:mr-[0] mr-16 lg:mr-[260px]">
            آموزش برنامه نویسی,خود آموزیو ورود به بازار کار{" "}
          </h2>
          <p className=" mt-4 mr-[142px] md:mr-[0px] xl:mr-[142px] lg:mr-[260px] text-gray-500 text-[21px]">
            حرفه ای شدن را از امروز شروع کن
          </p> */}
    </div>
  );
};

export default SiteIntro;
