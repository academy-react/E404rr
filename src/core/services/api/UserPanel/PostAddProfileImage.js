import http from '../../interceptor'

export const AddProfileImage = async (user) => {
    try{
            const response = await http.post('/SharePanel/AddProfileImage' , user)

            return response;
    } catch(error) {
        return  false;
    }
}