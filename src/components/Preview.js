import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveResumeTempAction } from "../Redux/Index";

const Preview = () => {

    const Navigate = useNavigate()
    const dispatch = useDispatch()

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: "0px 200px 500px 70px green",
   p: 4,
    zIndex: "200",
    borderRadius:'20px'
  };

  const PreviewResume = useSelector((state) => state.template.selectedTemplate);
  const [displayMsg, setDisplayMsg] = useState(true);
  const [resumeTemplate, setResumetemplate] = useState(PreviewResume);

  function handleSaveClick(){
    dispatch(saveResumeTempAction(resumeTemplate))
    Navigate('/my-resumes')
  }

  setTimeout(() => {
    setDisplayMsg(false);
  }, 20000);

  return (
    <div>
      {displayMsg && (
        <div>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             Your Resume Successfully Created
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2,mb: 5 }}>
              This is an Preview Version of your Resume.
            </Typography>
          </Box>
        </div>
      )}
      <Container key={resumeTemplate.id} sx={{ position: "relative" }}>
        <Box>
          {resumeTemplate.rTemp}
        </Box>
        <Box sx={{ position: "absolute", top: "200px", left:'50px' , zIndex:'100'}}>
        
          <Fab 
          onClick={()=>{Navigate('/details-filling-page/key-skills')}}
          sx={{fontWeight:'bold', letterSpacing: 3, marginRight:'15px'}} variant="extended" color="primary" size="medium">
            Edit
          </Fab>
          <Fab
          onClick={handleSaveClick}
           sx={{fontWeight:'bold', letterSpacing: 2}} variant="extended" color="success" size="medium">
            SAVE
          </Fab>
        </Box>
      </Container>
    </div>
  );
};

export default Preview;
