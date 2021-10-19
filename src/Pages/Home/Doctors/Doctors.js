import React from 'react';
import doctor1 from '../../../Images/doctors/1.jpg';
import doctor2 from '../../../Images/doctors/2.jpg';
import doctor3 from '../../../Images/doctors/3.jpg';
import doctor4 from '../../../Images/doctors/4.jpg';
import doctor5 from '../../../Images/doctors/5.jpg';
import doctor6 from '../../../Images/doctors/6.jpg';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const doctors = [
    {
        img: doctor1,
        name: 'Andrew Smith',
        expertize: 'Paediatrician'
    },
    {
        img: doctor2,
        name: 'John Anderson',
        expertize: 'Cardiologist'
    },
    {
        img: doctor3,
        name: 'Zakaria Smith',
        expertize: 'Orthopaedics'
    },
    {
        img: doctor4,
        name: 'Rajonee Das',
        expertize: 'Gynaecologist'
    },
    {
        img: doctor5,
        name: 'Rojonee Kanto',
        expertize: 'Neurologiest'
    },
    {
        img: doctor6,
        name: 'Supto Das',
        expertize: 'Medicine Specailist'
    }
] 

const Doctors = () => {
    return (
        <div id="doctors">
           <h2 className="text-primary mt-5">Our Doctors</h2>
           <br />
           <div className="service-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;