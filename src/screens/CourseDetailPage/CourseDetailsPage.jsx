import Footer from "../../components/common/footer/Footer";
import flutter from "../../assets/img/flutter.png";
import CourseHero from "./CourseHero";
import CourseDetailBody from "./CourseDetailBody";
import WillLearn from "../../components/common/CourseCard/WillLearn";
import CourseRequirements from "./CourseRequirements";
import StudentsBought from "./StudentsBought";

const CourseDetailsPage = () => {
  return (
    <>
      <div className="mb-10 max-w-[1250px] mx-auto">
        <CourseHero />
        <WillLearn />
        <CourseDetailBody />
        <CourseRequirements />
        <StudentsBought />
      </div>
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
