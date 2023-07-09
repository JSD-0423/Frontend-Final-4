import React from 'react';
import { NewArrivalBox, HeadingBox, CardsBox } from './NewArrivalsStyle';
import { Typography } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';

import ViewButton from '../ViewButton/ViewButton';

function NewArrivals() {
  return (
    <NewArrivalBox>
      <HeadingBox>
        <Typography variant="h1">New Arrivals</Typography>
        <ViewButton></ViewButton>
      </HeadingBox>
      <CardsBox>
        <ProductCard
          productName={'Grande'}
          ProductSpecifications={'Blossom Pouch'}
          ProductPrice={'$39.49'}
        />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsBox>
    </NewArrivalBox>
  );
}

export default NewArrivals;
