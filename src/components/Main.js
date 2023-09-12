import React from "react";
import { Container, Typography, Box } from "@mui/material";
import {TempImg} from "../data/Data";
import TempGrid from "./TempGrid";
import useMediaQuery from '@mui/material/useMediaQuery';


const Main = () => {
  return (
    <div sx={{display:"flex", flexWrap:"wrap"}}>
      <Box sx={{ marginTop: "100px", marginLeft: "100px", }}>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold", ":hover":{color:'grey'} }}
        >
          TEMPLATES
        </Typography>
        <Typography sx={{color:'grey'}}>Select Template To Get Started</Typography>
      </Box>
      <Container
        sx={{
          mb:'50px',
          mt: "50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "20px",
          justifyItems: "center"
         
        }}
      >
        {TempImg &&
          TempImg.map((img) => {
            return <TempGrid img={img} key={img.id} />;
          })}
      </Container>
    </div>
  );
};

export default Main;
