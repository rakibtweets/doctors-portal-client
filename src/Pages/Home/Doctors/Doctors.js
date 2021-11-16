import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('https://quiet-plains-12612.herokuapp.com/doctors')
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2> Our Doctors </h2>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            {doctors.map((doctor) => (
              <Doctor key={doctor._id} doctor={doctor} />
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Doctors;
