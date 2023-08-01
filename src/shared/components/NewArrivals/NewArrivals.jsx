import React from 'react';
import { NewArrivalBox, HeadingBox } from './NewArrivalsStyle';
import { Typography } from '@mui/material';
import ViewButton from '../ViewButton/ViewButton';

import Carousel from '../Carousel/Carousel';

function NewArrivals() {
  return (
    <NewArrivalBox>
      <HeadingBox>
        <Typography variant="h1">New Arrivals</Typography>
        <ViewButton></ViewButton>
      </HeadingBox>
      <Carousel />
    </NewArrivalBox>
  );
}

export default NewArrivals;
