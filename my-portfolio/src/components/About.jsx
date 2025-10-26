import React from 'react';
import Face from '/Face.JPG';

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-4 py-20">
            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
                <figure data-aos="fade-left" data-aos-duration="500">
                            <img 
                                // FIX: Replaced local {Face} import with a placeholder for preview
                                src={Face} 
                                alt="About Me" 
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </figure>
                {/* Text Div: Order 2 on mobile, Order 1 on large */}
                <div className="text-center lg:text-left order-2 lg:order-1" data-aos="fade-right" data-aos-duration="500"> {/* Swapped data-aos animation to fade-right for desktop */}
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg mb-4">
                       Hello! I'm Temi Akinselure, a  senior Computer Science student at Rose-Hulman Institute of Technology. I'm not just studying software; I'm actively building it. My passion lies in taking on complex challenges and transforming them into elegant, functional code.
                       </p>
                    <p className="text-lg">
                        My curriculum and projects have provided me with a strong foundation in both front-end and back-end development, allowing me to approach software development holistically. I thrive in environments that prioritize learning, growth, and continuous improvement.
                    </p>
                    </div>
            </div>
            
        </section> 
    );
}