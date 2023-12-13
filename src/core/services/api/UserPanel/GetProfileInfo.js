import http from '../../interceptor'
export const GetProfileInfo = async (count) => {
      try {
        console.log("Fetching started ...");
            //  https://acadapi.etacorealtime.ir/api/SharePanel/GetProfileInfo
            const result = await http.get(`/SharePanel/GetProfileInfo `);

        return result;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };



export const SelectProfile = async (user) => {
    try{
            const response = await http.post('/SharePanel/SelectProfileImage' , user)

            return response;
    } catch(error) {
        return  false;
    }
}

export const DeleteProfile = async (user) => {
    try{
            const response = await http.delete('/SharePanel/DeleteProfileImage' , user)

            return response;
    } catch(error) {
        return  false;
    }
}