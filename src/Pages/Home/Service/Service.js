import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const { name, description, img } = service;
    return (
        <div>
            <div className="service pb-3">
            <img className="img-style img-fluid " src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${description}`}>
            <button className='btn btn-primary'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
        </div>
    );
};

export default Service;