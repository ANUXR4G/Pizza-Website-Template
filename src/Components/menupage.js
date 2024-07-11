import React from 'react';
import home1 from '../Assets/home-box1.png';
import home2 from '../Assets/home-box2.png';
import home3 from '../Assets/home-box3.png';
import home4 from '../Assets/home-box4.png';
import home5 from '../Assets/home-box5.png';
import home6 from '../Assets/home-box6.png';
import { Link } from 'react-router-dom';

const Menupage = () => {
  return (
    <div className="container mx-auto p-10 py-8">
    <h2 className="text-center text-red-600">Trending Items</h2>
    <h3 className="text-center text-black text-2xl font-bold mb-4">Menu</h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-10 ">
      {/* Menu Item 1 */}
      <div className="relative bg-cover bg-center rounded-lg overflow-hidden transition-transform transform hover:scale-95 hover:transition-all"
        style={{ backgroundImage: `url(${home1})`, paddingBottom: '60%' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
          <div className="text-center text-white">
            <h2 className="text-xl font-bold mb-2">Starter</h2>
            <Link to="/starter"> <button className="px-4 py-2 bg-[#bd3333] text-white rounded-lg">
              Order Now
            </button></Link>
          </div>
        </div>
      </div>
      

      {/* Menu Item 2 */}
      <div className="relative bg-cover bg-center rounded-lg overflow-hidden transition-transform transform hover:scale-95 hover:transition-all"
        style={{ backgroundImage: `url(${home2})`, paddingBottom: '60%' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
          <div className="text-center text-white">
            <h2 className="text-xl font-bold mb-2">Pizza</h2>
            <Link to="/pizza"> <button className="px-4 py-2 bg-[#bd3333] text-white rounded-lg">
              Order Now
            </button></Link>
          </div>
        </div>
      </div>

      {/* Menu Item 3 */}
      <div className="relative bg-cover bg-center rounded-lg overflow-hidden transition-transform transform hover:scale-95 hover:transition-all"
        style={{ backgroundImage: `url(${home3})`, paddingBottom: '60%' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
          <div className="text-center text-white">
            <h2 className="text-xl font-bold mb-2">Pasta</h2>
            <Link to="/pasta"> <button className="px-4 py-2 bg-[#bd3333] text-white rounded-lg">
              Order Now
            </button></Link>
          </div>
        </div>
      </div>

      {/* Menu Item 4 */}
      <div className="relative bg-cover bg-center rounded-lg overflow-hidden transition-transform transform hover:scale-95 hover:transition-all"
        style={{ backgroundImage: `url(${home4})`, paddingBottom: '60%' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
          <div className="text-center text-white">
            <h2 className="text-xl font-bold mb-2">Cafe Casa Blanca</h2>
            <Link to="/drinks"><button className="px-4 py-2 bg-[#bd3333] text-white rounded-lg">
              View Menu
            </button></Link>
          </div>
        </div>
      </div>

      {/* Menu Item 5 */}
      <div className="relative bg-cover bg-center rounded-lg overflow-hidden transition-transform transform hover:scale-95 hover:transition-all"
        style={{ backgroundImage: `url(${home5})`, paddingBottom: '60%' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
          <div className="text-center text-white">
            <h2 className="text-xl font-bold mb-2">Tandy's Fried Chicken</h2>
            <Link to="/burger"><button className="px-4 py-2 bg-[#bd3333] text-white rounded-lg">
              View Menu
            </button></Link>
          </div>
        </div>
      </div>

      {/* Menu Item 6 */}
      <div className="relative bg-cover bg-center rounded-lg overflow-hidden transition-transform transform hover:scale-95 hover:transition-all"
        style={{ backgroundImage: `url(${home6})`, paddingBottom: '60%' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
          <div className="text-center text-white">
            <h2 className="text-xl font-bold mb-2">Wings World</h2>
            <Link to="/wings"><button className="px-4 py-2 bg-[#bd3333] text-white rounded-lg">
              View Menu
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menupage;
