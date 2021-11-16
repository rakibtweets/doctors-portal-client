import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid gray',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ handleBookingClose, openBooking, booking, date }) => {
  const { user } = useAuth();
  const { name, time, price } = booking;
  const initialInfo = {
    patientName: user?.displayName,
    email: user.email,
    phone: '',
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo);
    e.preventDefault();
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    // sent to the server

    fetch('https://quiet-plains-12612.herokuapp.com/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Success', 'Appointment  accepted', 'success');
          e.target.reset();
        }
      });

    handleBookingClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography
            sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
            color="#1CC7C1"
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
          <form onSubmit={handleBookSubmit}>
            <TextField
              sx={{ width: '100%', m: 1 }}
              disabled
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: '100%', m: 1 }}
              id="outlined-size-small"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user?.displayName}
              size="small"
            />
            <TextField
              sx={{ width: '100%', m: 1 }}
              type="email"
              name="email"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              defaultValue={user?.email}
              size="small"
            />
            <TextField
              sx={{ width: '100%', m: 1 }}
              id="outlined-size-small"
              type="number"
              name="phone"
              onBlur={handleOnBlur}
              placeholder="Phone No"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: '100%', m: 1 }}
              id="outlined-size-small"
              placeholder={date.toDateString()}
              size="small"
            />
            <Button
              variant="contained"
              sx={{ m: 1 }}
              style={{ background: '#19D3AE' }}
              type="sumit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
