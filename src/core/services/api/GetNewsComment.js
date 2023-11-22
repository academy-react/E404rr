import http from '../interceptor'


const GetNewsApiByComentId = async (id) => {
  try {
    const result = await http.get(`/News/GetNewsComments?NewsId=${id}`);
    console.log(result , "data in js");
    return result;
        
  } catch (error) {
        console.log(error);
    
  }  
};

export  {GetNewsApiByComentId}