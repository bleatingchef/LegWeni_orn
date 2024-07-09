import React from 'react';
import plfImage from '../assets/plf.png';
import plf1Image from '../assets/plf1.png';
import backrect from '../assets/backrect.png';

const Plf = () => {
  return (
    <div className="flex flex-col md:flex-row items-center pt-16 md:pt-64 w-full rounded-lg">
      <div className="relative w-1/3 md:ml-20 flex mb-8 md:mb-0">
        <div className="relative">
          <img src={backrect} alt="Background" className="w-full rounded-lg" style={{ position: 'relative', left: '30px', top: '30px', maxWidth: '1000px', maxHeight: '350px' }} />
          <img src={plfImage} alt="Law Firm" className="absolute top-0 left-0 sm:w-full sm:h-full rounded-lg" style={{ width: '1000px', height: '350px' }} />
        </div>
        <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24">
          <img src={plf1Image} alt="Experience" className="w-full h-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs md:text-sm text-center">
            25+ Years Of Experiences
          </div>
        </div>
      </div>
      <div className="flex-4 w-2/3 mx-4 md:mx-2">
        <h2 className="text-4xl md:text-7xl text-center md:text-left md:ml-32 font-semibold text-slate-950 mb-4">We Are Professional Law Firm In India</h2>
        <p className="my-5 text-center md:text-left md:ml-32 max-w-3xl text-slate-950 text-base md:text-lg">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
        </p>
        <ul className="list-none pl-5">
          <li className="mb-1 text-center md:text-left md:ml-32 text-slate-950 text-base md:text-lg">• Physical And Online Resources</li>
          <li className="mb-1 text-center md:text-left md:ml-32 text-slate-950 text-base md:text-lg">• Probably The Largest Law Firm</li>
          <li className="mb-1 text-center md:text-left md:ml-32 text-slate-950 text-base md:text-lg">• Practical Commercial Solution</li>
        </ul>
      </div>
    </div>
  );
};

export default Plf;
