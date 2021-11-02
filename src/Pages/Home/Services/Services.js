import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
  {
    name: 'Fluoride Treatment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: fluoride,
  },
  {
    name: 'Cavity Filling',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: cavity,
  },
  {
    name: 'Teeth Whitening',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 'bold', color: '#5FC7C7', m: 2 }}
          variant="h6"
          component="div"
          gutterBottom
        >
          OUR SERVICES
        </Typography>
        <Typography
          sx={{ fontWeight: 'bold', mb: 2, color: '#203047' }}
          variant="h4"
          component="div"
          gutterBottom
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Service key={service.name} service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
