import http from '../interceptor'

export const SignAPISetTwo = async (user) => {
    try{
            const response = await http.post('/Sign/VerifyMessage' , user)

            console.log(response , "resss");
            return response;
    } catch(error) {
        return  false;
    }
}