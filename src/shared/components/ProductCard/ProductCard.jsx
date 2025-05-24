import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Tooltip, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  CardsDetailsBox,
  CardsTextBox,
  CardsActions,
  ProductItemCard,
  StyledRating
} from './ProductCardStyle';
import { Stack } from '@mui/material';
import useFavorites from '../../../hooks/useFavorites';
import useAuth from '../../../hooks/useAuth';

function ProductCard({
  productId,
  productName,
  productPrice,
  productSpecifications,
  rating,
  productImage,
  product,
  isFavorite: initialFavorite = false
}) {
  const { isAuthenticated } = useAuth();
  const { toggleFavorite, isProductInFavorites } = useFavorites();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = React.useState(initialFavorite);
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // If a complete product object is passed, use its ID, otherwise use the separate productId prop
  const id = product?.id || productId;

  // Check if product is in favorites when component mounts
  React.useEffect(() => {
    if (isAuthenticated && id) {
      const favoriteStatus = isProductInFavorites(id);
      setIsFavorite(favoriteStatus);
    }
  }, [id, isAuthenticated, isProductInFavorites]);

  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      setSnackbar({
        open: true,
        message: 'Please sign in to add products to favorites',
        severity: 'info'
      });
      return;
    }

    try {
      const result = await toggleFavorite(id);
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

  const handleCardClick = () => {
    // Need to determine the category name from the product data
    const categoryName = product?.category?.name || 'category';
    navigate(`/products/${categoryName}/${id}`);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <ProductItemCard id={id} onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="286"
          image={
            product?.images?.[0]?.image || productImage || `../assets/images/pink-bag-small 2.png`
          }
          alt={productName || product?.name}
          sx={{ backgroundColor: 'gray', borderRadius: '8px', marginBottom: '4px' }}
        />
        <CardsDetailsBox>
          <CardsTextBox>
            <Typography variant="body2" marginBottom={'5px'}>
              {product?.name || productName}
            </Typography>
            <Typography variant="body1" marginBottom={'5px'}>
              {product?.description || productSpecifications}
            </Typography>
            {product?.rating || rating ? (
              <Stack direction={'row'} alignItems={'center'} mb={'5px'}>
                <StyledRating
                  name="read-only"
                  value={product?.rating || rating}
                  readOnly
                  precision={0.5}
                />
                <Typography fontWeight={500} color={'#1B4B66'} fontSize=".8rem">
                  43 Ratings
                </Typography>
              </Stack>
            ) : (
              ''
            )}
            <Typography variant="body2">
              ${product?.price || productPrice}
              {product?.discount > 0 && (
                <Typography
                  component="span"
                  sx={{
                    textDecoration: 'line-through',
                    color: 'text.secondary',
                    ml: 1
                  }}>
                  ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                </Typography>
              )}
            </Typography>
          </CardsTextBox>
          <CardsActions>
            <Tooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
              <IconButton onClick={handleFavoriteClick} size="small">
                {isFavorite ? <FavoriteIcon sx={{ color: '#A53F64' }} /> : <FavoriteBorderIcon />}
              </IconButton>
            </Tooltip>
          </CardsActions>
        </CardsDetailsBox>
      </ProductItemCard>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ProductCard;
