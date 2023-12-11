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


  export const GetMyFiverTotal = async (count) => {
    try {
      console.log("Fetching started ...");
          //  https://api-academy.iran.liara.run/api/News/GetListNewsCategory
          const result = await http.get(`/SharePanel/GetMyFavoriteCourses`);

      return result.totalCount;
      
    } catch (error) {
          console.log(error);
          return [];
    }  
};





export const GetMyFiverNews = async (count) => {
  try {
    console.log("Fetching started ...");
        //  https://api-academy.iran.liara.run/api/News/GetListNewsCategory
        const result = await http.get(`/SharePanel/GetMyFavoriteNews`);

    return result.myFavoriteNews;
    
  } catch (error) {
        console.log(error);
        return [];
  }  
};

export const GetMyFiverNewsTotal = async (count) => {
  try {
    console.log("Fetching started ...");
        //  https://api-academy.iran.liara.run/api/News/GetListNewsCategory
        const result = await http.get(`/SharePanel/GetMyFavoriteNews`);

    return result.totalCount;
    
  } catch (error) {
        console.log(error);
        return [];
  }  
};



export const DeleteFavorite = async (user) => {
  try {
    //https://api-academy.iran.liara.run/api/Course/AddCourseLike
    const response = await http.delete(`/Course/DeleteCourseFavorite`, {
      data: user,
    });

    return response;
  } catch (error) {
    return false;
  }
};


export const DeleteFavoriteNews = async (user) => {
  try {
    //https://api-academy.iran.liara.run/api/Course/AddCourseLike
    const response = await http.delete(`/News/DeleteFavoriteNews`, {
      data: user,
    });

    return response;
  } catch (error) {
    return false;
  }
};
