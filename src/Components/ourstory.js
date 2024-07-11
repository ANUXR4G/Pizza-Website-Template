import React from 'react';
import storyimage from '../Assets/story-front.png'

const OurStory = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12 bg-white max-w-6xl mx-auto">
            <div className="lg:w-1/2 p-4">
                <h2 className="text-4xl font-bold mb-4 text-[#2c2c2c]">Our Story</h2>
                <p className="text-lg leading-7 mb-4 text-[#2c2c2c]">
                    Contrary to industry standard strategy, Pizza, since 1996, has been committed to growing our brand slowly and steadily. Every outlet is carefully selected on strict criteria. To be a Pizza franchisee is a privilege unto itself. The same commitment to product and service perfection we practice is expected from our partners.
                </p>
                <p className="text-lg leading-7 text-[#2c2c2c]">
                    Our product is standardised across the Nation, supported by a robust supply chain providing all the ingredients required to perfectly craft our Pizza. Our outlets are designed by leading architects to reflect our philosophy of being open and inviting, while putting our customer comfort on priority.
                </p>
            </div>
            <div className="lg:w-1/2 p-4 flex justify-center">
                <img src={storyimage} alt="Pizza" className="max-w-full h-auto rounded-2xl" />
            </div>
        </div>
    );
};

export default OurStory;