import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h3>Terms and condition</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo!</p>
        <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms; 