import React from 'react';

// since we don't want to actully submit the data in the form (via onSubmit), we only want to dynamically capture the data as it is being captured (event named onChange). onChange will detect a client focusing in on a certain inpit field and then pressing down on keys. It knows when the value of the input is changing.

const Form = props => {
    //let's destructure props
    const{inputs, setInputs} = props;



    //for onChange, we need to create a function that says hey we need you to take that value and insert it into our current state so that it will change dynamically. Will capture the event of when the user presses a key down
    const onChange = (e) =>{
        //sending in the event e as a parameter 
        //since we have more than one input field, we run the risk of overwriting some of the other state if we were to use 
        // setInputs({lastName: "target value inside input"})
        // we need to make sure we conserve what's already been touched, spread it out, and then take out just the key that we want to change. 

        // so let's bring in inputs as the first argument- the entire collection of the state(all variables) and then the second argument allows us to change only what we want to change
        setInputs({
            ...inputs,//this makes sure you bring in everything
            [e.target.name]: e.target.value//this gets the target from the event so we know which input is being changed and then setting it to the target value
        });
    };

    return(
        <form>
            {/* we need to use htmlFor instead of for because for is a keyword in JS */}
            <label htmlFor="firstName">First Name</label>
            {/* we need to give the form a name because that acts as the key of the input */}
            <input type="text" name="firstName" onChange={onChange} />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={onChange}/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={onChange}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={onChange}/>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={onChange}/>
        </form>


    )
}

export default Form;