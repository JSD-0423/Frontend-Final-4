import { List } from '@mui/material';
import { LinkComponent, ListItemComponent, ListItemHead, RegularGridStyle } from './style';

function RegularGrid({ listHeader, listItems }) {
  return (
    <RegularGridStyle item md={2} xs={12}>
      <List>
        <ListItemHead>{listHeader}</ListItemHead>
        {listItems.map((item) => {
          return (
            <ListItemComponent>
              <LinkComponent href="/">{item}</LinkComponent>
            </ListItemComponent>
          );
        })}
      </List>
    </RegularGridStyle>
  );
}

export default RegularGrid;
