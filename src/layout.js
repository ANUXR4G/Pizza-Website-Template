import React from 'react'
import Navbar from './Components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/footer';

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout;
