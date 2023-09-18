import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import DrawerComp from "./pages/DrawerComp";


const NavBar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="fixed" color=""

    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography variant="h6" flexGrow={1}>
              <img
                src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
                height="60px"
                alt="AlmaBetter"
              />
            </Typography>
            <DrawerComp />
          </>
        ) : (
          <>
            <Typography variant="h6" flexGrow={1}>
              <img
                src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
                height="60px"
                alt="AlmaBetter"
              />
            </Typography>
            <Tabs
              sx={{ marginLeft: "auto" }}
              value={value}
              
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            
            >
              <Tab component={Link} exact to={'/'} label="Resume Templates" />
              <Tab component={Link} to={'/my-resumes'} label="My Resumes"   sx={{":hover":{color:"skyblue"}}} />
              <Tab component={Link} to={'/about-us'} label="About Us"   sx={{":hover":{color:"skyblue"}}} />






            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
