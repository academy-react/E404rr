import CourseImg from "./CourseImg";
import CourseInfo from "./CourseInfo";
import CourseDetails from "./CourseDetails";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import poster from "../../../assets/img/Landing/02.png";


import styles from "./CourseCard.module.css";
import { AddDeleteLikeForCourses, AddDisLikeForCourses, AddLikeForCourses } from "../../../core/services/api/CourseAddCourseLike";

const CourseCardForAllCourse = ({title , desc , teacherName , cost  , likeCount , id}) => {

  const [isClicked , setIsClicked] = useState(false); 
  const [isClicked2 , setIsClicked2] = useState(false); 

  const [selectedSvg, setSelectedSvg] = useState(null);




  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // const UserId =  id;
  const handleClick = async () => {
    if (selectedSvg !== 1) {
      setSelectedSvg(1);
      setCount(count + 1);
  
      if (selectedSvg === 2) {
        setCount2(count2 - 1);
          
      }
      const user = await AddLikeForCourses(id);
    } else {
      setSelectedSvg(null);
      setCount(count - 1);
      const user2 = await AddDeleteLikeForCourses()
    }

   
  };

  const handleClick2 = async () => {
    if (selectedSvg !== 2) {
      setSelectedSvg(2);
      setCount2(count2 + 1);

      if (selectedSvg === 1) {
        setCount(count - 1);
   
      }
     const user =  await AddDisLikeForCourses(id)
    } else {
      setSelectedSvg(null);
      setCount2(count2 - 1);
      const user2 = await AddDeleteLikeForCourses()
   
    }
  };

  const navigate = useNavigate();
  const goCourse = () => {
    navigate(`/CoursePage/${id}`);
  };


 
  // const loginUser = async () => {
  //   // console.log(values);
  //   // const userObj = {
  //   //   phoneOrGmail: values.phoneOrGmail,
  //   //   password: values.password,
  //   //   rememberMe: values.rememberMe,
  //   // };
  //   const user = await AddLikeForCourses(id);
  
   
  // }
  return (
  
      <div
        className={`${styles.courseCard} hover:scale-105     w-[287.5px]  max-lg:mx-10 max-xl:my-10 rounded mb-8 `}
        data-aos="fade-up"
      >

<div>
      <img src={poster} alt="" />
    </div>
        {/* <CourseImg /> */}
        {/* <CourseInfo  title={title} teacherName={teacherName}  likeCount={likeCount} /> */}




        <div className="mx-3 mt-3 text-right border border-transparent">
      {/* عنوان */}
      <h3 className="text-[#323E73] text-[15px] mb-4 font-medium	 	">
               {title}
      </h3>
   
      <div className=" flex my-3  flex-row-reverse gap-1 items-center border border-transparent w-auto h-auto">

      <span className="mt-2">{count + likeCount}</span>
        {/*  like */}
        <svg onCl xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-8 h-8  text-gray-600 ${isClicked === 1? 'text-blue-600' : ''}`} onClick={handleClick} >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
   


      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-8 h-8  text-gray-600 ${isClicked2 ? 'text-blue-600' : ''}`}  onClick={handleClick2}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
    </svg>
    <span className="mt-[6px]"> {count2}</span>




    <svg onClick={goCourse} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 ml-[110px] cursor-pointer ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" />
          </svg>
      <span className=" cursor-pointer" onClick={goCourse}>
            مطالعه

      </span>

      </div>
    </div>




        {/* <CourseDetails  cost={cost}  /> */}



        <div className="flex justify-between mx-2 items-center py-3 border-t mt-2">
      <div className="flex items-center">
        <span>
          <svg
            className="w-4 h-4"
            version="1.1"
            id="Слой_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#a8a8a8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect
                id="bg"
                x="-426"
                y="-243"
                display="none"
                fill="#acacac"
                width="544"
                height="455"
              ></rect>{" "}
              <g id="clock">
                <path d="M39.3,27.3L33,33.6V18c0-0.6-0.4-1-1-1s-1,0.4-1,1v18c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.5,0.5C31.7,37,31.9,37,32,37 s0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2l8-8c0.4-0.4,0.4-1,0-1.4S39.7,26.9,39.3,27.3z"></path>{" "}
                <path d="M32,50c-1.9,0-3.5,1.6-3.5,3.5S30.1,57,32,57s3.5-1.6,3.5-3.5S33.9,50,32,50z M32,55c-0.8,0-1.5-0.7-1.5-1.5S31.2,52,32,52 s1.5,0.7,1.5,1.5S32.8,55,32,55z"></path>{" "}
                <path d="M15,33.5c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S16.9,33.5,15,33.5z M15,38.5c-0.8,0-1.5-0.7-1.5-1.5 s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S15.8,38.5,15,38.5z"></path>{" "}
                <path d="M45.5,37c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5s-1.6-3.5-3.5-3.5S45.5,35.1,45.5,37z M49,35.5c0.8,0,1.5,0.7,1.5,1.5 s-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5S48.2,35.5,49,35.5z"></path>{" "}
                <path d="M60.9,14.2c-0.4-2.3-1.7-5.7-5.5-8.4C52.7,4,49.8,3,46.8,3c-3.2,0-6.3,1.2-7.6,3C39,6.2,39,6.5,39,6.8s0.2,0.5,0.4,0.7 l8.5,6l-1,1.3c-4-2.8-8.7-4.5-13.9-4.7V6h3c1.2,0,2-0.8,2-2V3c0-1.2-0.8-2-2-2h-8c-1.2,0-2,0.8-2,2v1c0,1.2,0.8,2,2,2h3v4 c-5.1,0.2-9.9,1.9-13.9,4.7L15.8,13l7.8-5.6C24,7,24.1,6.4,23.8,5.9C22.6,4.2,19.6,3,16.5,3c-2.8,0-5.6,0.9-8.1,2.7 C2,10.3,2.3,17.4,4.2,20.1c0.2,0.2,0.4,0.4,0.7,0.4c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2l8.6-6.2l1.4,1.7C9.7,20.7,6,27.9,6,36 c0,8.9,4.5,16.9,11.4,21.5l-3.3,4.9c-0.3,0.5-0.2,1.1,0.3,1.4c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.2,0.8-0.4l3.3-5 C22.9,60.8,27.3,62,32,62c4.5,0,8.7-1.1,12.4-3.2l3.8,4.8c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2c0.4-0.3,0.5-1,0.2-1.4 l-3.7-4.6C53.3,53.2,58,45.1,58,36c0-8.1-3.7-15.3-9.5-20.1l1.1-1.3l8.8,6.2c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4 C60.8,19.1,61.3,16.6,60.9,14.2z M28,3h8v1h-8L28,3z M5.4,18c-0.8-2.3-0.6-7.2,4.2-10.7C12.3,5.4,14.9,5,16.5,5 c2.1,0,3.9,0.6,4.9,1.4L5.4,18z M56,36c0,13.2-10.8,24-24,24c-4.4,0-8.5-1.2-12-3.3c-0.1-0.2-0.2-0.4-0.4-0.6 C19.3,56,19,56,18.8,56C12.3,51.7,8,44.4,8,36c0-7.7,3.6-14.5,9.3-18.9c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.3 c4-2.9,8.9-4.6,14.1-4.6c5.3,0,10.1,1.7,14.1,4.6c0.1,0.1,0.1,0.2,0.3,0.3c0.1,0.1,0.3,0.2,0.4,0.2C52.4,21.5,56,28.3,56,36z M58.6,18.5l-17-12c1.1-0.8,3-1.5,5.3-1.5c1.8,0,4.5,0.4,7.3,2.4c3.3,2.3,4.4,5.1,4.7,7.1C59.1,16.1,59,17.5,58.6,18.5z"></path>{" "}
              </g>
            </g>
          </svg>
        </span>

        {/* تاریخ */}
        <p className="m-1 text-[12px] text-[#323E73]">7:28:00</p>
      </div>


      {/* قیمت */}
      <p className="text-[#23A455] text-[12px]">{cost }   تومان</p>
    </div>
     
      </div>

  );
};

export  {CourseCardForAllCourse};
