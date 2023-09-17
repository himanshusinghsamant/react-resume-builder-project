import React, { useState } from "react";
import { Button, Divider, MenuItem, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from '@mui/icons-material/Delete';
import { educationDetailsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Education = () => {

  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState()
  const yearInfo = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","Present"]

  const Navigate = useNavigate();

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
    dispatch(educationDetailsAction(data.eduDetails));
    Navigate('/details-filling-page/work-experience');
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
                  onChange={(e) => setYear(e.target.value)}
                  select       
                  >
                    {yearInfo.map(year=> (
                      <MenuItem value={year} key={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </TextField>
             {errors.StartYear && <p style={{color:'red'}}>{errors.StartYear.message}</p>}
                <TextField
                  label="EndYear"
                  type="number"
                  varient="outlined"
                  sx={{ width: "300px", m: 1 }}
                  {...register('EndYear', {required:'This Field is required'})}
                  onChange={(e) => setYear(e.target.value)}
                  select         
                  >
                    {yearInfo.map(year=> (
                      <MenuItem value={year} key={year}>
                        {year}
                      </MenuItem>
                    ))}
                    </TextField>
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
          onClick={()=>{Navigate('/details-filling-page/personal-details')}}
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

export default Education;
