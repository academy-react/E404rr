import http from '../../interceptor'
export const GetMyFiver = async (count) => {
      try {
        console.log("Fetching started ...");
            //  https://api-academy.iran.liara.run/api/News/GetListNewsCategory
            const result = await http.get(`/SharePanel/GetMyFavoriteCourses`);

        return result.favoriteCourseDto;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };