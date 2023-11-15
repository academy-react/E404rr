import FavCourses from "../FavCourses/FaveCourses";
import Footer from "../../components/common/footer/Footer";
import Teachers from "../../components/Teachers/Teachers";
import LastArticles from "../LastArticles/LastArticles";
import HeroSection from "../../components/LandingTop/HeroSection";

import CoursesLogo from "../../components/LandingTop/CoursesLogo";
import LastCourses from "../../components/LastCourses/LastCourses";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { rgb } from "@react-spring/shared";
const Landing = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const ColorRgb = "rgb(22, 163 ,74)";
  // const { id } = useParams();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await new Promise((resolve) => setTimeout(resolve, 1000));

  //       const result = { id, otherData: "..." };
  //       setData(result);
  //     } catch (error) {
  //       console.error("error fetching data :", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // });
  return (
    <>
      <div className=" w-full xl:mx-auto h-auto">

          
            <HeroSection />
            <CoursesLogo />

            <LastCourses />

            <Teachers />

            <LastArticles />
            <Footer />
          
        
      </div>
    </>
  );
};

export default Landing;
