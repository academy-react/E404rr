import React from "react";
import LastArticleCard from "./LastArticleCard";
import { useState } from "react";
import { getAllNews } from "../../core/services/api/AllNews";
import { useEffect } from "react";

const ArticlesLast = () => {
  const [lastNews , setLastNews] = useState([])


  const getList = async () => {
    const courses = await getAllNews();
    setLastNews(courses.slice(-3))  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
    <div     data-aos="fade-up">
      <div className="flex items-center text-white bg-[#23A455] text-xl max-w-[300px] font-bold py-4 px-6 rounded-3xl" data-aos="fade-up">
        آخرین مقالات
      </div>
      <div className="mt-5 bg-gradient-to-bl from-[#f3fcf8] to-white rounded-3xl px-6 py-4 max-w-[300px] text-[#323E73]">
        {/* <LastArticleCard /> */}

        {lastNews.map((item , index) => {
            return(
            <>
                 <LastArticleCard  id={item.id} title={item.title} insertDate={item.insertDate} /> 
            </>)
        })}

      </div>
    </div>
  );
};

export default ArticlesLast;
