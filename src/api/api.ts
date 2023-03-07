import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '/mock/mock_data.json',
};

const apiClient = axios.create(config);

export default apiClient;
