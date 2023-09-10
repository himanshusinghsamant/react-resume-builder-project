import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { personalInfoAction } from "../../Redux/Index";
import { useSelector } from "react-redux";
import { Dialog } from 'primereact/dialog';
import Avatar from 'react-avatar-edit'



const PersonalInfo = () => {

  const[dialogs, setdialogs] = useState(false);
  const[imgCrop, setimgCrop] = useState(false);
  const [storeImage, setstoreImage] = useState([])

    const onCrop = (view)=>{
    setimgCrop(view)
  }
  const onClose = ()=>{
    setimgCrop(null)
  }
  const saveImage = ()=>{
    setstoreImage([...storeImage, {imgCrop}])
    setdialogs(false)
  }
  const profileimgShow = storeImage.map(item=>item.imgCrop)

  const personalData = useSelector((state)=> state.personalInfo.personalInfoValues)
  const dispatch = useDispatch()
  const {register, handleSubmit, formState:{errors, isDirty, isValid} } = useForm()
  console.log(handleSubmit)

  const onSubmit=(data)=>{
    // console.log(data)
    dispatch(personalInfoAction(data))
  }

  useEffect(()=>{
    console.log(personalData)
  },[personalData])


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
          <img 
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={profileimgShow.length?profileimgShow:null}
          alt=""/>          
          <Button onClick={()=> setdialogs(true)} variant="outlined"  sx={{height:'25px',mt:"10px"}}>
            Upload profile
          </Button>
          <Dialog
          visible={dialogs}
          style={{ top:"100px", left:"100px", background:"white", position:"absolute", maxWidth: '100%', height: 200 }}

          header={()=>(
            <p> 
            Update Profile
            </p>
          )}
          onHide={()=>setdialogs(false)}
          >
            <div>             
                  <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
                  <Button variant="contained" onClick={saveImage}>Save</Button>             
            </div>
          </Dialog>
        </Box>
        <div>
          <TextField
            label="FirstName"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1, '&:hover:':{backgroundColor:'pink'} }}
            {...register('FirstName', {required:'first name is required!'})}            
          />
          {errors.FirstName && <p style={{color:'red'}}>{errors.FirstName.message}</p>}


          <TextField
            label="LastName"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
            {...register('LastName', {required:'last name is required!'})}
          />
          {errors.LastName && <p style={{color:'red'}}>{errors.LastName.message}</p>}

          <TextField
            label="Email"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
            {...register('Email', {required:'email is required!'})}
          />
            {errors.Email && <p style={{color:'red'}}>{errors.Email.message}</p>}


          <TextField
            label="MobileNo"
            type="number"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
            {...register('MobileNo', {required:'mobile no. is required!'})}
          />
            {errors.MobileNo && <p style={{color:'red'}}>{errors.MobileNo.message}</p>}

          <TextField
            label="Address"
            type="text"
            varient="outlined"
            sx={{ width: "85.2%", m: 1 }}
            {...register('Address', {required:'address is required!'})}
          />
            {errors.Address && <p style={{color:'red'}}>{errors.Address.message}</p>}


          <TextField
            label="City"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
            {...register('City', {required:'city is required!'})}
          />
            {errors.City && <p style={{color:'red'}}>{errors.City.message}</p>}

          <TextField
            label="State"
            type="text"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
            {...register('State', {required:'state is required!'})}
          />
            {errors.State && <p style={{color:'red'}}>{errors.State.message}</p>}


          <TextField
            label="PinCode"
            type="number"
            varient="outlined"
            sx={{ width: "300px", m: 1 }}
            {...register('PinCode', {required:'pin code is required!'})}
          />
          {errors.PinCode && <p style={{color:"red"}}>{errors.PinCode.message}</p>}
          <TextField
            label="Objective"
            type="text"
            varient="outlined"
            multiline
            rows={4}
            sx={{ width: "85.2%", m: 1 }}
            {...register('Objective', {required:'objective is required!'})}
          />
        </div>
        {errors.Objective && <p style={{color:'red'}}>{errors.Objective.message}</p>}


        <Button
          variant="contained" 
          disabled
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
        // component={Link}
        // to='/details-filling-page/work-experience'        
        onClick={handleSubmit(onSubmit)}
        disabled={!isDirty || !isValid}
        type="submit"
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
