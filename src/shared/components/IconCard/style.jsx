import styled from '@emotion/styled';

export const IconCardContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.grey,
  borderRadius: '10px',
  minWidth: '168px',
  minHeight: '168px',
  width: '100%'
}));
export const IConCardImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  alignItems: 'center'
});
