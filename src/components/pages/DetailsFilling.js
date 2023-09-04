import React from "react";
import "./style.css";
import { Stack, Box, Paper, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PersonalInfo from "../formsDetails/PersonalInfo";
import WorkExperience from "../formsDetails/WorkExperience";
import Education from "../formsDetails/Education";
import KeySkills from "../formsDetails/KeySkills";
// import styled from "@mui/material/styles";


// const useStyles = styled((theme) => ({
//   activeNavLink: {
//     color: 'blue', // Customize the color as needed
//   },
// }));



const DetailsFilling = () => {

  // const classes = useStyles()

  return (
    <div>
      <Container sx={{ display:{md:'flex'}, mt:'70px'}}>
        <Box sx={{ width: "300px", height: "auto", mr:{md:'5%'}, ml:'20px',ml:{md:'0px'}}}>
          <Stack
            spacing={2}
            sx={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 10px 30px 1px grey",
              p: "20px",
              mt: "20px",
            }}
          >
            <Paper
              sx={{
                cursor: "pointer",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
             
            >
              <NavLink to={'personal-details'} 
              style={{textDecoration:'none',color:'inherit'}}
              // activeClassName = {classes.activeNavLink}
              >
              Personal Details
              </NavLink>
            </Paper>
            <Paper
              sx={{
                cursor: "pointer",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
            
            >
              <NavLink to={'work-experience'} 
              style={{textDecoration:'none',color:'inherit'}}
              >
              Work Experience
              </NavLink>
            </Paper>
            <Paper
              sx={{
                cursor: "pointer",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
              component={NavLink}
              to="/education"
            >
              Education
            </Paper>
            <Paper
              sx={{
                cursor: "pointer",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
              component={NavLink}
              to="/Key-skills"
            >
              Key skills
            </Paper>
          </Stack>
        </Box>
        <Routes>
          <Route exact path="personal-details" element={<PersonalInfo />} />
          <Route exact path="work-experience" element={<WorkExperience />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/key-skills" element={<KeySkills />} />
        </Routes>
      </Container>
    </div>
  );
};

export default DetailsFilling;
