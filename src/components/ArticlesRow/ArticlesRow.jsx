import ArticlesCard from "../ArticlesCard/ArticlesCard";
import React, { useState } from "react";
import { useEffect } from "react";
import { getLastNewsList } from "../../core/services/api/lastnews";

const ArticlesRow = () => {

  const [newsList , setNewsList] = useState([]);

  const getList = async () => {
    const courses = await getLastNewsList();
    setNewsList(courses.slice())  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
    <div className="flex container max-w-[1250px] mx-auto justify-between items-center flex-wrap max-lg:justify-center mb-16">

        {newsList.map((item , index) => {
            return<ArticlesCard 
             key={index} 
             title={item.categoryName}
              minidesc={item.miniDescribe}
               img={item.currentImageAddressTumb}
                startDate={item.insertDate}
                  /> 
        })}
    </div>
  );
};

export default ArticlesRow;
