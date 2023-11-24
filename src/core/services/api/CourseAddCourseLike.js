import http from '../interceptor'

export const AddLikeForCourses = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post(`/Course/AddCourseLike?CourseId=${user}`)
            console.log(user , "id ke donbaleshem");
            return response;
    } catch(error) {
        return  false;
    }
}







//DisLike


export const AddDisLikeForCourses = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post(`/Course/AddCourseLike?CourseId=${user}`)

            return response;
    } catch(error) {
        return  false;
    }
}

export const AddDeleteLikeForCourses = async () => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.delete(`/Course/DeleteCourseLike`)

            return response;
    } catch(error) {
        return  false;
    }
}

