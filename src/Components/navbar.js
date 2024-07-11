import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="h-16" />
                <span className="font-bold text-lg">PIZZA</span>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <ul className={`md:flex md:items-center md:space-x-8 text-sm space-y-4 md:space-y-0 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <li className="relative cursor-pointer transition-colors duration-300 ease-in-out">
                    <Link to="/" className="hover:underline hover:text-red-500">HOME</Link>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </li>
                <li className="relative cursor-pointer transition-colors duration-300 ease-in-out">
                    <Link to="/about-us" className="hover:underline hover:text-red-500">ABOUT US</Link>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </li>
                <li className="relative cursor-pointer transition-colors duration-300 ease-in-out">
                    <Link to="/menu-section" className="hover:underline hover:text-red-500">MENU</Link>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </li>
                <li className="relative cursor-pointer transition-colors duration-300 ease-in-out">
                    <Link to="/franchise" className="hover:underline hover:text-red-500">FRANCHISE</Link>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </li>
                
                <li className="relative cursor-pointer transition-colors duration-300 ease-in-out text-red-500">
                    <Link to="/order-now" className="hover:underline hover:text-red-500">ORDER NOW</Link>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
