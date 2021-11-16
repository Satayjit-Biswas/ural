import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Packagedetails.css'

const Packagedetails = () => {
    // get data 
    const {user} = useAuth();
    const {id} = useParams();
    const [service , setService] = useState({});
    const {Title,Description,Img_Link,Price,Duration_Day,Duration_Night} = service
    useEffect(()=>{
        fetch(`https://shocking-pumpkin-09943.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    },[]);
    // form work 
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {state: false,
                        package_id:`${id}`
                        }
    });
    const onSubmit = data => {
        axios.post('https://shocking-pumpkin-09943.herokuapp.com/orders', data)
            .then(res => {
                if (res.data){
                    reset();
                    toast.success("Order complete");
                }
            })
        
    };
    return (
        <>
        <div className="my-5 Packagedetails">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7 text-center">
                            <img src={Img_Link} className="img-fluid mb-4" alt="" />
                                <h1>{Title}</h1>
                            <div className="Duration">
                                <i className="far fa-clock"></i>
                                <p>
                                    <span>Duration : </span>
                                    {Duration_Day} days {Duration_Night} nights
                                </p>
                            </div>
                            <p>
                                {Description}
                            </p>
                    </div>
                    <div className="col-lg-4 col-md-5 ">
                        <div className="Order_now_box">
                            <h4>Order Now</h4>
                            <h5 className="mb-3">$ {Price} Only</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input readOnly defaultValue={user.email} {...register("email")} />
                                <input type="number" placeholder="Phone Number" required {...register("phone")} />
                                <input placeholder="Address " {...register("address")} />
                                <button type="submit" className="btn_custom">Presses now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
};

export default Packagedetails;