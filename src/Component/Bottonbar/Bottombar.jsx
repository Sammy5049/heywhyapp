
import {BottomNavigation,Paper, BottomNavigationAction } from '@mui/material'
import {BsInfoSquareFill} from 'react-icons/bs';
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
import { Link, NavLink } from "react-router-dom";

import HeywhyLogo1 from '../Images/HeywhyLogo1.png'

const Bottombar = () => {
  const activelink = 'text-primary';
  const notactivelink = '';


  return (

   <>
   <AppBar position="fixed" sx={{ background: "white" }}>
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:'center',
            background: "white",
          }}
        >
          <Drawal />

         


          
            
            <div className="logo">
            <NavLink className='log-link' to='/'> 
            
             <img src={HeywhyLogo1} className='image-log' alt="logo" />
               <h3> EYWHY</h3> 
               </NavLink>
            
            </div>


         

          <Search />
        </Toolbar>
      </Container>
    </AppBar>

   <Paper className='buston' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,width:'100%' ,zIndex:'999'}} elevation={3}>


{/* 

 <BottomNavigation
    
  showLabels
  sx={{fontSize:"35px" , display:'flex', height:'60px', background:'#1b1b1b', justifyContent:'space-around',alignItems:'center',padding:'20px', paddingTop:'30px', fontFamily:'monserat', fontWeight:700}}
 
>
 <div>
 <NavLink to='/'> 

  <BottomNavigationAction style={{marginBottom:"-20px"}}  label="Home" icon={<AiFillHome size={30} color='white' />} />
  <p className="activelink" style={{ fontSize:'14px', paddingBottom:'15px'}}>Home</p>
  </NavLink>
 </div>

 <div >
 <NavLink to='/designs'> 

  <BottomNavigationAction style={{marginBottom:"-20px"}}  className='gone-far' label="Order" icon={<FaShoppingCart size={30}  />} />
  <p className="activelink" style={{fontSize:'14px', paddingBottom:'15px'}}>Order</p>
  </NavLink>
 </div>


  <div>

   <NavLink to='/aboutus'> 

  <BottomNavigationAction style={{marginBottom:"-20px"}}   label="About" icon={<FcAbout size={30} />} />
  <p className="activelink" style={{ fontSize:'14px', paddingBottom:'15px'}}>About</p>
  </NavLink>
 </div>
          
</BottomNavigation>*/}
   



<div className="bottom-items">
  <nav className="navi">
    <ul>
      <li> <NavLink to='/' className='nav-nav-nave'><AiFillHome size={25} /> Home</NavLink> </li>
      <li> <NavLink to='/designs' className='nav-nav-nave'><FaShoppingCart size={25} /> Order</NavLink> </li>
      <li> <NavLink to='/aboutus' className='nav-nav-nave'><BsInfoSquareFill size={25} /> About</NavLink> </li>
    </ul>
  </nav>
</div>





   </Paper>

   </>

  )
}

export default Bottombar