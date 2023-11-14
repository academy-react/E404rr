import http from '../interceptor'
export const getAllTeachers = async (count) => {
      try {
        console.log("Fetching started ...");
            // https://api-academy.iran.liara.run/api/Home/GetTeachers
            const result = await http.get(`/Home/GetTeachers`);

        return result;
        
      } catch (error) {
            console.log(error);
            return [];
      }  
  };