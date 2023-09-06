import React from "react";
import { Container, Typography, Box } from "@mui/material";
import {TempImg} from "../data/Data";
import TempGrid from "./TempGrid";

const Main = () => {
  return (
    <div>
      <Box sx={{ marginTop: "100px", marginLeft: "100px" }}>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold", letterSpacing: 6 }}
        >
          Templates
        </Typography>
        <Typography sx={{color:'grey', }}>Select a template to get started</Typography>
      </Box>
      <Container
        sx={{
          padding: "20px 20px",
          marginTop: "15px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
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
