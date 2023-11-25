import {React , useEffect , useState} from "react";
import TextInput from "../../components/common/TextInput";
import searchImg from "../../assets/img/search.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { GetSearchByQ } from "../../core/services/api/GetSearchCourese";


const Part5 = () => {


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

    // Avoid making unnecessary requests on initial render
    if (searchInput.trim() !== '') {
      fetchData();
    } else {
      setResults([]); // Clear results when searchInput is empty
    }
  }, [searchInput]);

  return (
    <div className="bg-[#f3fcf8] container max-w-[1250px] mx-auto rounded-lg py-3 px-10 flex justify-start " data-aos="fade-up">
      <div className="relative  md:w-[450px] ">
        {/* <TextInput type="text" placeholder="جستجو مقاله های مختلف..." /> */}


        <input
        id="searchInput"
        value={searchInput}
        placeholder={"جست و جوی دوره های مختلف"}
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
         className="focus:outline-none w-full px-6 py-2 shadow-md focus:placeholder:opacity-0 shadow-gray-200 rounded-lg placeholder-darker-green"
      />

      {(searchInput.trim() !== '' && results.length > 0) && (
        <div className="absolute bg-white w-[300px] h-[200px] z-50 ">
          <ul>
            {results.map((item, index) => (
              <>
              <NavLink to={`/CoursePage/${item.courseId}`} className={"block z-50"} key={item.courseId}>{item.title}</NavLink>
              
              </>
            ))}
          </ul>
        </div>
      )}





        <img
          src={searchImg}
          onClick={(v) => console.log(v)}
          className="absolute left-0 top-1/2 w-[20px] ml-4 -translate-y-1/2 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Part5;
