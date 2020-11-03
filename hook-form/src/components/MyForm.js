import React, { useState } from 'react';

const MyForm = (props) => {

    //initialize input variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_pw, setConfirm_pw] = useState("");

    return (
        <>
            <form className="col-8 mx-auto my-5">

                <div className="input-group mb-3">

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">First Name
                        <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="firstName"
                                value={firstName}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={(e) => setFirstName(e.target.value)}
                            /></label>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Last Name
                    <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="lastName"
                                value={lastName}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={(e) => setLastName(e.target.value)}
                            /></label>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Email
                    <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="email"
                                value={email}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={(e) => setEmail(e.target.value)}
                            /></label>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Password
                    <input
                                type="password"
                                className="form-control ml-3 col-8"
                                name="password"
                                value={password}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={(e) => setPassword(e.target.value)}
                            /></label>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Confirm Password
                    <input
                                type="password"
                                className="form-control ml-3 col-8"
                                name="confirm_pw"
                                value={confirm_pw}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={(e) => setConfirm_pw(e.target.value)}
                            /></label>
                    </div>
                </div>


            </form>

            {/* display live entered data */}
            <div className="col-5 mx-auto">
                <h6 className="card-subtitle my-3 container">Your Form Data</h6>

                <div className="card-body row">
                    <p className="col card-subtitle my-1">First Name</p>
                    <p className="col card-subtitle my-1 text-left">{firstName}</p>
                </div>

                <div className="card-body row">
                    <h6 className="col card-subtitle my-1">Last Name</h6>
                    <h6 className="col card-subtitle my-1 text-left">{lastName}</h6>
                </div>

                <div className="card-body row">
                    <h6 className="col card-subtitle my-1">Email</h6>
                    <h6 className="col card-subtitle my-1 text-left">{email}</h6>
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
        </>
    )

};

export default MyForm;