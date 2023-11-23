import React, { useState } from "react";
import CourseNav from "./CourseNav";
import CourseFilter from "./CourseFilter";
import Footer from "../../components/common/footer/Footer";
import { AllCourseCountainer } from "./AllCourseCountainer";
import ReactPaginate from 'react-paginate';




const Courses = () => {
  
  
  const [currentPage, setCurrentPage] = useState(0);
  const tagsPerPage = 5;
  const totalTags = 80;

  // تولید تگ‌های p بر اساس صفحه جاری
  const generateTags = () => {
    const startTagIndex = currentPage * tagsPerPage;
    const endTagIndex = startTagIndex + tagsPerPage;
    const tags = [];

    for (let i = startTagIndex; i < endTagIndex && i < totalTags; i++) {
      tags.push(<p key={i}>محتوای تگ شماره {i + 1}</p>);
    }

    return tags;
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };



  return (
    <>
      <CourseNav />
      <div className="container max-w-[1255px] mx-auto flex-wrap flex justify-between items-start">
      <CourseFilter />
        <AllCourseCountainer/>
 
        {/* <ul className="border h-auto flex mt-[100px] mb-32 w-full justify-center border-transparent mr-[50px] ">
        <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center "> {"<"} </li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">1</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">2</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">{"..."}</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">10</li>
            <li className="border p-3 rounded-[100%] w-[50px] h-[50px]  text-center ">  {">"} </li>

         </ul> */}

          <div className="border border-transparent mb-[200px] mt-[50px] mr-[600px]">
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
          </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Courses;
