import React, { useState } from 'react';

const MyForm = (props) => {

    //for lifting state version, moving these to App.js
    //initialize input variables
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirm_pw, setConfirm_pw] = useState("");

    const { inputs, handleChange, handleSubmit } = props;

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
                                value={inputs.firstName}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        {/* adding in a validation */}
                        <p className="text-danger">{inputs.firstName.length > 2 ? "" : "Name must be at least 3 characters"}</p>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Last Name
                            <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="lastName"
                                value={inputs.lastName}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        <span className="text-danger">{inputs.lastName.length > 2 ? "" : "Name must be at least 3 characters"}</span>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Email
                            <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="email"
                                value={inputs.email}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        <span className="text-danger">{inputs.email.length > 2 ? "" : "Email must be at least 5 characters"}</span>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Password
                            <input
                                type="password"
                                className="form-control ml-3 col-8"
                                name="password"
                                value={inputs.password}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        <span className="text-danger"> {inputs.password.length > 8 ? "" : "Password needs to be at least 8 characters"}</span>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Confirm Password
                            <input
                                type="password"
                                className="form-control ml-3 col-8"
                                name="confirm_pw"
                                value={inputs.confirm_pw}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </div>

                {/* add in button */}
                <input type="submit" value="Create User" className="btn btn-success" />


            </form>

            {/* for state lifting, moving this to a new component */}
            {/* display live entered data */}
            {/* <div className="col-5 mx-auto">
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

            </div> */}
        </>
    )

};

export default MyForm;