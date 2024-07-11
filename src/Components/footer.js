import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
                    <div className="mb-8 md:mb-0">
                        <h4 className="font-bold text-xl mb-2">Contact Us</h4>
                        <p>Pizza office:<br />
                            Lucerna Tower, Sector-125, Noida-201304
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="font-bold text-xl mb-2">Stay Connected</h4>
                        <p>Follow us on social media channels</p>
                        <div className="flex space-x-4 mt-2">
                            <Link to="#" className="text-white hover:text-gray-500">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#" className="text-white hover:text-gray-500">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="#" className="text-white hover:text-gray-500">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="#" className="text-white hover:text-gray-500">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link to="#" className="text-white hover:text-gray-500">
                                <i className="fab fa-snapchat-ghost"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="font-bold text-xl mb-2">Timings</h4>
                        <p>
                            Monday - Sunday<br />
                            11:00 AM - 10:00 PM
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center space-y-2 md:space-y-0 md:flex md:justify-between">
                    <ul className="flex space-x-4 justify-center">
                        <li className="hover:underline">HOME</li>
                        <li className="hover:underline">ABOUT US</li>
                        <li className="hover:underline">MENU</li>
                        <li className="hover:underline">FRANCHISE</li>
                        <li className="hover:underline text-red-500">ORDER NOW</li>
                    </ul>
                    <p className="text-gray-500">
                        &copy; 2024 Pizza All Rights Reserved Designed By Anurag.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
