import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from '@mui/icons-material/Delete';
import { educationDetailsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Education = () => {

  const EducationDetails = useSelector((state)=> state.eduDetail.eduDetails)
  const dispatch = useDispatch()

  console.log(EducationDetails)



  const {
    register,
    handleSubmit,
    control,
    formState: { errors,isDirty, isValid },
  } = useForm({
    defaultValues: {
      eduDetails: [
        {
          Type: "",
          University: "",
          Degree: "",
          StartYear: "",
          EndYear: "",
        },
      ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    name: "eduDetails",
    control,
  });

  const onSubmit=(data)=>{
    console.log(data.eduDetails)
    dispatch(educationDetailsAction(data.eduDetails))
  }

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

          {fields.map((fields, index) => {
            return (
              <div key={fields.id}>
                <Typography
                sx={{color:'grey', fontWeight:'bold', marginRight:'85%', marginTop:'40px'}} 
                >Details\ - {index + 1}</Typography>
                <TextField
                  label="Type "
                  type="text"
                  varient="outlined"
                  sx={{
                    width: "60%",
                    m: 1,
                  }}
                 
                  {...register('Type', {required:'This Field is required!'})}            
               />
          {errors.Type && <p style={{color:'red'}}>{errors.Type.message}</p>}

                <TextField
                  label="University "
                  type="text"
                  varient="outlined"
                  sx={{
                    width: "300px",
                    m: 1,
                  }}
                  {...register('University', {required:'This Field is required!'})}            
                  />
             {errors.University && <p style={{color:'red'}}>{errors.University.message}</p>}
                <TextField
                  label="Degree"
                  type="text"
                  varient="outlined"
                  sx={{ width: "300px", m: 1 }}
                  {...register('Degree', {required:'This Field is required!'})}            
                  />
             {errors.Degree && <p style={{color:'red'}}>{errors.Degree.message}</p>}
                <TextField
                  label="StartYear"
                  type="number"
                  varient="outlined"
                  sx={{ width: "300px", m: 1 }}
                  {...register('StartYear', {required:'This Field is required!'})}            
                  />
             {errors.StartYear && <p style={{color:'red'}}>{errors.StartYear.message}</p>}
                <TextField
                  label="EndYear"
                  type="number"
                  varient="outlined"
                  sx={{ width: "300px", m: 1 }}
                  {...register('EndYear', {required:'This Field is required'})}
                />
                {errors.EndYear && <p style={{color:'red'}}>{errors.EndYear.message}</p>}
                {index > 0 && (
                  <Button
                  sx={{margin:'20px 0px 30px 0px'}}
                  color="error"
                  variant='outlined'
                  endIcon={<DeleteIcon/>}
                   onClick={() => remove(index)}>Remove</Button>
                )}
              </div>
            );
          })}
          <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
            <Button
              onClick={() =>
                append({
                  Type: "",
                  University: "",
                  Degree: "",
                  StartYear: "",
                  EndYear: "",
                })
              }
              variant="text"
              sx={{ fontWeight: "bold" }}
            >
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
          onClick={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
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
