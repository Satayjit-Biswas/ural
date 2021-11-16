import React, { useEffect, useState } from 'react';
import './Manageorder.css'
import Manageorderdata from './Manageorderdata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Manageorder = () => {
    const [ orders , setOrders]= useState([]);
    useEffect(()=>{
        fetch('https://shocking-pumpkin-09943.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    },[orders]);
    // delete order 
    const manageorderDelete = id =>{
        const sure = window.confirm("Are You Sure Delete Your Order");
        if(sure){
            const url = `https://shocking-pumpkin-09943.herokuapp.com/orders/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        toast.success("Delete Order");
                        const previewOrder = orders.filter(order => order._id !== id);
                        setOrders(previewOrder);
                    }
                })
        }
    }

    // Update State 
    const stateUpdate =(id)=>{
        const changeState = orders.find(order=>order._id === id);
        if(changeState.state === false){
            changeState.state = true;
            const url = `https://shocking-pumpkin-09943.herokuapp.com/orders/${id}`;
            axios.put(url,changeState)
            .then(res=>{
                if(res.data.modifiedCount > 0){
                    toast.success("Update State");
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else{
            changeState.state = false;
            const url = `https://shocking-pumpkin-09943.herokuapp.com/orders/${id}`;
            axios.put(url,changeState)
            .then(res=>{
                if(res.data.modifiedCount > 0){
                    toast.success("Update State");
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    return (
        <>
        <div>
            <div className="manageorder_area">
                <div className="container">
                    <div className="text-center my-5">
                        <h3>Manage All Order</h3>
                        <div className="row">
                            <div className="col-12">
                                {
                                    orders.map((order)=><Manageorderdata key={order._id} order={order} stateUpdate={stateUpdate} manageorderDelete={manageorderDelete}></Manageorderdata>)
                                }
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
};

export default Manageorder;