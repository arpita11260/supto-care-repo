import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../Images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <div className='h-100 w-100'>
            <img src={notFound} alt='' />
            </div>
            <Link to='/'> <button className='btn btn-danger'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;