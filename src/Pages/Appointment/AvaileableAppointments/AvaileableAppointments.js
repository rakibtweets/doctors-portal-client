import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
  {
    id: 1,
    name: 'Teeth Orthodonics',
    time: '08.00 AM - 09.00 AM',
    space: 10,
  },
  {
    id: 2,
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 8,
  },
  {
    id: 3,
    name: 'Teeth Cleaning',
    time: '10.00 AM - 11.00 AM',
    space: 9,
  },
  {
    id: 4,
    name: 'Cavity Protection',
    time: '11.00 AM - 12.00 PM',
    space: 5,
  },
  {
    id: 5,
    name: 'Pediatric Dental',
    time: '06.00 PM - 07.00 PM',
    space: 10,
  },
  {
    id: 6,
    name: 'Oral Surgery',
    time: '07.00 PM - 08.00 PM',
    space: 10,
  },
];

const AvaileableAppointments = ({ date }) => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }} color="#1CC7C1">
        Available appointments on {date.toDateString()}
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date} />
        ))}
      </Grid>
    </Container>
  );
};

export default AvaileableAppointments;
