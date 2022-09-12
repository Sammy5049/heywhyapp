import { Box, IconButton, Slide, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const Search = () => {

 const [openSearchBar, setOpenSearchBar] = useState(false);

  return (
   <>
  
   <Slide direction='down' in={openSearchBar} timeout={500}>
       <Box
      sx={{
       position:'absolute',
       top:0,
       left:0,
       width:"100%",
       height:"100%",
        background:'grey',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:9999,
        opacity:0.9
      }}
    >
     <TextField color='secondary' variant='standard' fullwidth placeholder='search...'  sx={{p:'0 0 0 40px',
     '.MuiInput-root::before':{borderBottom:'1px solid yellow'},
     width:'100%',
   '.MuiInput-root': {fontSize:{sm:"1rem", md:'2rem'}}
     
    
    
    }} />
      <IconButton>
                <SearchIcon  sx={{color: 'white', fontSize:{xs:'1rem', md:'2rem'} }} />
         </IconButton>
         <IconButton  onClick={() => setOpenSearchBar(false)}
         sx={{ }}>
                <CloseIcon  sx={{color: 'white', fontSize:{xs:'1rem', md:'3rem'} }} />
         </IconButton>

    </Box>
   </Slide>
   <IconButton onClick={() => setOpenSearchBar(true)} >
                <SearchIcon  sx={{color: '#02933d', fontSize:{xs:'2rem', md:'2rem'} }} />
         </IconButton>
 </>
   
  )
}

export default Search