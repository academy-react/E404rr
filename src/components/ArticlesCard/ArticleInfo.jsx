import { useState } from "react";
import { AddDisLikeForCourses, AddDisLikeForNews, AddLikeForNews } from "../../core/services/api/CourseAddCourseLike";
const ArticleInfo = ({title , miniDescribe , currentLikeCount , id , currentDissLikeCount}) => {

  const [isClicked , setIsClicked] = useState(false); 
  const [isClicked2 , setIsClicked2] = useState(false); 

  const [selectedSvg, setSelectedSvg] = useState(null);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = async () => {
    if (selectedSvg !== 1) {
      setSelectedSvg(1);
      setCount(count + 1);

      if (selectedSvg === 2) {
        setCount2(count2 - 1);

      }
      const user = await AddLikeForNews(id);
    } else {
      setSelectedSvg(null);
      setCount(count - 1);
    
    }
  };

  const handleClick2 = async () => {
    if (selectedSvg !== 2) {
      setSelectedSvg(2);
      setCount2(count2 + 1);

      if (selectedSvg === 1) {
        setCount(count - 1);
 
      }
      const user = await AddDisLikeForNews(id);
    } else {
      setSelectedSvg(null);
      setCount2(count2 - 1);
   
    }
  };

  return (
    <div className="mx-3 mt-6 mb-3 border border-transparent h-[160px]">
      <p className="text-xs	text-[#198643]">  {title}</p>
      <h5 className="mt-3 text-[#323E73]"> {miniDescribe.slice(length , 80  )}...</h5>
      <div className="flex items-center mt-4 border border-transparent">
        <svg
          className="w-4 h-4"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
          fill="#acacac"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <style type="text/css"> </style>
            <g>
              <path
                class="st0"
                d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087 c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512 c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"
              ></path>{" "}
              <path
                class="st0"
                d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0 c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <span className="inline-block m-1 text-[#323E73] font-extralight text-[15px]	">
          حسامی
        </span>



        <span className="mt-[6px] mr-[200px]"> {count2 + currentDissLikeCount }</span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 mr-[2px]  text-gray-600 ${isClicked2 ? 'text-blue-600' : ''}`}  onClick={handleClick2}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
    </svg>
  





      
        {/*  like */}
        <svg onCl xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 mr-[3px]  text-gray-600 ${isClicked === 1? 'text-blue-600' : ''}`} onClick={handleClick} >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
      <span className="mt-2 ">{count + currentLikeCount}</span>



      </div>
    </div>
  );
};

export default ArticleInfo;
