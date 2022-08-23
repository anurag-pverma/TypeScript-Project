import React, { useEffect, useState } from "react";

import { useMergeState } from "./hooks/UseMarge";


function Login() {
    // defining the initial state for the form
    const initialState = {
      username:"",
        email: "",
        password: "",
    };
    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useMergeState({...initialState}
      );
      const [show, setShow] = useState()

const handleSubmit = ()=>{
 setShow(values)
//  setShow(values.email)
//  setShow(values.password)
}
  useEffect(()=>{


  
  },[])   
  console.log(show.email);

    // a submit function that will execute upon form submission
  


    return (
        // don't mind this ugly form :P
        <form onSubmit={onSubmit} style={{textAlign:"center"}}>
          <h1>UseMargeState</h1>
        <div style={{display:"grid", width:"400px", gap:'20px', margin :"auto"}}>
            <input
                name='username'
                id='username'
                type='text'
                placeholder='Username'
                onChange={onChange}
                required
style={{padding:'10px'}}
                />

            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                style={{padding:'10px'}}
                />

            <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
                style={{padding:'10px'}}
                />
            <button type='submit' onClick={handleSubmit} style={{padding:'10px'}}>Login</button>
        </div>
<div>
{`Username: ${show.username}`}
<br/>
{`Email: ${show.email}`}
<br/>
{`Password: ${show.password}`}

</div>
        </form>
    );
}

export default Login;