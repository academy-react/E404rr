


import http from '../interceptor'

export const  PostAddMyCommentForCourses = async (user) => {
    try{
            const response = await http.post(`/Course/AddCommentCourse` , user)

            console.log(response , "faired");
            return response;
    } catch(error) {
        return  false;
    }
}