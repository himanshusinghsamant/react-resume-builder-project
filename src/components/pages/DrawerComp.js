import React,{ useState } from 'react'
import { Drawer,Typography,Divider, List, ListItemButton, ListItemText, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


const DrawerComp = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={()=> setopenDrawer(false)}>
         <Typography sx={{marginRight: "auto"}} variant='h6' flexGrow={1}>
        <img
            src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
            height="70px"
            alt="AlmaBetter"
          />
          </Typography>
          <Divider />
            <List sx={{marginBottom: "410px" }}>
                <ListItemButton  selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>                    
                        <ListItemText primary="Resume Templates" />                   
                </ListItemButton>
                <ListItemButton selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>                    
                        <ListItemText primary="My Resumes" />                   
                </ListItemButton>
                <ListItemButton selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>                   
                        <ListItemText primary="About Us" />                    
                </ListItemButton>
            </List>           
        </Drawer>
        <IconButton 
        sx={{ color:"black", marginLeft: "auto" }} 
        onClick={()=> setopenDrawer(!openDrawer)}>
          <MenuIcon/>
        </IconButton>
  </React.Fragment>
  );
}

export default DrawerComp