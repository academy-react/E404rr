import http from '../interceptor'


const GetNewsById = async (id) => {
  // url  https://acadapi.etacorealtime.ir/api/News/:Id
  try {
    const result = await http.get(`/News/GetNewsCategory?${id}`);
    return result;
  } catch (error) {
    console.log(error);
    console.log(id + "id");
  }
};

export  {GetNewsById}