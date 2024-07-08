import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-200 px-4 sm:px-8 py-10 mt-20">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <img src={logo} className="pl-4 sm:pl-10" alt="Logo" />
          <p className="text-base sm:text-lg pr-6 sm:pr-20 mt-4 sm:mt-0">
            Main Practice Areas Of The Firm Include Admiralty, Maritime And Ship Arrests, Arbitration, Mediation And ADRs, Aviation Matters, Banking Finance & Investment, Capital Market, Commercial Litigation, Commercial Transactions, International Trade, Construction & Engineering, Foreign Investment And Business Set-Up.
          </p>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-2xl sm:text-4xl text-yellow-200 mb-4">Practice Area</h2>
          <ul className="text-base sm:text-lg space-y-2">
            <li>Family Matters</li>
            <li>Social Issue</li>
            <li>Finance & Investment</li>
            <li>Criminal Prosecution</li>
            <li>Cheating</li>
            <li>Land & Property</li>
            <li>Fraud Matters</li>
            <li>Auditing Problem</li>
            <li>High Court Matters</li>
            <li>Case Solution</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-2xl sm:text-4xl text-yellow-200 mb-4">Useful Links</h2>
          <ul className="text-base sm:text-lg space-y-2">
            <li>Home</li>
            <li>Practice Areas</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Book Appointment</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-2xl sm:text-4xl text-yellow-200 mb-4">News Feeds</h2>
          <ul className="text-base sm:text-lg space-y-4">
            <li>
              <p className="text-xl sm:text-2xl">12th June 2020</p>
              <p className="italic">Managing Partner Along With Senior Counsels.</p>
            </li>
            <li>
              <p className="text-xl sm:text-2xl">12th June 2020</p>
              <p className="italic">Managing Partner Along With Senior Counsels.</p>
            </li>
            <li>
              <p className="text-xl sm:text-2xl">12th June 2020</p>
              <p className="italic">Managing Partner Along With Senior Counsels.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-300 text-center py-2 mt-6">
        <p className="text-xs sm:text-sm text-black">
          COPYRIGHT © 2024 LEGWENIORN | POWERED BY MARLILETECHANDMEDIA.COM
        </p>
      </div>
    </footer>
  );
}

export default Footer;
