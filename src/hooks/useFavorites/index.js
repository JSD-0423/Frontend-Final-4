import { useState, useEffect, useCallback } from 'react';
import { getFavorites, addToFavorites, removeFromFavorites } from '../../services/ApiService';
import useAuth from '../useAuth';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();

  // Fetch favorites when user is authenticated
  const fetchFavorites = useCallback(async () => {
    if (!isAuthenticated) {
      setFavorites([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const favoritesData = await getFavorites();
      setFavorites(favoritesData || []);
    } catch (err) {
      // Capture the status code if available
      const status = err.status || null;
      const errorMessage = err.message || 'Failed to fetch favorites';

      setError({
        message: errorMessage,
        status
      });

      console.error('Error fetching favorites:', err);

      // Rethrow to allow the component to handle the error
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated]);

  // Add a product to favorites
  const addProductToFavorites = async (productId) => {
    if (!isAuthenticated) {
      const error = { success: false, message: 'Please sign in to add favorites', status: 401 };
      setError(error);
      return error;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await addToFavorites(productId);

      // Instead of making another API call, update the local state directly
      // if the API returns the product data
      if (response.product) {
        setFavorites((prev) => [...prev, response.product]);
      } else {
        // If API doesn't return product data, fetch the latest data
        await fetchFavorites();
      }

      return { success: true, message: response.message };
    } catch (err) {
      const status = err.status || null;
      const errorMessage = err.message || 'Failed to add to favorites';

      setError({
        message: errorMessage,
        status
      });

      console.error('Error adding to favorites:', err);
      return { success: false, message: errorMessage, status };
    } finally {
      setLoading(false);
    }
  };

  // Remove a product from favorites
  const removeProductFromFavorites = async (productId) => {
    if (!isAuthenticated) {
      const error = { success: false, message: 'Please sign in to manage favorites', status: 401 };
      setError(error);
      return error;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await removeFromFavorites(productId);

      // Update local state directly instead of making another API call
      setFavorites((prev) => prev.filter((item) => item.id !== productId));

      return { success: true, message: response.message };
    } catch (err) {
      const status = err.status || null;
      const errorMessage = err.message || 'Failed to remove from favorites';

      setError({
        message: errorMessage,
        status
      });

      console.error('Error removing from favorites:', err);
      return { success: false, message: errorMessage, status };
    } finally {
      setLoading(false);
    }
  };

  // Toggle a product's favorite status
  const toggleFavorite = async (productId) => {
    if (!isAuthenticated) {
      const error = { success: false, message: 'Please sign in to manage favorites', status: 401 };
      setError(error);
      return error;
    }

    const isProductFavorited = favorites.some((favorite) => favorite.id === productId);

    if (isProductFavorited) {
      return removeProductFromFavorites(productId);
    } else {
      return addProductToFavorites(productId);
    }
  };

  // Check if a product is in favorites
  const isProductInFavorites = useCallback(
    (productId) => {
      return favorites.some((favorite) => favorite.id === productId);
    },
    [favorites]
  );

  // Load favorites when authentication state changes or on mount
  useEffect(() => {
    let isMounted = true;

    if (isAuthenticated) {
      fetchFavorites().catch((err) => {
        if (isMounted) {
          // Error is already handled in fetchFavorites
          console.log('Failed to fetch favorites on auth change');
        }
      });
    } else {
      setFavorites([]);
    }

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, fetchFavorites]);

  return {
    favorites,
    loading,
    error,
    addProductToFavorites,
    removeProductFromFavorites,
    toggleFavorite,
    isProductInFavorites,
    fetchFavorites
  };
};

export default useFavorites;
