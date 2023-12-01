import http from '../interceptor'

export const ForgetAPISetFirst = async (user) => {
    try{
            const response = await http.post('/Sign/ForgetPassword' , user)

            return response;
    } catch(error) {
        return  false;
    }
}