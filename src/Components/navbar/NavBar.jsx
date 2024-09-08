import React, { useState } from 'react'
import { CiLight } from "react-icons/ci";
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {

  const[toglmod,useToglmod]=useState(false)

    const togl=()=>{
      
    useToglmod(toglmod=>toglmod?true:false)        
     if(toglmod){
        console.log(toglmod);
        
     }

         
        
    }
 
  return (
    
      <div className="nav">
        <div className="navcontent1">
            <h4>sahil cn</h4>
        </div>
        <div className="navcontent2">
            <h4>
                <Link to="/MainContent"><li>about</li></Link>
                <li>work</li>
                <li>contact</li>
                {/* <li></li> */}
            </h4>
        </div>
      
        <div className="navcontent3">
        <CiLight size={30} /><h4>light</h4>
        </div>

      </div>
  
  )
}

export default NavBar
