import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;