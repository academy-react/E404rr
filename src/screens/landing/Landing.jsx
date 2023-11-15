import FavCourses from "../FavCourses/FaveCourses";
import Footer from "../../components/common/footer/Footer";
import Teachers from "../../components/Teachers/Teachers";
import LastArticles from "../LastArticles/LastArticles";
import HeroSection from "../../components/LandingTop/HeroSection";

import CoursesLogo from "../../components/LandingTop/CoursesLogo";
import LastCourses from "../../components/LastCourses/LastCourses";
import {  useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { rgb } from "@react-spring/shared";
import  {React ,  useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full xl:mx-auto h-auto" data-aos="fade-up" >
      <HeroSection  />
      <CoursesLogo />
      <LastCourses />
      <Teachers />
      <LastArticles  />
      <Footer />  
      
     </div>
  );
};

export default Landing;