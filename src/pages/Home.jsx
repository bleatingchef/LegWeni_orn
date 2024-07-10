import React from 'react'
import Navbar from '../components/Navbar'
import HomeMain from '../components/HomeMain'
import Plf from '../components/Plf'
import Practice from '../components/Practice'
import Our_Team from '../components/Our_Team'
import Footer from '../components/Footer'
import Book_appointment from '../components/Book_appointment'

function Home() {
  return (
    <div>
      <HomeMain/>
      <Plf/>
      <Practice/>
      <Our_Team/>
      <Book_appointment/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home