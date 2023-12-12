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


export const AddLikeForNews = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post(`/News/NewsLike/${user}`)
            console.log(user , "id ke donbaleshem");
            return response;
    } catch(error) {
        return  false;
    }
}



export const AddLikeForCoursesComment = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${user}`)
            console.log(user , "id ke donbaleshem");
            return response;
    } catch(error) {
        return  false;
    }
}


export const AddLikeForNewsComment = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post(`/News/CommentLike/${user}`)
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
            const response = await http.post(`/Course/AddCourseDissLike?CourseId=${user}`)

            return response;
    } catch(error) {
        return  false;
    }
}



// export const AddDisLikeForCourses = async (user) => {
//     try{
//         //https://api-academy.iran.liara.run/api/Course/AddCourseLike
//             const response = await http.post(`/Course/AddCourseDissLike?CourseId=${user}`)

//             return response;
//     } catch(error) {
//         return  false;
//     }
// }



export const AddDisLikeForNews = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post(`/News/NewsDissLike/${user}`)

            return response;
    } catch(error) {
        return  false;
    }
}



export const AddDisLikeForCoursesComment = async (user) => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${user}`)

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

export const AddDeleteLikeForNews = async () => {
    try{
        //https://api-academy.iran.liara.run/api/Course/AddCourseLike
            const response = await http.delete(`/News/DeleteCommentLikeNews`)

            return response;
    } catch(error) {
        return  false;
    }
}

