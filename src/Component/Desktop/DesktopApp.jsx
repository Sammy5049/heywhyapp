import React, { useState } from 'react'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { AppBar, Box, Container, IconButton, Tab, Tabs, Toolbar, Typography, useTheme } from '@mui/material';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import './Desktop.css'

const DesktopApp = ({match}) => {


 const theme = useTheme();

    const [show, setShow] = useState();
  return (
        <AppBar position='fixed' sx={{ [theme.breakpoints.up('md')] : {
         background: 'white'
        },  }}>
        <Container>
       <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
     
        [theme.breakpoints.up('md')] : {
         background: 'white'
        },}} >
            
              
            <Box className='logo-item'
             sx={{display: 'flex',  alignItems: 'center' }}>
                <IconButton>
                <ViewCarouselIcon sx={{ fontSize:'2rem', color: '#02933d' }}  />
            </IconButton>
            
            <Typography   component="a" href="/"
                     sx={{ fontSize:'1.5rem',
                      fontWeight: 600,
                      fontFamily: 'Roboto',
                      color: '#02933d',
                      textDecoration: 'none',}}>
                      HEYWHY
            </Typography>
            </Box>

          
         
               
                <Tabs className='nav-list-itemss' sx={{display:'flex'}} value={show} onChange={(e, show ) => setShow(show)} indicatorColor='primary' >

          <Link to='/'> <Tab  sx={{color:'#02933d', fontSize:'1rem'}} label='Home'  />  </Link>
          <Link to='/designs'> <Tab  sx={{color:'#02933d', fontSize:'1rem'}} label='Designs'  />  </Link>
          <Link to='/contactus'> <Tab  sx={{color:'#02933d', fontSize:'1rem'}} label='Contact us'  />  </Link>
          <Link to='/aboutus'> <Tab  sx={{color:'#02933d', fontSize:'1rem'}} label='About us'  />  </Link>
          
               
                 
                </Tabs> 
            <Search />

       </Toolbar>
       
       </Container>
    
       </AppBar>
         
          
  )
}

export default DesktopApp