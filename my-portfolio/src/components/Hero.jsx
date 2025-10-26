import React from "react";
// import Navbar from "./Navbar.jsx";
import github from '/github.png';
import linkedin from '/linkedin.png';
import resume from '/Akinselure_Temiloluwa_2026.pdf';

export default function Hero() {
    return (
        
        // ADDED 'pt-20' (Padding Top) to create space for the fixed navbar
        <div className="relative overflow-hidden pt-20 min-h-[550px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col justify-center items-center text-center bg-blue-600 text-white px-4" >
            
            {/* Background shape - Using responsive sizes from previous suggestion */}
            <div>
                <div 
                    className="
                        w-full h-full 
                        md:w-3/5 md:h-[60vh]
                        bg-gradient-to-r 
                        absolute 
                        from-[#6d2897] via-[#836cf5] to-[#bb61c5] 
                        transform 
                        rotate-45 
                        z-0 
                        right-2 
                        top-28 
                        rounded-3xl
                    "
                >
                </div>
            </div>

            {/* Navbar component is rendered *outside* the Hero content div, but its fixed position handles its display */}
            {/* <Navbar /> */}

            {/* Content for the Hero section - Added back the main text/button structure */}
            <div className="relative z-10 p-6">
                <main id="home" className="flex flex-col md:flex-row justify-center w-full px-4
                md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10">
                    <section className="flex flex-col justify-center items-center text-center"
                    data-aos="fade-up"
                    data-aos-duration="500">
                        <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3x1 opacity-50 -top-5 -left-12"></div>
                        
                        <p className='text-lg mb-2 font-light'>Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">Temi Akinselure</h1>
                    <p className="text-2xl font-semibold text-blue-200 mb-6">
                        CS Student & Aspiring Software Engineer
                    </p>
                    <p className="text-lg mb-8 max-w-md">
                        I'm a senior at Rose-Hulman Institute of Technology, passionate about building robust software and finding elegant solutions to challenging problems.
                    </p>
                        <div className="flex items-center justify-center mb-6">
                            <a href="https://github.com/rhit-akinsetr">
                                <img src={github} alt="GitHub" className="w-8 h-8 m-4 hover:scale-110 transition-transform duration-300"/>
                            </a>
                            <a href="https://www.linkedin.com/in/temi-akinselure/">
                                <img src={linkedin} alt="LinkedIn" className="w-8 h-8 m-4 hover:scale-110 transition-transform duration-300"/>
                            </a>
                        </div>
                        <a href={resume} download> 
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
                                Download Resume
                            </button>
                        </a>
                    </section>
                    <figure className="mt-10 md:mt-0 md:ml-10 flex justify-center"
                    data-aos="fade-left"
                    data-aos-duration="500">
                        <img 
                            src="/Face.JPG" 
                            alt="Hero Image" 
                            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
                        />
                    </figure>
                </main>
            </div>
        </div>
    );
}