import React from 'react'
import './MainContent.css'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
const MainContent = () => {
  return (
    <>
    <div>
      <div className="maincontent">
        <div className="about-head">
          <h1>Digital Designer</h1>
          <p>specialized in Web Design, UX / UI, Webflow, and Front End Development.</p>
        </div>
        <div className="about-desc">
          <p>I'm helping startups and business owners to make a visual statement through spotless Web Design
             and Development so they can increase brand awareness and sell more.</p>
             
             <ul>
             <li><h4>Let's get connected</h4></li>
                <li>Linkedin</li>
                <li>Github</li>
                <li>Instagram</li>
                
             </ul>
             <button className='contact'>Drop me a line</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainContent
