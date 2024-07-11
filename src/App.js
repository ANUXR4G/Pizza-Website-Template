import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Home from './home'
import Aboutpage from './Components/aboutpage'
import Menupage from './Components/menupage'



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
