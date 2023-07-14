import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const ImageCardContainer = styled('div')({
  minHeight: '280px',
  minWidth: '280px',
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden'
});
export const ImageCardTypography = styled(Typography)({
  position: 'absolute',
  bottom: '14px',
  left: '16px',
  fontSize: '1.5rem',
  fontWeight: '600'
});
export const ImageStyle = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: '10px'
});
export const LinearGrad = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(196,196,196,0.2) 45%, rgba(3,24,26,0.2) 99%)'
});
