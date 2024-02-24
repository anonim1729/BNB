import React from 'react'
import {useState} from 'react';

import { BASE_URL } from '../../../config'
import axios from 'axios';


const Login=()=>{
    let [user,setUser]=useState({username:"",password:""});
  const [email,setEmail]=useState(""); 
  const [passw, setPassw]=useState(""); 
  const [username, setUsername]=useState(""); 
  
	
  
  let handleOnSubmit= (e)=>{
    e.preventDefault(); 
    
    axios({
        method: 'post',
        url: BASE_URL+"/login",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        data: {
          ...user
        },
      }) .then((res)=>{
        console.log(res);
      }) .catch((err)=>{
        console.log(err);
      })
  };

  return(
		<div className='loginContainer'>
      

			<form action="" onSubmit={handleOnSubmit} className='loginBox'> 
      <h1>Login</h1>
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/> 
          
				</div> 

                <div> 
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                </div>    
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="password" name="passw" id="passw" value={passw} onChange={(e)=>{setPassw(e.target.value)}}/> 
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login 