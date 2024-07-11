import React from 'react';
import background from '../Assets/aboutbg.png';

function Homeabout() {
  return (
    <div className="relative" style={{ paddingTop: "100px" }}>
      <div
        className="w-full h-[90vh] bg-cover bg-center mb-2"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex justify-end items-center h-full px-4 md:px-8">
          <div className="max-w-sm md:max-w-lg bg-opacity-75 p-4 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2c2c2c] mt-3">
              The Pizza Store
            </h1>
            <br />
            <h3 className="text-sm md:text-md leading-6 lg:leading-7 text-[#2c2c2c] font-bold">
              Pizza is all about quality you can trust. As one of the original founding Pizza brands and the 3rd largest Pizza chain in India, our sole mission is making the freshest, tastiest and cheesiest Pizza around. Our classic pan pizza will always be a fan favourite, with a soft and chewy crust perfectly balancing out the healthy tomato puree and mozzarella - cheddar blended cheese. Our authentic Italian crust for those who would prefer a light and airy crust to more fully enjoy the toppings. Thin, light and delicious. <br /> Our newest addition of Puree sauces will blow your mind. Choose between a spicy buffalo, sweet bbq, tangy chipotle and creamy makhni to perfectly compliment your toppings and crust. Our suggestions of combinations might be helpful but ultimately the power lies with you.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeabout;
