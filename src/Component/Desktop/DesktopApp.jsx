import React, { useState } from 'react'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { AppBar, Box, Container, IconButton, Tab, Tabs, Toolbar, Typography, useTheme } from '@mui/material';
import Search from '../Search/Search';
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
              <a href="/">

                <IconButton>
                <ViewCarouselIcon sx={{ fontSize:'2rem', color: '#02933d' }}  />
            </IconButton>
              </a>
            
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

          <a href='/'> <Tab  sx={{color:'#02933d', fontSize:'1rem'}} label='Home'  />  </a>
          <a href='/designs'> <Tab   sx={{color:'#02933d', fontSize:'1rem'}} label='Designs'  />  </a>
          <a href='/contact'> <Tab   sx={{color:'#02933d', fontSize:'1rem'}} label='Contact us'  />  </a>
          <a href='/aboutus'> <Tab   sx={{color:'#02933d', fontSize:'1rem'}} label='About us'  />  </a>
          
               
                 
                </Tabs> 
            <Search />

       </Toolbar>
       
       </Container>
    
       </AppBar>
         
          
  )
}

export default DesktopApp