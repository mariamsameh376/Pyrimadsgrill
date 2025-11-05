
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import MenuSection from'../../components/MenuSection/MenuSection'
import Welcome from '../../components/Welcome/Welcome'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
  
  return (
    <>
      <Navbar />
    

      <Hero />
      <Welcome />
      <Testimonials />
      <MenuSection />
     
      <Footer />
     
  
    </>
  )
}

export default Home
