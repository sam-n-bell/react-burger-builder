import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-fb906.firebaseio.com/'
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = 'Bear ThisTokenHere';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    
    // send to login or an error page
    return Promise.reject(error);
  });

export default instance;