import React from 'react';
import { ViewAllButton } from './ViewButtonStyle';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

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
