import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal('Added Admin', 'You made admin Successfully', 'success');
          console.log(data);
        }
      });

    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <h3>Making Admin</h3>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: '50%' }}
          id="outlined-required"
          label="Email"
          type="email"
          onBlur={handleOnBlur}
        />
        <Button
          sx={{ py: 2, px: 4, bgcolor: '#19D3AE' }}
          variant="contained"
          type="submit"
        >
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
