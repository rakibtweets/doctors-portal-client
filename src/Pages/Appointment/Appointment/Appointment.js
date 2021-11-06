import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvaileableAppointments from '../AvaileableAppointments/AvaileableAppointments';

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Navigation />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvaileableAppointments date={date} />
    </div>
  );
};

export default Appointment;
