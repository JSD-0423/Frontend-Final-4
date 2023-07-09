import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  CardsDetailsContainer,
  CardsTextContainer,
  CardsActionsContainer,
  ProductItemCard
} from './ProductCardStyle';

export default function ProductCard({ productName, ProductPrice, ProductSpecifications }) {
  return (
    <ProductItemCard>
      <CardMedia
        component="img"
        height="194"
        image="../assets/images/pink-bag-small 2.png"
        alt="Paella dish"
        sx={{ backgroundColor: 'gray', borderRadius: 2, marginBottom: '4px' }}
      />
      <CardsDetailsContainer>
        <CardsTextContainer>
          <Typography variant="body2" marginBottom={'5px'}>
            {productName}
          </Typography>
          <Typography variant="body1" marginBottom={'5px'}>
            {ProductSpecifications}
          </Typography>
          <Typography variant="body2">{ProductPrice}</Typography>
        </CardsTextContainer>
        <CardsActionsContainer>
          <FavoriteBorderIcon />
        </CardsActionsContainer>
      </CardsDetailsContainer>
    </ProductItemCard>
  );
}
