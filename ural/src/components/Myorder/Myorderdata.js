import React, { useEffect, useState } from 'react';

const Myorderdata = (props) => {
    const {package_id,state,_id} = props.myorder
    const [myorder , setmyorder] = useState({});
    const {Title,Img_Link,Price} = myorder
    useEffect(()=>{
        fetch(`https://shocking-pumpkin-09943.herokuapp.com/services/${package_id}`)
            .then(res => res.json())
            .then(data => setmyorder(data))
    },[]);
    
    return (
        <div className="order">
            <img src={Img_Link} alt="img"  className="img-fluid"/>
            <div className="title my-2">{Title} </div>
            <div className="id my-2">Order-Id: {package_id}</div>
            <div className="orderPrice my-2">${Price}</div>
            {state ?  <div className="Approve my-2">
                Approve
            </div> : <div className=" pending my-2">
                Pending
            </div>}
            <span onClick={() => props.manageorderDelete(_id)}><i className="far fa-trash-alt"></i></span>
        </div>
    );
};

export default Myorderdata;
