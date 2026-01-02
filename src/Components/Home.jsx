import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Gallery from './Gallery';
import Newsletter from './Newsletter';
import FAQ from './FAQ';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Gallery></Gallery>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;