import React from 'react'
import './Dummy.css'
import Slider from 'react-slick';
import {Typography} from '@mui/material'
import { ImQuotesLeft } from "react-icons/im";
import testi1 from '../Images/testi1.jpeg';
import testi2 from '../Images/testi2.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Dummy = () => {

 const dataa = [
  {image: 'https://res.cloudinary.com/dgaxfhbbc/image/upload/v1664268845/Heywhy/flyers/testi1_uflaz4.jpg', 
  name: 'TayoTayo', 
   text:"He's an incredible brand designer. His work ethics and ability to transform thoughts into creative design is top-notch and innovative. I give  the brand five star.                      " },



   {image: 'https://res.cloudinary.com/dgaxfhbbc/image/upload/v1664268844/Heywhy/flyers/testi2_ujbrxz.jpg', 
  name: 'Sunday Obaara', 
   text:"The dexterity of this brand can not be overemphasized. The concept they gives is always illustrative and communicates the idea of the project(s) " },


   {image: 'https://res.cloudinary.com/dgaxfhbbc/image/upload/v1664268764/Heywhy/flyers/foc_r0mrbp.jpg', 
  name: 'Focus', 
   text:" They are excellent at what they do. Very reliable and creative brand. Got my Company logo rebranded and my satisfaction was met. Heywhy will always be my choice." },


   {image: 'https://res.cloudinary.com/dgaxfhbbc/image/upload/v1664268845/Heywhy/flyers/testi1_uflaz4.jpg', 
  name: 'TayoTayo', 
   text:"He's an incredible brand designer. His work ethics and ability to transform thoughts into creative design is top-notch and innovative. I give  the brand five star." },



   {image: 'https://res.cloudinary.com/dgaxfhbbc/image/upload/v1664268844/Heywhy/flyers/testi2_ujbrxz.jpg', 
  name: 'Sunday Obaara', 
   text:"The dexterity of this brand can not be overemphasized. The concept they gives is always illustrative and communicates the idea of the project(s) " },
   

   {image: 'https://res.cloudinary.com/dgaxfhbbc/image/upload/v1664268764/Heywhy/flyers/foc_r0mrbp.jpg', 
  name: 'Focus', 
   text:" They are good at what they do. Very reliable and creative brand. Got my Company logo rebranded and my satisfaction was met. Heywhy will always be my choice." },

   
 ]

 var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
      arrows: true,
      autoplay: true,
      rows:1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },

        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
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


    const col = [
        'brown',
        'black',
        'yellow',
        'purple',
        'green',
         'rgb(3, 3, 64)',
         'white',
           'orange',
    ];

    const coloring = [
    'purple',
    'green',
    'orange',
    'rgb(3, 3, 64)',
    'black',
    'brown',
    'orange',
       'rgb(3, 3, 64)',
    'green',
  
    'brown',
      'purple',
      'orange',
       'black',
  ];

  return (
  
    <div id='testimonial' className='container-fluid testimonial-section'>

     <div className="techstack-title">
      <h4 style={{textAlign:'center'}}>Testimonials</h4>
     </div>
      <Fade>
        <Typography 
        sx={{backgroundColor:'#01411c', width:'70px',borderRadius:'10px', height:'2px', display:'block' , margin: '-5px auto 0 auto'}}
        
        display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
          
          >
           <span></span>

        </Typography>
        </Fade>


     <div className="slider-section">
        <Slider {...settings}>
      {dataa.map((dats,index) => (
       <div className="slider-main" key={index}>
          <Zoom>
        <div style={{backgroundColor: coloring[index], paddingTop:'60px', paddingBottom:'40px', width:'auto', height:'auto' }} className="slider-page">
         <ImQuotesLeft  size={30} />
         <p style={{marginBottom:'50px', marginTop:'10px', color:'white' }}>{dats.text}</p>
       
       <div className='img-name'>

          <img src={dats.image} alt="More on" className='slider-image' />
          <h5 style={{marginTop:'10px', }}>{dats.name}</h5>
       </div>
    
         
        </div>
           </Zoom>
       </div>
      ))}
      </Slider>
     </div>



    </div>
 
  )
}

export default Dummy