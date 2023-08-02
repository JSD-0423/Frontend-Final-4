import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from './Navbar';
import { Link } from 'react-router-dom';
import { categoriesList } from '../../constants';

const NavMenu = ({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {categoriesList.map((category) => (
          <Link to={`/${category.name.toLocaleLowerCase()}?id=${category.id}`} key={category.id}>
            <Button
              id={category.id}
              sx={{
                my: 2,
                color: 'black',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '.9rem',
                paddingInline: '5px'
              }}>
              {category.name}
            </Button>
          </Link>
        ))}
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center'
        }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' }
          }}>
          {categoriesList.map((category) => (
            <Link to={`/${category.name.toLocaleLowerCase()}?id=${category.id}`} key={category.id}>
              <MenuItem key={category.id} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{category.name}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
        <Link to="/">
          <Logo
            variant="h6"
            sx={{
              display: { xs: 'flex', md: 'none' }
            }}>
            CORA'L
          </Logo>
        </Link>
      </Box>
    </>
  );
};

export default NavMenu;
