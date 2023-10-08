import FavCourses from "../FavCourses/FaveCourses";
import Footer from "../../components/common/footer/Footer";
import Teachers from "../../components/Teachers/Teachers";
import LastArticles from "../LastArticles/LastArticles";

const Landing = () => {
  return (
    <>
      <LastArticles />
      <Teachers />
      <FavCourses />
      <Footer />
    </>
  );
};

export default Landing;
