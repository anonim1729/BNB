import React from 'react'

const Hero = () => {
  return (
    <div className="px-5 py-5 my-3 text-center">
    <img className="d-block mx-auto mb-4" src="../../public/images/hero_image.png" alt=""  width="80%" style={{border: "2px solid #198754", borderRadius: "20px"}}/>
    <h1 className="display-5 fw-bold text-body-emphasis">Seeds to Success: The Intelligent Inventory</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">SmartFarm Inventory Solution is a revolutionary platform designed to streamline farming activities for modern farmers like Steve. Offering real-time inventory tracking for seeds, tools, and resources, our intuitive interface ensures efficient management. Additionally, our system provides automated tool crafting suggestions, empowering farmers to maximize productivity and optimize their harvests with ease.</p>
    </div>
  </div>
  )
}

export default Hero
