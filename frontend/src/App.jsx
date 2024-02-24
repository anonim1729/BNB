import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/userpages/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div>
      <Routes>

        
        <Route path='/login' element={<Login/>}></Route>

        <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
