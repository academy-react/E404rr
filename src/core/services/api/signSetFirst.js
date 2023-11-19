import http from '../interceptor'

export const SignAPISetFirst = async (user) => {
    try{
            const response = await http.post('/Sign/SendVerifyMessage' , user)

            return response;
    } catch(error) {
        return  false;
    }
}