import { Grid, List } from '@mui/material';
import { LinkComponent, ListItemComponent, ListItemHead } from './style';

function RegularGrid({ listHeader, listItems }) {
  return (
    <Grid item md={2} xs={12}>
      <List>
        <ListItemHead>{listHeader}</ListItemHead>
        {listItems.map((item) => {
          return (
            <ListItemComponent key={`${item}`}>
              <LinkComponent href="/">{item}</LinkComponent>
            </ListItemComponent>
          );
        })}
      </List>
    </Grid>
  );
}

export default RegularGrid;
