import CourseDescriptionText from "./CourseDescriptionText";
import CourseDetailsImg from "./CourseDetailsImg";
import styles from "./CourseDetails.module.css";

const CourseDescription = () => {
  return (
    <div className={` w-1/2 rounded-xl ${styles.description} `}>
      <CourseDetailsImg />
      <CourseDescriptionText />
    </div>
  );
};

export default CourseDescription;
