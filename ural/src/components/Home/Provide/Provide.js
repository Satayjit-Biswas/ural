import React from 'react';
import pro_1 from '../../../assets/pro-1.jpg'
import pro_2 from '../../../assets/pro-2.jpg'
import './Provide.css'

const Provide = () => {
    return (
        <div className="provide_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="provide_img">
                                    <img src={pro_1} className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="provide_img">
                                    <img src={pro_2} className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="provide_text">
                            <h4>Why Choose Us?</h4>
                            <h3 className="mt-4">Every Time We Provide
                            </h3><h3>Best Service</h3>
                            <ul className="provide_service">
                                <li>Expert Team Member</li>
                                <li>Save Money And Time</li>
                                <li>Cash back Offers</li>
                                <li>Best Security</li>
                                <li>24/7 Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;