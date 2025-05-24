import { useState, useEffect } from 'react';
import { signIn, signUp, setAuthHeader } from '../../services/ApiService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for user in localStorage on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      // setAuthHeader(parsedUser.token);
    }
  }, []);

  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await signIn(credentials);
      const userData = response;

      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      // Set user in state
      setUser(userData);

      // Set auth header for future requests
      setAuthHeader(userData.token);

      return userData;
    } catch (err) {
      setError(err.message || 'Failed to sign in');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await signUp(userData);
      return response;
    } catch (err) {
      setError(err.message || 'Failed to sign up');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Remove user from localStorage
    localStorage.removeItem('user');

    // Clear user from state
    setUser(null);

    // Clear auth header
    // setAuthHeader(null);
  };

  return {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };
};

export default useAuth;
