import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GetSearchByQ } from "../../core/services/api/GetSearchCourese";

const TextInput = ({ type, placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await axios.get(`https://acadapi.etacorealtime.ir/api/Home/GetCoursesWithPagination?Query=${searchInput}`);
      //   setResults(response.data.courseFilterDtos);
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      // }

      

    const courses = await GetSearchByQ(searchInput);
    setResults(courses)  

    };

  
    if (searchInput.trim() !== '') {
      fetchData();
    } else {

    }
  }, [searchInput]);

  return (
    <>
      <input
        id="searchInput"
        value={searchInput}
        placeholder={placeholder}
        type={type}
        onChange={(e) => setSearchInput(e.target.value)}
        className="focus:outline-none w-full px-6 py-2 shadow-md focus:placeholder:opacity-0
         shadow-gray-200 rounded-lg placeholder-darker-green caret-green-600"
      />

      {(searchInput.trim() !== '' && results.length > 0) && (
        <div className="absolute overflow-auto bg-white w-[600px] max-h-[200px] min-h-[80px]">
          <ul>
            {results.map((item, index) => (
              <>
                  <div className="block mt-3">
                  <img src={item.tumbImageAddress} className="border w-[50px] h-[50px] inline-block rounded-full" alt="" />
              <NavLink to={`/CoursePage/${item.courseId}`} className={"inline-block mr-3"} key={index}>{item.title}</NavLink>
                  </div>
              </>
            ))}
          </ul>
        </div>
      )}



    </>
  );
};

export default TextInput;




