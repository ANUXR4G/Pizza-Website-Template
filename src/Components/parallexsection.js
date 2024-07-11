import React from 'react';
import background from '../Assets/parallex.png';

const Parallaxsection = () => {
    return (
        <div className="relative overflow-hidden h-screen">
            <div 
                className="absolute inset-0 bg-fixed bg-center bg-cover w-full h-full"
                style={{ backgroundImage: `url(${background})` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                <h1 className="text-white text-4xl lg:text-6xl font-bold max-w-4xl mx-auto">
                    We Offer You an Unforgettable Delivery Experience
                </h1>
                <button className="bg-red-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-red-700">
                    Order Online
                </button>
            </div>
        </div>
    );
};

export default Parallaxsection;
