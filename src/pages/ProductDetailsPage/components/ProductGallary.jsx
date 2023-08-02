import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';

const Image = styled('img')(({ theme }) => ({
  width: '70px',
  height: '70px',
  objectFit: 'cover',
  borderRadius: '.5rem',
  marginTop: '1rem'
}));

const ProductGallary = ({ gallery }) => {
  const [mainImage, setMainImage] = useState(gallery[0]);

  const changeMainImage = (img) => {
    return setMainImage(img);
  };

  return (
    <Box sx={{ flex: '1', overflow: 'hidden' }} gap={1}>
      <Box height={'400px'}>
        <img
          height={'100%'}
          width={'100%'}
          style={{ objectFit: 'cover', borderRadius: '1rem' }}
          src={mainImage.image}
        />
      </Box>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
        {gallery.map((image) => (
          <Image
            onClick={() => changeMainImage(image)}
            // style={{ filter: `blur(${mainImage.id == image.id} ? 1px : 0)` }}
            src={image.image}
            key={image.image}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ProductGallary;
