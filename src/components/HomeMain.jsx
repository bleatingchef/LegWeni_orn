
import React from 'react';
import homeimg from "../assets/homebgimg.png";
import logo2 from "../assets/logo2.png"; 
import featureImg1 from "../assets/featureimg1.png"; 
import featureImg2 from "../assets/featureimg2.png"; 
import featureImg3 from "../assets/featureimg3.png"; 


const HomeMain = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className='relative'>
            
            <img src={homeimg} alt="" className='w-full  object-cover' />

    
            <div className='absolute inset-0 bg-black opacity-20'></div>


            <div className='absolute top-4 right-4 z-10'>
                <button onClick={() => setMenuOpen(true)} className='p-2 rounded-full bg- text-white hover:bg-gray-500 transition duration-300'>
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
                <div className=' flex-col items-center justify-center h-full pl-32 pt-24'>
                    <h2 className='text-6xl font-semibold mb-4'>Home</h2>
                    <hr className='mr-40 mb-8 bg-slate-950' />
                    <h2 className='text-6xl font-semibold mb-4'>Practice Areas</h2>
                    <hr className='mr-40 mb-8' />
                    <h2 className='text-6xl font-semibold mb-4'>About Us</h2>
                    <hr className='mr-40 mb-8' />
                    <h2 className='text-6xl font-semibold mb-4'>Contact Us</h2>
                </div>
            </div>


            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4'>
                <img src={logo2} alt="Logo" className='mb-8' /> 
                <h1 className='text-4xl md:text-5xl font-bold'>EMPOWERING YOU THROUGH EVERY</h1>
                <h2 className='text-3xl md:text-7xl font-semibold mt-4'>LEGAL CHALLENGE</h2>
                <p className='max-w-5xl text-xl mb-40 mt-8'>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                </p>
                <div className='mt-8'>
                    <button className='p-3 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300'>
                        <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>





            <div className='absolute bottom-[-180px] inset-x-0 bottom-0 z-1'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-64'>
                        <div className='bg-slate-950 text-white p-12 rounded-lg text-center'>
                            <div className='mb-4'>
                                <img src={featureImg1} alt="Feature" className='w-24 h-24 mx-auto' /> 
                            </div>
                            <h3 className='text-xl text-yellow-200  font-semibold mb-2'>HIGH ETHICAL STANDARD</h3>
                            <p>
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                            </p>
                        </div>
                        <div className='bg-slate-950 text-white p-12 rounded-lg text-center'>
                            <div className='mb-4'>
                                <img src={featureImg2} alt="Feature" className='w-24 h-24 mx-auto' /> 
                            </div>
                            <h3 className='text-xl text-yellow-200 font-semibold mb-2'>COMPLIANT HR POLICY</h3>
                            <p>
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                            </p>
                        </div>
                        <div className='bg-slate-950 text-white p-12 rounded-lg text-center'>
                            <div className='mb-4'>
                                <img src={featureImg3} alt="Feature" className='w-24 h-24 mx-auto' />
                            </div>
                            <h3 className='text-xl text-yellow-200 font-semibold mb-2'>SPECIALIZED LAWYERS</h3>
                            <p>
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
