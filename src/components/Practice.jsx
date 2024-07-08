// import React from 'react';
// import criminal from '../assets/cs.png'
// import bail from '../assets/bm.png'
// import ndps from '../assets/ndps.png'
// import posco from '../assets/posco.png'
// import civil from '../assets/civil.png'
// import sexual from '../assets/sexual.png'
// import group from "../assets/group.png"
// const Practice = () => {
//   return (
//     <div className="text-center pt-32">
//       <h2 className="text-7xl mb-10 text-slate-950">Our Practice Areas</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={criminal} alt="Criminal Cases" className="w-auto h-auto" />
//         </div>
//         <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={bail} alt="Bail Matters" className="w-auto h-auto" />
//         </div>
//         <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={ndps} alt="NDPS Cases" className="w-auto h-auto" />
//         </div>
//         <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={posco} alt="POCSO Cases" className="w-auto h-auto" />
//         </div>
//         <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={civil} alt="Civil Cases" className="w-auto h-auto" />
//         </div>
//         <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
//           <img src={sexual} alt="Sexual Assault" className="w-auto h-auto" />
//         </div>
//       </div>
//       <button className="mt-16 px-8 py-4 bg-slate-950 text-white text-xl hover:bg-gray-700">Load More</button>
//       <img src={group} className='pt-20 w-full h-full' alt="" />
//     </div>
//   );
// };

// export default Practice;

import React from 'react';
import criminal from '../assets/cs.png';
import bail from '../assets/bm.png';
import ndps from '../assets/ndps.png';
import posco from '../assets/posco.png';
import civil from '../assets/civil.png';
import sexual from '../assets/sexual.png';
import group from "../assets/group.png";

const Practice = () => {
  return (
    <div className="text-center pt-16 sm:pt-32">
      <h2 className="text-4xl sm:text-7xl mb-10 text-slate-950">Our Practice Areas</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={criminal} alt="Criminal Cases" className="w-full h-auto" />
        </div>
        <div className="w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={bail} alt="Bail Matters" className="w-full h-auto" />
        </div>
        <div className="w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={ndps} alt="NDPS Cases" className="w-full h-auto" />
        </div>
        <div className="w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={posco} alt="POCSO Cases" className="w-full h-auto" />
        </div>
        <div className="w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={civil} alt="Civil Cases" className="w-full h-auto" />
        </div>
        <div className="w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/8 bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img src={sexual} alt="Sexual Assault" className="w-full h-auto" />
        </div>
      </div>
      <button className="mt-16 px-8 py-4 bg-slate-950 text-white text-xl hover:bg-gray-700">Load More</button>
      <img src={group} className="pt-20 w-full h-auto" alt="" />
    </div>
  );
};

export default Practice;

