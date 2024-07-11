import React,{useEffect} from 'react';
import img1 from '../Assets/starter1.jpeg';
import img2 from '../Assets/starter2.jpeg';
import img3 from '../Assets/starter3.jpeg';
import img4 from '../Assets/starter4.jpeg';
import img5 from '../Assets/starter5.jpeg';
import img6 from '../Assets/starter6.jpeg';
import img7 from '../Assets/starter7.jpeg';
import img8 from '../Assets/starter8.jpeg';



const trendingItems = [
  { name: 'Cheese Burst Pizza', price: 549, img: img1 },
  { name: 'Fresh Veggie Special Pizza', price: 325, img: img2 },
  { name: 'Margherita Pizza', price: 349, img: img3 },
  { name: 'Vegetarian Bite Pizza', price: 199, img: img4 },
  { name: 'Corn Special Pizza', price: 199, img: img5 },
  { name: 'Mushroom Riot Pizza', price: 299, img: img6 },
  { name: 'Mexican Delight Pizza', price: 299, img: img7 },
  { name: 'American Heat Pizza', price: 299, img: img8 },
];

const Pizza = () => {
  useEffect(()=>
    {
  window.scrollTo({
    top:0
  })
    },[])
  return (
    <div className="container mx-auto p-10 py-8">
      <h2 className="text-center text-red-600">Trending Items</h2>
      <h3 className="text-center text-black text-2xl font-bold mb-4">Pizza's</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingItems.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <p className="text-red-600 mb-2">₹ {item.price}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded">ADD</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
