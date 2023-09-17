import React from "react";
import "./style.css";
import { Stack, Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PersonalInfo from "../formsDetails/PersonalInfo";
import WorkExperience from "../formsDetails/WorkExperience";
import Education from "../formsDetails/Education";
import KeySkills from "../formsDetails/KeySkills";
import "./style.css";

const DetailsFilling = () => {
  return (
    <div>
      <Container sx={{ display: { md: "flex" }, mt: "70px" }}>
        <Box
          sx={{
            width: "300px",
            height: "auto",
            mr: { md: "5%" },
            ml: { md: "0px" },
          }}
        >
          <Stack
            sx={{
              width: "300px",
              height: "220px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 10px 30px 1px grey",
              p: "20px",
              mt: "20px",
            }}
          >
            <ul className="ul-list">
              <li className="list">
                <NavLink
                  to={"/details-filling-page/personal-details"}
                  style={{ textDecoration: "none", fontWeight: "bold", letterSpacing:3 }}
                >
                  Personal Details
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/details-filling-page/education"}
                  style={{ textDecoration: "none", fontWeight: "bold" ,letterSpacing:3}}
                >
                  Education
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/details-filling-page/work-experience"}
                  style={{ textDecoration: "none", fontWeight: "bold",letterSpacing:3 }}
                >
                  Work Experience
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/details-filling-page/key-skills"}
                  style={{ textDecoration: "none", fontWeight: "bold",letterSpacing:3 }}
                >
                  Key Skills
                </NavLink>
              </li>
            </ul>
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
