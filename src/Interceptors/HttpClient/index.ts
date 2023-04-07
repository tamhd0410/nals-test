import axios, { AxiosError, AxiosResponse } from 'axios';

const apiUrl = 'https://5f55a98f39221c00167fb11a.mockapi.io/';

const HttpClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'content-type': 'application/json',
  },
  timeout: 10000,
});

HttpClient.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: any) => {
    const customHeaders: Record<string, string> = {
      Authorization: '',
    };

    const token = localStorage.getItem('access_token');
    if (token) {
      customHeaders.Authorization = `Bearer ${token}`;
    }

    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers, // but you can override for some requests
      },
    };
  },
  (error: AxiosError) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

HttpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      window.location.href = '/login';
    } else {
      return Promise.reject(error.response);
    }
  }
);

export default HttpClient;
