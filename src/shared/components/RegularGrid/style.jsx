import styled from '@emotion/styled';
import { ListItem } from '@mui/material';

export const ListItemHead = styled(ListItem)(({ theme }) => ({
  color: 'white'
}));
export const ListItemComponent = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.lightText
}));
export const LinkComponent = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit'
}));
