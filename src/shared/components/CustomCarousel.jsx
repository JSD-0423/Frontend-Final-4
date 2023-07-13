import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Image from '../../../angular.png';
import Image2 from '../../../expressjs.webp';

const Item = ({ item }) => {
  return (
    <Paper
      sx={{
        height: '20rem',
        position: 'relative',
        borderRadius: '2rem',
        overflow: 'hidden',
        backgroundImage: `url(${item.image})`
      }}>
      <Box
        sx={{
          display: 'inline-block',
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translate(0, -50%)',
          bgcolor: '#DEDEDEB2',
          borderRadius: '.8rem 0 0 .8rem',
          padding: '1.5rem 2rem',
          width: '55%',
          minHeight: '70%'
        }}>
        <Typography variant="h1" color={'#1B4B66'} fontWeight={800}>
          {item.name}
        </Typography>
        <Typography variant="subtitle2" color={'#1B4B66'} width={'60%'} marginY={3}>
          {item.description}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowForward />}
          sx={{ backgroundColor: '#1B4B66 !important' }}>
          See more
        </Button>
      </Box>
    </Paper>
  );
};

const CustomCarousel = () => {
  const items = [
    {
      name: 'Carry your Funk #1',
      description: 'Trendy handbags collection for your party animal',
      image: Image
    },
    {
      name: 'Carry your Funk #2',
      description: 'Trendy handbags collection for your party animal',
      image: Image2
    }
  ];

  return (
    <Box mt={2} sx={{ height: '20rem', paddingLeft: '24px', paddingRight: '24px' }}>
      <Carousel indicators={false} swipe={false} animation="slide" duration={800}>
        {items.map((item, i) => (
          <Item key={item.name + i++} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
