import http from '../interceptor'
export const getAllCourses = async (count) => {
      try {
        console.log("Fetching started ...");
        //https://acadapi.etacorealtime.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0
        const result = await http.get
        (`/Home/GetCoursesWithPagination`);

        return result.courseFilterDtos;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };




  export const getAllCoursesPageNumber = async (count) => {
      try {
        console.log("Fetching started ...");
        //https://acadapi.etacorealtime.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0
        const result = await http.get
        (`/Home/GetCoursesWithPagination`);

        return result.courseFilterDtos;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };