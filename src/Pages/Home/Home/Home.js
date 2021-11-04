import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointBanner from '../AppointmentBanner/AppointBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <AppointBanner />
    </div>
  );
};

export default Home;
