import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const ProductItemCard = styled(Card)(({ theme }) => ({
  width: '268px',
  height: '268px',
  boxShadow: 'none'
}));

export const CardsDetailsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const CardsTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});
export const CardsActionsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});
