
import React from 'react'
import { Grid, Typography, Container, capitalize } from '@mui/material';
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
   <Grid container direction="row" alignItems="center" sx={{mt:8,}}>
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
            <Typography variant="h2" color="inherit" sx={{mb:5, fontFamily:'Segoe UI'}}  >
                Resume Builder
            </Typography>
            <Typography variant='h8'  color="inherit" textTransform={'capitalize'}>
            Welcome to our team! We are a group of five passionate individuals
           <Typography sx={{color:"red"}}> KUNDAN, HIMANSHU, PRAGTI, ABHISHEK AND PRASAD.</Typography> who came together to turn our shared vision into reality. Our journey began with a simple idea - to empower job seekers like you with a user-friendly and fully responsive resume builder app. Using the power of React, we've crafted an application that simplifies the process of creating a standout resume.<br/><br/>
            Our aim : Empower job seekers with responsive, user-centric resumes. Your success starts here. Happy resume crafting! 🌟🚀📄
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

export default AboutUs;
