import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div className="slider_area">
            <div className="slider_area_overly">
                <div className="container">
                    <div className="slider_area_text text-center">
                        <h2>Discover your  Beautiful </h2>
                        <h2>Place With us </h2>
                        <p className="w-75 text-white">Aenean vel quam elementum, ultricies ex sed, bibendum arcu. Donec a tortor ac dolor commodo commodo vel non lectus. Nullam tincidunt massa tincidunt libero mattis ornare.</p>
                        <div className="buttn">
                            <a href='/' className="btn_custom">Booking Now</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;