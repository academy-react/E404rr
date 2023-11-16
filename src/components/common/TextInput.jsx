import axios from "axios";
import React, { useState, useEffect } from "react";

const TextInput = ({ type, placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://acadapi.etacorealtime.ir/api/Home/GetCoursesTop?Count${searchInput}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Avoid making unnecessary requests on initial render
    if (searchInput.trim() !== '') {
      fetchData();
    } else {
      setResults([]); // Clear results when searchInput is empty
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
              <li key={index}>{item.title}</li>
              </>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TextInput;




