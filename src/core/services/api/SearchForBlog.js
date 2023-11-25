import http from '../interceptor'


const GetSearchByBlog = async (aa) => {
  // url  https://acadapi.etacorealtime.ir/api/News/1b1e293d-0373-ee11-b6c7-ca6d3e095898
  try {
    const result = await http.get(`/News?Query=${aa}`);
    console.log(result , "Search 2");
    return result.news;
  } catch (error) {
    console.log(error);
  }
};

export  {GetSearchByBlog}