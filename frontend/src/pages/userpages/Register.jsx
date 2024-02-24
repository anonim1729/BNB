import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../config'

const Login=()=>{

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState(""); 
  const [password, setPassword]=useState(""); 
  
  const handleSubmit= (e)=>{
	e.preventDefault();
	axios({
		method: 'post',
		url: BASE_URL+"/register",
		headers: {
		  'Content-Type': 'application/json',
		  'Accept': 'application/json',
		},
		data: {
		  username,email,password
		},
	  }) .then((res)=>{
		console.log(res);
	  }) .catch((err)=>{
		console.log(err);
	  })
  
  }
	return(
		<div className='loginContainer'>
      
			<form onSubmit={handleSubmit} className='loginBox'> 
      <h1>Register</h1>
      <div> 
					<label htmlFor="username">User Name</label>
					<input type="text" name="username" id="username" value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
          /> 
          
				</div> 
                
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          /> 
         
			</div> 

				<div> 
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 
          
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login 