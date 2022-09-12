import { Grid } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Grid container>

      <Typography
          sx={{
            fontWeight: 500,
            padding: 4,
            fontFamily: "Montserrat",
            color: "#01411c",
          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          Contacts
        </Typography>
     


    </Grid>
    
  )
}

export default Contact