import React from 'react';
import { NewArrivalBox, HeadingBox } from './NewArrivalsStyle';
import { Typography } from '@mui/material';
import ViewButton from '../ViewButton/ViewButton';

import Carousel from '../Carousel/Carousel';
import { Link } from 'react-router-dom';

function NewArrivals({ path, data }) {
  return (
    <NewArrivalBox>
      <HeadingBox>
        <Typography variant="h1">New Arrivals</Typography>
        <Link to={path}>
          <ViewButton />
        </Link>
      </HeadingBox>
      <Carousel data={data} />
    </NewArrivalBox>
  );
}

export default NewArrivals;
