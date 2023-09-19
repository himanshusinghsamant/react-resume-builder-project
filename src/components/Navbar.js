import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import DrawerComp from "./pages/DrawerComp";
import "../components/pages/style.css";
import { useMyContext } from "../context/Context";
import LDtoggle from "./LDtoggle";


const NavBar = () => {
  // const [value, setValue] = useState(0);
  const { mode}= useMyContext()
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="fixed" 
    sx={{backgroundColor: mode === 'light'? 'White': '#072340'}}
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
              // value={value}
              // onChange={(e, value) => setValue(value)}
              // indicatorColor="secondary"
            >
              <Tab
              sx={{color: mode==='light'? 'black': 'white'}}
                component={NavLink}
                exact
                to={"/"}
                label="Resume Templates"
              />
              <Tab
              sx={{color: mode==='light'? 'black': 'white'}} component={NavLink} to={"/my-resumes"} label="My Resumes" />
              <Tab
              sx={{color: mode==='light'? 'black': 'white'}} component={NavLink} to={"/about-us"} label="About Us" />
            </Tabs>
          </>
        )}
        <LDtoggle/>
              </Toolbar>
    </AppBar>
  );
};

export default NavBar;
