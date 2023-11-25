import http from '../interceptor'


const GetSearchByQ = async (aa) => {
  // url  https://acadapi.etacorealtime.ir/api/News/1b1e293d-0373-ee11-b6c7-ca6d3e095898
  try {
    const result = await http.get(`/Home/GetCoursesWithPagination?Query=${aa}`);
    console.log(result , "Search");
    return result.courseFilterDtos;
  } catch (error) {
    console.log(error);
  }
};

export  {GetSearchByQ}