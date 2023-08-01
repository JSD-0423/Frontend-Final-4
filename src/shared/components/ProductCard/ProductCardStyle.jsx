import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Rating } from '@mui/material';

export const ProductItemCard = styled(Card)(({ theme }) => ({
  width: '284px',
  boxShadow: 'none'
}));

export const CardsDetailsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '.5rem'
}));

export const CardsTextBox = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});
export const CardsActions = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});

export const StyledRating = styled(Rating)({
  fontSize: '1.3rem',
  marginRight: '1rem',
  '& .MuiRating-decimal': {
    marginInline: '-1.5px'
  }
});
