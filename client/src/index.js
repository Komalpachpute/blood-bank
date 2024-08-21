import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { Nav } from './Component/Navbar/Navbar.js';
import ControlledCarousel from './Component/Carousel/Carousel.js';
import Card from './Component/Cards/Card.js';
import About from './View/About/About.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import  Home  from './View/Home/Home.js';
import  Contact from './View/Contact/Contact.js';
import Bloodable from './View/Bloodable.js';

import Footer from './Component/Footer/Footer.js';
import Donar from './View/Donar Camp/Donar.js';
import Requestpage from './View/Service/requestpage.js';
import { Getrequest } from './View/Service/Getrequest.js';
// import Admin from './View/Admin/Admin.js';

  const routes=createBrowserRouter([
 {
  path:'/',
      element:<Home/>
   },
    
  // {/* <Card/> */}
  
    
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/Bloodable',
       element:<Bloodable/>
    },
    {
     path:'/Requestpage',
      element:<Requestpage/>
    },
    {
      path:'/Footer',
       element:<Footer/>
     },
     {
      path:'/Donar',
       element:<Donar/>
     },
     {
      path:'/Contact',
       element:<Contact/>
     },
     {
      path:'/getrequest',
      element :<Getrequest/>
     }


  ])
  
  
  
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={routes} />
   );
  




  


