
import React from 'react';
import plfImage from '../assets/plf.png';
import plf1Image from '../assets/plf1.png';
import backrect from '../assets/backrect.png';

const Plf = () => {
  return (
    <div className="flex items-center pt-64 pt border border-gray-300 rounded-lg">
      <div className="relative ml-20 flex">
        <div className="relative">
          <img src={backrect} alt="Background" className="w-full h-full rounded-lg" style={{ position: 'relative', left: '20px', top: '20px' }} />
          <img src={plfImage} alt="Law Firm" className="absolute top-0 left-0 w-full h-full rounded-lg" />
        </div>
        <div className="absolute top-0 left-0 w-24 h-24">
          <img src={plf1Image} alt="Experience" className="w-full h-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm text-center">
            25+ Years Of Experiences
          </div>
        </div>
      </div>
      <div className="flex-1 mx-2">
        <h2 className="text-7xl ml-32 font-semibold text-slate-950">We Are Professional Law Firm In India</h2>
        <p className="my-5 ml-32 max-w-3xl text-slate-950 text-lg">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
        </p>
        <ul className="list-none pl-5">
          <li className="mb-1 ml-32 text-slate-950 text-lg">• Physical And Online Resources</li>
          <li className="mb-1 ml-32 text-slate-950 text-lg">• Probably The Largest Law Firm</li>
          <li className="mb-1 ml-32 text-slate-950 text-lg">• Practical Commercial Solution</li>
        </ul>
      </div>
    </div>
  );
};

export default Plf;
