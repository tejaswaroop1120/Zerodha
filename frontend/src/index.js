import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/Homepage.js';
import reportWebVitals from './reportWebVitals';
import SignUp from './landing_page/signup/SignUp.js';
import AboutPage from './landing_page/about/AboutPage.js';
import ProductsPage from "./landing_page/products/ProductsPage.js";
import PricingPage from "./landing_page/pricing/PricingPage.js";
import SupportPage from './landing_page/support/SupportPage.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import Notfound from './landing_page/Notfound.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} ></Route>
      <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      <Route path='/about' element={<AboutPage></AboutPage>} ></Route>
      <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
      <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
      <Route path='/support' element={<SupportPage></SupportPage>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
