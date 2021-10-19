import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';

const Booking = () => {
    const {description}=useParams()
    return (
        <div>
            <br />
            <br />
            <br />
            <h2>{description}</h2>
            <Footer></Footer>
        </div>
    );
};

export default Booking;