import http from '../interceptor'


const GetNewsById = async (id) => {
  // url  https://acadapi.etacorealtime.ir/api/News/1b1e293d-0373-ee11-b6c7-ca6d3e095898
  try {
    const result = await http.get(`/News/${id}`);
    console.log(result , "rrrrr");
    return result.detailsNewsDto;
  } catch (error) {
    console.log(error);
    console.log(id + "id");
  }
};

export  {GetNewsById}