
import { Grid, Typography, Container, Card } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Buttons from "../Buttons";
import fly01 from '../Images/Branding/brand1.jpg'
import fly02 from '../Images/Branding/brand2.jpg'
import fly03 from '../Images/Branding/brand3.jpg'
import fly04 from '../Images/Branding/brand4.jpg'
import fly05 from '../Images/Branding/brand5.jpg'
import fly06 from '../Images/Branding/brand6.jpg'
import fly07 from '../Images/Branding/brand7.jpg'
import fly08 from '../Images/Branding/brand8.jpg'
import fly09 from '../Images/Branding/brand9.jpg'
import fly010 from '../Images/Branding/brand10.jpg'
import fly011 from '../Images/Branding/brand11.jpg'
import fly012 from '../Images/Branding/brand12.jpg'
import fly013 from '../Images/Branding/Vest.jpg'

import ScrollToTop from 'react-scroll-to-top';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import GoToTop from "../Gototop";

const Branding = ({design}) => {

  
  const fliers = [
        {img:fly01},
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

      
  ];
 
  return (
   < Container  className="convic" Container>


    <div className="container-fluid">
             <Grid Item>

        <Bounce top>
        <Typography
          sx={{
            fontWeight: 500,
            padding: 4,
            fontFamily: "Montserrat",
            color: "#01411c",
            textTransform:'uppercase',
               fontSize:'32px'
          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          Branding
        </Typography>

        </Bounce>
        <Fade top>
         <Typography 
        sx={{backgroundColor:'#01411c', width:'140px',borderRadius:'10px', height:'4px', display:'block' , margin: '-30px auto 20px auto'}}
        
        display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
          
          >
           <span></span>

        </Typography>
        </Fade>
      </Grid>

      

       <Fade bottom>
      <Grid Item>
        <Typography>Product Code : #017004BG</Typography>
        <Typography style={{fontWeight:'800' , fontSize:"35px" }}>Price: <span style={{color:'red', fontStyle:'italic'}}>N15,000</span></Typography>
      <NavLink to="checkout"> <Buttons act={"Order me"} /> </NavLink>
      
        </Grid>

        </Fade>

          <div className="row">

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

      </div>

       <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      style={{borderRadius:'90px', zIndex:"9999", marginBottom:'40px', backgroundColor:'blue'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>Up</p>}
       />
           <GoToTop/>
     </Container>
  )
}

export default Branding