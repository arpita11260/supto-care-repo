import React from 'react';
import './Doctor.css';

const Doctor = ({doctor}) => {
    const { name, img, expertize } = doctor;
    return (
        <div className="service pb-3">
            <img className="img-style img-fluid " src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="px-3 text-primary">{expertize}</h5>
        </div>
    );
};

export default Doctor;