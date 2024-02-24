import { useState } from 'react'
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

function App() {
  return (
    <>
      <div className='container-body'>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chart' element={<Chart/>}></Route>
        <Route path='/seedsdata' element={<SeedsData/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
        <Route path='/seed' element={<Seed/>}></Route>
        <Route path="/additem" element={<AddSeed/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
