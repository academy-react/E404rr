import http from '../interceptor'

export const SignAPISetThere = async (user) => {
    try{
            const response = await http.post('/Sign/Register' , user)

            return response;
    } catch(error) {
        return  false;
    }
}