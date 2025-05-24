import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert,
  CircularProgress
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '8px'
}));

const FormTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px'
  }
}));

const SignInButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: '8px',
  padding: '12px',
  textTransform: 'none',
  fontSize: '16px'
}));

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear specific error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await login(formData);
        navigate('/'); // Redirect to home page after successful login
      } catch (err) {
        // Error is handled by the useAuth hook
        console.error('Login failed:', err);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <FormContainer elevation={3}>
        <Typography variant="h4" color="primary" fontWeight={600} mb={3}>
          Sign In
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <FormTextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />

          <FormTextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />

          <SignInButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : 'Sign In'}
          </SignInButton>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              Don't have an account?{' '}
              <Link
                to="/signup"
                style={{ color: '#1B4B66', textDecoration: 'none', fontWeight: 500 }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
