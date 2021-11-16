import React from 'react';


const Manageorderdata = (props) => {
    const {_id,package_id,name,email,phone,state} = props.order
    return (
        
        <div className="order">
            <div className="id my-2">Order-Id: {package_id}</div>
            <div className="text-start">
                <div className="title my-2">Name: {name}</div>
                <div className="title my-2">Email: {email}</div>
                <div className="title my-2">Phone: {phone}</div>
            </div>
            {state === false ?  <div className="pending my-2">
                pending
            </div> : <div className="Approve my-2">
                Approve
            </div>}
            {state === false ?  <span className="my-2" onClick={() => props.stateUpdate(_id)}>Approve</span> :
            <span className="my-2" onClick={() => props.stateUpdate(_id)}>Cancel</span>}
            <span onClick={() => props.manageorderDelete(_id)}><i className="far fa-trash-alt"></i></span>
        </div>
    );
};

export default Manageorderdata;