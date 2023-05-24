import React from 'react';
import Header from "../Components/Header/Header";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import CardsSearch from '../Components/CardsSearch/CardsSearch';


const Search = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <CardsSearch />
            <Footer />
        </div>
    );
}

export default Search;
