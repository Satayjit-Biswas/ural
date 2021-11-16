import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signIngoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const uri = location.state?.from || '/';
    const handleGoogleLogin = () =>{
        signIngoogle()
            .then((result) =>{
                history.push(uri)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        <div className="login_area">
            <div className="container">
                <div className="login_area_box">
                    <div className="login_form">
                        <h2>Login</h2> 
                        <button onClick={()=>handleGoogleLogin()} className="btn_custom my-3">LOGIN WITH GOOGLE</button>
                        <p>Just Click And Login</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;