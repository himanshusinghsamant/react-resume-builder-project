
import React from 'react'
import { Grid, Typography } from '@mui/material';
import React from 'react';
import {Box} from '@mui/system';



const AboutUs = () => {
  return (
    <>
    <Grid container direction="row" alignItems="center" sx={{mt:8}}>
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
            <Typography variant="h2" color="inherit">
                Resume Builder
            </Typography>
            <Typography variant="h6" color="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo excepturi commodi placeat recusandae amet illo mollitia voluptatum, voluptate esse porro repellat ipsum facere dolorum distinctio voluptas incidunt quia laboriosam!
            </Typography>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
            <Box component="img" src='./images/About.png' height={500} />
        </Grid>
    </Grid>
    </>
  )
}

export default AboutUs
