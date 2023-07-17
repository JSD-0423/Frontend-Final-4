import { Grid, ListItem, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterComponent=styled('footer')(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    color:'white',
    marginTop:'50px',
    paddingInline:'4%'

}));
export const ListItemHead=styled(ListItem)(({theme})=>({
    color:'white',

}));
export const ListItemComponent=styled(ListItem)(({theme})=>({
    color:theme.palette.text.lightText

}));
export const LinkComponent=styled('a')(({theme})=>({
    textDecoration:'none',
    color:'inherit'

}));
export const IconImage=styled('img')(({theme})=>({
    marginInline:'5px'

}));