import React from 'react';
import vipin from '../assets/vipin.png';
import vipinHover from '../assets/vh.png'; // Add the hover image
import aarav from '../assets/aarav.png';
import aaravHover from '../assets/ah.png'; // Add the hover image
import advik from '../assets/advik.png';
import advikHover from '../assets/adh.png'; // Add the hover image
import arjun from '../assets/arjun.png';
import arjunHover from '../assets/arh.png'; // Add the hover image
import acharya from '../assets/acharya.png';
import acharyaHover from '../assets/ach.png'; // Add the hover image
import aadesh from '../assets/aadesh.png';
import aadeshHover from '../assets/adeshov.png'; // Add the hover image

const Our_Team = () => {
  return (
    <div className="text-center pt-16 md:pt-32">
      <h2 className="text-4xl md:text-7xl mb-6 text-slate-950">Our Team</h2>
      <p className="text-base md:text-xl max-w-4xl mx-auto mb-10 text-slate-950">
        We Are A Team Of Experienced Attorneys, Lawyers, Charted Accountants, Specialists, Paralegals And Researchers Working Towards Setting The Standards Of Excellence In The Legal Field.
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 group hover:z-50">
          <img src={vipin} alt="Criminal Cases" className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0" />
          <img src={vipinHover} alt="Criminal Cases Hover" className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 group hover:z-50">
          <img src={aarav} alt="Bail Matters" className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0" />
          <img src={aaravHover} alt="Bail Matters Hover" className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 group hover:z-50">
          <img src={advik} alt="NDPS Cases" className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0" />
          <img src={advikHover} alt="NDPS Cases Hover" className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 group hover:z-50">
          <img src={arjun} alt="POCSO Cases" className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0" />
          <img src={arjunHover} alt="POCSO Cases Hover" className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 group hover:z-50">
          <img src={acharya} alt="Civil Cases" className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0" />
          <img src={acharyaHover} alt="Civil Cases Hover" className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative w-full pb-20 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 group hover:z-50">
          <img src={aadesh} alt="Sexual Assault" className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0" />
          <img src={aadeshHover} alt="Sexual Assault Hover" className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}

export default Our_Team;
