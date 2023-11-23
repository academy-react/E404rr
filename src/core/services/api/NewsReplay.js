import http from '../interceptor'


const GetNewsReplay = async (id) => {
  try {
    ///Course/GetCourseReplyCommnets/6c0a12ea-6a73-ee11-b6c7-ca6d3e095898/551e413d-4d7b-ee11-b6c7-ca6d3e095898
    const result = await http.get(`/News/GetRepliesComments?Id=${id}`);
    console.log(result , "data in js");
    return result;
        
  } catch (error) {
        console.log(error);
    
  }  
};

export  {GetNewsReplay}