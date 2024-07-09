import React from 'react';
import criminal from '../assets/cs.png';
import bail from '../assets/bm.png';
import ndps from '../assets/ndps.png';
import posco from '../assets/posco.png';
import civil from '../assets/civil.png';
import sexual from '../assets/sexual.png';
import pbg from "../assets/practicebg.png";

const Practice = () => {
  return (
    <div className="relative text-center">
      {/* <div className="relative">
        <img src={pbg} className="w-full h-auto sm:opacity-100 opacity-50" alt="" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h2 className="text-8xl py-8 mb-4">Practice Areas</h2>
          <p className="text-2xl py-6 w-2/3 sm:w-4/5">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
          </p>
        </div>
      </div> */}
      <div className="relative">
         <img src={pbg} className="w-full pt-10 sm:pt-0 sm:h-auto sm:opacity-100 opacity" alt="" />
         <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
           <h2 className="text-2xl sm:text-8xl text-yellow-300 pt-6 sm:py-4 mb-0">Practice Areas</h2>
           <p className="text-sm  sm:text-2xl py-0 sm:w-5/6 sm:w-2/3">
             Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
           </p>
         </div>
       </div>
      
      <h2 className="text-4xl sm:text-7xl mb-10 pt-10 text-slate-950">Our Practice Areas</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={criminal} alt="Criminal Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={bail} alt="Bail Matters" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={ndps} alt="NDPS Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={posco} alt="POCSO Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={civil} alt="Civil Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={sexual} alt="Sexual Assault" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pt-10">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={criminal} alt="Criminal Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={bail} alt="Bail Matters" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={ndps} alt="NDPS Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={posco} alt="POCSO Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={civil} alt="Civil Cases" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={sexual} alt="Sexual Assault" className="w-full h-auto" />
        </div>
      </div>
      
      <button className="mt-16 px-8 py-4 bg-slate-950 text-white text-xl hover:bg-gray-700">Load More</button>
    </div>
  );
};

export default Practice;

// import React from 'react';
// import criminal from '../assets/cs.png';
// import bail from '../assets/bm.png';
// import ndps from '../assets/ndps.png';
// import posco from '../assets/posco.png';
// import civil from '../assets/civil.png';
// import sexual from '../assets/sexual.png';
// import pbg from "../assets/practicebg.png";

// const Practice = () => {
//   return (
//     <div className="relative text-center">
//       <div className="relative">
//         <img src={pbg} className="w-full pt-10 sm:pt-0 sm:h-auto sm:opacity-100 opacity" alt="" />
//         <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
//           <h2 className="text-2xl sm:text-8xl pt-6 sm:py-4 mb-0">Practice Areas</h2>
//           <p className="text-sm  sm:text-2xl py-0 sm:w-5/6 sm:w-2/3">
//             Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
//           </p>
//         </div>
//       </div>
//       <h2 className="text-5xl sm:text-7xl mb-10 pt-10 text-slate-950">Our Practice Areas</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={criminal} alt="Criminal Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={bail} alt="Bail Matters" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={ndps} alt="NDPS Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={posco} alt="POCSO Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={civil} alt="Civil Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={sexual} alt="Sexual Assault" className="w-full h-auto" />
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center gap-8 pt-10">
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={criminal} alt="Criminal Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={bail} alt="Bail Matters" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={ndps} alt="NDPS Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={posco} alt="POCSO Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={civil} alt="Civil Cases" className="w-full h-auto" />
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={sexual} alt="Sexual Assault" className="w-full h-auto" />
//         </div>
//       </div>
      
//       <button className="mt-16 px-8 py-4 bg-slate-950 text-white text-xl hover:bg-gray-700">Load More</button>
//     </div>
//   );
// };

// export default Practice;
