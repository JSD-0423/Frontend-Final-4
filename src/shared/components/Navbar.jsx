import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import NavMenu from './NavMenu';
import UserMenu from './UserMenu';
import MobileUserMenu from './MobileUserMenu';

export const Logo = styled(Typography)(({ theme }) => ({
  marginRight: '2rem',
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  letterSpacing: '.05rem',
  color: theme.typography.h1.color,
  textDecoration: 'none'
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: 'var(--bg-white)', color: 'black', boxShadow: 'none' }}>
        <Toolbar>
          <Logo
            variant="h6"
            sx={{
              display: { xs: 'none', md: 'flex' }
            }}>
            CORA'L
          </Logo>

          <NavMenu
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />

          <Box sx={{ flexGrow: 1 }} />

          <SearchBar />

          <UserMenu
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleMenuClose={handleMenuClose}
            anchorEl={anchorEl}
          />

          <MobileUserMenu
            handleMobileMenuOpen={handleMobileMenuOpen}
            handleMobileMenuClose={handleMobileMenuClose}
            mobileMoreAnchorEl={mobileMoreAnchorEl}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
