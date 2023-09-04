import { Button } from "@mui/material";
import { Avatar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PersonalInfo = () => {
  return (
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: "25px",
          }}
        >
          <Avatar
            sx={{ mb: "10px", width: "70px", height: "70px" }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Button variant="contained" color="success" sx={{height:'25px'}}>
            Upload profile
          </Button>
        </Box>
        <div>
          <TextField
            label="First Name"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1, '&:hover:':{backgroundColor:'pink'} }}
            
          />
          <TextField
            label="Last Name"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
          />
          <TextField
            label="Email"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
          />
          <TextField
            label="Mobile no."
            type="number"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
          />
          <TextField
            label="Address"
            type="text"
            varient="outlined"
            sx={{ width: "85.2%", m: 1 }}
          />
          <TextField
            label="City"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
          />
          <TextField
            label="State"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
          />
          <TextField
            label="Pin Code"
            type="number"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
          />
          <TextField
            label="Objective"
            type="text"
            varient="outlined"
            multiline
            rows={4}
            sx={{ width: "85.2%", m: 1 }}
          />
        </div>
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
  );
};

export default PersonalInfo;
