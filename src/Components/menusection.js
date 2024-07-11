import React from 'react';
import home1 from '../Assets/home-box1.png';
import home2 from '../Assets/home-box2.png';
import home3 from '../Assets/home-box3.png';
import home4 from '../Assets/home-box4.png';
import home5 from '../Assets/home-box5.png';
import home6 from '../Assets/home-box6.png';

const MenuSection = () => {
  const menuItems = [
    { title: "Starter", image: home1, action: "Order Now" },
    { title: "Pizza", image: home2, action: "Order Now" },
    { title: "Pasta", image: home3, action: "Order Now" },
    { title: "Cafe Casa Blanca", image: home4, action: "View Menu" },
    { title: "Tandy's Fried Chicken", image: home5, action: "View Menu" },
    { title: "Wings World", image: home6, action: "View Menu" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-10 ">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center rounded-lg overflow-hidden transition-transform transform hover:scale-95 hover:transition-all"
          style={{ backgroundImage: `url(${item.image})`, paddingBottom: '60%' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
            <div className="text-center text-white">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <button className="px-4 py-2 bg-[#bd3333] text-white rounded-lg">
                {item.action}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSection;