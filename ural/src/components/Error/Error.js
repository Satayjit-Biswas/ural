import React from 'react';
import './Error.css'
import img from '../../assets/error.gif'

const Error = () => {
    return (
        <div className="error">
            <div className="container">
                <div className="error_area text-center">
                    <img src={img} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Error;