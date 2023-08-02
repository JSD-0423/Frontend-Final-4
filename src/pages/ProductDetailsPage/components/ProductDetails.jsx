import { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating } from '../../../shared/components/ProductCard/ProductCardStyle';

const ProductDetails = ({ name, price, rating, description }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prev) => ++prev);
  };

  const decrement = () => {
    setCounter((prev) => (prev !== 1 ? --prev : prev));
  };

  return (
    <Stack sx={{ flex: '1' }} gap={2}>
      <Box>
        <Typography variant="h4" fontWeight={500}>
          {name}
        </Typography>
        <Typography>Leather Coach Bag with adjustable starps.</Typography>
      </Box>
      <Stack direction={'row'} alignItems={'center'} mb={'5px'}>
        <StyledRating name="read-only" value={rating} readOnly precision={0.5} />
        <Typography fontSize=".8rem">143 Ratings</Typography>
      </Stack>
      <Box>
        <Typography fontSize="1.8rem" color={'black'} fontWeight={600}>
          ${price}
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        Quantity:
        <Stack
          direction={'row'}
          alignItems={'center'}
          border={'1px solid'}
          borderRadius={'5px'}
          ml={2}>
          <RemoveIcon sx={{ cursor: 'pointer' }} onClick={decrement} />
          <Typography paddingX={1}>{counter}</Typography>
          <AddIcon sx={{ cursor: 'pointer' }} onClick={increment} />
        </Stack>
      </Box>
      <Stack direction={'row'} mt={5} alignItems={'center'} justifyContent={'space-around'}>
        <Button variant="contained" sx={{ paddingInline: '2rem' }} startIcon={<WorkIcon />}>
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          sx={{ paddingInline: '2rem' }}
          startIcon={<FavoriteBorderIcon />}>
          Add To Wishlist
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
