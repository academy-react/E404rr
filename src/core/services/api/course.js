import http from '../interceptor'
export const getLastCoursesList = async (count) => {
      try {
        console.log("Fetching started ...");
        //url => https://api-academy.iran.liara.run/api/Home/GetCoursesTop?Count=5
        const result = await http.get(`/Home/GetCoursesTop?Count=${count}`);
        
        return result;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };