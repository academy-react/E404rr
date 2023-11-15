import { useState , useEffect } from "react";

import Pagination from "../../components/Maghalat/Pagination";
import TextInput from "../../components/common/TextInput";
import Footer from "../../components/common/footer/Footer";
import maghaleImg from "../../assets/img/maghaleImg.png";
import searchImg from "../../assets/img/search.svg";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import ArticleCategory from "../ArticleDetails/ArticleCategory";
import ArticlesLast from "../ArticleDetails/ArticlesLast";
import { getAllNews } from "../../core/services/api/AllNews";
import axios from "axios";

const Maghalat = () => {
  const [items, setItems] = useState([
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
    // { title: "مقاله", date: "1400/03/11" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(items.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);






  const [allNewsList , setAllNewsList] = useState([]);

  const getList = async () => {
    const courses = await getAllNews();
    setAllNewsList(courses.slice())  
  } 
  useEffect(() =>{
      getList();
  },[]);



  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-academy.iran.liara.run/api/News/GetListNewsCategory${searchInput}`);
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
      <div className="container font-vazir mx-auto px-10 text-center" data-aos="fade-up">
        <div className="flex flex-col max-w-[1250px] mx-auto lg:flex-row gap-5 justify-between items-center my-6 px-8 py-2 rounded-lg bg-lighter-green/10"data-aos="fade-up">
          <div className="relative w-full md:w-[450px]" data-aos="fade-up">
            {/* <TextInput type="text" placeholder="جستجو مقاله های مختلف..." /> */}


            <input 
        id="searchInput"
        value={searchInput}
        placeholder={"خبر مورد نظر خود را سرچ کنید"}
        type={"text"}
        onChange={(e) => setSearchInput(e.target.value)}
        className="focus:outline-none w-full px-6 py-2 shadow-md focus:placeholder:opacity-0 shadow-gray-200 rounded-lg placeholder-darker-green"
      />

      {(searchInput.trim() !== '' && results.length > 0) && (
        <div className="absolute bg-white w-[300px] h-[200px]">
          <ul>
            {results.map((item, index) => (
              <>
              <li key={index}>{item.categoryName}</li>
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
        <div className="flex flex-wrap container max-w-[1250px] mx-auto justify-between items-start  mb-16 mt-10"data-aos="fade-up">
          <div className="flex max-w-[65%] justify-between items-start flex-wrap max-lg:justify-center">
          {allNewsList.map((item , index) => {
              return(
                <ArticlesCard 
                    key={index} 
                    title={item.categoryName}
                    minidesc={item.miniDescribe}
                      img={item.currentImageAddressTumb}
                      startDate={item.insertDate}
                />
              )
          })}

          </div>
          <div className="w-[30%]">
          <ArticleCategory />
            <ArticlesLast />

            
          </div>
          <ul className="border h-auto flex mt-[100px] mb-32  justify-center border-transparent mr-[275px] " >
   
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center " > {"<"} </li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">1</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">2</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">{"..."}</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">10</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">  {">"} </li>
    

         </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Maghalat;
