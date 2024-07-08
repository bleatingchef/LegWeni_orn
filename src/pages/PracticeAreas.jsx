import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Practice_New from '../components/Practice_New'
import Book_appointment from '../components/Book_appointment'

const PracticeAreas = () => {
  return (
    <div>
        <Navbar/>
        <Practice_New/>
        <Book_appointment/>
        <Footer/>
    </div>
  )
}

export default PracticeAreas