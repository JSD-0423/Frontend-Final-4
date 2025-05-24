import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useFavorites from '../../hooks/useFavorites';
import useAuth from '../../hooks/useAuth';
import Spinner from '../../shared/components/Spinner/Spinner';
import { ProductCard } from '../../shared';

const FavoritesPage = () => {
  const { favorites, loading, error, fetchFavorites } = useFavorites();
  const { isAuthenticated, user } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const initPage = async () => {
      // Add a small delay to allow authentication state to stabilize
      await new Promise((resolve) => setTimeout(resolve, 300));

      if (!isMounted) return;

      setAuthChecked(true);

      if (!isAuthenticated) {
        setAuthError('Please sign in to view your favorites');
        return;
      }

      try {
        await fetchFavorites();
      } catch (err) {
        // If we got a 401, the user needs to sign in again
        if (err.status === 401) {
          setAuthError('Your session has expired. Please sign in again.');
          // Navigate to sign in after a short delay
          setTimeout(() => {
            if (isMounted) {
              navigate('/signin', {
                state: {
                  from: '/favorites',
                  message: 'Your session has expired. Please sign in again.'
                }
              });
            }
          }, 2000);
        }
      }
    };

    initPage();

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, navigate, fetchFavorites]);

  // Show message if not authenticated
  if (authChecked && !isAuthenticated) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8, mb: 8, textAlign: 'center' }}>
        <Alert severity="info" sx={{ mb: 4 }}>
          {authError || 'Please sign in to view your favorites'}
        </Alert>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/signin')}
          sx={{ mt: 2 }}>
          Sign In
        </Button>
      </Container>
    );
  }

  // Show spinner while loading OR while checking authentication status
  if (loading || !authChecked) return <Spinner />;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" fontWeight={600} color="primary" sx={{ mb: 4, mt: 2 }}>
        My Favorites
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {favorites.length === 0 && !loading && !error && (
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            You haven't added any products to your favorites yet.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            Browse Products
          </Button>
        </Box>
      )}

      <Grid container spacing={3}>
        {favorites.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} isFavorite={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
