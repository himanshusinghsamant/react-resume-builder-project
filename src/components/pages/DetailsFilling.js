import React from "react";
import "./style.css";
import { Box, Paper, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PersonalInfo from "../formsDetails/PersonalInfo";
import WorkExperience from "../formsDetails/WorkExperience";
import Education from "../formsDetails/Education";
import KeySkills from "../formsDetails/KeySkills";
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';


const DetailsFilling = () => {

  return (
    <div>
      <Container sx={{ display:{md:'flex'}, mt:'70px'}}>
        <Box sx={{ width: "300px", height: "auto", mr:{md:'5%'},ml:{md:'0px'}}}>
          <Paper        
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
                display:"flex",
                textAlign:"center",
                marginTop:"5px",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
              exact
             component={NavLink }
             to='/details-filling-page/personal-details'
             >
             <PersonIcon sx= {{marginRight :"10px"}}/>  Personal Details
            </Paper>
            <Paper
              sx={{
                cursor: "pointer",
                display:"flex",
                textAlign:"center",
                marginTop:"5px",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
              component={NavLink}
              to="/details-filling-page/education"
            ><SchoolIcon sx= {{marginRight :"10px"}}/>  Education
            </Paper>
            <Paper
              sx={{
                cursor: "pointer",
                display:"flex",
                textAlign:"center",
                marginTop:"5px",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
              exact
            component={NavLink}
            to='/details-filling-page/work-experience'
            ><WorkHistoryIcon sx= {{marginRight :"10px"}}/>  Work Experience
            </Paper>            
            <Paper
              sx={{
                cursor: "pointer",
                display:"flex",
                textAlign:"center",
                marginTop:"5px",
                marginBottom:"5px",
                p: "5px",
                fontWeight: "bold",
                color: "gray",
                textDecoration: "none",
              }}
              component={NavLink}
              to="/details-filling-page/key-skills"
            ><AssignmentIcon sx= {{marginRight :"10px"}}/>  Key skills
            </Paper>
          </Paper>
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
