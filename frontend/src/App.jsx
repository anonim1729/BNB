import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/userpages/Login';
import Home from './pages/Home';
import "../public/footer.css"
import Register from './pages/userpages/Register';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='container-body'>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
