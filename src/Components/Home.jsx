import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Gallery from './Gallery';
import Newsletter from './Newsletter';
import FAQ from './FAQ';
import Team from './Team';
import How from './How';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <How></How>
      <Features></Features>
      <Gallery></Gallery>
      <Team></Team>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
};

export default Home;