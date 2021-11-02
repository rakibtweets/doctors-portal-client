import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
  background: `url(${bg})`,
  position: 'cover',
  
};

const AppointBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: 500 }} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="#1CC7C1">
            APPOINTMENT
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointBanner;
