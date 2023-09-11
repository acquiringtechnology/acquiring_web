import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  }
});

export const logout = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
  localStorage.clear();
  // history.push('/');
  // window.location.reload(true);
};
