import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';
import swal from 'sweetalert';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    fetch('https://quiet-plains-12612.herokuapp.com/doctors', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal('Doctor Added', 'Doctors Has been added', 'success');
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: '50%', mb: 2 }}
          id="outlined-basic"
          label="Doctor Name"
          variant="outlined"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <TextField
          sx={{ width: '50%' }}
          id="outlined-basic"
          label="Doctor Email"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <Input
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          id="contained-button-file"
          type="file"
        />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
