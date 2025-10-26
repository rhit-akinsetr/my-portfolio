export default function Contact() {
    // Icon components using Lucide/SVG placeholders
    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-blue-600">
            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
    const BriefcaseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-blue-600">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    );
    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-blue-600">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
        </svg>
    );

    const contactMethods = [
        {
            icon: MailIcon,
            title: "Personal Email",
            value: "akinseluretemi@gmail.com",
            link: "mailto:akinseluretemi@gmail.com",
            description: "For personal inquiries and projects."
        },
        {
            icon: BriefcaseIcon,
            title: "School Email",
            value: "akinsetr@rose-hulman.edu",
            link: "mailto:akinsetr@rose-hulman.edu",
            description: "For school-related or official communications."
        },
        {
            icon: LinkedinIcon,
            title: "LinkedIn",
            value: "/in/temi-akinselure",
            link: "https://www.linkedin.com/in/temi-akinselure/",
            description: "Connect with me professionally."
        },
    ];

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-4 py-20">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-12">I'm currently looking for new opportunities, and my inbox is always open.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <a 
                            key={index}
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] flex flex-col items-center text-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <method.icon />
                            <h3 className="text-xl text-black font-semibold mt-3 mb-1">{method.title}</h3>
                            <p className="text-sm text-gray-700 font-medium break-all">{method.value}</p>
                            <p className="text-xs text-gray-500 mt-2">{method.description}</p>
                        </a>
                    ))}
                </div>

                <div className="mt-12 p-8 bg-blue-600 text-white rounded-xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-2">Ready to work together?</h3>
                    <p className="mb-6">Click on any of the options above to connect or send a direct message.</p>
                    <h3 
                        href="mailto:akinseluretemi@gmail.com"
                        className="bg-white text-black  px-8 py-3 rounded-full font-bold text-lg shadow-md"
                    >
                        Send Me an Email
                    </h3>
                </div>
            </div>
        </section>
    );
}