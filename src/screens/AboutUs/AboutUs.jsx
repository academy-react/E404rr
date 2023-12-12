import React, { useState } from "react";
import python from "../../assets/img/python.png";
import about1 from "../../assets/img/about1.png";
import about2 from "../../assets/img/about2.png";
import Collapse from "./Collapse";
import Footer from "../../components/common/footer/Footer";
import { useEffect } from "react";
import { ReportHome } from "../../core/services/api/ReportHome";

const AboutUs = () => {
  const [Report , setReport] = useState([])

  const AddReport = async () =>{
    const Status = await ReportHome()
    setReport(Status)
  }

  useEffect(() => {
    AddReport()
  }, []);
  return (
    <>
      <div className="container max-w-[1250px] mx-auto px-10 mb-20"   data-aos="fade-up">
        <div className="flex items-center justify-between"   data-aos="fade-up">
          <div className="w-1/2">
            <div className="flex items-center">
              <div className="w-[70px] h-[70px] ">
                <img className="w-full h-full" src={python} alt="" />
              </div>
              <p className="text-4xl text-[#323e73] font-[900] mx-3">
                درباره ما
              </p>
            </div>
            <p className="text-[#323e73] mt-3 text-lg">
              <span>!E404rr</span> ، جایی برای پیشرفت ، رشد و یادگیری شما
            </p>
            <p className="text-[#323e73] w-[75%] mt-2 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="w-1/2 rounded-lg hidden lg:block">
            <img className="w-full rounded-lg" src={about1} alt="" />
          </div>
        </div>
        <div   data-aos="fade-up"
         className="container flex items-center justify-between  bg-[#f3fcf8] rounded-3xl px-28 py-6 mt-10 text-center text-[#323e73] font-bold ">
          <div>
            <p className="text-2xl my-5 ">تعداد دوره ها</p>
            <p className="text-lg">{Report.courseCount}</p>
          </div>
          <div>
            <p className="text-2xl my-5 "> تعداد خبر ها</p>
            <p className="text-lg">{Report.newsCount}</p>
          </div>
          <div>
            <p className="text-2xl my-5 ">تعداد دانشجو</p>
            <p className="text-lg">{Report.studentCount}</p>
          </div>
          <div>
            <p className="text-2xl my-5 "> تعداد معلم ها</p>
            <p className="text-lg">{Report.teacherCount}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-20"   data-aos="fade-up">
          <div className="w-1/2 px-10">
            <div>
              <img className="w-full" src={about2} alt="" />
            </div>
          </div>
          <div className=" w-1/2  ">
            <div className="flex items-center mb-4">
              <div className="w-[70px] h-[70px] ">
                <img className="w-full h-full" src={python} alt="" />
              </div>
              <p className="text-4xl text-[#323e73] font-[900] text-right mx-3">
                سوالات متداول
              </p>
            </div>
            <p className="text-[#323e73] text-md  mb-10">
              دلایلی که میتوانید با خیال راحت به ما اعتماد کنید
            </p>
            <Collapse />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
