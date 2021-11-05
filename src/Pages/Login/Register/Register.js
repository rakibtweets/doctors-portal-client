import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerNewUser, isLoading } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert('Password does not match');
      return;
    }
    registerNewUser(loginData.email, loginData.password);
    e.preventDefault();
    // e.target.reset();
  };
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80%',
            }}
          >
            <Typography
              sx={{ textAlign: 'center' }}
              variant="h5"
              color="#686868"
            >
              Register
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: '80%', m: 2 }}
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                />
                <TextField
                  sx={{ width: '80%', m: 2 }}
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                />
                <TextField
                  sx={{ width: '80%', m: 2 }}
                  id="standard-basic"
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                  name="password2"
                  onChange={handleOnChange}
                />
                <Button
                  sx={{ width: '80%', m: 2 }}
                  variant="contained"
                  style={{ background: '#19D3AE' }}
                  type="submit"
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: 'none' }} to="/login">
                  <Button variant="text" style={{ color: '#19D3AE' }}>
                    All ready registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%', height: '100vh' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
