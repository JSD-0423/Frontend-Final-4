import { styled } from '@mui/material/styles';

export const NewArrivalBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  top: '622px',
  borderRadius: '8px',
  paddingLeft: '20px'
}));

export const HeadingBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px'
}));

export const CardsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '40px'
}));
