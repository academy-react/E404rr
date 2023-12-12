import http from "../interceptor"
export const ReportHome = async (count) => {
    try {
      console.log("Fetching started ...");
          //  https://api-academy.iran.liara.run/api/News/GetListNewsCategory
          const result = await http.get(`/Home/LandingReport`);

      return result;
      
    } catch (error) {
          console.log(error);
          return [];
    }  
};