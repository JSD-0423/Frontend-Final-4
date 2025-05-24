import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
  FavoriteBorder,
  PermIdentity,
  WorkOutline,
  Login,
  PersonAdd,
  Logout,
  Favorite
} from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const MobileUserMenu = ({ handleMobileMenuOpen, handleMobileMenuClose, mobileMoreAnchorEl }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    handleMobileMenuClose();
    navigate('/signin');
  };

  const handleSignUp = () => {
    handleMobileMenuClose();
    navigate('/signup');
  };

  const handleLogout = () => {
    logout();
    handleMobileMenuClose();
    navigate('/');
  };

  const handleCartClick = () => {
    handleMobileMenuClose();
    navigate('/mycart');
  };

  const handleFavoritesClick = () => {
    handleMobileMenuClose();
    navigate('/favorites');
  };

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
      <MenuItem onClick={handleFavoritesClick}>
        <IconButton size="medium" aria-label="favorites" color="inherit">
          <Favorite />
        </IconButton>
        <p>Favorites</p>
      </MenuItem>

      <MenuItem onClick={handleCartClick}>
        <IconButton size="medium" color="inherit">
          <WorkOutline />
        </IconButton>
        <p>Cart</p>
      </MenuItem>

      {isAuthenticated ? (
        <>
          <MenuItem onClick={handleMobileMenuClose}>
            <IconButton size="medium" color="inherit">
              <PermIdentity />
            </IconButton>
            <p>{user?.user?.name || 'Profile'}</p>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <IconButton size="medium" color="inherit">
              <Logout />
            </IconButton>
            <p>Logout</p>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleSignIn}>
            <IconButton size="medium" color="inherit">
              <Login />
            </IconButton>
            <p>Sign In</p>
          </MenuItem>
          <MenuItem onClick={handleSignUp}>
            <IconButton size="medium" color="inherit">
              <PersonAdd />
            </IconButton>
            <p>Sign Up</p>
          </MenuItem>
        </>
      )}
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
