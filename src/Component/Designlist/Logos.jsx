import { Grid, Typography, Container, Card,useTheme } from "@mui/material";
import { Link ,NavLink } from "react-router-dom";
import Buttons from "../Buttons";
import fly01 from '../Images/Logo/logo01.jpg'
import fly02 from '../Images/Logo/logo02.jpg'
import logo2121 from '../Images/Logo/logo2121.jpeg'
import { useState } from "react";


import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import ScrollToTop from 'react-scroll-to-top';
import Zoom from 'react-reveal/Zoom';
import GoToTop from "../Gototop";


const Logos = () => {
  
 const theme = useTheme();

  const fliers = [
        {img:fly01},
        {img:fly02},
        {img:logo2121},
      
  ];

  const [micro, setMicro] = useState(false);
  return (
    <Container  className="convic" Container>
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
               fontSize:'32px',
               
               [theme.breakpoints.down('sm')]:{fontSize:'24px'}

          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          Logo Designs
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
        <Typography>Product Code : #017001DL</Typography>
        <Typography style={{fontWeight:'800' , fontSize:"35px" }}>Price: <span style={{color:'red', fontStyle:'italic'}}>N10,000</span></Typography>
      <NavLink to="checkout"> <Buttons act={"Order me"} /> </NavLink>
        </Grid>

        </Fade>

        <div  onMouseEnter={() => setMicro(true)}  onMouseLeave={() => setMicro(false)}className="container">
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
      style={{borderRadius:'90px', zIndex:"9999", marginBottom:'40px',  backgroundColor:'blue'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>UP</p>}
       />
      </div>

            <GoToTop/>
    </Container>
  );
};

export default Logos;
