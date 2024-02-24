import React from 'react'
import { useState } from 'react';

import { BASE_URL } from '../../../config'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  let [user, setUser] = useState({ username: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate=useNavigate();

  let handleOnSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: BASE_URL + "/login",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: {
        username, email, password
      },
    }).then((res) => {
      console.log(res);
      navigate("/");
    }).catch((err) => {
      console.log(err);
      navigate("/login");
    })

  };

  return (
    <div className='loginContainer'>


      <form onSubmit={handleOnSubmit} className='loginBox'>
        <h1>Login</h1>


        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <button type="submit">Login</button>
      <hr />
      <Link to="/register">Not registered?</Link>
      </form>
    </div>
  )
}

export default Login 