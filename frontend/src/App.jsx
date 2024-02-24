import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/userpages/Login';
import Home from './pages/Home';
import "../public/footer.css"

function App() {
  return (
    <>
      <div className='container-body'>
      <Routes>

        
        <Route path='/login' element={<Login/>}></Route>

        <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
