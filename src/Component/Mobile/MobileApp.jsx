import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import React from 'react'
import Drawal from '../Drawal'
import Search from '../Search/Search';

const MobileApp = ({match}) => {
  return (
        <AppBar position='fixed' sx={{background: 'white'}}>
        <Container>
       <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white'}} >
             
              <Drawal />
            <Box sx={{display: 'flex',  alignItems: 'center' }}>
                <IconButton>
                   <ViewCarouselIcon sx={{ fontSize:'5.8rem', color: '#02933d' }}  />
                </IconButton>
            
                <Typography  component="a" href="/"
                     sx={{ fontSize:'3.3rem',
                      fontWeight: 600,
                      fontFamily: 'Roboto',
                      color: '#02933d',
                      textDecoration: 'none',}}>
                      HEYWHY
                </Typography>
            </Box>
             
             <Search />

          
           
            
         
          
     
       

       </Toolbar>
       
       </Container>
       </AppBar>
  )
}

export default MobileApp