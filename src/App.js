import {  Container, } from "@mui/material";
import { useEffect } from "react";
import "./App.css";
import AboutUs from "./Component/AboutUs/AboutUs";
import Appbar from "./Component/Appbar";
//import UIProvider from "./Component/Context/Context";
import Designs from "./Component/Designs/Designs";
import Promo from "./Component/Promo/Promo";
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import ContactUs from "./Component/ContactUs";
import Logos from "./Component/Designlist/Logos";
import Flliers from "./Component/Designlist/Flliers";
import Branding from "./Component/Designlist/Branding";
import Banner from "./Component/Designlist/Banner";
import Bookcover from "./Component/Designlist/Bookcover";
import Businesscard from "./Component/Designlist/Businesscard";
import Typographypage from "./Component/Designlist/Typography";
import Homie from "./Component/Homie";
import Weddingiv from "./Component/Designlist/Weddingiv";
import Birthday from "./Component/Designlist/Birthday";
import Mockup from "./Component/Designlist/Mockup";
import Checkout from "./Checkout";
//import Search from "./Component/Search/Search";

//import Navbar from './Component/Navbar';

//import Navigate from './Components/Navigate/Navigate';

function App({designs}) {
  useEffect(() => {
    document.title = "Heywey";
  }, []);
  return (

    <BrowserRouter>
      <div maxWidth="xl">
      <Appbar />
      <Routes>
          <Route exact path='/'  element={  <Homie />} />
        <Route  path='/promo'  element={<Promo />} />
        <Route  path='/designs'  element={ <Designs />} />
        <Route  path='/aboutus'  element={<AboutUs />} />
        <Route  path='/contactus'  element={<ContactUs />} />

        <Route  path='/flliers'  element={<Flliers  />} />
        <Route  path='/branding'  element={<Branding />} />
        <Route  path='/birthdays'  element={<Birthday  />} />
        <Route  path='/logos'  element={<Logos  />} />
        <Route  path='/banner'  element={<Banner  />} />
        <Route  path='/bookcover'  element={<Bookcover  />} />
        <Route  path='/businesscard'  element={<Businesscard  />} />
        <Route  path='/weddingiv'  element={<Weddingiv  />} />
        <Route  path='/mockup'  element={<Mockup  />} />
        <Route  path='/others'  element={<Typographypage  />} />
        
        

        <Route  path='/flliers/:topic'  element={<Checkout  />} />
        <Route  path='/branding/:topic'  element={<Checkout  />} />
        
        <Route  path='/birthdays/:topic'  element={<Checkout  />} />
        <Route  path='/logos/:topic'  element={<Checkout  />} />
        
        <Route  path='/banner/:topic'  element={<Checkout  />} />
        <Route  path='/bookcover/:topic'  element={<Checkout  />} />
        
        <Route  path='/businesscard/:topic'  element={<Checkout  />} />
        <Route  path='/weddingiv/:topic'  element={<Checkout  />} />
        
        <Route  path='/mockup/:topic'  element={<Checkout  />} />
        <Route  path='/others/:topic'  element={<Checkout  />} />
       
        
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
