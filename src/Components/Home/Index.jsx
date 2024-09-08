import React from 'react'
import NavBar from '../navbar/NavBar'
import MainContent from '../maincontent/MainContent'
import Services from '../services/Services'
import Process from '../process/Process'
import Collaboration from '../collab/Collaboration'
import Footer from '../footer/Footer'
const Index = () => {
  return (
    <div>
      <NavBar/>
      <MainContent/>
      <Services/>
      <Process/>
      <Collaboration/>
      <Footer/>
    </div>
  )
}

export default Index
