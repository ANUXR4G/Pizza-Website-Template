import React from 'react';
import img1 from '../Assets/starter1.jpeg';

const trendingItems = [
  { name: 'Cheese Burst Pizza', price: 549, img: img1 },
  { name: 'Fresh Veggie Special Pizza', price: 325, img: 'path_to_fresh_veggie_pizza_image' },
  { name: 'Margherita Pizza', price: 349, img: 'path_to_margherita_pizza_image' },
  { name: 'Vegetarian Bite Pizza', price: 199, img: 'path_to_vegetarian_bite_pizza_image' },
  { name: 'Corn Special Pizza', price: 199, img: 'path_to_corn_special_pizza_image' },
  { name: 'Mushroom Riot Pizza', price: 299, img: 'path_to_mushroom_riot_pizza_image' },
  { name: 'Mexican Delight Pizza', price: 299, img: 'path_to_mexican_delight_pizza_image' },
  { name: 'American Heat Pizza', price: 299, img: 'path_to_american_heat_pizza_image' },
];

const Starter = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-red-600">Discounted Items</h2>
      <h3 className="text-center text-black text-2xl font-bold mb-4">Trending Items</h3>
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

export default Starter;
