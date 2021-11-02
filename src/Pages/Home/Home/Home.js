import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointBanner from '../AppointmentBanner/AppointBanner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Services />
      <AppointBanner />
    </div>
  );
};

export default Home;
