import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Calender date={date} setDate={setDate} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Appointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
