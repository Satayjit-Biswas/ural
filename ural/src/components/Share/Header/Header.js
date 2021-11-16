import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import userlogo from '../../../assets/user_logo.png';

import TopHeader from './TopHeader';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header_area">
            <TopHeader></TopHeader>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="logo">
                        <NavLink to='/' className="navbar-brand" href="/"><img src={logo} alt="" className="w-100"/></NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to='/'>Home</NavLink>
                            </li>
                            {
                                user.email ? <><li className="nav-item">
                                <NavLink to='/myorder'>My Order</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/manageorder'>Manage All Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/addservice'>Add Service</NavLink>
                            </li></>:<></>
                            }
                            
                        </ul>
                        <div className="header_login_area">
                            {
                                user.email ?
                                    <div className="d-flex">
                                        <div className="login_area_details">
                                            <div className="login_area_img">
                                                <img src={user.photoURL?user.photoURL:userlogo} className="img-fluid" alt="" />
                                            </div>
                                            <p>{user.displayName}</p>
                                        </div>
                                        <button onClick={logOut} className="btn_custom">log out</button> 
                                    </div>:
                                    <div><NavLink to='/login' className="btn_custom">log in</NavLink>
                                </div>
                                }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;