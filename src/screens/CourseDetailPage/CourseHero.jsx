import React from "react";
import flutter from "../../assets/img/flutter.png";
import AboutCourse from "./AboutCourse";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostCoursesReserve } from "../../core/services/api/PostCourseReserve";


const CourseHero = ({title , teacherName , courseLevelName , describe , courseStatusName , courseId}) => {

  // const UserId = useParams().id;

  const AddReserve = async () => {
    const userObj = {
      
      
        courseId: courseId
      
      
    }
    const user = await PostCoursesReserve(userObj);
    if (user.success === 200) {
      toast.success('! منتظر تایید باشید با موفقیت ثبت شد', { position: toast.POSITION.TOP_RIGHT });

    }
    else{
        // alert("وارد نشدین")
        toast.error( '!   ثبت نشد : ', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  return (
    
    <div className=" bg-[#1c543b] px-20 rounded-3xl" data-aos="fade-up">
       <ToastContainer  className="absolute"/> 
      <div className=" flex items-center justify-between ">
        <div className="max-w-[35%] ">
          <h2 className="text-5xl my-4 font-black text-white"> {title}</h2>
          {/* <p className="text-[#ddd] my-3">
            یک فریم‌ورک برای توسعه در چند پلتفرم
          </p> */}
          <p className="text-[#ddd] my-3">
            {describe}
          </p>
          <button onClick={AddReserve} className="bg-[#f3fcf8] px-4 py-3 mt-8 rounded-2xl">
            <p>ثبت نام در دوره</p>
          </button>
        </div>
        <div className="max-w-[60%] flex items-center justify-center">
          <img src={flutter} alt="" />
        </div>
      </div>
      <AboutCourse  teacherName={teacherName} courseLevelName={courseLevelName} courseStatusName={courseStatusName}/>
    </div>
  );
};

export default CourseHero;
