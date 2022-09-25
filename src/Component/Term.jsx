import { Paper } from '@mui/material'
import React from 'react'
import './Terms.css'

import ScrollToTop from 'react-scroll-to-top';

const Term = () => {
  return (
    <div className='term'>
     <div className="row">

      <div className="container">
       <Paper className='papper-holder' elevation={20}>
        <div className="condition">
     <h2>Brand Terms and Conditions</h2>
     <ul>
      <li>After contacting the service provider, client is expected to provide all the necessary information for the designing to kick start.</li>
      <li>In cases where details of the graphics work contradicts e.g wrong colour combination, arrangement etc, designer can correct such with the consent of the client..</li>
      <li>In cases where the client is devoid of content, the desire of the client is taken into consideration before designer creates a concept</li>
      <li>A 50% advance payment is made before the start of the job</li>
      <li>It takes 72 hours for the job to be delivered. However, express delivery takes 24 hours with an additional cost of 50% of the agreed price for the design</li>
      <li>Either party can terminate the project if agreement is bridged or irregularities occur. For example; If design is not delivered at the stipulated time, if clients keep reviewing mistakes he/she caused when giving details, if client decides not to continue for personal reasons etc but a 45% payment shall go to the designer</li>
      <span>

       Thanks.
      </span>
     </ul>

        </div>

       </Paper>

      </div>


     </div>
     <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      
      style={{borderRadius:'90px', zIndex:"9999", marginBottom:'40px', backgroundColor:'#01411c'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>Up</p>}
       />
       
    </div>
  )
}

export default Term