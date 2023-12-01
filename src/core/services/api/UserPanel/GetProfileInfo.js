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