import http from '../../interceptor'

export const PutProfileInfo = async (user) => {
    try{
            const response = await http.put('/SharePanel/UpdateProfileInfo' , user)

            return response;
    } catch(error) {
        return  false;
    }
}