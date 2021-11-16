import React from 'react';
import Customers from './Customers/Customers';
import Packages from './Packages/Packages';
import Provide from './Provide/Provide';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Provide></Provide>
            <Packages></Packages>
            <Customers></Customers>
        </div>
    );
};

export default Home;