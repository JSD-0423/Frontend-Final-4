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

const SignUpButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: '8px',
  padding: '12px',
  textTransform: 'none',
  fontSize: '16px'
}));

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const { register, isLoading, error } = useAuth();
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

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Remove confirmPassword before sending to API
        const { confirmPassword, ...userData } = formData;
        await register(userData);
        setSuccessMessage('Account created successfully! Redirecting to login...');

        // Redirect to sign in page after successful registration
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
      } catch (err) {
        // Error is handled by the useAuth hook
        console.error('Registration failed:', err);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <FormContainer elevation={3}>
        <Typography variant="h4" color="primary" fontWeight={600} mb={3}>
          Create Account
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        {successMessage && (
          <Alert severity="success" sx={{ width: '100%', mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <FormTextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />

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

          <FormTextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!formErrors.confirmPassword}
            helperText={formErrors.confirmPassword}
          />

          <SignUpButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : 'Sign Up'}
          </SignUpButton>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              Already have an account?{' '}
              <Link
                to="/signin"
                style={{ color: '#1B4B66', textDecoration: 'none', fontWeight: 500 }}>
                Sign In
              </Link>
            </Typography>
          </Box>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
