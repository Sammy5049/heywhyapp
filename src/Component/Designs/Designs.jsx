import {
 
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import logoo from '../Images/Pictures/logoo.jpg'
import GoEagles from '../Images/Flyers/fly10.jpg'
import buzcard from "../Images/Business Cards/buzcard.jpg";
import Vest from '../Images/Branding/Vest.jpg'
import banner01 from '../Images/Banners/banner01.jpg'
import birt from '../Images/Birthdays/birt.jpg'
import others from '../Images/Pictures/others.jpg'
import bookevent from '../Images/Book covers/cover2.jpg'
import Mockup from '../Images/Pictures/Mockup.jpg'
import weddingiv from '../Images/Wedding IV/weddingiv.jpeg'
import { Link,NavLink } from "react-router-dom";
import './Designs.css'
import { useState } from "react";

import ScrollToTop from 'react-scroll-to-top';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from  'react-reveal/Bounce';
import GoToTop from "../Gototop";

 



const Designs = () => {

  const [view, setView] = useState(false);

  const dezign = [
    {name:'Logo Design', image:logoo, link:'/logos' },
    {name:"Flyer Design", image:GoEagles, link:'/flliers'},
    {name:'Business Card', image:buzcard, link:'/businesscard'},
      {name:'Branding', image:Vest, link:'/branding' },
    {name:"Banner Design", image:banner01, link:'/banner'},
    {name:'Birthday Design', image:birt, link:'/birthdays'},
      {name:'Others', image:others, link:'/others' },
    {name:"Book Cover", image:bookevent, link:'/bookcover'},
    {name:'Mockup Design', image:Mockup, link:'/mockup'},
        {name:'Wedding IV', image:weddingiv, link:'/weddingiv'},

  ];

   const colors = [
  "#3a4450",
  '#349141',
  '#252b2b',
  '#007f76',

  '#ff6600',

  '#0091bd',

  '#227cbc',

  '#ff6600',

  '#edc832',

  '#01211c',


 
 ]

 
  return (
    <Container   className="convic" id="designs">
      <div className="container-fluid conco">
       
<Bounce top >
             <Typography
          sx={{
            fontWeight: 500,
            padding: 4,
            fontFamily: "Montserrat",
            color: "#01411c",
          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          DESIGNS
        </Typography>
        </Bounce>
        <Fade left>

         <Typography 
        sx={{backgroundColor:'#01411c', width:'110px',borderRadius:'10px', height:'8px', display:'block' , margin: '-30px auto 50px auto'}}
        
        display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
          
          >
           <span></span>

        </Typography>

        </Fade>



         <div className="row">
      
      <Grid
        
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent={"center"}
        sx={{mb:'80px' }}
        
      >
      
          

              {dezign && dezign.map((dezign,index)=> (

                  
             <Grid key={index}  item>
             <NavLink
              ovelay
              to={dezign.link}
              textColor="inherit"
              underline="none"
              fontWeight="md"
              
            >
              <Zoom >
              <Card onMouseEnter={() => setView(true)}
        onMouseLeave={() => setView(false) }  elevation={20} sx={{borderRadius:'10px', border:`4px solid ${colors[index]}`, width: 200, background: colors[index] }}>
                <CardActionArea>
                  <CardMedia
                  className="card-media"
                  
                    component="img"
                    height="160"
                    src={dezign.image}
                    alt="green iguana"
                  />
                  <CardContent sx={{alignItems:''}}>
                    <Typography className="my-hover-test" sx={{color:'white', fontWeight: 700, fontSize:'18px', textAlign:'center'}} gutterBottom variant="h5" component="h1">
                      {dezign.name}
                     
                    </Typography>

                      <Typography className={view ? 'no-view view-view': 'view-view'}>

                      <button className="me-down">Click for more</button>
                      
                     
                      </Typography>
                    



                   


                  

                    
                  </CardContent>
                </CardActionArea>
              </Card>
              </Zoom>
              
            </NavLink>
            </Grid>
              ))}

     

      </Grid>

        </div>


      </div>
     
        <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      style={{borderRadius:'90px',
      zIndex:"9999", marginBottom:'40px', 
      backgroundColor:'#01411c'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>Up</p>}
       />

     <GoToTop/>

    </Container>
  );
};

export default Designs;
