// import React from "react";
// import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
// import { useEffect } from "react";
// import { getAllCourses } from "../../core/services/api/AllCourses";
// import { useState } from "react";
// import { CourseCardForAllCourse } from "../../components/common/CourseCard/CourseCardForAllCourse";
// const AllCourseCountainer = () => {

//   const [CoursesList , setCoursesList] = useState([]);
//   const getList = async () => {
//     const courses = await getAllCourses();
//     setCoursesList(courses)
//   }
//   useEffect(() =>{
//       getList();
//   },[]);
//   return (
//     <div className="flex flex-wrap max-w-[900px] items-start justify-between mt-8" data-aos="fade-up">
//         {CoursesList.map((item , index) => {
//                 return(
//                   <CourseCardForAllCourse
//                   key={index} tumbImageAddress={item.tumbImageAddress}  id={item.courseId} dissLikeCount={item.dissLikeCount}  title={item.title} desc={item.desc} teacherName={item.teacherName} cost={item.cost} likeCount={item.likeCount}
//                   />
//                 )
//         })}
//     </div>
//   );
// };

// export  {AllCourseCountainer}

import React from "react";
import CourseCard from "../../components/common/CourseCard/CourseCardForLanding";
import { useEffect } from "react";
import { CourseByPagination } from "../../core/services/api/AllCourses";
import { useState } from "react";
import { CourseCardForAllCourse } from "../../components/common/CourseCard/CourseCardForAllCourse";
import ReactPaginate from "react-paginate";

const AllCourseCountainer = () => {
  const [CoursesList, setCoursesList] = useState([]);
  const [RowsOfPage, setRowsOfPage] = useState(12);
  const [PageNumber, setPageNumber] = useState();

  const [totalPages, setTotalPages] = useState();

  const getList = async () => {
    const result = await CourseByPagination(PageNumber, RowsOfPage);
    setCoursesList(result);
    setTotalPages(Math.ceil(result?.totalCount / RowsOfPage));
  };
  useEffect(() => {
    getList();
  }, [PageNumber, RowsOfPage]);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page.selected + 1);
    setPageNumber(page.selected + 1);
  };

  return (
    <div
      className="flex flex-wrap max-w-[900px] items-start justify-between mt-8 relative pb-[200px]"
      data-aos="fade-up"
    >
      {CoursesList.courseFilterDtos?.map((item, index) => {
        return (
          <CourseCardForAllCourse
            key={index}
            tumbImageAddress={item.tumbImageAddress}
            id={item.courseId}
            dissLikeCount={item.dissLikeCount}
            title={item.title}
            desc={item.desc}
            teacherName={item.teacherName}
            cost={item.cost}
            likeCount={item.likeCount}
          />
        );
      })}

      <div className="border border-transparent absolute bottom-[100px] right-[300px]">
        {totalPages > 1 && (
          <ReactPaginate
            previousLabel={
              <i className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                {" "}
                {"<"}
              </i>
            }
            nextLabel={
              <i className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                {" "}
                {">"}
              </i>
            }
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"flex justify-center mt-4"}
            subContainerClassName={"pagination"}
            activeClassName="bg-blue-200 text-gray-300"
            pageClassName={"mx-2"}
            previousClassName={"mx-2 cursor-pointer"}
            nextClassName={"mx-2 cursor-pointer"}
            pageLinkClassName={
              "relative block rounded bg-transparent px-3 py-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            }
          />
        )}
      </div>
    </div>
  );
};

export { AllCourseCountainer };
