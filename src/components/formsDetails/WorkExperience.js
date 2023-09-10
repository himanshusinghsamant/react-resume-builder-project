import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import { workExpAction } from "../../Redux/Index";
import DeleteIcon from '@mui/icons-material/Delete';


const WorkExperience = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues:{
      WorkExperience:[
        {
          JobTitle: '',
          OrganizationName: '',
          StartYear: '',
          EndYear: '',
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: "WorkExperience",
    control,
  });

  const dispatch = useDispatch();
  const workData = useSelector((state) => state.workExp.workData);

  const onSubmit = (data) => {
    // console.log(data.WorkExperience)
    dispatch(workExpAction(data.WorkExperience));
  };

  console.log(workData)

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
            Work Experience
          </Typography>

          {fields.map((field, index) => (
            <div key={field.id}>
              <Box sx={{ width: "100%", textAlign: "start", ml: "40px",mt:'40px' }}>
                <Typography
                sx={{color:'grey', fontWeight:'bold',}}
                >Experience / - {index+1}</Typography>
              </Box>
              <Divider sx={{ ml: "40px", mb: "30px", width: "88%" }} />

                <TextField
                  label="JobTitle"
                  type="text"
                  varient="outlined"
                  sx={{
                    width: "300px",
                    m: 1,
                  }}
                  {...register(`WorkExperience.${index}.JobTitle`)}
                />
                <TextField
                  label="OrganizationName"
                  type="text"
                  varient="outlined"
                  sx={{ width: "300px", m: 1 }}
                  {...register(`WorkExperience.${index}.OrganizationName`)}
                />
                <TextField
                  label="StartYear"
                  type="number"
                  varient="outlined"
                  sx={{ width: "300px", m: 1 }}
                  {...register(`WorkExperience.${index}.StartYear`)}
                />
                <TextField
                  label="EndYear"
                  type="number"
                  varient="outlined"
                  sx={{ width: "300px", m: 1 }}
                  {...register(`WorkExperience.${index}.EndYear`)}
                />
                {index > 0 && (
                  <Button
                  sx={{margin:'20px 0px 30px 0px'}}
                  color="error"
                  variant='outlined'
                  endIcon={<DeleteIcon/>}
                   onClick={() => remove(index)}>Remove</Button>
                )}
            </div>
          ))}
          {/* ------------------------------------>>>  */}

          <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
            <Button 
            onClick={()=> append({
              JobTitle:'', OrganizationName:'', StartYear:'', EndYear:''
            })}
            variant="text" sx={{ fontWeight: "bold" }}>
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
          disabled={!isDirty || !isValid}
            onClick={handleSubmit(onSubmit)}
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

export default WorkExperience;
