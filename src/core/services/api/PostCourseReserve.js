import http from '../interceptor'

export const PostCoursesReserve = async (user) => {
    try{
            const response = await http.post('/CourseReserve/ReserveAdd' , user)

            return response;
    } catch(error) {
        return  false;
    }
}