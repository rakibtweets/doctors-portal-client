import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(56,66,86,.9)',
  backgroundBlendMode: 'darken,luminosity',
  marginTop: '10em',
  position: 'center',
};

const AppointBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 500, marginTop: '-8.5em' }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'start' }}>
            <Typography sx={{ mb: 3, mt: 3 }} variant="h6" color="#1CC7C1">
              APPOINTMENT
            </Typography>
            <Typography sx={{ mb: 3 }} variant="h4" color="white">
              Make an appointment Today
            </Typography>
            <Typography
              sx={{ mb: 5, display: 'block' }}
              variant="p"
              color="white"
            >
              It is a long established fact that a reader will be distractedby
              the readable content of a page when looking at its
            </Typography>
            <Button
              variant="contained"
              style={{
                background: '#19D3AE',
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointBanner;
