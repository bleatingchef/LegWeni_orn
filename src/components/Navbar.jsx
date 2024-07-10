import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500 text-2xl" : "text-white hover:text-yellow-200 text-2xl"}>Home</NavLink>
        <NavLink to="/practice" className={({ isActive }) => isActive ? "text-yellow-500 text-2xl" : "text-white hover:text-yellow-200 text-2xl"}>Practice Areas</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => isActive ? "text-yellow-500 text-2xl" : "text-white hover:text-yellow-200 text-2xl"}>About Us</NavLink>
        <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-yellow-300 text-2xl" : "text-white hover:text-yellow-200 text-2xl"}>Contact Us</NavLink>
      </div>
      <button className="hidden md:block bg-white text-blue-900 mr-10 py-2 px-4 rounded-full">Book An Appointment</button>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-slate-900 flex flex-col items-center space-y-8 pt-8 pb-4 z-10">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300 text-2xl" : "text-white hover:text-yellow-200 text-2xl"} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/practice" className={({ isActive }) => isActive ? "text-yellow-300 text-2xl" : "text-white hover:text-yellow-200 text-2xl"} onClick={toggleMenu}>Practice Areas</NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? "text-yellow-300 text-2xl" : "text-white hover:text-yellow-200 text-2xl"} onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-yellow-300 text-2xl" : "text-white hover:text-yellow-200 text-2xl"} onClick={toggleMenu}>Contact Us</NavLink>
          <button className="bg-white text-blue-900 py-2 px-4 rounded-full" onClick={toggleMenu}>Book An Appointment</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
