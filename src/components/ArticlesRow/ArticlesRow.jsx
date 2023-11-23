import ArticlesCard from "../ArticlesCard/ArticlesCard";
import React, { useState } from "react";
import { useEffect } from "react";
import { getLastNewsList } from "../../core/services/api/lastnews";

const ArticlesRow = () => {

  const [newsList , setNewsList] = useState([]);

  const getList = async () => {
    const courses = await getLastNewsList();
    setNewsList(courses.slice(-6))  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
    <div className="flex container max-w-[1250px] mx-auto justify-between items-center flex-wrap max-lg:justify-center mb-16">

        {newsList.map((item , index) => {
            return<ArticlesCard 
             key={index} 
             title={item.title}
             miniDescribe={item.miniDescribe}
               img={item.currentImageAddressTumb}
               insertDate={item.insertDate}
                id={item.id}
                  /> 
        })}
    </div>
  );
};

export default ArticlesRow;
