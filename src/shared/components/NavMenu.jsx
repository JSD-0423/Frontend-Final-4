import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from './Navbar';

const pages = ['Handbags', 'Watches', 'Skincare', 'Jewellery', 'Apparels'];

const NavMenu = ({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              my: 2,
              color: 'black',
              display: 'block',
              textTransform: 'capitalize',
              fontSize: '.9rem',
              paddingInline: '5px'
            }}>
            {page}
          </Button>
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
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <Logo
          variant="h6"
          sx={{
            display: { xs: 'flex', md: 'none' }
          }}>
          CORA'L
        </Logo>
      </Box>
    </>
  );
};

export default NavMenu;
