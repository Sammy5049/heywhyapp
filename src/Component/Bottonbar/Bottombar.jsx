
import {BottomNavigation,Paper, BottomNavigationAction } from '@mui/material'
import {FcHome , FcAbout} from 'react-icons/fc';
import {AiFillHome} from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import React from "react";
import Drawal from "../Drawal";
import Search from "../Search/Search";
import "./BottomBar.css";
import { Link } from "react-router-dom";

const Bottombar = () => {
  return (

   <>
   <AppBar position="fixed" sx={{ background: "white" }}>
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
          }}
        >
          <Drawal />

          <div className="logo-name">
          <a href="/">
            <IconButton className="logo-icon">
              <ViewCarouselIcon />
            </IconButton>

          </a>
            <div className="logo">
            <a href='/'> <h3> HEYWHY</h3> </a>
            
            </div>


          </div>
         

          <Search />
        </Toolbar>
      </Container>
    </AppBar>

   <Paper sx={{ position: 'fixed',  bottom: 0, left: 0, right: 0  ,zIndex:'999'}} elevation={3}>

    <BottomNavigation
    
  showLabels
  sx={{fontSize:"35px" , display:'flex', background:'#1b1b1b', justifyContent:'space-around',alignItems:'center',padding:'20px', paddingTop:'25px', fontFamily:'monserat', fontWeight:700}}
 
>
 <a href='/'> 
  <BottomNavigationAction className='bottom-nav-item'  label="Home" icon={<AiFillHome color='white' />} />
  </a>
  <a href='/designs'>
  <BottomNavigationAction className='bottom-nav-item'  label="Order" icon={<FaShoppingCart color='#01411c' />} />
     </a>
   <a href='/aboutus'> 
  <BottomNavigationAction className='bottom-nav-item'  label="About" icon={<FcAbout />} />
    </a>
    
</BottomNavigation>
   </Paper>
   </>

  )
}

export default Bottombar