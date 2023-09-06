
import React from 'react'
import { Grid, Typography, Container } from '@mui/material';
import {Box} from '@mui/system';
import {SocialMediaImg} from '../../data/Data'

const MediaIcons = (props)=>{
    console.log(props.img)
    return(
        <div>
            <Box sx={{margin:'5px 10px'}}>
                <img style={{width:'50px'}} src={props.img.image} alt="IconImage" />
            </Box>
        </div>
    )
}

const AboutUs = () => {
  return (
    <>
   <Container>
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

    <Box sx={{display:'flex'}}>
    {SocialMediaImg && SocialMediaImg.map((img)=>{
        return (<MediaIcons img ={img} key={img.id}/>)
    })}
    </Box>
   </Container>
    </>
  )
}

export default AboutUs
