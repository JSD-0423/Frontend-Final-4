import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { FavoriteBorder, PermIdentity, WorkOutline } from '@mui/icons-material';

const MobileUserMenu = ({ handleMobileMenuOpen, handleMobileMenuClose, mobileMoreAnchorEl }) => {
  const renderMobileMenu = (
    <Menu
      sx={{ padding: '0' }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
          <FavoriteBorder />
        </IconButton>
        <p>Favorite</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton size="medium" aria-label="show 17 new notifications" color="inherit">
          <PermIdentity />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton size="medium" color="inherit">
          <WorkOutline />
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit">
          <MoreIcon />
        </IconButton>
      </Box>
      {renderMobileMenu}
    </>
  );
};

export default MobileUserMenu;
