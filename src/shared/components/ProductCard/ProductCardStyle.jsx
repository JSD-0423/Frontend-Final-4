import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const ProductItemCard = styled(Card)(({ theme }) => ({
  width: '286px',
  height: '268px',
  boxShadow: 'none'
}));

export const CardsDetailsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const CardsTextBox = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});
export const CardsActions = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});
