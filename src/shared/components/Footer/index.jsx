import { Grid, Link, List } from '@mui/material';
import { FooterComponent, IconImage, LinkComponent, ListItemComponent, ListItemHead } from './style';
import fb from '../../../images/fb.svg';
import insta from '../../../images/insta.svg';
import twitter from '../../../images/twitter.svg';
import youtube from '../../../images/youtube.svg';
import location from '../../../images/location.svg';
import RegularGrid from '../RegularGrid';

function Footer() {
  const categories = [
    'Skincare',
    'Personal Care',
    'Handbags',
    'Apparels',
    'Watches',
    'Eye Wear',
    'Jewellery'
  ];
  const products = [
    'Skincare',
    'Personal Care',
    'Handbags',
    'Apparels',
    'Watches',
    'Eye Wear',
    'Jewellery'
  ];
  const socialMediaIcons = [fb, insta, twitter, youtube];

  return (
    <FooterComponent>
      <Grid container spacing={2}>
        <RegularGrid listHeader={'Shop by Category'} listItems={categories}/>
        <RegularGrid listHeader={'Shop by Products'} listItems={products}/>
        <Grid
          item
          md={8}
          xs={12}
          sx={{
            justifyContent: 'flex-end',
            display:'flex',
            marginTop:'20px'
          }}>
          <List>
            <ListItemComponent sx={{justifyContent:'flex-end'}}>
              {socialMediaIcons.map((image) => {
                return <a href='/'><IconImage src={image}/></a>
              })}
            </ListItemComponent>
            <ListItemHead sx={{justifyContent:'flex-end'}}><img src={location}/>United States</ListItemHead>
            <ListItemComponent>© 2021 | Cora Leviene All Rights Reserved</ListItemComponent>
          </List>
        </Grid>
      </Grid>
    </FooterComponent>
  );
}

export default Footer;
