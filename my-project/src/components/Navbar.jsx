import React , {useState} from "react";
// import {FiMenu, FiX} from "react-icons/fi"; // Removed this line as the package is not available

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const NavBarLinks = [
        {id: 1, title: "Home", link: "#home"},
        {id: 2, title: "About", link: "#about"},
        {id: 3, title: "Skills", link: "#skills"},
        {id: 4, title: "Projects", link: "#projects"},
        {id: 5, title: "Contact", link: "#contact"}
    ];

    // Inline SVG for Menu Icon
    const MenuIcon = () => (
        <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );

    // Inline SVG for Close (X) Icon
    const CloseIcon = () => (
        <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );


    return (
        // Changed bg-transparent to a semi-transparent blue and increased z-index
        <header className="w-full fixed top-0 left-0 bg-blue-600/95 z-50 shadow-md">
            
            {/* Added Flexbox classes: 'flex justify-between items-center h-20' */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20"> 
                
                {/* Logo - Removed 'py-4 block' as it interferes with flex alignment */}
                <a href="#home" className="text-white text-2xl font-bold">Portfolio</a>
                
                {/* Mobile Menu Toggle - Placed inside the flex container */}
                <button className="md:hidden focus:outline-none" onClick={()=>setIsOpen(!isOpen)}>
                    {/* Replaced FiX and FiMenu with inline SVGs */}
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center space-x-7">
                    {NavBarLinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={link.link} 
                            className="text-white hover:text-white text-lg transition duration-300"
                        > 
                            {/* FIX: Added the link title here */}
                            {link.title}
                        </a>
                    ))}
                    {/* FIX: Changed 'text-white' to 'text-blue-600'
                      White text on a white background was making it invisible.
                    */}
                    
                </nav>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-700 py-2`}>
                <nav className="flex flex-col items-start space-y-2 p-4">
                    {NavBarLinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={link.link} 
                            className="text-white hover:text-gray-300 text-lg w-full py-2"
                            onClick={()=>setIsOpen(false)} 
                        > 
                            {link.title}
                        </a>
                    ))}
                </nav>
            </div>  
        </header>
    );
}

