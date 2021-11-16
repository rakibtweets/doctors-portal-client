import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(
  'pk_test_51JwA3uEQOaexwxXNq0xGBS94Oep7zk9wCcrNmTu9pCZFqk3BMUOj843lAAKkOGgnR4btno79sYMIuQMJ1eaNHKSd00LGkDzJIy'
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointments] = useState({});
  useEffect(() => {
    fetch(
      `https://quiet-plains-12612.herokuapp.com/appointments/${appointmentId}`
    ).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setAppointments(data);
      })
    );
  }, [appointmentId]);
  return (
    <div>
      <h2>pay for service Id :{appointmentId}</h2>
      <h2>Patient Name: {appointment?.patientName}</h2>
      <h2>Service Name: {appointment?.serviceName}</h2>
      <h2>Pay : $ {appointment?.price}</h2>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutFrom appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
