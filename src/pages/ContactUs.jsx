import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Book_appointment from '../components/Book_appointment'
import Contactbg from '../components/Contactbg'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <Contactbg/>
        <Book_appointment/>
        {/* <Footer/> */}
    </div>
  )
}

export default ContactUs