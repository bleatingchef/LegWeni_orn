
// import React from 'react';
// import homeimg from "../assets/homebgimg.png";
// import logo2 from "../assets/logo2.png"; 
// import featureImg1 from "../assets/featureimg1.png"; 
// import featureImg2 from "../assets/featureimg2.png"; 
// import featureImg3 from "../assets/featureimg3.png"; 
// import { Link } from 'react-router-dom';


// const HomeMain = () => {
//     const [menuOpen, setMenuOpen] = React.useState(false);

//     return (
//         <div className='relative'>
            
//             <img src={homeimg} alt="" className='w-full  object-cover' />

    
//             <div className='absolute inset-0 bg-black opacity-20'></div>


//             <div className='absolute top-4 right-4 z-10'>
//                 <button onClick={() => setMenuOpen(true)} className='p-2 rounded-full bg- text-white hover:bg-gray-500 transition duration-300'>
//                     <svg className='w-10 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                     </svg>
//                 </button>
//             </div>


//             <div className={`fixed inset-0 bg-slate-950 text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-20`}>
//                 <div className='flex justify-end p-4'>
//                     <button onClick={() => setMenuOpen(false)} className='p-2 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300'>
//                         <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                         </svg>
//                     </button>
//                 </div>
//                 <div className=' flex-col items-center justify-center h-full pl-32 pt-24'>
//                     <Link to="/" className='text-white font-semibold text-6xl mb-4'>Home</Link>
//                     <hr className='mr-40 mb-8 bg-slate-950' />
//                     <Link to="/practice" className='text-white font-semibold text-6xl'>Practice Areas</Link>
//                     <hr className='mr-40 mb-8' />
//                     <Link to="/aboutus" className='text-white font-semibold text-6xl'>About Us</Link>
//                     <hr className='mr-40 mb-8' />
//                     <Link to="/contactus" className='text-white font-semibold text-6xl'>Contact Us</Link>
//                 </div>
//             </div>


//             <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4'>
//                 <img src={logo2} alt="Logo" className='mb-8' /> 
//                 <h1 className='text-4xl md:text-5xl font-bold'>EMPOWERING YOU THROUGH EVERY</h1>
//                 <h2 className='text-3xl md:text-7xl font-semibold mt-4'>LEGAL CHALLENGE</h2>
//                 <p className='max-w-5xl text-xl mb-40 mt-8'>
//                     Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
//                 </p>
//                 <div className='mt-8'>
//                     <button className='p-3 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300'>
//                         <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>





//             <div className='absolute bottom-[-180px] inset-x-0 bottom-0 z-1'>
//                 <div className='container mx-auto px-4'>
//                     <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-64'>
//                         <div className='bg-slate-950 text-white p-12 rounded-lg text-center'>
//                             <div className='mb-4'>
//                                 <img src={featureImg1} alt="Feature" className='w-24 h-24 mx-auto' /> 
//                             </div>
//                             <h3 className='text-xl text-yellow-200  font-semibold mb-2'>HIGH ETHICAL STANDARD</h3>
//                             <p>
//                                 Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
//                             </p>
//                         </div>
//                         <div className='bg-slate-950 text-white p-12 rounded-lg text-center'>
//                             <div className='mb-4'>
//                                 <img src={featureImg2} alt="Feature" className='w-24 h-24 mx-auto' /> 
//                             </div>
//                             <h3 className='text-xl text-yellow-200 font-semibold mb-2'>COMPLIANT HR POLICY</h3>
//                             <p>
//                                 Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
//                             </p>
//                         </div>
//                         <div className='bg-slate-950 text-white p-12 rounded-lg text-center'>
//                             <div className='mb-4'>
//                                 <img src={featureImg3} alt="Feature" className='w-24 h-24 mx-auto' />
//                             </div>
//                             <h3 className='text-xl text-yellow-200 font-semibold mb-2'>SPECIALIZED LAWYERS</h3>
//                             <p>
//                                 Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default HomeMain;


import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import homeimg from "../assets/homebgimg.png";
import logo2 from "../assets/logo2.png"; 
import featureImg1 from "../assets/featureimg1.png"; 
import featureImg2 from "../assets/featureimg2.png"; 
import featureImg3 from "../assets/featureimg3.png"; 

const HomeMain = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className='relative'>
            <img src={homeimg} alt="" className='w-full object-cover h-screen' />
            
            {/* <div className='absolute inset-0 bg-black opacity-20'></div> */}
            
            <div className='absolute top-4 right-4 z-10'>
                <button onClick={() => setMenuOpen(true)} className='p-2 rounded-full bg-white text-black hover:bg-gray-500 transition duration-300'>
                    <svg className='w-10 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <div className={`fixed inset-0 bg-slate-950 text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-20`}>
                <div className='flex justify-end p-4'>
                    <button onClick={() => setMenuOpen(false)} className='p-2 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300'>
                        <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center h-full pr-4 pb-64 md:pb-20 pt-'>
               
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500 text-6xl" : "text-white hover:text-yellow-200 text-6xl"}>Home</NavLink>
                    <hr className='w-16 md:w-32 mb-4 md:mb-8 bg-slate-950' />
                    <NavLink to="/practice" className={({ isActive }) => isActive ? "text-yellow-500 text-6xl" : "text-white hover:text-yellow-200 text-6xl"}>Practice Areas</NavLink>
                    <hr className='w-16 md:w-32 mb-4 md:mb-8' />
                    <NavLink to="/aboutus" className={({ isActive }) => isActive ? "text-yellow-500 text-6xl" : "text-white hover:text-yellow-200 text-6xl"}>About Us</NavLink>
                    <hr className='w-16 md:w-32 mb-4 md:mb-8' />
                    <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-yellow-500 text-6xl" : "text-white hover:text-yellow-200 text-6xl"}>Contact Us</NavLink>
                    <hr className='w-16 md:w-32 mb-4 md:mb-8' />
                </div>
            </div>
            
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-'>
                <img src={logo2} alt="Logo" className='mb-4 sm:mt-24 md:mb- max-w-xs md:max-w-full' /> 
                <h1 className='text-lg md:text-5xl font-bold'>EMPOWERING YOU THROUGH EVERY</h1>
                <h2 className='text-lg md:text-7xl text-yellow-300 font-semibold mt-4 mb-4 md:mt-8'>LEGAL CHALLENGE</h2>
                <p className='max-w-2xl text-xs md:text-lg mb-12 md:mb-40 mt-4'>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                </p>
                <div className='mt-4 md:mt-8'>
                    <button className='p-3 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300'>
                        <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className='absolute sm:bottom-[-180px] sm:top-[350px] top-[400px] inset-x-0 sm:mt-20 mt-40 bottom-0 z-1'>
                <div className='container mx-auto px-2 sm:py-0 py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-64'>
                        <div className='bg-slate-950 text-white p-2 md:p-12 rounded-lg text-center'>
                            <div className='mb-4'>
                                <img src={featureImg1} alt="Feature" className='w-12 h-12 md:w-24 md:h-24 mx-auto' /> 
                            </div>
                            <h3 className='text-xs md:text-xl text-yellow-200 font-semibold mb-2'>HIGH ETHICAL STANDARD</h3>
                            <p className="text-xs md:text-sm">
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                            </p>
                        </div>
                        <div className='bg-slate-950 text-white p-4 md:p-12 rounded-lg text-center'>
                            <div className='mb-4'>
                                <img src={featureImg2} alt="Feature" className='w-12 h-12 md:w-24 md:h-24 mx-auto' /> 
                            </div>
                            <h3 className='text-xs md:text-xl text-yellow-200 font-semibold mb-2'>COMPLIANT HR POLICY</h3>
                            <p className="text-xs md:text-sm">
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                            </p>
                        </div>
                        <div className='bg-slate-950 text-white p-4 md:p-12 rounded-lg text-center'>
                            <div className='mb-4'>
                                <img src={featureImg3} alt="Feature" className='w-12 h-12 md:w-24 md:h-24 mx-auto' />
                            </div>
                            <h3 className='text-xs md:text-xl text-yellow-200 font-semibold mb-2'>SPECIALIZED LAWYERS</h3>
                            <p className="text-xs md:text-sm">
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;

