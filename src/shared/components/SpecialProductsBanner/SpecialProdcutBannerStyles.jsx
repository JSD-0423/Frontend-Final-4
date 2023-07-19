import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';

export const ProductBox = styled('div')(({ theme }) => ({
  height: '400px',
  position: 'relative',
  marginRight: '20px',
  marginLeft: '20px',
  borderRadius: '8px',
  overflow: 'hidden',
  display: 'flex',
  marginBottom: '40px'
}));
export const ImageBanner = styled('img')(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
  zIndex: '2'
}));

export const ProductInfoBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  position: 'absolute',
  top: '37%',
  left: '4%'
}));
export const ProductInfo = styled(Typography)(({ theme }) => ({
  zIndex: '3',
  [theme.breakpoints.up('xs')]: {
    fontSize: '22px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '32px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '42px'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '52px'
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '52px'
  }
}));
