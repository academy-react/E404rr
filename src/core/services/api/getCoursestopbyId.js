// import http from '../interceptor'
// export const getLastCoursesList = async (count) => {
//       try {
//         console.log("Fetching started ...");
         //url => https://api-academy.iran.liara.run/api/Home/GetCourseDetails?CourseId=6c0a12ea-6a73-ee11-b6c7-ca6d3e095898
//         const result = await http.get(`/Home/GetCoursesTop?Count=${count}`);
        
//         return result;
        
//       } catch (error) {
//             console.log(error);
//             return [];
//       }  
//   };


import http from '../interceptor'


const GetCourseById = async (_id) => {
  try {
    const result = await http.get(`/Home/GetCourseDetails?CourseId=6c0a12ea-6a73-ee11-b6c7-ca6d3e095898` + course/+ _id);
    return result.data.result;;
  } catch (error) {
    console.log(error);
  }
};

export  {GetCourseById}