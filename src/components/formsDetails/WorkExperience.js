import React, { useState } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import { workExpAction } from "../../Redux/Index";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/Context";

const WorkExperience = () => {
  // eslint-disable-next-line no-unused-vars
  const { mode } = useMyContext();
  const [year, setYear] = useState();
  const yearInfo = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "Present",
  ];

  const Navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      WorkExperience: [
        {
          JobTitle: "",
          OrganizationName: "",
          StartYear: "",
          EndYear: "",
        },
      ],
    },
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
    Navigate("/details-filling-page/key-skills");
  };

  console.log(workData);

  const inputStyle = {
    width: "300px",
    m: 1,
    backgroundColor: mode === "light" ? "white" : "#072340",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      color: mode === "light" ? "black" : "white",
    },
    "& label": {
      color: mode === "light" ? "grey" : "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: mode === "light" ? "grey" : "white",
      },
    },
  };

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
              <Box
                sx={{
                  width: "100%",
                  textAlign: "start",
                  ml: "40px",
                  mt: "40px",
                }}
              >
                <Typography sx={{ color: "grey", fontWeight: "bold" }}>
                  Experience / - {index + 1}
                </Typography>
              </Box>
              <Divider
                sx={{
                  backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
                  ml: "40px",
                  mb: "30px",
                  width: "88%",
                }}
              />

              <TextField
                sx={inputStyle}
                label="JobTitle"
                type="text"
                varient="outlined"
                {...register(`WorkExperience[${index}].JobTitle`, {
                  required: "This Field is required!",
                })}
              />
              {errors.JobTitle && (
                <p style={{ color: "red" }}>{errors.JobTitle.message}</p>
              )}

              <TextField
                sx={inputStyle}
                label="OrganizationName"
                type="text"
                varient="outlined"
                {...register(`WorkExperience[${index}].OrganizationName`, {
                  required: "This Field is required!",
                })}
              />
              {errors.OrganizationName && (
                <p style={{ color: "red" }}>
                  {errors.OrganizationName.message}
                </p>
              )}
              <TextField
                sx={inputStyle}
                label="StartYear"
                type="number"
                varient="outlined"
                {...register(`WorkExperience[${index}].StartYear`, {
                  required: "This Field is required!",
                })}
                onChange={(e) => setYear(e.target.value)}
                select
                SelectProps={{ native: true }}
              >
                {yearInfo.map((year) => (
                  <option
                    style={{ color: mode === "light" ? "black" : "black" }}
                    value={year}
                    key={year}
                  >
                    {year}
                  </option>
                ))}
              </TextField>
              {errors.StartYear && (
                <p style={{ color: "red" }}>{errors.StartYear.message}</p>
              )}
              <TextField
                sx={inputStyle}
                label="EndYear"
                type="number"
                varient="outlined"
                {...register(`WorkExperience[${index}].EndYear`, {
                  required: "This Field is required!",
                })}
                onChange={(e) => setYear(e.target.value)}
                select
                SelectProps={{ native: true }}
              >
                {yearInfo.map((year) => (
                  <option
                    style={{ color: mode === "light" ? "black" : "black" }}
                    value={year}
                    key={year}
                  >
                    {year}
                  </option>
                ))}
              </TextField>
              {errors.EndYear && (
                <p style={{ color: "red" }}>{errors.EndYear.message}</p>
              )}
              {index > 0 && (
                <Button
                  sx={{ margin: "20px 0px 30px 0px" }}
                  color="error"
                  variant="outlined"
                  endIcon={<DeleteIcon />}
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          {/* ------------------------------------>>>  */}

          <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
            <Button
              onClick={() =>
                append({
                  JobTitle: "",
                  OrganizationName: "",
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

          <Divider
                sx={{
                  backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
                  ml: "40px",
                  mb: "30px",
                  width: "88%",
                }}
                />
          <Button
            variant="contained"
            onClick={() => Navigate("/details-filling-page/education")}
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

export default WorkExperience;
