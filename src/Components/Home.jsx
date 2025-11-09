import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Gallery from './Gallery';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Gallery></Gallery>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;