import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  CardsDetailsBox,
  CardsTextBox,
  CardsActions,
  ProductItemCard,
  StyledRating
} from './ProductCardStyle';
import { Stack } from '@mui/material';

function ProductCard({
  productId,
  productName,
  productPrice,
  productSpecifications,
  rating,
  productImage
}) {
  return (
    <ProductItemCard id={productId}>
      <CardMedia
        component="img"
        height="286"
        image={productImage || `../assets/images/pink-bag-small 2.png`}
        alt="Paella dish"
        sx={{ backgroundColor: 'gray', borderRadius: '8px', marginBottom: '4px' }}
      />
      <CardsDetailsBox>
        <CardsTextBox>
          <Typography variant="body2" marginBottom={'5px'}>
            {productName}
          </Typography>
          <Typography variant="body1" marginBottom={'5px'}>
            {productSpecifications}
          </Typography>
          {rating ? (
            <Stack direction={'row'} alignItems={'center'} mb={'5px'}>
              <StyledRating name="read-only" value={rating} readOnly precision={0.5} />
              <Typography fontWeight={500} color={'#1B4B66'} fontSize=".8rem">
                43 Ratings
              </Typography>
            </Stack>
          ) : (
            ''
          )}
          <Typography variant="body2">{productPrice}</Typography>
        </CardsTextBox>
        <CardsActions>
          <FavoriteBorderIcon />
        </CardsActions>
      </CardsDetailsBox>
    </ProductItemCard>
  );
}

export default ProductCard;
