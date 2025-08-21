import React, { Component } from 'react';
import './App.css'
import Logo from './components/Logo/Logo.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Social from './components/Social/Social.jsx'
import Reviews from './components/Reviews/Reviews.jsx'
import Contact from './components/Contact/Contact.jsx' 

function App() {

  return (   
      <div> 
      <Logo />
      <Header />
      <Hero /> 
      <About />
      <Services />
      <Social /> 
      <Reviews />
      <Contact />
      </div>
         
  
  )
}

export default App
// 