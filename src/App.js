import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Home from './home'
import Aboutpage from './Components/aboutpage'
import Menupage from './Components/menupage'
import Starter from './Components/starter'
import Pizza from './Components/pizza'
import Pasta from './Components/pasta'
import Drinks from './Components/drinks'
import Burger from './Components/burger'
import Wings from './Components/wings'
import Franchise from './Components/franchise'



const route = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about-us",
      element: <Aboutpage/>
    },
    {
      path: "/menu-section",
      element: <Menupage/>
    },
    {
      path: "/starter",
      element: <Starter/>
    },
    {
      path: "/pizza",
      element: <Pizza/>
    },
    {
      path: "/pasta",
      element: <Pasta/>
    },
    {
      path: "/drinks",
      element:<Drinks/>
    },
    {
      path:"/burger",
      element:<Burger/>
    },
    {
      path:"/wings",
      element:<Wings/>
    },
    {
      path:"/franchise",
      element:<Franchise/>
    }
    
  ]
}
])

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App;
