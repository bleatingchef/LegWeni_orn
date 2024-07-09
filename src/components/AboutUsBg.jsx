import React from 'react';
import abg from "../assets/aboutusbg.png";

const AboutUsBg = () => {
  return (
    <div className="relative text-center">
      <div className="relative">
        <img src={abg} className="w-full h-auto sm:pt-0 pt-10" alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-lg sm:text-5xl md:text-6xl pt-6 text-yellow-300 lg:text-8xl py- sm:py-6 mb-">About Us</h2>
          <p className="text-sm sm:text-xl md:text-2xl py- sm:py-6 w-full sm:w-2/3">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
          </p>
        </div>
      </div>
      <div className="mt-12 px-4 md:px-12 lg:px-24 text-slate-950 text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 mt-8 md:mt-16 md:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">WHY YOU NEED THE TOP LAWYERS?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              A Full Service Law Firm In India That Has Been Recognised Internationally With Specialisation In Commercial.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-16 md:ml-12 lg:ml-32 max-w-xl">
            <p className="text-base sm:text-lg md:text-xl">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBg;
