import React, { useState } from 'react'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { AppBar, Box, Container, IconButton, Tab, Tabs, Toolbar, Typography, useTheme } from '@mui/material';
import Search from '../Search/Search';
import HeywhyLogo1 from '../Images/HeywhyLogo1.png'

import { Link , NavLink } from 'react-router-dom'
import './Desktop.css'

const DesktopApp = ({match}) => {


 const theme = useTheme();

    const [show, setShow] = useState();
  return (
        <AppBar position='fixed' sx={{ [theme.breakpoints.up('md')] : {
         background: 'white'
        },  }}>
        <Container className='contt' >
       <Toolbar className='nav-container-section' >
            
              
            <Box className='logo-item'
             sx={{display: 'flex',  alignItems: 'center' }}>
              <NavLink to="/">
                <div className="logoimage">
                     <img src={HeywhyLogo1} className='image-log' alt="logo" />
                </div>
               

                
              </NavLink>
            
            <Typography  
                     sx={{ fontSize:'1.5rem',
                      fontWeight: 600,
                     [theme.breakpoints.up('md')] : {
         marginRight:'110px',
        },
                     
                      fontFamily: 'Roboto',
                      color: '#02933d',
                      textDecoration: 'none',}}>
                        <NavLink to='/' style={{color:'#02933d'}}>HEYWHY</NavLink>
                      
            </Typography>
            </Box>

          
         {/* 
         
         <Tabs className='nav-list-itemss' sx={{display:'flex'}} value={show} onChange={(e, show ) => setShow(show)} indicatorColor='primary' >

   <a href='/'> <Tab  sx={{color:'#02933d', fontSize:'1rem'}} label='Home'  />  </a>
   <a href='/designs'> <Tab   sx={{color:'#02933d', fontSize:'1rem'}} label='Designs'  />  </a>
   <a href='/contact'> <Tab   sx={{color:'#02933d', fontSize:'1rem'}} label='Contact us'  />  </a>
   <a href='/aboutus'> <Tab   sx={{color:'#02933d', fontSize:'1rem'}} label='About us'  />  </a>
   
        
          
         </Tabs> 
         
         */}

          <div className="col">
      <nav className="nav">
        <ul className="menu-items">
          <li className="menu-item">
            <NavLink to='/' className="menu-link">Home</NavLink>
          </li>

           <li className="menu-item">
            <NavLink to='/designs' className="menu-link">Designs</NavLink>
          </li>

           <li className="menu-item">
            <NavLink to='/contact' className="menu-link">Contact Us</NavLink>
          </li>

           <li className="menu-item">
            <NavLink to='/aboutus' className="menu-link">About Us</NavLink>
          </li>
        </ul>
      </nav>
     </div>




               
            <Search />

       </Toolbar>
       
       </Container>
    
       </AppBar>
         
          
  )
}

export default DesktopApp