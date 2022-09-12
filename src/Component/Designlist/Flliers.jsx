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


import ScrollToTop from 'react-scroll-to-top';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Flliers = () => {

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
        {img:fly014},
        {img:fly015},
        {img:fly016},
        {img:fly017},
        {img:fly018},
        {img:fly019},
      
  ];

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
        <Typography>Product Code : #189320</Typography>
        <Link to="checkout"> <Buttons act={"Order me"} /> </Link>
        
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
           

      
       <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      style={{borderRadius:'90px', backgroundColor:'blue'}}
      color='white'
       />
         </div>
      
    </Container>
  );
};

export default Flliers;
