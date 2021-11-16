import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
  {
    id: 1,
    name: 'Teeth Orthodonics',
    time: '08.00 AM - 09.00 AM',
    space: 10,
    price: 15,
  },
  {
    id: 2,
    name: 'Cosmetic Dentistry',
    time: '09.00 AM - 10.00 AM',
    space: 8,
    price: 13,
  },
  {
    id: 3,
    name: 'Teeth Cleaning',
    time: '10.00 AM - 11.00 AM',
    space: 9,
    price: 17,
  },
  {
    id: 4,
    name: 'Cavity Protection',
    time: '11.00 AM - 12.00 PM',
    space: 5,
    price: 20,
  },
  {
    id: 5,
    name: 'Pediatric Dental',
    time: '06.00 PM - 07.00 PM',
    space: 10,
    price: 14,
  },
  {
    id: 6,
    name: 'Oral Surgery',
    time: '07.00 PM - 08.00 PM',
    space: 10,
    price: 16,
  },
];

const AvaileableAppointments = ({ date }) => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }} color="#1CC7C1">
        Available appointments on {date.toDateString()}
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date} />
        ))}
      </Grid>
    </Container>
  );
};

export default AvaileableAppointments;
