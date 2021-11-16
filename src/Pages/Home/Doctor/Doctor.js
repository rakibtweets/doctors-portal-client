import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
  return (
    <Grid item xs={12} md={4}>
      <img
        src={`data:image/jpeg;base64,${doctor.image}`}
        style={{ width: '50%' }}
        alt=""
      />
      <h4>{doctor.name}</h4>
    </Grid>
  );
};

export default Doctor;
