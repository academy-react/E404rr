import http from '../../interceptor'
export const GetMyCoursesStudent = async () => {
      try {
        console.log("Fetching started ...");
            //  https://acadapi.etacorealtime.ir/api/SharePanel/GetProfileInfo
            const result = await http.get(`/SharePanel/GetMyCourses `);

        return result.listOfMyCourses;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };

  export const GetMyCoursesStudentTotal = async () => {
    try {
      console.log("Fetching started ...");
          //  https://acadapi.etacorealtime.ir/api/SharePanel/GetProfileInfo
          const result = await http.get(`/SharePanel/GetMyCourses `);

      return result.totalCount;
      
    } catch (error) {
          console.log(error);
          return [];
    }  
};


export const GetMyCoursesResrveStudent = async () => {
      try {
        console.log("Fetching started ...");
            //  https://acadapi.etacorealtime.ir/api/SharePanel/GetProfileInfo
            const result = await http.get(`/SharePanel/GetMyCoursesReserve`);

        return result;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };


  export const GetMyCoursesResrveStudentTotal = async () => {
    try {
      console.log("Fetching started ...");
          //  https://acadapi.etacorealtime.ir/api/SharePanel/GetProfileInfo
          const result = await http.get(`/SharePanel/GetMyCoursesReserve`);

      return result.totalCount;
      
    } catch (error) {
          console.log(error);
          return [];
    }  
};

export const DeleteRes = async (user) => {
  try {
    //https://api-academy.iran.liara.run/api/Course/AddCourseLike
    const response = await http.delete(`/CourseReserve`, {
      data: user,
    });

    return response;
  } catch (error) {
    return false;
  }
};
