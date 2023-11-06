import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import User from './components/User/User';
import Productdetails from './components/Product/Productdetails';
import Userdetails from './components/User/Userdetails';
import Signin from './components/Signin/Signin';
import Privateroute from './components/Auth/Privateroute';


const userheading ="User";
const productheading ="Product";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

         <Route path="/" element={<Home />} />
         <Route path="/signin" element={<Signin />} />

         <Route path="/about" element={ <Privateroute Component = {About}/>} />

      


         <Route path="/product" element={<Product productheading = {productheading}  />}   />
         <Route path="/user" element={<User userheading = {userheading} />} />
         <Route path="/product/:id" element={<Productdetails/>}/>
         <Route path="/user/:id" element={<Userdetails/ >}/>
         

    </Route>
    
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
