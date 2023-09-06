import React from 'react'
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";

const Template_2 = () => {
  return (
    <div>
       <Container
        sx={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          height:'600px'
        }}
      >
        <Box sx={{ height: "550px", backgroundColor: "#f2f2fb", width: "40%" }}>
          <Box
            sx={{
              height: "80px",
              backgroundColor: "blue",
              position: "relative",
            }}
          >
            <div style={{ padding: "10px 10px" }}>
              <div style={{ display: "flex" }}>
                <Typography sx={{ fontSize: "25px", letterSpacing: 6 , color:'white'}}>
                  DANI
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "grey",
                    letterSpacing: 6,
                    marginLeft: "10px",
                    color:'yellow'
                  }}
                >
                  SCHWAIGER
                </Typography>
              </div>
              <Typography sx={{ letterSpacing: 10, fontSize: "12px", color:'white' }}>
                WEB DEVELOPER
              </Typography>
            </div>
            <Box sx={{ position: "absolute", top: "10px", right: "20px" }}>
              <img
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src={
                  "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                }
                alt="profile-img"
              />
            </Box>
          </Box>

          <Box
            sx={{ padding: "10px", display: "flex" }}
          >
            <div style={{ width: "45%" }}>
              <Typography sx={{ fontSize: "10px" }}>
                Email. abcd@gmail.com
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                M.No. 7964646477
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                Add. kanpur uttarpradesh
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>City. Kanpur</Typography>
              <Typography sx={{ fontSize: "10px" }}>
                State. Uttar Pradesh
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>PinCode. 271881</Typography>
            </div>
            <hr style={{color:'#f4f4f7'}} />
            <div style={{ width: "45%" }}>
              <Typography>PROFILE</Typography>
              <p style={{ fontSize: "10px" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                itaque cupiditate dolore! Consequatur quae aut quo, natus
                asperiores nihil dolores.
              </p>
            </div>
          </Box>
          <hr style={{color:'#f4f4f7'}} />
          <Box sx={{ padding: "10px", display:'flex' }}>
            <div style={{ width: "45%" }}>
              <Typography sx={{marginBottom:'20px'}}>EXPERIENCE</Typography>
              <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                Web developer
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>
                AlmaBetter Institution Lorem ipsum dolor sit
              </Typography>
              <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                2020 -
              </span>
              <span style={{ fontSize: "10px", fontWeight: "bold" }}>2023</span>
            </div>

            <hr style={{color:'#f4f4f7'}}/>
            <Box sx={{width:'45%'}}>
              <div>
                <Typography  sx={{marginBottom:'20px'}}>EDUCATION</Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Bachelor of Science
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  CSJMU Kanpur University
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>BSc</Typography>
                <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                  2020 -
                </span>
                <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                  2023
                </span>
              </div>

              <hr style={{color:'#f4f4f7'}} />
              <div style={{marginTop:'20px'}}>
                <Typography  sx={{marginBottom:'20px'}}>SKILLS</Typography>
                  <Stack sx={{marginLeft:'10px'}} spacing={1}>
                   <li style={{fontSize:'11px', fontWeight:'bold',paddingLeft:'10px'}}>Python</li>
                   <li  style={{fontSize:'11px', fontWeight:'bold', paddingLeft:'10px'}}>JavaScript</li>
                   <li  style={{fontSize:'11px', fontWeight:'bold', paddingLeft:'10px'}}>HTML, CSS</li>
                   <li  style={{fontSize:'11px', fontWeight:'bold', paddingLeft:'10px'}}>ReactJs</li>
                  </Stack>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Template_2
