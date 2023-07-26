import styled from '@emotion/styled';

export const IconCardContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.grey,
  borderRadius: '10px',
  minWidth: '168px',
  minHeight: '168px',
  width: '100%',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}));
export const IConCardImageContainer = styled('div')({
  width:'160px',
  height:'50px',
});
