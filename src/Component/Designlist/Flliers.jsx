import { Grid, Typography, Container, Card } from "@mui/material";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";
import fly01 from '../Images/Flyers/fly1.jpg'
import fly02 from '../Images/Flyers/fly2.jpg'
import fly03 from '../Images/Flyers/fly3.jpg'
import fly04 from '../Images/Flyers/fly4.jpg'
import fly05 from '../Images/Flyers/fly5.jpg'
import fly06 from '../Images/Flyers/fly6.jpg'
import fly07 from '../Images/Flyers/fly7.jpg'
import fly08 from '../Images/Flyers/fly8.jpg'
import fly09 from '../Images/Flyers/fly9.jpg'
import fly010 from '../Images/Flyers/fly10.jpg'
import fly011 from '../Images/Flyers/fly11.jpg'
import fly012 from '../Images/Flyers/fly12.jpg'
import fly013 from '../Images/Flyers/fly13.jpg'
import fly014 from '../Images/Flyers/fly14.jpg'
import fly015 from '../Images/Flyers/fly15.jpg'
import fly016 from '../Images/Flyers/fly16.jpg'
import fly017 from '../Images/Flyers/fly17.jpg'
import fly018 from '../Images/Flyers/fly18.jpg'
import fly019 from '../Images/Flyers/fly19.jpg'
import Idkn from '../Images/Flyers/Idkn.jpeg'
import fli from '../Images/Flyers/fli.jpeg'


import ScrollToTop from 'react-scroll-to-top';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { useState } from "react";
import './flytest.css'
import Switch from 'react-switch'

const Flliers = () => {

  const fliers = [
        
        {img:fly02},
        {img:fly03},
        {img:fly04},
        {img:fly05},
        {img:fly06},
        {img:fly07},
        {img:fly08},
        {img:fly09},
        {img:fly010},
        {img:fly011},
        {img:fly012},
        {img:fly013},
        {img:fly014},
        {img:fly015},
        {img:fly016},
        {img:fly017},
        {img:fly018},
        {img:fly019},
        {img:Idkn},
        {img:fli},
      
  ];
  const [talk, setTalk] = useState(false)
  
  const getTheMoney = () => {
   setTalk(!talk);
  }

  return (
    < Container  className="convic">

      <div className="container-fluid">
      

        <Bounce top>
        <Typography
          sx={{
            fontWeight: 500,
            padding: 4,
            fontFamily: "Montserrat",
            color: "#01411c",
            textTransform:'uppercase'
          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          FLIERS
        </Typography>

        </Bounce>
        <Fade right>
         <Typography 
        sx={{backgroundColor:'#01411c', width:'110px',borderRadius:'10px', height:'8px', display:'block' , margin: '-30px auto 20px auto'}}
        
        display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
          
          >
           <span></span>

        </Typography>
        </Fade>
    

      <Fade right>
      <Grid Item>
        <Typography>Product Code : #017002YF</Typography>
       <Link to="checkout"> <Buttons act={"Order me"} /> </Link>
   {( talk &&
   <button style={{padding:'5px 8px', border:'none'}} onClick={getTheMoney}>Open me now</button>)}
        </Grid>

        </Fade>
         
          <div  className="row">

          {fliers.map((fly,index) => (
            
              <div  className='col-xl-6 col-lg-6 col-md-12 col-sm-12'  key={index} >

                 <Zoom>
                <Card elevation={20} sx={{ maxWidth: 350, margin:"60px",}}>
               
                 <img src={fly.img} height='auto' width='100%' alt="time on me" />
              </Card>
               </Zoom>
              
              </div>
          
       


          ))}
           </div>

           {talk && (
            <div style={{
                position:'fixed',
                top:0,
                bottom:0,
                right:0,
                left:0,
                width:"100vw",
                height:"100vh",

              }} className="commit">

              <div  style={{
                position:'fixed',
                top:0,
                bottom:0,
                right:0,
                left:0,
                width:"100vw",
                height:"100vh",
                backgroundColor:'rgba(99, 94, 94, 0.851)',
                padding:'30px'




              }}
              onClick={getTheMoney} className="vernow"></div>
              <div 
              style={{
                position:'absolute',
                  top:"40%",
                  left:"70%",
                  maxWidth:'400px',
                  minWidth:'300px',
                  padding:'20px 30px',
                  transform:'translate(-50%, -50%)',
                  lineHeight:'1.4',
                 color:'black',
                 backgroundColor:'white'

              }} className="therealshow">

                
        <Switch />
                <form className="form-containe">
                  <div className="filter-form">
                     <label className="form-label" >Backup</label>
                     <input type="text" />

                  </div>
                 

                </form>
                <h6>Seem new me</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea nihil reiciendis ullam aspernatur et cum dolorem autem, repellendus obcaecati recusandae aut? Asperiores recusandae nesciunt, quidem necessitatibus officiis sequi. Cum.</p>

                 <button className="verow" onClick={getTheMoney}>Close me</button>
              </div>
             
            </div>
           )}
           

      
      <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      style={{borderRadius:'90px', zIndex:"9999", marginBottom:'40px',  backgroundColor:'blue'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>Up</p>}
       />
         </div>
      
    </Container>
  );
};

export default Flliers;
