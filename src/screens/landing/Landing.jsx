import FavCourses from "../FavCourses/FaveCourses";
import Footer from "../../components/common/footer/Footer";
import Teachers from "../../components/Teachers/Teachers";
import LastArticles from "../LastArticles/LastArticles";
import { Part2 } from "../../components/LandingTop/Part2";
import { Part4 } from "../../components/LandingTop/Part4";
import { Part3 } from "../../components/LandingTop/Part3";

const Landing = () => {
  return (
    <>
          <div className="xl:w-[1250px] w-full xl:mx-auto h-auto  ">
            <Part2/>
            <Part3/>
            <Part4/>
            <LastArticles />
            <Teachers />
            <FavCourses />
           <Footer />
      </div>
    </>
  );
};

export default Landing;
