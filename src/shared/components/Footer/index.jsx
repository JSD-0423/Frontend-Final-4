import { Grid, List } from '@mui/material';
import { CustomGrid, FooterComponent, IconImage, ListItemComponent, ListItemHead } from './style';
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
        <CustomGrid
          item
          md={8}
          xs={12}
          >
          <List>
            <ListItemComponent>
              {socialMediaIcons.map((image) => {
                return <a href='/' key={`${image}`}><IconImage src={image}/></a>
              })}
            </ListItemComponent>
            <ListItemHead><img src={location}/>United States</ListItemHead>
            <ListItemComponent>© 2021 | Cora Leviene All Rights Reserved</ListItemComponent>
          </List>
        </CustomGrid>
      </Grid>
    </FooterComponent>
  );
}

export default Footer;
