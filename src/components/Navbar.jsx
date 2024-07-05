import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="bg-slate-900  flex items-center justify-between pl-8 pt-8 p-4">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-20" />
        {/* <span className="text-yellow-400 font-bold">LEGWENIORN</span> */}
      </div>
      <div className="flex space-x-8">
        <Link to="/" className="text-white text-2xl">Home</Link>
        <Link to="/practice" className="text-white text-2xl">Practice Areas</Link>
        <Link to="/aboutus" className="text-white text-2xl">About Us</Link>
        <Link to="/contactus" className="text-white text-2xl">Contact Us</Link>
      </div>
      <button className="bg-white text-blue-900 mr-10 py-2 px-4 rounded-full">Book An Appointment</button>
    </div>
  );
}

export default Navbar;
