import http from '../interceptor'


const GetNewsById = async (id) => {
  // url  https://acadapi.etacorealtime.ir/api/
  try {
    const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return result.data.result;;
  } catch (error) {
    console.log(error);
    console.log(id + "id");
  }
};

export  {GetNewsById}