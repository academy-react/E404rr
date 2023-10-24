import FavCourses from "../FavCourses/FaveCourses";
import Footer from "../../components/common/footer/Footer";
import Teachers from "../../components/Teachers/Teachers";
import LastArticles from "../LastArticles/LastArticles";
import HeroSection from "../../components/LandingTop/HeroSection";

import CoursesLogo from "../../components/LandingTop/CoursesLogo";
import LastCourses from "../../components/LastCourses/LastCourses";

const Landing = () => {
  return (
    <>
      <div className=" w-full xl:mx-auto h-auto">
        <HeroSection />
        <CoursesLogo />
        <LastCourses />
        <LastArticles />
        <Teachers />
        <FavCourses />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
