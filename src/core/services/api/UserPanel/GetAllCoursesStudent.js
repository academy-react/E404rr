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