


import http from '../interceptor'

export const  PostAddFiver = async (user) => {
    try{
            const response = await http.post(`/Course/AddCourseFavorite` , user)

            console.log(response , "faired");
            return response;
    } catch(error) {
        return  false;
    }
}