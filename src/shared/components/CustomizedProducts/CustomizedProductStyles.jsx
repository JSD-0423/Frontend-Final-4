import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

export const ProductBox = styled('div')(({ theme }) => ({
  height: '228px',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: '1',
  position: 'relative'
}));
export const ImageStyle = styled('img')(({ theme }) => ({
  height: '100%',
  width: '100%',
  borderRadius: '8px',
  objectFit: 'cover'
}));
export const ProductsSpecification = styled(Typography)(({ theme }) => ({
  zIndex: '3',
  position: 'absolute',
  right: '6.5%',
  top: '11.5%',
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '30px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '40px'
  }
}));
export const ArrowButton = styled(Button)(({ theme }) => ({
  zIndex: '3',
  position: 'absolute',
  right: '6.5%',
  top: '58%',
  borderRadius: '50%',
  minWidth: '1px'
}));
export const ArrowIcon = styled(EastRoundedIcon)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '28px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '40px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '51px'
  }
}));
