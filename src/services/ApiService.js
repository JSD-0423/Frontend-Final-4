import axios from 'axios';

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${token}` // In case we need the authontication
  }
});

const makeRequest = async (method, ...args) => {
  try {
    const response = await ApiService[method](...args);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getRequest = (endpoint, config) => {
  return makeRequest('get', endpoint, config);
};

export const postRequest = (endpoint, data, config) => {
  return makeRequest('post', endpoint, data, config);
};

export const deleteRequest = (endpoint, config) => {
  return makeRequest('delete', endpoint, config);
};

export const putRequest = (endpoint, data, config) => {
  return makeRequest('put', endpoint, data, config);
};
