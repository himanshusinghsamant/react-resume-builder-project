import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { DeleteOutlined } from "@mui/icons-material";
import { DownloadOutlined } from "@mui/icons-material";
import Fab from '@mui/material/Fab';
import { useState } from "react";
import { removeResumeAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";

const MyResumes = () => {
  const dispatch = useDispatch()
  const SavedResume = useSelector((state) => state.saveResume.saveResumeTemp);
  const [resumeList, setResumeList] = useState(SavedResume)

  function handleDelete(index){
    let dispatchAction = dispatch(removeResumeAction(index))
    setResumeList(dispatchAction)

  }
    console.log(resumeList);


  return (
    <div>
      {resumeList.length === 0 && <h1 style={{ marginTop: "100px" }}>This is my resumes component</h1>}
      {Array.isArray(resumeList) ? 
       resumeList.map((resume, index) => {
        return (
          <Box sx={{position:'relative'}}>
            {resume.rTemp}
          <Box sx={{display:'flex', flexDirection:'column', position:'absolute', top:'50px', right:'20%', height:'150px', justifyContent:'space-around'}}>
          <Fab
          onClick={()=>handleDelete(index)}
           variant="extended" size="medium" color="error">
              <DeleteOutlined sx={{ mr: 1 }} />
              DELETE
            </Fab>
            <Fab variant="extended" size="medium" color="primary">
              <DownloadOutlined sx={{ mr: 1 }} />
              DOWNLOAD
            </Fab>
          </Box>
          </Box>
        );
      })
       : <h2 style={{color:'red',marginTop:'200px', textAlign:'center'}}> <h1>Something is wrong /-</h1> resumeList is not an array!</h2>}
    </div>
  );
};

export default MyResumes;
