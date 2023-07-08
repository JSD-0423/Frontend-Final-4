import React from 'react';
import { ViewAllButton } from './ViewButtonStyle';
import { Button } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { dark } from '@mui/material/styles/createPalette';

function ViewButton() {
  return (
    <ViewAllButton
      variant="text"
      endIcon={<ArrowForwardIosRoundedIcon sx={{ fontSize: '20px !important' }} />}>
      View All
    </ViewAllButton>
  );
}

export default ViewButton;
