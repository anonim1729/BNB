import React from 'react'
import {useState} from 'react';


const Login=()=>{
  const [email,setEmail]=useState(""); 
  const [passw, setPassw]=useState(""); 
  const [emailErr,setEmailErr]=useState("");
  const [passErr,setPassErr]=useState("");
	return(
		<div className='loginContainer'>
      
			<form action="" onSubmit={(e)=>{
        e.preventDefault();
        // handleOnSubmit(e)
        // console.log(email,passw);
        }} className='loginBox'> 
      <h1>Login</h1>
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> 
          {emailErr&&<label htmlFor='emailErr'>{emailErr}</label>}
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="password" name="passw" id="passw" value={passw} onChange={(e)=>{setPassw(e.target.value)}}/> 
          {passErr&&<label htmlFor='passErr'>{passErr}</label>}
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login 