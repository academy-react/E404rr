


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






export const  PostAddRepayMyCommentForCourses = async (user) => {
    try{
            const response = await http.post(`/Course/AddReplyCourseComment` , user)

            console.log(response , "faired");
            return response;
    } catch(error) {
        return  false;
    }
}