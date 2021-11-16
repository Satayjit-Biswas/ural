import React from 'react';
import c1 from '../../../assets/1.png'
import c2 from '../../../assets/2.png'
import c3 from '../../../assets/3.png'
import './Customers.css'

const Customers = () => {
    return (
        <div className="Customers_area">
            <div className="container">
                <div className="text-center mb-4">
                    <h4>Testimonials</h4>
                    <h3 className="mt-4">What Our Happy Customers</h3>
                    <h3>Say About Us</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="Customers_box">
                            <div className="Customers_img">
                                <img src={c1} />
                            </div>
                            <div className="Customers_name">Samira Aron</div>
                            <div className="Customers_text">
                                <p>We had a wonderful day, The guide was fabulous, 
                                we were the only Australians on board he did everything...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="Customers_box">
                            <div className="Customers_img">
                                <img src={c2} />
                            </div>
                            <div className="Customers_name">Tom Cruise</div>
                            <div className="Customers_text">
                                <p>The trip was fabulous.The guide was fabulous, 
                                we were the only Australians on board he did everything...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="Customers_box">
                            <div className="Customers_img">
                                <img src={c3} />
                            </div>
                            <div className="Customers_name">Under Rasel</div>
                            <div className="Customers_text">
                                <p>Outstanding trip, The guide was fabulous, 
                                we were the only Australians on board he did everything...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;