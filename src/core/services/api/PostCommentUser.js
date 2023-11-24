import http from '../interceptor'

export const PostCommentUser = async (user) => {
    try{
            const response = await http.post('/Course/AddCommentCourse' , user)

            return response;
    } catch(error) {
        return  false;
    }
}