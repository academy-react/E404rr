import http from '../interceptor'
export const getAllCourses = async (count) => {
      try {
        console.log("Fetching started ...");
        //https://acadapi.etacorealtime.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount
        const result = await http.get
        (`/Home/GetCoursesTop?Count=5`);

        return result;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };