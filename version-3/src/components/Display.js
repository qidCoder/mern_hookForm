import React from 'react';

const Display = (props) => {
    //defactor props   
    const {inputs} = props; 
    
    return (
        <div className="col-5 mx-auto">
            <h6 className="card-subtitle my-3 container">Your Form Data</h6>

            <div className="card-body row">
                <p className="col card-subtitle my-1">First Name</p>
                <p className="col card-subtitle my-1 text-left">{inputs.firstName}</p>
            </div>

            <div className="card-body row">
                <h6 className="col card-subtitle my-1">Last Name</h6>
                <h6 className="col card-subtitle my-1 text-left">{inputs.lastName}</h6>
            </div>

            <div className="card-body row">
                <h6 className="col card-subtitle my-1">Email</h6>
                <h6 className="col card-subtitle my-1 text-left">{inputs.email}</h6>
            </div>

            <div className="card-body row">
                <h6 className="col card-subtitle my-1">Password</h6>
                <h6 className="col card-subtitle my-1 text-left">password</h6>
            </div>

            <div className="card-body row">
                <h6 className="col card-subtitle my-1">Confirm Password</h6>
                <h6 className="col card-subtitle my-1 text-left">password</h6>
            </div>

        </div>
    )
}

export default Display;



