import React from 'react'
import './Homie.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Typewriter from "typewriter-effect";
import {   Box, Grid, Typography, useTheme } from "@mui/material";

import show3 from './Images/HOMEPAGE1.jpg'

import show2 from './Images/HOMEPAGE2.jpg'

import show1 from './Images/HOMEPAGE3.jpg'

import show from './Images/heywhy.jpg'


import {  keyframes } from "@mui/system";

import h from "./Images/hey.png";

const Homie = () => {

 const theme = useTheme();

  const home = [
  {image:show},
  {image:show1},
  {image:show2},
  {image:show3},

 ];

 const dataa = [
  {image: show, 
  name: 'Adeola', 
  position:'Tech Engineer',
   text:'Lorem ipsum dolor sit amet consectetur  Voluptatem quae culpa aspernatur animi dolorum libera vero atque molestias!' },
  {image: show1,
   name: 'Bisi',
    position:'Tech Engineer', 
    text:'libero eligendi a vero atque molestias!' },
  {image: show2, 
  name: 'Moses',
   position:'Tech Engineer', 
   text:'Voluptatem quae culpa aspernatur animi dolorum libero eligendi a vero atque molestias!' },
  {image: show3,
   name: 'Aina',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
 
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
      

    

     <Grid  className="slider-section">
        <Slider {...settings}>
      {dataa.map((dats,index) => (
       <div className="slider-main" key={index}>
        <div  style={{  backgroundImage: `url('${dats.image}')`, [theme.breakpoints.down("up")]: {
            
           
        
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
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.down("md")]: {
              width: "350px",
              border: "5px solid white",
            },
            animation: `${spin} 3s infinite ease`,
            width: "500px",
            border: "3px solid white",
            background: "gray",
            display: { md: "none" },
          }}
        >
          <img  src={h} width={"100%"} alt="bird" />
        </Box>
      </Grid>
      
       <Grid
        item
        sm={6}
        md={6}
        sx={{
          maxWidth: 420,

          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: { mr: "auto", padding: "10px" },
          [theme.breakpoints.down("md")]: {
            mt: "5rem",
            ml:'-50px',
            justifyCOntent: "center",
            alignItem: "center",
          },
        }}
      >
              <Typography variant="h3" 
        
        sx={{fontWeight: 500,
          color: "white",
        [theme.breakpoints.down("md")]: {
            
           
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



    </div>
  )
}

export default Homie