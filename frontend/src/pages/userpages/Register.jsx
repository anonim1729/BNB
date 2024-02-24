import React from 'react'
import {useState} from 'react';


const Login=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState(""); 
  const [passw, setPassw]=useState(""); 
  const [emailErr,setEmailErr]=useState("");
  const [passErr,setPassErr]=useState("");
  const handleOnChange=(e)=>{

  }
	return(
		<div className='loginContainer'>
      
			<form action="" onSubmit={()=>{handleOnSubmit()}} className='loginBox'> 
      <h1>Login</h1>
      <div> 
					<label htmlFor="firstName">First Name</label>
					<input type="text" name="firstName" id="firstName" value={firstName}
          onChange={(e)=>{setFirstName(e.target.value)}}
          /> 
          
				</div> 
                <div> 
					<label htmlFor="lastName">Last Name</label>
					<input type="text" name="lastName" id="lastName" value={lastName}
          onChange={(e)=>{setLastName(e.target.value)}}
          /> 
         
				</div> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          /> 
          {emailErr&&<label htmlFor='emailErr'>{emailErr}</label>}
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>{setPassw(e.target.value)}}/> 
          {passErr&&<label htmlFor='passErr'>{passErr}</label>}
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login 