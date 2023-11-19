import http from '../interceptor'
export const getAllNews = async (count) => {
      try {
        console.log("Fetching started ...");
            //  https://api-academy.iran.liara.run/api/News/GetListNewsCategory
            const result = await http.get(`/news `);

        return result.news;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };