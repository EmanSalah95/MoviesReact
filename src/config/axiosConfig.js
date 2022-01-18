import axios from 'axios';
import { changeLoader } from './../store/actions/loader';
import store from './../store/store';

export const apikey='f680c31171e9ae5ac360c64f3bc0110b';
export const images='https://image.tmdb.org/t/p/w500/';
const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

axiosInstance.interceptors.request.use(
    function (config) {
      store.dispatch(changeLoader(true));
  
      config.params = {
        api_key: "f680c31171e9ae5ac360c64f3bc0110b",
      };
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  axiosInstance.interceptors.response.use(
    function (response) {
  
      store.dispatch(changeLoader(false));
  
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  


export default axiosInstance