import axios from 'axios';

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user') || '{}')?.token || ''}`
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

// Authentication Services
export const signUp = async (userData) => {
  return postRequest('/auth/signup', userData);
};

export const signIn = async (credentials) => {
  return postRequest('/auth/signin', credentials);
};

export const setAuthHeader = (token) => {
  console.log('Setting auth header:', token);
  if (token) {
    ApiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete ApiService.defaults.headers.common['Authorization'];
  }
};

// Favorites Services with consistent auth header handling
export const getFavorites = async () => {
  return getRequest('/favourites');
};

export const addToFavorites = async (productId) => {
  return postRequest('/favourites/add', { productId });
};

export const removeFromFavorites = async (productId) => {
  return postRequest('/favourites/remove', { productId });
};
