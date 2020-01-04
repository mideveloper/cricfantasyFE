import axios from 'axios';

class httpService {
  axiosInstance;

  static init(token = null) {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    };
    if (token) headers.Authorization = `bearer ${token}`;
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
          return error.response
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
