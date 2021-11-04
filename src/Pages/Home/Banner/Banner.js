import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
  backgroung: `url(${bg})`,
};
const verticalCenter = {
  height: 400,
  display: 'flex',
  alignItems: 'center',
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ ...verticalCenter }} item xs={12} md={5}>
          <Box
            sx={{
              textAlign: 'start',
            }}
          >
            <Typography variant="h3" sx={{ mb: 4 }}>
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="p"
              sx={{ color: '#B4B4B4', mb: 5, display: 'block' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              at voluptatum eos dolores libero earum velit quia consequuntur
              obcaecati unde.
            </Typography>
            <Button
              variant="contained"
              style={{
                background: '#19D3AE',
              }}
            >
              Get AppointMent
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
          <img style={{ width: '30em' }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
