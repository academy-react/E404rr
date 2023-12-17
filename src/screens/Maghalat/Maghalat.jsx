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
import ReactPaginate from 'react-paginate';
import { GetSearchByBlog } from "../../core/services/api/SearchForBlog";
import { NavLink } from "react-router-dom";

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
  // const [currentPage, setCurrentPage] = useState(1);
  // const postsPerPage = 9;

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  // const previousPage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const nextPage = () => {
  //   if (currentPage !== Math.ceil(items.length / postsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);






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
      // try {
      //   const response = await axios.get(`https://api-academy.iran.liara.run/api/News/GetListNewsCategory${searchInput}`);
      //   setResults(response.data);
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      // }


      const courses = await GetSearchByBlog(searchInput);
      setResults(courses)  
    };

    // Avoid making unnecessary requests on initial render
    if (searchInput.trim() !== '') {
      fetchData();
    } else {
      setResults([]); // Clear results when searchInput is empty
    }
  }, [searchInput]);



  const [currentPage2, setCurrentPage2] = useState(0);
  const tagsPerPage = 5;
  const totalTags = 80;

  // تولید تگ‌های p بر اساس صفحه جاری
  const generateTags = () => {
    const startTagIndex = currentPage2 * tagsPerPage;
    const endTagIndex = startTagIndex + tagsPerPage;
    const tags = [];

    for (let i = startTagIndex; i < endTagIndex && i < totalTags; i++) {
      tags.push(<p key={i}>محتوای تگ شماره {i + 1}</p>);
    }

    return tags;
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage2(selected);
  };



  return (
    <>
      <div className="container font-vazir mx-auto px-10 text-center">
        <div className="flex flex-col max-w-[1250px] mx-auto lg:flex-row gap-5 justify-between items-center my-6 px-8 py-2 rounded-lg bg-lighter-green/10">
          <div className="relative w-full md:w-[450px]" >
            {/* <TextInput type="text" placeholder="جستجو مقاله های مختلف..." /> */}


            <input 
        id="searchInput"
        value={searchInput}
        placeholder={"خبر مورد نظر خود را سرچ کنید"}
        type={"text"}
        onChange={(e) => setSearchInput(e.target.value)}
        className="focus:outline-none caret-green-600 w-full px-6 py-2 shadow-md focus:placeholder:opacity-0 shadow-gray-200 rounded-lg placeholder-darker-green"
      />
{/* 
      {(searchInput.trim() !== '' && results.length > 0) && (
        <div className="absolute bg-white w-[300px] h-[200px]">
          <ul>
            {results.map((item, index) => (
              <>
              <NavLink to={`/ArticalePage/${item.id}`} className={"block"} key={index}>{item.title}</NavLink>
              
              </>
            ))}



          </ul>
        </div>
      )} */}




{searchInput.trim() !== "" && results.length > 0 && (
          <div className="absolute overflow-auto bg-white w-[100%] max-h-[200px] min-h-[80px] border z-50">
            <ul>
              {results.map((item, index) => (
                <>
                  <div className="block mt-3 mr-[-200px]">
                    <img
                      src={item.currentImageAddressTumb}
                      className="border w-[50px] h-[50px] inline-block rounded-full"
                      alt=""
                    />
                    <NavLink
                      to={`/ArticalePage/${item.id}`}
                      className={"inline-block mr-3"}
                      key={index}
                    >
                      {item.title}
                    </NavLink>
                  </div>
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
                  <>
                        <ArticlesCard 
                        key={index} 
                        title={item.title}
                        miniDescribe={item.miniDescribe}
                          insertDate={item.insertDate}
                          id={item.id}
                          currentLikeCount={item.currentLikeCount}
                          currentDissLikeCount={item.currentDissLikeCount}
                          addUserProfileImage={item.addUserProfileImage}
                        />
                                          
                  </>
              )
          })}

          </div>
          <div className="w-[30%]">
          {/* <ArticleCategory /> */}
            <ArticlesLast />

            
          </div>
          {/* <ul className="border h-auto flex mt-[100px] mb-32  justify-center border-transparent mr-[275px] " >
   
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center " > {"<"} </li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">1</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">2</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">{"..."}</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">10</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">  {">"} </li>
    

         </ul> */}

         {/* <div className="border border-transparent mb-[200px] mt-[100px] mr-[200px]">
          <ReactPaginate
        previousLabel={<i className='text-green-600 mr-3 border px-3 py-2 rounded-[100%]'> {"<"}</i>}
        nextLabel={<i className='text-green-600 ml-3 border px-3 py-2 rounded-[100%]'> {">"}</i>}
        breakLabel={'...'}
        pageCount={Math.ceil(totalTags / tagsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'flex justify-center mt-4'}
        subContainerClassName={'pagination'}
        activeClassName='bg-blue-200 text-gray-300'
        pageClassName={'mx-2'}
        previousClassName={'mx-2 cursor-pointer'}
        nextClassName={'mx-2 cursor-pointer'}
        pageLinkClassName={'text-purple-500'}
      />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Maghalat;
