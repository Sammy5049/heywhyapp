import React from 'react'

import {BottomNavigation,Paper, BottomNavigationAction } from '@mui/material'

import { Link } from "react-router-dom";

const Footer = () => {
  return (
      
       <div sx={{ bottom: 20, color:'white',  backgroundColor:'black' ,left: 0, right: 0 }} className="container">

       <div className="row ">
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
         <div className="contact">
        <p>CONTACT INFO.</p>
        <p>+2348136326188</p>
        <p>othniel4christ@gmail.com</p>
         </div>
        </div>
         <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
             <h3>SERVICES</h3>
        <p>Flyers</p>
        <p>Banners</p>
        <p>Branding</p>
        <p>Mock-ups</p>
        <p>Logo Design</p>
        <p>Photo Manipulation</p>
        <p>Videography</p>
        </div>
         <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
          <h3>HEYWHY</h3>
        <p>about us</p>
        <p>terms and conditions</p>
        </div>
       </div>
       </div>


  
  )
}

export default Footer