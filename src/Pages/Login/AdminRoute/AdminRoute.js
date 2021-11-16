import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  const location = useLocation();
  if (!admin) {
    return <CircularProgress />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/log" state={{ from: location }} />;
};

export default AdminRoute;
