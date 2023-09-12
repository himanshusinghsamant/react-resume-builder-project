import React from "react";
import "./style.css";
import { Stack, Box, Paper, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PersonalInfo from "../formsDetails/PersonalInfo";
import WorkExperience from "../formsDetails/WorkExperience";
import Education from "../formsDetails/Education";
import KeySkills from "../formsDetails/KeySkills";


const DetailsFilling = () => {

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
              boxShadow: "0 0 20px 0.1px ",
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
              exact
             component={NavLink}
             to='/details-filling-page/personal-details'
            >
             
              Personal Details
            </Paper>
            <Paper
              sx={{
                cursor: "pointer",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
              exact
            component={NavLink}
            to='/details-filling-page/work-experience'
            >
             
              Work Experience
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
              to="/details-filling-page/education"
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
              to="/details-filling-page/key-skills"
            >
              Key skills
            </Paper>
          </Stack>
        </Box>
        <Routes>
          <Route exact path="/personal-details" element={<PersonalInfo />} />
          <Route exact path="/work-experience" element={<WorkExperience />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/key-skills" element={<KeySkills />} />
        </Routes>
      </Container>
    </div>
  );
};

export default DetailsFilling;
