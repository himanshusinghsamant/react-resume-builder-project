import React from 'react'
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";


const KeySkills = () => {
  return (
    <div>
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
            Key Skills
          </Typography>

          <Divider sx={{ ml: "40px", mb: "30px", width: "88%" }} />

          <div>
          <TextField
              label="Add skills"
              type="text"
              varient="outlined"
              sx={{
                width:{md:'400px'},
                m: 1,
              }}
            />
          
          </div>
          <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
            <Button variant="text" sx={{ fontWeight: "bold" }}>
              Add new
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
            Preview
          </Button>
        </Box>
      </>
    </div>
    </div>
  )
}

export default KeySkills
