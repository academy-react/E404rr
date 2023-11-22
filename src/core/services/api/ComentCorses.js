import http from '../interceptor'


const GetCourseApiByComentId = async (id) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${id}`);
    console.log(result , "data in js");
    return result;
        
  } catch (error) {
        console.log(error);
    
  }  
};

export  {GetCourseApiByComentId}