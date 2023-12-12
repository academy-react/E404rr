import React from "react";
import bgitem1 from "../../../assets/img/bgitem1.png";
import { useNavigate } from "react-router-dom";
import { DeleteRes } from "../../../core/services/api/UserPanel/GetAllCoursesStudent";

const Card5 = ({ courseName, studentName  , reserverDate , accept , courseId , reserveId}) => {
  const navigate = useNavigate();
  const goCourse = () => {
    navigate(`/CoursePage/${courseId}`);
  };


  const AddDeleteRRRes = async () => {
    const userObj = {
      id: reserveId
    };

    // var formdata = new FormData();
    // formdata.append("active", true );
    // formdata.append("id", reserveId );
    // console.log(formdata , "hiiiiform");
    
    
    const user = await DeleteRes(userObj);
    
  }


  return (
    <div className=" border-b h-[70px]  flex  last:border-transparent ">
      <div
        className="xl:w-[80px] h-[50px] xl:mr-[30px] border border-transparent 
  lg:mr-[10px]  lg:w-[80px] md:w-[80px] md:mr-[30px] mr-1"
      >
        <img
          src={bgitem1}
          alt=""
          className="w-full h-full rounded-md mt-3 inline-block cursor-pointer "
          onClick={goCourse}
        />
      </div>
      <div className=" border border-transparent h-[30px]  mt-[27.5px] text-gray-500 ">
        <p
          className="inline-block xl:w-[150px] text-center 
        lg:mr-[10px] md:mr-[15px] mr-1 w-[] cursor-pointer"
          onClick={goCourse}
        >
          {/* آموزش جامع زبان.... */}
          {courseName.slice(10)}
        </p>
        <p
          className="inline-block xl:w-[120px] text-center border
        lg:mr-[10px] md:mr-[15px]  border-transparent "
        >
          {studentName}
        </p>
        <p
          className="lg:inline-block xl:w-[130px] border
        hidden text-center border-transparent"
        >
            {reserverDate.slice(10)}
        </p>

        <p
          className="inline-block xl:w-[150px] border text-center border-transparent
        lg:mr-[10px] md:mr-[15px] mr-1"
        >
          {" "}
          {accept ?   ( <p className="text-green-500">تایید شده</p>) : ( <p className="text-red-500">تایید نشده</p>)}
            </p>

            <svg
            onClick={AddDeleteRRRes}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline-block xl:w-[100px] border border-transparent xl:mr-0 lg:mr-[20px] md:mr-[20px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
      </div>
    </div>
  );
};

export { Card5 };
