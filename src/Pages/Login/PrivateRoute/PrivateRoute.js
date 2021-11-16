import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <CircularProgress />;
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
