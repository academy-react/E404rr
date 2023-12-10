import React from "react";
import bgitem1 from "../../../assets/img/bgitem1.png";
import { useNavigate } from "react-router-dom";
import { DeleteFavorite } from "../../../core/services/api/UserPanel/GetMyFaiverit";
const Card6 = ({title , currentView , currentLikeCount , updateDate , favoriteId , newsId}) => {

    const navigate = useNavigate();
    const goCourse = () => {
      navigate(`/ArticalePage/${newsId}`);
    };



    
  const AddDeleteFavorite = async () => {
    // const userObj = {
    //   CourseFavoriteId : favoriteId
    // };

    var formdata = new FormData();
    formdata.append("CourseFavoriteId", favoriteId );
    console.log(formdata , "hiiiiform");
    
    
    const user = await DeleteFavorite(formdata);
    
  }
  
  return (
    <>
      <div className=" border-b h-[70px]  flex  last:border-transparent " >
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
            {title.slice(length , 8)}
          </p>
          <p
            className="inline-block xl:w-[110px] text-center border
            lg:mr-[10px] md:mr-[15px]  border-transparent "
          >
            {currentView}
          </p>
          <p
            className="lg:inline-block xl:w-[110px] border
            hidden text-center border-transparent"
          >
            {currentLikeCount}
          </p>

          <p
            className="inline-block xl:w-[100px] border text-center border-transparent
            lg:mr-[10px] md:mr-[15px] mr-1"
          >
            {updateDate.slice(length , 10)}
          </p>

          <svg
            onClick={AddDeleteFavorite}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block xl:w-[100px] border border-transparent xl:mr-10 lg:mr-[20px] md:mr-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export { Card6 };
