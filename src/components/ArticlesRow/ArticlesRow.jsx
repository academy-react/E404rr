import ArticlesCard from "../ArticlesCard/ArticlesCard";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ArticlesRow = () => {

  const [newsList , setNewsList] = useState([]);

  const getNewsList = async () => {
    console.log("Fetching started (news) ...");
    //url => https://api-academy.iran.liara.run/api/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=

    const result = await axios.get(
      "https://api-academy.iran.liara.run/api/News/GetListNewsCategory"
    );
    console.log(result.data);
    setNewsList(result.data)
  }
  useEffect(() =>{
      getNewsList();
  },[]);
  return (
    <div className="flex container max-w-[1250px] mx-auto justify-between items-center flex-wrap max-lg:justify-center mb-16">

        {newsList.map((item , index) => {
            return<ArticlesCard 
             key={index} 
             title={item.title}
              minidesc={item.miniDescribe}
               img={item.currentImageAddressTumb}
                startDate={item.insertDate}
                  /> 
        })}
    </div>
  );
};

export default ArticlesRow;
