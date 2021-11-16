import React, { useEffect, useState } from 'react';
import img from '../../assets/2-768x806.jpg'
import useAuth from '../../hooks/useAuth';
import './Myorder.css'
import Myorderdata from './Myorderdata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Myorder = () => {
    const {user} = useAuth();
    const [orders ,setOrders]= useState([]);
    useEffect(()=>{
        fetch('https://shocking-pumpkin-09943.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    },[]);

    const filterorders = orders.filter((myorder)=> myorder.email === user.email);
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
    
    return (
        <>
        <div className="myorder_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center my-5">
                            <h3>My Order ( {filterorders.length} )</h3>
                            {
                                filterorders.map((myorder)=><Myorderdata key={myorder._id} myorder={myorder} manageorderDelete={manageorderDelete}></Myorderdata>)
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <ToastContainer />
        </>
    );
};

export default Myorder;