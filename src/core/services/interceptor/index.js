import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL

const instance =  axios.create({
    baseURL: baseUrl
});

const onSuccess = (response) =>{
 
        return response.data;

}

    const onError = (err) =>{
        console.log(err);

        if(err.response.status >= 400 && err.response.status <500){
            alert("Client error : " + err.response.status);
        }

        return Promise.reject(err);

    }

instance.interceptors.response.use(onSuccess , onError);

instance.interceptors.request.use((opt) => {
    opt.headers["Content-Type"] =  'application/json';
    return opt;
})

export default instance;