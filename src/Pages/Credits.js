import React from 'react';
import CreditsBody from '../Components/Credits/CreditsBody';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Credits = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <CreditsBody />
            <Footer/>
        </div>
    );
}

export default Credits;
