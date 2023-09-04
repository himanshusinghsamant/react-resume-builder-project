import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const Education = () => {
  return (
    <div>
      <>
        <Box
          container
          component="form"
          sx={{
            width: "80%",
            height: "auto",
            m: 3,
            p: 3,
            boxShadow: "0 0 400px 1px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5" sx={{ mb: "40px", mt: "20px" }}>
            Education
          </Typography>

          <Divider sx={{ ml: "40px", mb: "30px", width: "88%" }} />

          <div>
          <TextField
              label="Type "
              type="text"
              varient="outlined"
              sx={{
                width: "60%",
                m: 1,
              }}
            />
            <TextField
              label="University "
              type="text"
              varient="outlined"
              sx={{
                width: "300px",
                m: 1,
               
              }}
            />
            <TextField
              label="Degree"
              type="text"
              varient="outlined"
              sx={{ width: "300px", m: 1 }}
            />
            <TextField
              label="Start Year"
              type="number"
              varient="outlined"
              sx={{ width: "300px", m: 1 }}
            />
            <TextField
              label="End Year"
              type="number"
              varient="outlined"
              sx={{ width: "300px", m: 1 }}
            />
          </div>
          <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
            <Button variant="text" sx={{ fontWeight: "bold" }}>
              Add more
            </Button>
          </Box>
          <Divider sx={{ ml: "40px", mb: "30px", width: "88%" }} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              mt: "10px",
              fontWeight: "bold",
              mr: "10px",
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", mt: "10px", fontWeight: "bold" }}
          >
            Next
          </Button>
        </Box>
      </>
    </div>
  );
};

export default Education;
