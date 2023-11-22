// import axios from "axios";
// import { clearStorage, getItem, removeItem } from "../common/storage.services";

// const baseUrl = import.meta.env.VITE_BASE_URL

// const instance =  axios.create({
//     baseURL: baseUrl
// });

// const onSuccess = (response) =>{
 
//         return response.data;

// }

//     const onError = (err) =>{
//         console.log(err);

//         if(err.response.status === 401){
//             // clearStorage()
//             removeItem('token')
//             window.location.pathname = '/' // or '/login'
//         }

//         if(err.response.status >= 400 && err.response.status <500){
//             alert("Client error : " + err.response.status);
//         }

//         return Promise.reject(err);

//     }

// instance.interceptors.response.use(onSuccess , onError);

// instance.interceptors.request.use((opt) => {

//     const token = getItem('token');
    

//     // opt.headers["MessageTest"] =  'Hello world!';
//     opt.headers["Content-Type"] =  'application/json';
//    if (token)  opt.headers.Authorization = 'Bearer ' + token;
//     return opt;
// })

// export default instance;



import axios from "axios";
import { getItem } from "../common/storage.services";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  console.log(err);

  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  opt.headers["MessageTest"] = "Hello world!";
  return opt;
});

export default instance;


// import axios from "axios";
// import { getItem, removeItem } from "../common/storage.services";

// const baseURL = import.meta.env.VITE_BASE_URL;

// const instance = axios.create({
//   baseURL: baseURL,
// });

// const onSuccess = (response) => {
//   return response.data;
// };

// const onError = (err) => {
//   console.log(err);

//   if (err.response.status === 401) {
//     removeItem("token");
//     window.location.pathname = "/";
//   }

//   if (err.response.status >= 400 && err.response.status < 500) {
//     alert("Client error: " + err.response.status);
//   }
//   return Promise.reject(err);
// };

// instance.interceptors.response.use(onSuccess, onError);

// instance.interceptors.request.use((opt) => {
//   const token = getItem("token");

//   if (token) opt.headers.Authorization = "Bearer " + token;
//   return opt;
// });

// export default instance;
