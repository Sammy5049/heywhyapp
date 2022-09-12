import {  Grid, Typography, useTheme } from "@mui/material";
//import Book7 from './Images/Book7.jpg'
import heywhy from "./Images/heywhy.jpg";
import h from "./Images/hey.png";
import Typewriter from "typewriter-effect";
import { Box, keyframes } from "@mui/system";




const Homenew = () => {

  const spin = keyframes`   from {     transform: rotate(0deg);   }   to {     transform: rotate(360deg);   } `;
 const theme = useTheme();
  return (
    
     <div className="container-fluid home-sec">
        <Grid
        item
        sm={12}
        sx={{
          maxWidth: 420,

          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: {
            mt: "20rem",
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
            mt: "2rem",
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

    
  )
}

export default Homenew