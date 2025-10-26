import React from 'react';

export default function Projects() {
    // UPDATED the project details based on your input and PDF
    const projectData = [
        {
            title: "NBA Over Under Predictor",
            description: "Developed a full-stack website for users to predict if a player/team will be over/under a certain statistic, based on a custom algorithm.",
            tech: ["HTML", "CSS", "JavaScript", "SQL", "Python"],
            image: "https://placehold.co/600x400/0277BD/FFFFFF?text=NBA+Predictor",
            link: "https://github.com/RHIT-CSSE333/project-s2g4-nbaoverunderdb",
            linkText: "View on GitHub"
        },
        {
            title: "Virtual Closet",
            description: "A full-stack web app allowing users to curate outfits digitally using CRUD operations. Integrates weather APIs to suggest attire.",
            tech: ["HTML", "CSS", "JavaScript", "Firebase"],
            image: "https://placehold.co/600x400/E57373/FFFFFF?text=Virtual+Closet",
            link: "https://github.com/rhit-akinsetr/csse280project",
            linkText: "View on GitHub"
        },
        {
            title: "EPL Match Outcome Prediction",
            description: "A machine learning pipeline to predict English Premier League match outcomes using historical data and engineered features.",
            tech: ["Python", "Pandas", "Machine Learning"],
            image: "https://placehold.co/600x400/4CAF50/FFFFFF?text=ML+Project",
            link: "https://docs.google.com/presentation/d/1LkynmEfr6hGngUCncexINA7nFKsUzw_A/edit?usp=sharing",
            linkText: "View Presentation"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-4 py-20">
            <div className="max-w-6xl w-full text-center">
                <h2 className="text-4xl font-bold mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) => (
                        <div 
                            key={project.title}
                            className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                                <div className="mb-4">
                                    {project.tech.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                                >
                                    {project.linkText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}