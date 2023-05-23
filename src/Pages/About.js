import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import MovieReview from '../Components/MovieReview/MovieReview';
import '../css/aboutMovie.css';

const About = () => {
  const [backgroundUrl, setBackgroundUrl] = useState('');

  return (
    <div className='detail-view' style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <Header />
      <Navbar />
      <MovieReview setBackgroundUrl={setBackgroundUrl} />
      <Footer />
    </div>
  );
};

export default About;
