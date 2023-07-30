import { AppBar, Toolbar, Button, Typography} from '@mui/material'
import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';

const NavBar = () => {
  return (
    <AppBar position="fixed" color=''>
      <Toolbar>
          
        <Typography variant='h6' flexGrow={1}>
        <img
            src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
            height="60px"
            alt="AlmaBetter"
          />
        </Typography>
        <Button variant="text" color="primary" startIcon={<DescriptionIcon />}>
          Resume Templates
        </Button>
        <Button variant="text" color="primary" startIcon={<TaskIcon />}>
          My Resumes
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
          About Us
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar