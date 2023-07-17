import styled from "@emotion/styled";
import { Grid, ListItem } from "@mui/material";

export const RegularGridStyle = styled(Grid)`
  @media (max-width:500px) {
    display:flex; 
    justify-content:center
  }`;
  export const ListItemHead=styled(ListItem)(({theme})=>({
    color:'white',

}));
export const ListItemComponent=styled(ListItem)(({theme})=>({
    color:theme.palette.text.lightText,
    

}));
export const LinkComponent=styled('a')(({theme})=>({
    textDecoration:'none',
    color:'inherit'

}));