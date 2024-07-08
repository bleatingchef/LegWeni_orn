import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-900 flex items-center justify-between pl-8 pt-8 p-4">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white text-2xl">Home</Link>
        <Link to="/practice" className="text-white text-2xl">Practice Areas</Link>
        <Link to="/aboutus" className="text-white text-2xl">About Us</Link>
        <Link to="/contactus" className="text-white text-2xl">Contact Us</Link>
      </div>
      <button className="hidden md:block bg-white text-blue-900 mr-10 py-2 px-4 rounded-full">Book An Appointment</button>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-slate-900 flex flex-col items-center space-y-8 pt-8 pb-4 z-10">
          <Link to="/" className="text-white text-2xl" onClick={toggleMenu}>Home</Link>
          <Link to="/practice" className="text-white text-2xl" onClick={toggleMenu}>Practice Areas</Link>
          <Link to="/aboutus" className="text-white text-2xl" onClick={toggleMenu}>About Us</Link>
          <Link to="/contactus" className="text-white text-2xl" onClick={toggleMenu}>Contact Us</Link>
          <button className="bg-white text-blue-900 py-2 px-4 rounded-full" onClick={toggleMenu}>Book An Appointment</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;


