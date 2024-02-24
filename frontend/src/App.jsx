import { useState } from 'react'
import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/userpages/Login';
import Home from './pages/Home';
import "../public/footer.css"
import Register from './pages/userpages/Register';
import Footer from './components/Footer';
import Chart from './pages/dataComponents/Chart';
import SeedsData from './pages/dataComponents/SeedsData';
import Inventory from './pages/Inventory';
import Seed from './pages/dataComponents/Seed';
import AddSeed from './pages/dataComponents/AddSeed';
import Navbar from './components/Navbar';
import axios from 'axios';
import { BASE_URL } from '../config';

function App() {

  const [user,setUser]=useState({});

  useEffect(()=>{
    const getUser=()=>{
      axios.get(BASE_URL+"/login/success", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      .then((res)=>{
        if(res.status==200){
          setUser(res.data.user); 
        } else{
          throw new Error("authentication error");
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    getUser();
  },[])

  return (
    <>
      <div className='container-body'>
      <Navbar user={user}/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<Home user={user}/>}></Route>
        {user && user.length!=0? 
        <Route path='' element={<Home/>}></Route>
        : 
        <Route path='/login' element={<Login/>}></Route>
        }
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
