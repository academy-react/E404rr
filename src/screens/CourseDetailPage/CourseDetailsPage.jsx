import Footer from "../../components/common/footer/Footer";
import flutter from "../../assets/img/flutter.png";
import CourseHero from "./CourseHero";
import CourseDetailBody from "./CourseDetailBody";

const CourseDetailsPage = () => {
  return (
    <>
      <div className="mb-10 max-w-[1250px] mx-auto">
        <CourseHero />
        <CourseDetailBody />
      </div>
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
