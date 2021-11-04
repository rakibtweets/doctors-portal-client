import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
  const { name, time } = booking;

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // collect data
    // sent to the server
    alert('submitting');
    handleBookingClose();
    e.target.reset();
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
              placeholder="Your Name"
              size="small"
            />
            <TextField
              sx={{ width: '100%', m: 1 }}
              type="email"
              id="outlined-size-small"
              placeholder="Your Email"
              size="small"
            />
            <TextField
              sx={{ width: '100%', m: 1 }}
              id="outlined-size-small"
              type="number"
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
