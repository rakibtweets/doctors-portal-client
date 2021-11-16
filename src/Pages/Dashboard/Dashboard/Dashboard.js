import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

import useAuth from '../../../Hooks/useAuth';

const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      // sx={{ bgcolor: '#19D3AE', height: '100vh' }}
      style={{ color: 'white', background: '#19D3AE', height: '100vh' }}
    >
      <Toolbar />
      <Divider />

      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        to="/appointment"
      >
        <Button variant="inherit">Appointment</Button>
      </Link>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
        <Button variant="inherit">Dashboard</Button>
      </Link>

      {admin && (
        <Box>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/dashboard/makeAdmin"
          >
            <Button variant="inherit">Make Admin</Button>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/dashboard/addDoctor"
          >
            <Button variant="inherit">Add Doctor</Button>
          </Link>
        </Box>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex', mt: 3 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#FFFFFF',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon style={{ color: 'black' }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="#19D3AE">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* nesting route */}
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
