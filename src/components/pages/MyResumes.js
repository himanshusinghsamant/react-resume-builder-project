import React from "react";
import { Box } from "@mui/system";
import Fab from '@mui/material/Fab';
import { DownloadDoneOutlined } from "@mui/icons-material";
import { DeleteForeverOutlined } from "@mui/icons-material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { TextField} from "@mui/material";
import { useMyContext } from "../../context/Context";


const MyResumes = () => {

  const [downFileName, setDownFileName] = useState('');

  const { resumeTemplate} = useMyContext()

  function handleDelete(){
    localStorage.clear()
    window.location.reload()
  }

  function onChange(e) {
    setDownFileName(e.target.value)
  }
    
  async function handleDownloadFile() {
    const content = document.getElementById('resume-Temp')
    html2canvas(content)
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", "a4");
      var ratio = canvas.width/canvas.height;
      var width = pdf.internal.pageSize.getWidth();
      var height = width/ ratio;
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      // pdf.output('dataurlnewwindow');
      pdf.save(`${downFileName}.pdf`);

      setDownFileName('')
    })
    .catch(function (error) {
      console.log(error)
    });
  }




  return (
    <div>
      {!resumeTemplate ? <h1 style={{ marginTop: "100px" }}>No resume is selected to show!</h1>: <>
      
      <Box key={resumeTemplate.id} sx={{position:'relative', marginTop:'100px'}}>
            <Box id="resume-Temp">
            {resumeTemplate.rTemp}
            </Box>
          <Box sx={{display:'flex', flexDirection:'column', position:'absolute', top:'50px', right:'10%', height:'200px', justifyContent:'space-around'}}>
   
          <TextField
                onChange={onChange}
                variant="outlined"
                label="EnterFileName"
                type={"text"}
              />
            <Fab
             onClick={handleDownloadFile}
             variant="extended" size="medium" color="primary">
              <DownloadDoneOutlined sx={{ mr: 2 }} />
              DOWNLOAD
            </Fab>
            <Fab
             onClick={handleDelete}
             variant="extended" size="medium" color="primary">
              <DeleteForeverOutlined sx={{ mr: 2 }}/>
               DELETE
            </Fab>
          </Box>
          </Box>;
      </>}

    
    </div>
  );
};

export default MyResumes;
