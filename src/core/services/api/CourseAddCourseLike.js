import http from '../interceptor'

export const loginAPI = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post('/Course/AddCourseLike' , user)

            return response;
    } catch(error) {
        return  false;
    }
}