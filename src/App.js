import React from 'react'
import './styles/App.css';
//  import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Flight from './pages/Flight.js';
import Train from './pages/Train.js';
import Stay from './pages/Stays.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Checkout from './pages/Checkout.js';
import Layout from './components/Layout.js';
import Footer from './components/Footer.js';


const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Flight />,
  //     children:[
  //       {
  //         path: "/login",
  //         element: <Login />
  //       },
  //       {
  //         path:'/train',
  //         element:<Train/>
  //       },
  //       {
  //         path:'/register',
  //         element:<Register/>
  //       },
  //       {
  //         path:'/checkout',
  //         element:<Checkout/>
  //       },
  //       {
  //         path:'/stay',
  //         element:<Stay/>
  //       },
  //       {
  //         path:'/flight',
  //         element:<Flight/>
  //       }
  //     ]
  //   }

  // ,
  // {
  //   path: "/items/:id",
  //   element: <Products />
  // }
  // ]);



  return (
    // <div id="main">
    //   <RouterProvider router={router}></RouterProvider>
    //   </div>
    <div id='main' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }} className='availability'>
      <BrowserRouter>
        <Layout></Layout>
        <Routes>
          <Route path='/' element={<Flight></Flight>}></Route>
          <Route path='/flight' element={<Flight></Flight>}></Route>
          <Route path='/train' element={<Train></Train>}></Route>
          <Route path='/stay' element={<Stay></Stay>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          {/* <Route path='/' element={<Register></Register>}></Route> */}
          {/* <Route path='/' element={<Checkout></Checkout>}></Route> */}
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  )
}


export default App;
