import http from '../interceptor'


const GetAllTeacherById = async (id) => {
  // url  https://acadapi.etacorealtime.ir/api/Home/GetTeacherDetails?TeacherId=1
  try {
    const result = await http.get(`/Home/GetTeacherDetails?TeacherId=${id}`);
    return result;
  } catch (error) {
    console.log(error);
    console.log(id + "id");
  }
};

export  {GetAllTeacherById}