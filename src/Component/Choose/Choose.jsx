import { Paper } from '@mui/material'
import React from 'react'

import {Typography} from '@mui/material'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Choose = () => {
  return (
    
   <div style={{marginTop:'80px'}} className="container">
    <div>
       <div className="techstack-title">
      <h4 style={{textAlign:'center', color:'red'}}>Why Choose us ?</h4>
     </div>
      <Fade>
        <Typography 
        sx={{backgroundColor:'#01411c', width:'70px',borderRadius:'10px', height:'2px', display:'block' , margin: '-5px auto 30px auto'}}
        
        display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
          
          >
           <span></span>

        </Typography>
        </Fade>
    </div>
    <div  className="row">
     <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
      <Bounce top>

      <Paper sx={{padding:'30px', height:'auto', marginBottom:'40px'}} elevation={20}>
       <div className="title-why">
        <h4 style={{textAlign:'center' ,marginBottom:'30px', color:'#056608',fontWeight:'900', fontSize:'22px', marginTop:'30px'}}>CUSTOMER SATISFACTION</h4>
        <p style={{color:'#056608'}}>As part of our multiple concepts and revisions policy, we keep reviewing your work to a level you will be satisfied and happy about.</p>
       </div>

      </Paper>
      </Bounce>

     </div>
     
     <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
      <Bounce top>

      <Paper sx={{padding:'30px',height:'auto', marginBottom:'40px'}} elevation={20}>
        <div className="title-why">
        <h4 style={{textAlign:'center' ,marginBottom:'30px', color:'#301934',fontWeight:'900', fontSize:'22px', marginTop:'30px'}}>FAST TIMING</h4>
        <p style={{color:'#301934'}}>We offer lightning fast turnaround times. We are fast and understand that no delay should be tolerated so be rest assured we always deliver your project at the right time. Our delivery times are reasonably fast.</p>
       </div>
      </Paper>
      </Bounce>

     </div>
     <div  className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
       <Bounce top>

      <Paper sx={{padding:'30px',height:'auto', marginBottom:'40px'}} elevation={20}>
         <div className="title-why">
          <h4 style={{textAlign:'center' ,marginBottom:'30px', color:'#00008B',fontWeight:'900', fontSize:'22px', marginTop:'30px'}}>AFFORDABLE PRICE</h4>
        
        <p style={{color:'#00008B '}}>We offer affordable deals that will allow your business to flourish without breaking a bank. We are passionate about what we do and we dare not disappoint.</p>
       </div>
      </Paper>
       </Bounce>

     </div>
    </div>
   </div>
  )
}

export default Choose