import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Addservice.css'

const Addservice = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://shocking-pumpkin-09943.herokuapp.com/services', data)
            .then(res => {
                if (res.data){
                    reset();
                    toast.success("Add Service Package");
                }
            })
        
    };
    return (
        <>
        <div className="container">
            <div className="add_service">
                <div className="add_service_form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Title" required {...register("Title")} />
                        <input placeholder="Img-Link" required {...register("Img_Link")} />
                        <div className="time">
                            <input placeholder="Duration Day" required {...register("Duration_Day")} />
                            <input placeholder="Duration Night" required {...register("Duration_Night")} /> 
                        </div>
                        <input type="number" placeholder="Price" required {...register("Price")} />
                        <textarea placeholder="Description" {...register("Description", { required: true, minLength: 30 })}></textarea>
                        {errors.Description && <div className="text-danger mb-2">Description length Must be 30 Up !</div>}
                        <button type="submit" className="btn_custom">Add Service</button>
                    </form>
                </div>
                
            </div>
            
        </div>
        <ToastContainer />
        </>

    );
};

export default Addservice;