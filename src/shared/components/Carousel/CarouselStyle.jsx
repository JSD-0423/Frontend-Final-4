import { Box, ImageList } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';

export const CarouselBox = styled(ImageList)(({ theme }) => ({
  overflow: 'scroll',
  height: '400px',
  margin: '0px  20px  0px 20px '

  //   width: '100%'
}));
