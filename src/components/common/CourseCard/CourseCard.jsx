import CourseImg from "./CourseImg";
import CourseInfo from "./CourseInfo";
import CourseDetails from "./CourseDetails";
import {
  useNavigate,
} from "react-router-dom";


import styles from "./CourseCard.module.css";

const CourseCard = () => {

    const navigate = useNavigate();
    const goCourse = () =>{
        navigate("/CoursePage")
      }
  return (
      <button onClick={goCourse} className="text-right">
            <div 
      className={`${styles.courseCard} hover:scale-105 cursor-pointer   w-[287.5px] h-[321.3px] max-lg:mx-10 max-xl:my-10 rounded mb-8 `}
    >
      <CourseImg />
      <CourseInfo />
      <CourseDetails />
    </div>
      </button>
  );
};

export default CourseCard;
