import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="#1CC7C1">
          {name}
        </Typography>
        <Typography
          variant="p"
          sx={{ fontWeight: 'bold', display: 'block', my: 2 }}
          color="#3A4256"
        >
          {time}
        </Typography>
        <Typography
          variant="p"
          sx={{ fontSize: 16, display: 'block', mb: 2, fontWeight: 'bold' }}
          color="black"
        >
          Price: $ {price}
        </Typography>
        <Typography
          variant="p"
          sx={{ fontSize: 12, display: 'block', mb: 2 }}
          color="#8B8888"
        >
          {space} SPACES AVAILABLE
        </Typography>
        <Button
          onClick={handleBookingOpen}
          variant="contained"
          style={{ background: '#19D3AE' }}
        >
          Book appointment
        </Button>
        <BookingModal
          date={date}
          booking={booking}
          openBooking={openBooking}
          handleBookingClose={handleBookingClose}
        />
      </Paper>
    </Grid>
  );
};

export default Booking;
