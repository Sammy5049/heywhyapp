import {React} from "react";
import './Footer.css';
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import {Link, NavLink} from 'react-router-dom'
import stock from '../Images/stock.jpg'

const Footie = () => {

 
 const theme = useTheme();
 const match = useMediaQuery(theme.breakpoints.down("sm"))
 
  return (
    <Paper
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
       backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) , url('${stock}')`,
       backgroundPosition:'center',
       backgroundSize:'cover',
        paddingTop: "80px",
        paddingBottom:'50px',
        borderRadius: "0",
      }}
      elevation={3}
    >
     <div className="container">
      <div className="row">

     {match ? (
       <div className="container">
      
         <div className="row">
          <div style={{marginTop:'-50px'}} className="title-why-cover">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              
                className="contact"
              >
                <h3 style={{ textAlign: "left", color: "white" }}>
                  CONTACT INFO.
                </h3>
                <p style={{ textAlign: "left" }}>+2348136326188</p>
                <p style={{ textAlign: "left" }}>othniel4christ@gmail.com</p>
              </div>
            </div>
         </div>
         <div className="row">
          <div style={{marginTop:'-150px'}} className="title-why-cover">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
                className="contact"
              >
                <h3 style={{ textAlign: "left", color: "white" }}>
                 HEYWHY
                </h3>
              

                 <NavLink to='/aboutus'><p style={{ textAlign: "left", fontStyle:'italic' }}>About us</p></NavLink>
                <NavLink to='/terms'><p style={{ textAlign: "left", fontStyle:'italic' }}>Terms and Conditions</p></NavLink>
               
                
                
              </div>
            </div>
         </div>
         <div style={{marginTop:'-150px'}} className="row">
          <div className="title-why-cover">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
                className="contact"
              >
                <h3 style={{ textAlign: "left", color: "white" }}>
                  SERVICES
                </h3>
                <p style={{ textAlign: "left" }}>Flyers</p>
                <p style={{ textAlign: "left" }}>Banners</p>
                <p style={{ textAlign: "left" }}>Branding</p>
                <p style={{ textAlign: "left" }}>Mock-ups</p>
                <p style={{ textAlign: "left" }}>Logo Design</p>
                <p style={{ textAlign: "left" }}>Videography</p>
                <p style={{ textAlign: "left" }}>Photo Manipulation</p>
              </div>
            </div>
         </div>
         
            

             

            
            
          
        </div>
  
     ) : (
       <div className="container">
        <div className="row foot">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="title-why-cover">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
                id='toppy'
                className="contact"
              >
                <h3 style={{ textAlign: "left", color: "white" }}>
                  CONTACT INFO.
                </h3>
                <p style={{ textAlign: "left" }}>+2348136326188</p>
                <p style={{ textAlign: "left" }}>othniel4christ@gmail.com</p>
              </div>
            </div>
          </div>

           <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="title-why-cover">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
                className="contact"
              >
                <h3 style={{ textAlign: "left", color: "white" }}>
                 HEYWHY
                </h3>
                <div className="links">

                 <NavLink to='/aboutus'><p style={{ textAlign: "left", fontStyle:'italic' }}>About us</p></NavLink>
                <NavLink to='/terms'><p style={{ textAlign: "left", fontStyle:'italic' }}>Terms and Conditions</p></NavLink>
                </div>
              </div>
            </div>
          </div>

           <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="title-why-cover">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
                className="contact"
              >
                <h3 style={{ textAlign: "left", color: "white" }}>
                  SERVICES
                </h3>
                <p style={{ textAlign: "left" }}>Flyers</p>
                <p style={{ textAlign: "left" }}>Banners</p>
                <p style={{ textAlign: "left" }}>Branding</p>
                <p style={{ textAlign: "left" }}>Mock-ups</p>
                <p style={{ textAlign: "left" }}>Logo Design</p>
                <p style={{ textAlign: "left" }}>Videography</p>
                <p style={{ textAlign: "left" }}>Photo Manipulation</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>)}
      </div>

     </div>

     <footer className="rowland">
       <span></span>
       <p>&copy;2022 All RIGTHS RESERVED</p>
   </footer>

     
    </Paper>
  );
};

export default Footie;
