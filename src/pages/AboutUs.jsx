import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Book_appointment from '../components/Book_appointment'
import Our_Team from '../components/Our_Team'
import AboutUsBg from '../components/AboutUsBg'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <AboutUsBg/>
        <Our_Team/>
        <Book_appointment/>
        <Footer/>
    </div>
  )
}

export default AboutUs