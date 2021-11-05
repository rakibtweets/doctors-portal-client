import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, userLogOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/appointment"
          >
            <Button color="inherit">Appointment</Button>
          </Link>
          {!user.email ? (
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </Link>
          ) : (
            <Link style={{ textDecoration: 'none', color: 'white' }}>
              <Button onClick={userLogOut} color="inherit">
                LogOut
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
