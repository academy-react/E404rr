import http from '../interceptor'
export const getLastCoursesList = async (searchInput) => {
      try {
        console.log("Fetching started ...");
        //url => https://api-academy.iran.liara.run/api/Home/GetCoursesTop?Count${searchInput}
        const result = await http.get(`/Home/GetCoursesTop?Count${searchInput}`);
        
        return result;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };