import http from '../interceptor'


const GetCourseById = async (id) => {
  // url  https://acadapi.etacorealtime.ir/api/Home/GetCourseDetails?CourseId=6c0a12ea-6a73-ee11-b6c7-ca6d3e095898
  try {
    const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return result.data.result;;
  } catch (error) {
    console.log(error);
    console.log(id + "id");
  }
};

export  {GetCourseById}