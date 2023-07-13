import { FavoriteBorder, PermIdentity, WorkOutline } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';

const UserMenu = ({ handleProfileMenuOpen, handleMenuClose, anchorEl }) => {
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <IconButton size="medium" color="inherit">
          <FavoriteBorder />
        </IconButton>
        <IconButton size="medium" onClick={handleProfileMenuOpen} color="inherit">
          <PermIdentity />
        </IconButton>
        <IconButton edge="end" size="medium" color="inherit">
          <WorkOutline />
        </IconButton>
      </Box>
      {renderMenu}
    </>
  );
};

export default UserMenu;
