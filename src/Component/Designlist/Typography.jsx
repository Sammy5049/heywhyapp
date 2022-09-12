
import { Grid, Typography, Container, Card } from "@mui/material";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";
import fly01 from '../Images/Manipulations/man.jpg'



import ScrollToTop from 'react-scroll-to-top';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Typographypage = () => {

  
  const fliers = [
        {img:fly01},
        
      
  ];
 
  return (
   < Container  className="convic" >

    <div className="container-fluid">
       <Grid Item>

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
         Other Designs
        </Typography>

        </Bounce>
        <Fade right>
         <Typography 
        sx={{backgroundColor:'#01411c', width:'180px',borderRadius:'10px', height:'8px', display:'block' , margin: '-30px auto 20px auto'}}
        
        display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
          
          >
           <span></span>

        </Typography>
        </Fade>
      </Grid>

       <Fade right>
      <Grid Item>
        <Typography>Product Code : #189320</Typography>
        <Link to="checkout"> <Buttons act={"Order me"} /> </Link>
        
        </Grid>

        </Fade>

        <div className="container">
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
      style={{borderRadius:'90px', backgroundColor:'blue'}}
      color='white'
       />

       </div>
           
     </Container>
  )
}

export default Typographypage