import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import show2 from './Images/Banners/banner002.jpg'

import show1 from './Images/Banners/banner01.jpg'

import show from './Images/heywhy.jpg'
import './Hometext.css'

const Hometest = () => {

 const home = [
  {image:show},
  {image:show1},
  {image:show2},

 ];

  const dataa = [
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'Adeola', 
  position:'Tech Engineer',
   text:'Lorem ipsum dolor sit amet consectetur  Voluptatem quae culpa aspernatur animi dolorum libera vero atque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Bisi',
    position:'Tech Engineer', 
    text:'libero eligendi a vero atque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'Moses',
   position:'Tech Engineer', 
   text:'Voluptatem quae culpa aspernatur animi dolorum libero eligendi a vero atque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Aina',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Cole',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Bimpe',
   position:'Tech Engineer', text:'Lorem adipisicing elit. Voluptatem quae culpa tque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'James',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Banjo',
   position:'Tech Engineer',
   text:' consectetur adipisicing elit. Voluptatem quae culpa aspernatur animi dolorum libero eligendi !' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'Clement',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet m libero eligendi a vero atque molestias!' },
 ];

 
 var settingss = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      initialSlide: 1,
      autoplay: true,
      rows:1,
      responsive: [
        {
          breakpoint: 1324,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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


  return (
    <div className='container-fluid'>
       


       <div className="slider-section">
        <Slider {...settingss}>
      {home.map((homes,index) => (
       <div className="slider-main" key={index}>
        <div style={{  backgroundImage: `url('${homes.image}')`, backgroundSize:'cover', backgroundPosition:'center', objectFit:'contain' }} className="slider-page">
       

         
        </div>
       </div>
      ))}
      </Slider>
     </div>
     
    </div>
  )
}

export default Hometest