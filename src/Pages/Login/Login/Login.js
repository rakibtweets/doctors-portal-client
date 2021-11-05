import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert('Logged In');
    e.target.reset();
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
              Login
            </Typography>
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
                name="passoword"
                onChange={handleOnChange}
              />
              <Button
                sx={{ width: '80%', m: 2 }}
                variant="contained"
                style={{ background: '#19D3AE' }}
                type="submit"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to="/register">
                <Button variant="text" style={{ color: '#19D3AE' }}>
                  New User? Please Register
                </Button>
              </NavLink>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%', height: '100vh' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
