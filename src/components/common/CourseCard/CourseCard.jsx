import CourseImg from "./CourseImg";
import CourseInfo from "./CourseInfo";
import CourseDetails from "./CourseDetails";


import styles from "./CourseCard.module.css";

const CourseCard = ({title , desc , teacherName , cost}) => {

  return (
  
      <div
        className={`${styles.courseCard} hover:scale-105     w-[287.5px]  max-lg:mx-10 max-xl:my-10 rounded mb-8 `}
      >
        <CourseImg />
        <CourseInfo  title={title} teacherName={teacherName} />
        <CourseDetails  cost={cost}/>
      </div>

  );
};

export default CourseCard;
