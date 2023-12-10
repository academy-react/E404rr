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


//   export const DeleteFavorite  = async (user) => {
//     try{
//         //https://api-academy.iran.liara.run/api/Course/AddCourseLike
//             const response = await http.delete(`/Course/DeleteCourseFavorite` ,user)

//             return response;
//     } catch(error) {
//         return  false;
//     }
// }



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
