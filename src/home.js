import React from 'react'
import Herosection from './Components/herosection';
import MenuSection from './Components/menusection';
import Homeabout from './Components/homeabout';
import Ourstory from './Components/ourstory';
import Parallaxsection from './Components/parallexsection';

function Home() {
  return (
    <div>
      <Herosection/>
      <MenuSection/>
      <Homeabout/>
      <Ourstory/>
      <Parallaxsection/>
    </div>
  )
}

export default Home;
