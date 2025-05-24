import { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography, Snackbar, Alert } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledRating } from '../../../shared/components/ProductCard/ProductCardStyle';
import useFavorites from '../../../hooks/useFavorites';
import useAuth from '../../../hooks/useAuth';

const ProductDetails = ({ name, price, rating, description, productId }) => {
  const [counter, setCounter] = useState(1);
  const { isAuthenticated } = useAuth();
  const { toggleFavorite, isProductInFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    if (isAuthenticated && productId) {
      const favoriteStatus = isProductInFavorites(productId);
      setIsFavorite(favoriteStatus);
    }
  }, [productId, isAuthenticated, isProductInFavorites]);

  const increment = () => {
    setCounter((prev) => ++prev);
  };

  const decrement = () => {
    setCounter((prev) => (prev !== 1 ? --prev : prev));
  };

  const handleFavoriteToggle = async () => {
    if (!isAuthenticated) {
      setSnackbar({
        open: true,
        message: 'Please sign in to add products to favorites',
        severity: 'info'
      });
      return;
    }

    try {
      const result = await toggleFavorite(productId);
      setIsFavorite(!isFavorite);

      setSnackbar({
        open: true,
        message: result.message || (isFavorite ? 'Removed from favorites' : 'Added to favorites'),
        severity: result.success ? 'success' : 'error'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || 'Failed to update favorites',
        severity: 'error'
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Stack sx={{ flex: '1' }} gap={2}>
      <Box>
        <Typography variant="h4" fontWeight={500}>
          {name}
        </Typography>
        <Typography>Leather Coach Bag with adjustable starps.</Typography>
      </Box>
      <Stack direction={'row'} alignItems={'center'} mb={'5px'}>
        <StyledRating name="read-only" value={rating} readOnly precision={0.5} />
        <Typography fontSize=".8rem">143 Ratings</Typography>
      </Stack>
      <Box>
        <Typography fontSize="1.8rem" color={'black'} fontWeight={600}>
          ${price}
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        Quantity:
        <Stack
          direction={'row'}
          alignItems={'center'}
          border={'1px solid'}
          borderRadius={'5px'}
          ml={2}>
          <RemoveIcon sx={{ cursor: 'pointer' }} onClick={decrement} />
          <Typography paddingX={1}>{counter}</Typography>
          <AddIcon sx={{ cursor: 'pointer' }} onClick={increment} />
        </Stack>
      </Box>
      <Stack direction={'row'} mt={5} alignItems={'center'} justifyContent={'space-around'}>
        <Button variant="contained" sx={{ paddingInline: '2rem' }} startIcon={<WorkIcon />}>
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          sx={{ paddingInline: '2rem' }}
          startIcon={
            isFavorite ? <FavoriteIcon sx={{ color: '#A53F64' }} /> : <FavoriteBorderIcon />
          }
          onClick={handleFavoriteToggle}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ProductDetails;
