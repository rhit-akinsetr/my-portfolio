import React from 'react';
import java from '/java.png';
import csharp from '/csharp.png';
import reactLogo from '/react.png';
import sql from '/sql.png';
import python from '/python.png';
import html from '/html.png';
import css from '/css.png';
import JS from '/js.png';

export default function Skills() {
    const skillsData = [
        { 
            name: "C#", 
            logo: csharp,
        },
        { 
            name: "Java", 
            logo: java, 
        },
        { 
            name: "React", 
            logo: reactLogo, 
        },
        { 
            name: "SQL", 
            logo: sql, 
        },
        { 
            name: "Python", 
            logo: python, 
        },
        { 
            name: "HTML", 
            logo: html, 
        },
        { 
            name: "CSS", 
            logo: css, 
        },
        { 
            name: "JavaScript", 
            logo: JS, 
        },
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-4 py-20">
            <div className="max-w-6xl w-full text-center">
                <h2 className="text-4xl font-bold mb-12">Technologies I Use</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skillsData.map((skill) => (
                        <div 
                            key={skill.name} 
                            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <div className="w-24 h-24 flex justify-center items-center mb-4 bg-gray-50 rounded-lg p-2 shadow-inner">
                                <img 
                                    src={skill.logo} 
                                    alt={`${skill.name} logo`} 
                                    className="w-full h-full object-contain" 
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{skill.name}</h3>
                            
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}