import axios from "axios";

const axiosPrivate = axios.create();

// Add a request interceptor
axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    
    // Do something with response data
    return response;
}, function (error) {
   
    // Do something with response error
    return Promise.reject(error);
});

export default axiosPrivate;