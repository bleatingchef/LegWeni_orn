import React from 'react';
import cbg from "../assets/contactbg.png";

const Contactbg = () => {
  return (
    <div className="relative text-center">
      <div className="relative">
        <img src={cbg} className="w-full h-auto  sm:pt-0 pt-10" alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-lg  sm:pt-0 pt-10 text-yellow-300 sm:text-6xl md:text-8xl sm:py-6  sm:mb-8">Contact Us</h2>
          <p className="text-sm sm:text-xl md:text-2xl py- w-full sm:w-2/3">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactbg;
