import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import MovieReview from '../Components/MovieReview/MovieReview';
import '../css/aboutMovie.css';

const About = () => {
  
  return (
    <div>
      <Header />
      <Navbar />
      <MovieReview />
      <Footer />
    </div>
  );
};

export default About;
