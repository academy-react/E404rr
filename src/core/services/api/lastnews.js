import http from '../interceptor'
export const getLastNewsList = async (count) => {
      try {
        console.log("Fetching started ...");
        //url => https://api-academy.iran.liara.run/api/News/GetListNewsCategory
        const result = await http.get(`/news `);
        
        return result.news;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };