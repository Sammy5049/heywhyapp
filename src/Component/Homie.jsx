import React from 'react'
import './Homie.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from 'react-scroll-to-top';



import Typewriter from "typewriter-effect";
import {   Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import show3 from './Images/HOMEPAGE1.jpg'

import show2 from './Images/HOMEPAGE2.jpg'

import show1 from './Images/HOMEPAGE3.jpg'

import show from './Images/heywhy.jpg'

import mobileback from './Images/mobileback.jpeg'

import backmob from './Images/backmob.jpeg'

import bmob from './Images/bmob.jpeg'
import lastt from './Images/lastt.jpeg'


import {  keyframes } from "@mui/system";

import h from "./Images/hey.png";
import Choose from './Choose/Choose';
import Services from './Choose/services/Services';

const Homie = () => {

 const theme = useTheme();
 const match = useMediaQuery(theme.breakpoints.down("md"));



 const dataa = [
  {image: show},
  {image: show1 },
  {image: show2 },
  {image: lastt},
 
 ]

 const datass = [
  {image:mobileback },
  {image:bmob },
  {image:backmob },
  {image:lastt}
 ]

 var settings = {
      dots: false,
      infinite: true,
      fade: true,
      adaptiveHeight: true,
      speed: 8000,
      slidesToShow: 1,
      initialSlide: 0,
      autoplay: true,
      rows:1,
      arrows: false ,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

     const spin = keyframes`   from {     transform: rotate(0deg);   }   to {     transform: rotate(360deg);   } `;

  return (
    <div className='container-fluid'>
      
      {match ? (
          <Grid  className="slider-section">
        <Slider {...settings}>
      {datass.map((dats,index) => (
       <div className="slider-main" key={index}>
        <div  style={{    backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) , url('${dats.image}')` , backgroundSize:'cover', backgroundPosition:'center',  }} className="slider-pag">


          <div className="container">
            <div className="row">

            </div>
          </div>
       

          <Grid
        item
        sm={12}
        md={12}
        sx={{
         
          [theme.breakpoints.down("md")]: {
            mt: "5rem",
            justifyCOntent: "center",
            alignItem: "center",
          },
           [theme.breakpoints.down("sm")]: {
            
           mt:'15rem'
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.down("md")]: {
              width: "350px",
              border: "5px solid white",
            },
             [theme.breakpoints.down("sm")]: {
              width: "200px",
              border: "5px solid white",
            },
            animation: `${spin} 3s infinite ease`,
            width: "300px",
            border: "3px solid white",
            background: "gray",
            display: { md: "none", sm:"flex", justifyContent:'center', marginRight:'auto', marginLeft:'auto' },
          }}
        >
          <img  src={h} width={"100%"} alt="bird" />
        </Box>
      </Grid>
      
       <Grid
        item
        sm={12}
        md={12}
        sx={{
         

          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: { mr: "auto", padding: "10px" },
          [theme.breakpoints.down("md")]: {
            mt: "4rem",
            
            justifyCOntent: "center",
            alignItem: "center",
            
          },
        }}
      >
              <Typography variant="h3" 
        
        sx={{fontWeight: 700,
          color: "white",
        [theme.breakpoints.down("md")]: {
            
           
            fontSize: "5rem",
            justifyCOntent: "center",
            alignItem: "center",
          },

          [theme.breakpoints.down("sm")]: {
            
           
            fontSize: "3rem",
            justifyCOntent: "center",
            alignItem: "center",
          },
            fontSize: "5rem", textTransform: "uppercase",}}>
       
           <Typewriter
            options={{
              strings: ["Explore", "the world", "of", "beautiful designs!"],
              autoStart: true,
              loop: true,
            }}
          />
        
         
        </Typography>
      </Grid>


         
        </div>
       </div>
      ))}
      </Slider>
     </Grid>
      ) : (
        <Grid  className="slider-section">
        <Slider {...settings}>
      {dataa.map((dats,index) => (
       <div className="slider-main" key={index}>
        <div  style={{    backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) , url('${dats.image}')` , [theme.breakpoints.down("up")]: {
            
           
        
          }, backgroundSize:'cover', backgroundPosition:'center',  }} className="slider-page">
       

          <Grid
        item
        sm={12}
        sx={{
          maxWidth: 420,

          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: {
            mt: "15rem",
            mr: "auto",
            padding: "10px",
          },
          [theme.breakpoints.down("md")]: {
            mt: "5rem",
            justifyCOntent: "center",
            alignItem: "center",
          },
           [theme.breakpoints.down("sm")]: {
            
           mt:'15rem'
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.down("md")]: {
              width: "350px",
              border: "5px solid white",
            },
             [theme.breakpoints.down("sm")]: {
              width: "200px",
              border: "5px solid white",
            },
            animation: `${spin} 3s infinite ease`,
            width: "500px",
            border: "3px solid white",
            background: "gray",
            display: { md: "none", sm:"flex", justifyContent:'center' },
          }}
        >
          <img  src={h} width={"100%"} alt="bird" />
        </Box>
      </Grid>
      
       <Grid
        item
        sm={12}
        md={6}
        sx={{
          maxWidth: 420,

          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: { mr: "auto", padding: "10px" },
          [theme.breakpoints.down("md")]: {
            mt: "4rem",
            ml:'-40px',
            justifyCOntent: "center",
            alignItem: "center",
            
          },
        }}
      >
              <Typography variant="h3" 
        
        sx={{fontWeight: 700,
          color: "white",
        [theme.breakpoints.down("md")]: {
            
           
            fontSize: "5rem",
            justifyCOntent: "center",
            alignItem: "center",
          },

          [theme.breakpoints.down("sm")]: {
            
           
            fontSize: "3rem",
            justifyCOntent: "center",
            alignItem: "center",
          },
            fontSize: "5rem", textTransform: "uppercase",}}>
       
           <Typewriter
            options={{
              strings: ["Explore", "the world", "of", "beautiful designs!"],
              autoStart: true,
              loop: true,
            }}
          />
        
         
        </Typography>
      </Grid>


         
        </div>
       </div>
      ))}
      </Slider>
     </Grid>
      ) }

    

     



     <Choose />
     <Services />
     
    <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      
      style={{borderRadius:'90px', zIndex:"9999", marginBottom:'40px', backgroundColor:'#01411c'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>Up</p>}
       />


    </div>
  )
}

export default Homie