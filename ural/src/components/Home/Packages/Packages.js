import React, { useEffect, useState } from 'react';
import Packagedata from './Packagedata/Packagedata';
import './Package.css'

const Packages = () => {
    const [ Service , setService]= useState([]);
    useEffect(()=>{
        fetch('https://shocking-pumpkin-09943.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    },[]);
    return (
        <div className="Packaged_area">
            <div className="container">
            <div className="text-center mb-4">
                <h4>Services</h4>
                <h3 className="mt-4">Travel Most Popular Place</h3>
                <h3>In The World</h3>            
            </div> 
                <div className="row">
                {
                    Service.map((Package)=><Packagedata key={Package._id} service={Package}></Packagedata>)
                }
                </div>
            </div>
        </div>
    );
};

export default Packages;