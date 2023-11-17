import http from '../interceptor'


const GetAllTeacherById = async (id) => {
  // url  https://acadapi.etacorealtime.ir/api/Home/GetTeacherDetails?TeacherId=
  try {
    const result = await http.get(`/Home/GetTeacherDetails?TeacherId=${id}`);
    return result.data.result;;
  } catch (error) {
    console.log(error);
    console.log(id + "id");
  }
};

export  {GetAllTeacherById}