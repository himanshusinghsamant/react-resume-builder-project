import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";
import { useMyContext } from "../context/Context";
import "../../src/App.css";

const Templates = () => {
  //  In this Section We are Getting all data with the help  of useSelector which is stored in redux store like personalInfo Data , EducationData , WorkExperienceData and KeyskillData **************

  const { mode } = useMyContext();
  const PersonalInfoData = useSelector(
    (state) => state.personalInfo.personalInfoValues
  );
  const profileData = useSelector((state) => {
    return state.profile.profileInfovalue;
  });
  const workExpData = useSelector((state) => state.workExp.workData);
  const educationData = useSelector((state) => state.eduDetail.eduDetails);
  const skillsData = useSelector((state) => state.skills.skillDetails);
console.log(educationData)

  return (
    <div className="Responsive">
      <Container
        sx={{
          marginTop: "90px",
          display: "flex",
          justifyContent: "center",
          height: "550px",
          width: "100%",

          color: mode === "dark" && "black",
        }}
      >
        <Box sx={{ backgroundColor: "#fbf4f5", width: "400px" }}>
          <Box
            sx={{
              height: "80px",
              backgroundColor: "#f4c9c9",
              position: "relative",
            }}
          >
            <div style={{ padding: "10px 10px" }}>
              <div style={{ display: "flex" }}>
                <Typography sx={{ fontSize: "25px", letterSpacing: 3 }}>
                  {PersonalInfoData.FirstName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "grey",
                    letterSpacing: 3,
                    marginLeft: "10px",
                  }}
                >
                  {PersonalInfoData.LastName}
                </Typography>
              </div>
              {workExpData?.map((elem) => {
                return (
                  <Typography
                    sx={{
                      letterSpacing: 10,
                      fontSize: "12px",
                      textTransform: "uppercase",
                    }}
                  >
                    {elem.JobTitle}
                  </Typography>
                );
              })}
            </div>
            <Box sx={{ position: "absolute", top: "40px", right: "20px" }}>
              <img
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src={profileData}
                alt="profile-img"
              />
            </Box>
          </Box>

          <Box sx={{ padding: "10px", display: "flex" }}>
            <div style={{ width: "360px" }}>
              <Typography sx={{ fontSize: "10px" }}>
                Email : {PersonalInfoData.Email}
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                Mobile : {PersonalInfoData.MobileNo}
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                Address : {PersonalInfoData.Address}
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                City : {PersonalInfoData.City}
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                State : {PersonalInfoData.State}
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                PinCode : {PersonalInfoData.PinCode}
              </Typography>
            </div>
            <hr style={{ color: "#f4f4f7" }} />
            <div style={{ width: "300px	", marginLeft: "10px" }}>
              <Typography>PROFILE</Typography>
              <p style={{ fontSize: "10px", wordWrap: "break-word" }}>
                {PersonalInfoData.Objective}
              </p>
            </div>
          </Box>
          <hr style={{ color: "#f4f4f7" }} />
          <Box sx={{ padding: "8px", display: "flex" }}>
            <div style={{ width: "200px" }}>
              <Typography sx={{ marginBottom: "20px" }}>EXPERIENCE</Typography>
              {workExpData &&
                workExpData.map((info) => {
                  return (
                    <div style={{ marginTop: "10px" }}>
                      <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        {info.JobTitle}
                      </Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        {info.OrganizationName}
                      </Typography>
                      <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                        {info.StartYear} -
                      </span>
                      <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                        {info.EndYear}
                      </span>
                    </div>
                  );
                })}
            </div>
            <hr style={{ color: "#f4f4f7" }} />

            <Box sx={{ width: "170px", marginLeft: "10px" }}>
              <Typography sx={{ marginBottom: "15px" }}>EDUCATION</Typography>
          
                    <div>
                  <Typography sx={{ marginBottom: "20px" }}>{educationData.Type}</Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        {educationData.University}
                      </Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        {educationData.Degree}
                      </Typography>
                      <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                        {educationData.StartYear} -
                      </span>
                      <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                        {educationData.EndYear}
                      </span>
                    </div>
            

              <hr style={{ color: "#f4f4f7" }} />
              <div style={{ marginTop: "10px" }}>
                <Typography sx={{ marginBottom: "10px" }}>SKILLS</Typography>
                <Stack sx={{ marginLeft: "-10px" }} spacing={1}>
                  {skillsData &&
                    skillsData.map((info) => {
                      return (
                        <li
                          style={{
                            fontSize: "11px",
                            fontWeight: "bold",
                            paddingLeft: "10px",
                          }}
                        >
                          {info.skills}
                        </li>
                      );
                    })}
                </Stack>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Templates;
