import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardsDetailsBox, CardsTextBox, CardsActions, ProductItemCard } from './ProductCardStyle';

function ProductCard({ productId, productName, ProductPrice, ProductSpecifications, rating }) {
  return (
    <ProductItemCard id={productId}>
      <CardMedia
        component="img"
        height="194"
        image="../assets/images/pink-bag-small 2.png"
        alt="Paella dish"
        sx={{ backgroundColor: 'gray', borderRadius: '8px', marginBottom: '4px' }}
      />
      <CardsDetailsBox>
        <CardsTextBox>
          <Typography variant="body2" marginBottom={'5px'}>
            {productName}
          </Typography>
          <Typography variant="body1" marginBottom={'5px'}>
            {ProductSpecifications}
          </Typography>
          <Typography variant="body2">{ProductPrice}</Typography>
        </CardsTextBox>
        <CardsActions>
          <FavoriteBorderIcon />
        </CardsActions>
      </CardsDetailsBox>
      {rating && <div>{rating}</div>}
    </ProductItemCard>
  );
}

export default ProductCard;
