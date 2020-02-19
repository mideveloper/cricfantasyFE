import axios from 'axios';
import { toast } from 'react-toastify';

class httpService {
  axiosInstance;

  static init(token = null) {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    };
    if (token) headers.Authorization = `${token}`;
    this.axiosInstance = axios.create({
      headers,
      baseURL: 'http://localhost:8000/v1/api/',
    });
    this.axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 400) {
          if (error.response && error.response.data && error.response.data.meta && error.response.data.meta.message) {
            toast.error(error.response.data.meta.message);
          } else if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Error please try again later");
          }
          return error.response
        } else {
          toast.error("Error please try again later");
        }
      }
    );
  }
  static get(url, params = {}) {
    return this.axiosInstance.get(url, { params });
  }
  static post(url, body = {}) {
    return this.axiosInstance.post(url, body);
  }
}
export default httpService;
