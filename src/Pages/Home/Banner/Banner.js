import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/healthcare-jobs-1.jpg';
import banner2 from '../../../Images/banner/4.jpg';
import banner3 from '../../../Images/banner/5.jpeg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img height='600'
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height='600'
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height='600'
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;