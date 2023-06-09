import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import CardsMovies from '../Components/CardsMovies/CardsMovies';
import Navbar from '../Components/Navbar/Navbar';


const Movies = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <section id="team" class="pt-4 pb-4 bg_grey">
            <CardsMovies />
            </section>
            
            <Footer />
        </div>
    );
}

export default Movies;
