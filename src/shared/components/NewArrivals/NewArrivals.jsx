import React from 'react';
import { NewArrivalBox, HeadingBox, CardsBox } from './NewArrivalsStyle';
import { Typography } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import Button from '@mui/material/Button';

import ViewButton from '../../ViewButton/ViewButton';

function NewArrivals() {
  return (
    <NewArrivalBox>
      <HeadingBox>
        <Typography variant="h1" color="text.secondary">
          New Arrival
        </Typography>
        <ViewButton></ViewButton>
      </HeadingBox>
      <CardsBox>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsBox>
    </NewArrivalBox>
  );
}

export default NewArrivals;
