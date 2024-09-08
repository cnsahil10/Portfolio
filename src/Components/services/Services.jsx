import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div>
        <div className="service">

        <div className="service-head">
        <h2>I can help you with ...</h2>
        </div>
        <div className="services-card">
           <div className="card">
            <hr />
            <h1>01</h1>
            <h5>Design</h5>
            <p>I make web designs that engage your audience and create the user experience you want.</p>
            <hr />

           </div>
           <div className="card">
            <hr />
            <h1>02</h1>
            <h5>Development</h5>
            <p>Bringing visuals to life through developing highly functional web solutions.</p>
            <hr />

           </div>
           <div className="card">
            <hr />
            <h1>03</h1>
            <h5>The Full Package</h5>
            <p>Get the best of both worlds for your website, 
                capture your brand identity and get fully functional features.
            </p>
            <hr />

           </div>
        </div>
        </div>
       
    </div>
  )
}

export default Services
