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
         shadow-gray-200 rounded-lg placeholder-darker-green"
      />

      {(searchInput.trim() !== '' && results.length > 0) && (
        <div className="absolute bg-white w-[300px] h-[200px]">
          <ul>
            {results.map((item, index) => (
              <>
              <NavLink to={`/CoursePage/${item.courseId}`} className={"block"} key={index}>{item.title}</NavLink>
              </>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TextInput;




