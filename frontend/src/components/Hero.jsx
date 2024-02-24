import React from 'react'

const Hero = () => {
  return (
    <div className="px-5 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="https://media.istockphoto.com/id/1462151146/photo/hands-growing-a-young-plant.jpg?s=2048x2048&w=is&k=20&c=ky5cj_N-nrd8qvbyRuYX-uv8NHltUoScloGoQ10xH2I=" alt=""  height="300"/>
    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    </div>
  </div>
  )
}

export default Hero
