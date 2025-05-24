import { FavoriteBorder, PermIdentity, WorkOutline, Logout, Favorite } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Button, Snackbar, Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserMenu = ({ handleProfileMenuOpen, handleMenuClose, anchorEl }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const [userName, setUserName] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.user) {
      setUserName(user.user.name || 'User');
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleFavoritesClick = (e) => {
    e.preventDefault();

    // Check if user is authenticated before navigating to favorites
    if (isAuthenticated) {
      navigate('/favorites');
    } else {
      setSnackbar({
        open: true,
        message: 'Please sign in to view your favorites',
        severity: 'info'
      });

      // Optional: Navigate to sign in after a short delay
      setTimeout(() => {
        navigate('/signin');
      }, 1500);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
      {isAuthenticated ? (
        <>
          <MenuItem onClick={handleMenuClose}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PermIdentity />
              {userName}
            </Box>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              navigate('/favorites');
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Favorite fontSize="small" />
              My Favorites
            </Box>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Logout fontSize="small" />
              Logout
            </Box>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
          <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <IconButton size="medium" style={{ color: '#1B4B66' }} onClick={handleFavoritesClick}>
          <FavoriteBorder color="inherit" />
        </IconButton>
        <IconButton size="medium" onClick={handleProfileMenuOpen} style={{ color: '#1B4B66' }}>
          <PermIdentity />
        </IconButton>
        <IconButton edge="end" size="medium" style={{ color: '#1B4B66' }}>
          <a href="/mycart" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <WorkOutline />
          </a>
        </IconButton>
      </Box>
      {renderMenu}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UserMenu;
